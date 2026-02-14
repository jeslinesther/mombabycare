import { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Plus, Calendar, Clock, Upload, Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Reminder {
  id: string;
  doctorName: string;
  date: string;
  time: string;
  notes: string;
  hasFile: boolean;
}

const sampleReminders: Reminder[] = [
  { id: "1", doctorName: "Dr. Priya Sharma", date: "2026-02-20", time: "10:00 AM", notes: "Monthly checkup — bring previous reports", hasFile: true },
  { id: "2", doctorName: "Dr. Anjali Rao", date: "2026-03-05", time: "11:30 AM", notes: "Ultrasound scan — Week 28", hasFile: false },
  { id: "3", doctorName: "Dr. Meena Patel", date: "2026-03-15", time: "09:00 AM", notes: "Blood test and glucose screening", hasFile: true },
];

const DoctorReminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>(sampleReminders);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ doctorName: "", date: "", time: "", notes: "" });

  const addReminder = () => {
    if (!form.doctorName || !form.date) return;
    setReminders([
      { id: Date.now().toString(), ...form, hasFile: false },
      ...reminders,
    ]);
    setForm({ doctorName: "", date: "", time: "", notes: "" });
    setShowAdd(false);
  };

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="section-title mb-2">Doctor Reminders</h1>
            <p className="text-muted-foreground">Never miss an appointment</p>
          </div>
          <Button onClick={() => setShowAdd(!showAdd)} className="gap-2">
            <Plus className="h-4 w-4" /> Add Reminder
          </Button>
        </div>
      </motion.div>

      {showAdd && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="glass-card p-6 mb-8">
          <h3 className="font-display text-lg font-semibold mb-4">New Appointment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Input placeholder="Doctor's name" value={form.doctorName} onChange={(e) => setForm({ ...form, doctorName: e.target.value })} />
            <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <Input placeholder="Time (e.g., 10:00 AM)" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
            <Input placeholder="Notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2"><Upload className="h-4 w-4" /> Upload Report</Button>
            <Button onClick={addReminder}>Save Reminder</Button>
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        {reminders.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-5 flex items-start gap-4"
          >
            <div className="rounded-xl bg-primary/10 p-3 shrink-0">
              <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground">{r.doctorName}</h3>
              <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{r.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{r.time}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{r.notes}</p>
              {r.hasFile && (
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  <FileText className="h-3 w-3" /> Report attached
                </span>
              )}
            </div>
            <button onClick={() => setReminders(reminders.filter((x) => x.id !== r.id))} className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
              <Trash2 className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DoctorReminders;
