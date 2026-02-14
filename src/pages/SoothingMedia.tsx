import { motion } from "framer-motion";
import { Music, Headphones, Play, Heart, Moon, Smile, Baby } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All", icon: Music },
  { id: "lullaby", label: "Lullabies", icon: Moon },
  { id: "spiritual", label: "Spiritual", icon: Heart },
  { id: "nature", label: "Nature Sounds", icon: Smile },
  { id: "podcast", label: "Podcasts", icon: Headphones },
];

const tracks = [
  { id: 1, title: "Gentle Lullaby for Baby", artist: "BloomMom Music", duration: "3:45", category: "lullaby", emoji: "🌙" },
  { id: 2, title: "Om Chanting — Deep Peace", artist: "Spiritual Harmony", duration: "10:00", category: "spiritual", emoji: "🕉️" },
  { id: 3, title: "Rain & Thunder Relaxation", artist: "Nature Sounds", duration: "30:00", category: "nature", emoji: "🌧️" },
  { id: 4, title: "Pregnancy Meditation Guide", artist: "Calm Mom Podcast", duration: "15:20", category: "podcast", emoji: "🧘" },
  { id: 5, title: "Twinkle Twinkle Little Star", artist: "Nursery Collection", duration: "2:30", category: "lullaby", emoji: "⭐" },
  { id: 6, title: "Gayatri Mantra for Mom & Baby", artist: "Sacred Chants", duration: "8:00", category: "spiritual", emoji: "🙏" },
  { id: 7, title: "Ocean Waves for Sleep", artist: "Nature Sounds", duration: "45:00", category: "nature", emoji: "🌊" },
  { id: 8, title: "Newborn Care Tips — Episode 12", artist: "Mom Talk Podcast", duration: "22:00", category: "podcast", emoji: "🎙️" },
  { id: 9, title: "Baby's First Music — Classical", artist: "Mozart for Babies", duration: "18:00", category: "lullaby", emoji: "🎵" },
  { id: 10, title: "Positive Affirmations for Pregnancy", artist: "Calm Mom", duration: "12:00", category: "spiritual", emoji: "💫" },
];

const SoothingMedia = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? tracks : tracks.filter((t) => t.category === activeCategory);

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Soothing Media</h1>
        <p className="text-muted-foreground mb-8">Calming songs, spiritual podcasts & nature sounds for mom & baby</p>
      </motion.div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <cat.icon className="h-4 w-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Track List */}
      <div className="space-y-3">
        {filtered.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass-card p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
              {track.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm text-foreground truncate">{track.title}</h3>
              <p className="text-xs text-muted-foreground">{track.artist}</p>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:block">{track.duration}</span>
            <button className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Play className="h-4 w-4 ml-0.5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SoothingMedia;
