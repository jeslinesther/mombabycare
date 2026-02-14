import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Baby, Utensils, Camera, BookOpen, Music, 
  Stethoscope, FileText, AlertTriangle, MessageCircle, 
  Users, Heart, Droplets, Thermometer, Activity
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { path: "/tracker", icon: Baby, label: "Pregnancy Tracker", desc: "Track your baby's growth daily & weekly", color: "bg-primary/10 text-primary" },
  { path: "/diet", icon: Utensils, label: "Diet Plans", desc: "Personalized nutrition for healthy mom", color: "bg-accent/10 text-accent" },
  { path: "/memories", icon: Camera, label: "Memory Capture", desc: "Ultrasound pics, bump photos & milestones", color: "bg-gold/10 text-gold" },
  { path: "/articles", icon: BookOpen, label: "Expert Articles", desc: "Expert guidance & educational videos", color: "bg-lavender text-foreground" },
  { path: "/soothing", icon: Music, label: "Soothing Media", desc: "Calming songs, speeches & podcasts", color: "bg-sage text-foreground" },
  { path: "/reminders", icon: Stethoscope, label: "Doctor Reminders", desc: "Never miss an appointment", color: "bg-peach text-foreground" },
  { path: "/certificates", icon: FileText, label: "Certificates", desc: "Birth certificate, Aadhar & community", color: "bg-primary/10 text-primary" },
  { path: "/sos", icon: AlertTriangle, label: "Emergency SOS", desc: "Instant alerts to contacts & ambulance", color: "bg-destructive/10 text-destructive" },
  { path: "/chat", icon: MessageCircle, label: "AI Assistant", desc: "Chat with your pregnancy care AI", color: "bg-accent/10 text-accent" },
  { path: "/share", icon: Users, label: "Partner Sharing", desc: "Share your journey with your partner", color: "bg-gold/10 text-gold" },
];

const quickStats = [
  { icon: Heart, label: "Kick Count", value: "12 today", color: "text-primary" },
  { icon: Droplets, label: "Water Intake", value: "6/8 glasses", color: "text-accent" },
  { icon: Thermometer, label: "Temperature", value: "98.4°F", color: "text-gold" },
  { icon: Activity, label: "Mood", value: "Happy 😊", color: "text-primary" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Dashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative page-container py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Heart className="h-4 w-4 fill-primary" />
              Week 24 · Day 3
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Hello, Beautiful Mom! 🌸
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your little one is the size of a <span className="text-primary font-semibold">cantaloupe</span> today.
              Keep going — you're doing amazing!
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-4"
          >
            {quickStats.map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <stat.icon className={`h-5 w-5 mx-auto mb-1 ${stat.color}`} />
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="page-container">
        <h2 className="section-title text-center mb-8">Your Care Dashboard</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {features.map((f) => (
            <motion.div key={f.path} variants={item}>
              <Link to={f.path} className="feature-card flex items-start gap-4 group">
                <div className={`rounded-xl p-3 ${f.color} transition-transform group-hover:scale-110`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm">{f.label}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Dashboard;
