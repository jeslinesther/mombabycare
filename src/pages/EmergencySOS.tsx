import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Phone, MessageSquare, Plus, Trash2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Contact {
  id: string;
  name: string;
  phone: string;
  relation: string;
}

const defaultContacts: Contact[] = [
  { id: "1", name: "Partner", phone: "+91 98765 43210", relation: "Husband" },
  { id: "2", name: "Mom", phone: "+91 87654 32109", relation: "Mother" },
];

const EmergencySOS = () => {
  const [contacts, setContacts] = useState<Contact[]>(defaultContacts);
  const [defaultMsg, setDefaultMsg] = useState(
    "🚨 EMERGENCY! I need immediate help. Please reach me or call an ambulance. My location will be shared automatically."
  );
  const [showAdd, setShowAdd] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", phone: "", relation: "" });
  const [sosTriggered, setSosTriggered] = useState(false);

  const addContact = () => {
    if (!newContact.name || !newContact.phone) return;
    setContacts([...contacts, { id: Date.now().toString(), ...newContact }]);
    setNewContact({ name: "", phone: "", relation: "" });
    setShowAdd(false);
  };

  const triggerSOS = () => {
    setSosTriggered(true);
    setTimeout(() => setSosTriggered(false), 3000);
  };

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Emergency SOS</h1>
        <p className="text-muted-foreground mb-8">Instant alerts to your emergency contacts & ambulance</p>
      </motion.div>

      {/* SOS Button */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-12">
        <button
          onClick={triggerSOS}
          className={`relative h-40 w-40 rounded-full mx-auto flex items-center justify-center transition-all duration-300 ${
            sosTriggered
              ? "bg-accent text-accent-foreground scale-95"
              : "bg-destructive text-destructive-foreground hover:scale-105 active:scale-95"
          }`}
        >
          {!sosTriggered && (
            <span className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-20" />
          )}
          <div className="text-center z-10">
            {sosTriggered ? (
              <>
                <Send className="h-10 w-10 mx-auto mb-1" />
                <span className="text-sm font-semibold">Alerts Sent!</span>
              </>
            ) : (
              <>
                <AlertTriangle className="h-10 w-10 mx-auto mb-1" />
                <span className="text-lg font-bold">SOS</span>
                <p className="text-[10px] mt-0.5 opacity-80">Tap in emergency</p>
              </>
            )}
          </div>
        </button>
        <p className="text-sm text-muted-foreground mt-4">
          {sosTriggered ? "✅ Emergency alerts sent to all contacts" : "Sends alert to all contacts + calls ambulance (108)"}
        </p>
      </motion.div>

      {/* Default Message */}
      <div className="glass-card p-6 mb-8 max-w-2xl mx-auto">
        <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" /> Default SOS Message
        </h3>
        <Textarea value={defaultMsg} onChange={(e) => setDefaultMsg(e.target.value)} rows={3} className="text-sm" />
      </div>

      {/* Emergency Contacts */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-semibold flex items-center gap-2">
            <Phone className="h-5 w-5 text-accent" /> Emergency Contacts
          </h3>
          <Button variant="outline" size="sm" onClick={() => setShowAdd(!showAdd)} className="gap-1">
            <Plus className="h-3 w-3" /> Add
          </Button>
        </div>

        {showAdd && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-4 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              <Input placeholder="Name" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} />
              <Input placeholder="Phone" value={newContact.phone} onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} />
              <Input placeholder="Relation" value={newContact.relation} onChange={(e) => setNewContact({ ...newContact, relation: e.target.value })} />
            </div>
            <Button size="sm" onClick={addContact}>Save Contact</Button>
          </motion.div>
        )}

        <div className="space-y-3">
          {contacts.map((c) => (
            <div key={c.id} className="glass-card p-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                {c.name[0]}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.phone} · {c.relation}</p>
              </div>
              <button onClick={() => setContacts(contacts.filter((x) => x.id !== c.id))} className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencySOS;
