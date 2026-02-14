import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const certificateTypes = [
  { id: "birth", title: "Birth Certificate", emoji: "📜", desc: "Register your newborn's birth and get a certificate", path: "/certificates/birth" },
  { id: "aadhar", title: "Aadhar Card", emoji: "🆔", desc: "Apply for baby's Aadhar card online", path: "/certificates/aadhar" },
  { id: "community", title: "Community Certificate", emoji: "📋", desc: "Apply for community / caste certificate", path: "/certificates/community" },
];

const Certificates = () => {
  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Certificate Applications</h1>
        <p className="text-muted-foreground mb-8">Apply for essential documents after your baby's birth</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {certificateTypes.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={cert.path} className="feature-card flex flex-col items-center text-center p-8 group">
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cert.emoji}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.desc}</p>
              <span className="flex items-center gap-1 text-primary text-sm font-medium">
                Apply Now <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
