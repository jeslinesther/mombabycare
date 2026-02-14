import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Share2, Heart, Baby, Utensils, Camera, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const shareableItems = [
  { id: "tracker", label: "Pregnancy Tracker", icon: Baby, shared: true },
  { id: "diet", label: "Diet Plans", icon: Utensils, shared: true },
  { id: "memories", label: "Memory Gallery", icon: Camera, shared: false },
  { id: "reminders", label: "Doctor Reminders", icon: Bell, shared: true },
  { id: "kickcount", label: "Kick Counter", icon: Heart, shared: false },
];

const PartnerShare = () => {
  const [partnerEmail, setPartnerEmail] = useState("");
  const [invited, setInvited] = useState(false);
  const [items, setItems] = useState(shareableItems);

  const toggleShare = (id: string) => {
    setItems(items.map((item) => item.id === id ? { ...item, shared: !item.shared } : item));
  };

  const sendInvite = () => {
    if (!partnerEmail) return;
    setInvited(true);
  };

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Partner Sharing</h1>
        <p className="text-muted-foreground mb-8">Share your pregnancy journey with your partner</p>
      </motion.div>

      <div className="max-w-xl mx-auto">
        {/* Invite Partner */}
        <div className="glass-card p-6 mb-8">
          <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" /> Invite Your Partner
          </h3>
          {invited ? (
            <div className="text-center py-4">
              <CheckCircle className="h-10 w-10 text-accent mx-auto mb-2" />
              <p className="font-semibold text-foreground">Invitation Sent! 💕</p>
              <p className="text-sm text-muted-foreground">Your partner will receive access via {partnerEmail}</p>
            </div>
          ) : (
            <div className="flex gap-3">
              <Input type="email" placeholder="Partner's email address" value={partnerEmail} onChange={(e) => setPartnerEmail(e.target.value)} className="flex-1" />
              <Button onClick={sendInvite} className="gap-2"><Share2 className="h-4 w-4" /> Invite</Button>
            </div>
          )}
        </div>

        {/* What to Share */}
        <div className="glass-card p-6">
          <h3 className="font-display text-lg font-semibold mb-4">Choose What to Share</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleShare(item.id)}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="rounded-xl bg-primary/10 p-2.5">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="flex-1 text-left font-medium text-sm text-foreground">{item.label}</span>
                <div className={`h-6 w-11 rounded-full transition-colors ${item.shared ? "bg-accent" : "bg-border"} relative`}>
                  <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-card shadow transition-transform ${item.shared ? "translate-x-5" : "translate-x-0.5"}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerShare;
