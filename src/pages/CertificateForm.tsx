import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useParams } from "react-router-dom";

const formConfigs: Record<string, { title: string; emoji: string; fields: { name: string; label: string; type: string; placeholder: string }[] }> = {
  birth: {
    title: "Birth Certificate Application",
    emoji: "📜",
    fields: [
      { name: "babyName", label: "Baby's Full Name", type: "text", placeholder: "Enter baby's name" },
      { name: "dob", label: "Date of Birth", type: "date", placeholder: "" },
      { name: "gender", label: "Gender", type: "text", placeholder: "Male / Female / Other" },
      { name: "placeOfBirth", label: "Place of Birth (Hospital/Home)", type: "text", placeholder: "Hospital name and city" },
      { name: "fatherName", label: "Father's Full Name", type: "text", placeholder: "Enter father's name" },
      { name: "motherName", label: "Mother's Full Name", type: "text", placeholder: "Enter mother's name" },
      { name: "fatherAadhar", label: "Father's Aadhar Number", type: "text", placeholder: "XXXX XXXX XXXX" },
      { name: "motherAadhar", label: "Mother's Aadhar Number", type: "text", placeholder: "XXXX XXXX XXXX" },
      { name: "address", label: "Residential Address", type: "text", placeholder: "Full address" },
      { name: "religion", label: "Religion", type: "text", placeholder: "Enter religion" },
      { name: "informantName", label: "Informant's Name", type: "text", placeholder: "Person reporting the birth" },
      { name: "informantRelation", label: "Informant's Relation to Child", type: "text", placeholder: "Father / Mother / Other" },
    ],
  },
  aadhar: {
    title: "Aadhar Card Application",
    emoji: "🆔",
    fields: [
      { name: "childName", label: "Child's Full Name", type: "text", placeholder: "Enter child's name" },
      { name: "dob", label: "Date of Birth", type: "date", placeholder: "" },
      { name: "gender", label: "Gender", type: "text", placeholder: "Male / Female / Other" },
      { name: "fatherName", label: "Father's Full Name", type: "text", placeholder: "Enter father's name" },
      { name: "motherName", label: "Mother's Full Name", type: "text", placeholder: "Enter mother's name" },
      { name: "guardianAadhar", label: "Parent/Guardian Aadhar Number", type: "text", placeholder: "XXXX XXXX XXXX" },
      { name: "address", label: "Residential Address", type: "text", placeholder: "Full address" },
      { name: "pincode", label: "PIN Code", type: "text", placeholder: "6-digit PIN" },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 XXXXXXXXXX" },
      { name: "email", label: "Email Address", type: "email", placeholder: "email@example.com" },
      { name: "birthCertNo", label: "Birth Certificate Number", type: "text", placeholder: "Enter birth certificate number" },
    ],
  },
  community: {
    title: "Community Certificate Application",
    emoji: "📋",
    fields: [
      { name: "applicantName", label: "Applicant's Full Name", type: "text", placeholder: "Enter name" },
      { name: "dob", label: "Date of Birth", type: "date", placeholder: "" },
      { name: "fatherName", label: "Father's / Husband's Name", type: "text", placeholder: "Enter name" },
      { name: "community", label: "Community / Caste", type: "text", placeholder: "Enter community name" },
      { name: "subCaste", label: "Sub-Caste (if applicable)", type: "text", placeholder: "Enter sub-caste" },
      { name: "religion", label: "Religion", type: "text", placeholder: "Enter religion" },
      { name: "address", label: "Residential Address", type: "text", placeholder: "Full address" },
      { name: "district", label: "District", type: "text", placeholder: "Enter district" },
      { name: "state", label: "State", type: "text", placeholder: "Enter state" },
      { name: "pincode", label: "PIN Code", type: "text", placeholder: "6-digit PIN" },
      { name: "aadharNo", label: "Aadhar Number", type: "text", placeholder: "XXXX XXXX XXXX" },
      { name: "rationCardNo", label: "Ration Card Number", type: "text", placeholder: "Enter ration card number" },
    ],
  },
};

const CertificateForm = () => {
  const { type } = useParams<{ type: string }>();
  const config = formConfigs[type || "birth"];
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!config) return <div className="page-container"><p>Invalid certificate type</p></div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-container">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center py-16">
          <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
          <h2 className="font-display text-2xl font-semibold mb-2">Application Submitted! 🎉</h2>
          <p className="text-muted-foreground mb-6">Your {config.title.toLowerCase()} application has been submitted successfully. You'll receive a soft copy once processed.</p>
          <Link to="/certificates">
            <Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" /> Back to Certificates</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/certificates" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Certificates
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl">{config.emoji}</span>
          <div>
            <h1 className="section-title">{config.title}</h1>
            <p className="text-muted-foreground text-sm">Fill in all required details below</p>
          </div>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.fields.map((field, i) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className={field.name === "address" ? "sm:col-span-2" : ""}
            >
              <label className="text-sm font-medium text-foreground mb-1.5 block">{field.label}</label>
              <Input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                required
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Button type="submit" size="lg">Submit Application</Button>
          <Link to="/certificates">
            <Button type="button" variant="outline" size="lg">Cancel</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CertificateForm;
