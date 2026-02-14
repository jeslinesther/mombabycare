import { useState } from "react";
import { motion } from "framer-motion";
import { Baby, Heart, Droplets, Thermometer, Smile, Plus, Minus, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const weeklyInfo = [
  { week: 24, size: "Cantaloupe", length: "30 cm", weight: "600g", developments: ["Lungs developing branches", "Skin becoming opaque", "Taste buds forming", "Brain growing rapidly"] },
];

const moods = ["😊 Happy", "😢 Sad", "😤 Irritated", "😰 Anxious", "🥰 Loving", "😴 Tired", "🤢 Nauseous"];

const PregnancyTracker = () => {
  const [kickCount, setKickCount] = useState(12);
  const [waterIntake, setWaterIntake] = useState(6);
  const [temperature, setTemperature] = useState("98.4");
  const [selectedMood, setSelectedMood] = useState<string | null>("😊 Happy");
  const [dueDate, setDueDate] = useState("");
  const [lmpDate, setLmpDate] = useState("");

  const calculateDueDate = () => {
    if (lmpDate) {
      const lmp = new Date(lmpDate);
      lmp.setDate(lmp.getDate() + 280);
      setDueDate(lmp.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }));
    }
  };

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Pregnancy Tracker</h1>
        <p className="text-muted-foreground mb-8">Monitor your journey every step of the way</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Due Date Calculator */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-primary/10 p-2.5"><Calendar className="h-5 w-5 text-primary" /></div>
            <h2 className="font-display text-xl font-semibold">Due Date Calculator</h2>
          </div>
          <label className="text-sm text-muted-foreground">Last Menstrual Period (LMP)</label>
          <div className="flex gap-3 mt-2">
            <Input type="date" value={lmpDate} onChange={(e) => setLmpDate(e.target.value)} className="flex-1" />
            <Button onClick={calculateDueDate}>Calculate</Button>
          </div>
          {dueDate && (
            <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">Estimated Due Date</p>
              <p className="text-xl font-display font-semibold text-primary">{dueDate}</p>
            </div>
          )}
        </motion.div>

        {/* Baby Development */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-accent/10 p-2.5"><Baby className="h-5 w-5 text-accent" /></div>
            <h2 className="font-display text-xl font-semibold">Week 24 Development</h2>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center">
              <p className="text-3xl">🍈</p>
              <p className="text-xs text-muted-foreground mt-1">{weeklyInfo[0].size}</p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="bg-secondary rounded-lg p-2 text-center">
                <p className="text-xs text-muted-foreground">Length</p>
                <p className="font-semibold text-sm">{weeklyInfo[0].length}</p>
              </div>
              <div className="bg-secondary rounded-lg p-2 text-center">
                <p className="text-xs text-muted-foreground">Weight</p>
                <p className="font-semibold text-sm">{weeklyInfo[0].weight}</p>
              </div>
            </div>
          </div>
          <ul className="space-y-1.5">
            {weeklyInfo[0].developments.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {d}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Kick Counter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-primary/10 p-2.5"><Heart className="h-5 w-5 text-primary" /></div>
            <h2 className="font-display text-xl font-semibold">Kick Counter</h2>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" onClick={() => setKickCount(Math.max(0, kickCount - 1))}>
              <Minus className="h-5 w-5" />
            </Button>
            <div className="text-center">
              <motion.p key={kickCount} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="text-5xl font-display font-bold text-primary">
                {kickCount}
              </motion.p>
              <p className="text-sm text-muted-foreground mt-1">kicks today</p>
            </div>
            <Button size="icon" className="h-12 w-12 rounded-full" onClick={() => setKickCount(kickCount + 1)}>
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Water Intake */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-accent/10 p-2.5"><Droplets className="h-5 w-5 text-accent" /></div>
            <h2 className="font-display text-xl font-semibold">Water Intake</h2>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setWaterIntake(i + 1)}
                className={`transition-all duration-200 text-2xl ${i < waterIntake ? "scale-110" : "opacity-30 hover:opacity-60"}`}
              >
                💧
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">{waterIntake}/8 glasses</p>
        </motion.div>

        {/* Temperature */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-gold/10 p-2.5"><Thermometer className="h-5 w-5 text-gold" /></div>
            <h2 className="font-display text-xl font-semibold">Body Temperature</h2>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Input type="number" step="0.1" value={temperature} onChange={(e) => setTemperature(e.target.value)} className="w-28 text-center text-lg font-semibold" />
            <span className="text-muted-foreground">°F</span>
          </div>
        </motion.div>

        {/* Mood Tracker */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-lavender p-2.5"><Smile className="h-5 w-5 text-foreground" /></div>
            <h2 className="font-display text-xl font-semibold">Mood Tracker</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedMood === mood
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PregnancyTracker;
