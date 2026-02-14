import { Link, useLocation } from "react-router-dom";
import { 
  Baby, Heart, Utensils, Camera, BookOpen, Music, 
  Stethoscope, FileText, AlertTriangle, MessageCircle, 
  Users, Home, Menu, X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/tracker", label: "Tracker", icon: Baby },
  { path: "/diet", label: "Diet", icon: Utensils },
  { path: "/memories", label: "Memories", icon: Camera },
  { path: "/articles", label: "Articles", icon: BookOpen },
  { path: "/soothing", label: "Soothing", icon: Music },
  { path: "/reminders", label: "Reminders", icon: Stethoscope },
  { path: "/certificates", label: "Certificates", icon: FileText },
  { path: "/sos", label: "SOS", icon: AlertTriangle },
  { path: "/chat", label: "AI Chat", icon: MessageCircle },
  { path: "/share", label: "Share", icon: Users },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 glass-card rounded-none border-x-0 border-t-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-7 w-7 text-primary fill-primary" />
              <span className="font-display text-xl font-semibold text-foreground">BloomMom</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md">
            <nav className="grid grid-cols-3 gap-1 p-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl text-xs font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-secondary/30 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span className="font-display text-lg font-semibold">BloomMom</span>
          </div>
          <p className="text-sm text-muted-foreground">Your nurturing companion through every step of motherhood 💕</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
