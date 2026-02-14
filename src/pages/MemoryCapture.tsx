import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Upload, Image, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Memory {
  id: string;
  type: "ultrasound" | "bump" | "milestone";
  title: string;
  date: string;
  imageUrl?: string;
  note?: string;
}

const sampleMemories: Memory[] = [
  { id: "1", type: "ultrasound", title: "First Ultrasound 💕", date: "2025-09-15", note: "We saw our baby for the first time!" },
  { id: "2", type: "bump", title: "12 Week Bump", date: "2025-10-20", note: "Starting to show!" },
  { id: "3", type: "milestone", title: "First Kick Felt! 🦶", date: "2025-11-10", note: "An amazing flutter!" },
];

const typeColors = {
  ultrasound: "bg-primary/10 text-primary border-primary/20",
  bump: "bg-accent/10 text-accent border-accent/20",
  milestone: "bg-gold/10 text-gold border-gold/20",
};

const MemoryCapture = () => {
  const [memories, setMemories] = useState<Memory[]>(sampleMemories);
  const [showAdd, setShowAdd] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newType, setNewType] = useState<Memory["type"]>("bump");

  const addMemory = () => {
    if (!newTitle) return;
    setMemories([
      { id: Date.now().toString(), type: newType, title: newTitle, date: new Date().toISOString().slice(0, 10), note: newNote || undefined },
      ...memories,
    ]);
    setNewTitle("");
    setNewNote("");
    setShowAdd(false);
  };

  const deleteMemory = (id: string) => setMemories(memories.filter((m) => m.id !== id));

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="section-title mb-2">Memory Capture</h1>
            <p className="text-muted-foreground">Treasure every moment of your journey</p>
          </div>
          <Button onClick={() => setShowAdd(!showAdd)} className="gap-2">
            <Plus className="h-4 w-4" /> Add Memory
          </Button>
        </div>
      </motion.div>

      {showAdd && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="glass-card p-6 mb-8">
          <h3 className="font-display text-lg font-semibold mb-4">New Memory</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Input placeholder="Memory title..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <Input placeholder="Add a note..." value={newNote} onChange={(e) => setNewNote(e.target.value)} />
          </div>
          <div className="flex gap-2 mb-4">
            {(["ultrasound", "bump", "milestone"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setNewType(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize border transition-all ${
                  newType === t ? typeColors[t] + " ring-2 ring-offset-2 ring-primary/30" : "bg-secondary text-secondary-foreground border-transparent"
                }`}
              >
                {t === "ultrasound" ? "🔊 Ultrasound" : t === "bump" ? "📸 Bump Photo" : "⭐ Milestone"}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" /> Upload Photo
            </Button>
            <Button onClick={addMemory}>Save Memory</Button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {memories.map((memory, i) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card overflow-hidden group"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-peach to-lavender flex items-center justify-center relative">
              <Image className="h-12 w-12 text-muted-foreground/30" />
              <button
                onClick={() => deleteMemory(memory.id)}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-card/80 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-3.5 w-3.5 text-destructive" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium capitalize border ${typeColors[memory.type]}`}>
                  {memory.type}
                </span>
                <span className="text-[10px] text-muted-foreground">{memory.date}</span>
              </div>
              <h3 className="font-semibold text-sm text-foreground">{memory.title}</h3>
              {memory.note && <p className="text-xs text-muted-foreground mt-1">{memory.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MemoryCapture;
