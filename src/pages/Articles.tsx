import { motion } from "framer-motion";
import { BookOpen, Play, Clock, Star } from "lucide-react";

const articles = [
  { id: 1, title: "Understanding Your First Trimester", category: "Pregnancy Guide", readTime: "5 min", rating: 4.8, image: "📖" },
  { id: 2, title: "Prenatal Yoga: Safe Poses for Each Trimester", category: "Fitness", readTime: "8 min", rating: 4.9, image: "🧘" },
  { id: 3, title: "Nutrition Myths During Pregnancy", category: "Nutrition", readTime: "6 min", rating: 4.7, image: "🥗" },
  { id: 4, title: "Preparing for Labor: What to Expect", category: "Labor & Delivery", readTime: "10 min", rating: 4.9, image: "🏥" },
  { id: 5, title: "Mental Health During Pregnancy", category: "Wellness", readTime: "7 min", rating: 4.8, image: "🧠" },
  { id: 6, title: "Baby Proofing Your Home", category: "Preparation", readTime: "5 min", rating: 4.6, image: "🏠" },
];

const videos = [
  { id: 1, title: "Gentle Prenatal Exercises", duration: "15 min", category: "Fitness", emoji: "🏋️" },
  { id: 2, title: "Breathing Techniques for Labor", duration: "12 min", category: "Labor Prep", emoji: "🌬️" },
  { id: 3, title: "Newborn Care Basics", duration: "20 min", category: "Baby Care", emoji: "👶" },
  { id: 4, title: "Breastfeeding 101", duration: "18 min", category: "Feeding", emoji: "🍼" },
];

const Articles = () => {
  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Expert Articles & Videos</h1>
        <p className="text-muted-foreground mb-8">Trusted guidance from healthcare professionals</p>
      </motion.div>

      <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" /> Featured Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="feature-card"
          >
            <div className="text-4xl mb-3">{article.image}</div>
            <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{article.category}</span>
            <h3 className="font-semibold text-foreground mt-2 text-sm">{article.title}</h3>
            <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
              <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-gold text-gold" />{article.rating}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
        <Play className="h-5 w-5 text-accent" /> Educational Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="feature-card flex items-center gap-4"
          >
            <div className="h-16 w-16 rounded-xl bg-accent/10 flex items-center justify-center text-3xl shrink-0">
              {video.emoji}
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-medium text-accent">{video.category}</span>
              <h3 className="font-semibold text-foreground text-sm">{video.title}</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Play className="h-3 w-3" /> {video.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
