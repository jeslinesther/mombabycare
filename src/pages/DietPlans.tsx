import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, ChevronLeft, ChevronRight, Apple, Egg, Fish, Milk, Carrot, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const months = [
  {
    month: 1, title: "Month 1 — First Beginnings", emoji: "🌱",
    meals: [
      { time: "Breakfast", items: "Whole grain toast, scrambled eggs, fresh orange juice", icon: Egg },
      { time: "Snack", items: "Greek yogurt with honey and walnuts", icon: Milk },
      { time: "Lunch", items: "Grilled chicken salad with spinach, avocado", icon: Leaf },
      { time: "Snack", items: "Apple slices with peanut butter", icon: Apple },
      { time: "Dinner", items: "Baked salmon, quinoa, steamed broccoli", icon: Fish },
    ],
    tips: ["Start folic acid supplements", "Stay hydrated — 8 glasses daily", "Avoid raw fish & unpasteurized dairy"],
  },
  {
    month: 2, title: "Month 2 — Growing Strong", emoji: "🫛",
    meals: [
      { time: "Breakfast", items: "Oatmeal with berries and flaxseed", icon: Leaf },
      { time: "Snack", items: "Carrot sticks with hummus", icon: Carrot },
      { time: "Lunch", items: "Lentil soup with whole wheat bread", icon: Leaf },
      { time: "Snack", items: "Mixed nuts and dried fruits", icon: Apple },
      { time: "Dinner", items: "Grilled fish, sweet potato, green beans", icon: Fish },
    ],
    tips: ["Increase iron-rich foods", "Eat small frequent meals for nausea", "Include vitamin B6 sources"],
  },
  {
    month: 3, title: "Month 3 — Blossoming", emoji: "🌸",
    meals: [
      { time: "Breakfast", items: "Smoothie with banana, spinach, milk, chia seeds", icon: Milk },
      { time: "Snack", items: "Whole grain crackers with cheese", icon: Milk },
      { time: "Lunch", items: "Brown rice, dal, mixed veggies, curd", icon: Leaf },
      { time: "Snack", items: "Fresh fruit salad", icon: Apple },
      { time: "Dinner", items: "Paneer tikka, roti, raita", icon: Milk },
    ],
    tips: ["Calcium-rich foods for bone development", "Continue folic acid", "Light exercise recommended"],
  },
  {
    month: 4, title: "Month 4 — Energy Returns", emoji: "🌻",
    meals: [
      { time: "Breakfast", items: "Idli with sambar and coconut chutney", icon: Leaf },
      { time: "Snack", items: "Buttermilk with roasted cumin", icon: Milk },
      { time: "Lunch", items: "Chicken biryani with raita and salad", icon: Egg },
      { time: "Snack", items: "Banana milkshake", icon: Apple },
      { time: "Dinner", items: "Chapati, palak paneer, dal", icon: Leaf },
    ],
    tips: ["Increase protein intake", "Omega-3 fatty acids important now", "Fiber prevents constipation"],
  },
  {
    month: 5, title: "Month 5 — Halfway There!", emoji: "🎀",
    meals: [
      { time: "Breakfast", items: "Poha with peanuts and lemon", icon: Leaf },
      { time: "Snack", items: "Dates and almonds", icon: Apple },
      { time: "Lunch", items: "Rajma rice with salad", icon: Leaf },
      { time: "Snack", items: "Mango lassi", icon: Milk },
      { time: "Dinner", items: "Grilled fish, mashed potatoes, steamed veggies", icon: Fish },
    ],
    tips: ["Baby can hear now — talk to your bump!", "Iron supplements if needed", "Stay active with prenatal yoga"],
  },
  {
    month: 6, title: "Month 6 — Growing Big", emoji: "🍈",
    meals: [
      { time: "Breakfast", items: "Upma with vegetables and coconut chutney", icon: Leaf },
      { time: "Snack", items: "Sprouts salad with lemon", icon: Leaf },
      { time: "Lunch", items: "Curd rice with pickle, papad", icon: Milk },
      { time: "Snack", items: "Roasted makhana (fox nuts)", icon: Apple },
      { time: "Dinner", items: "Egg curry, rice, cucumber raita", icon: Egg },
    ],
    tips: ["Monitor weight gain", "Eat magnesium-rich foods", "Practice kegel exercises"],
  },
  {
    month: 7, title: "Month 7 — The Home Stretch", emoji: "🎈",
    meals: [
      { time: "Breakfast", items: "Dosa with potato filling, sambar", icon: Leaf },
      { time: "Snack", items: "Coconut water with lime", icon: Apple },
      { time: "Lunch", items: "Khichdi with ghee and papad", icon: Leaf },
      { time: "Snack", items: "Chikki (jaggery-nut bar)", icon: Apple },
      { time: "Dinner", items: "Roti, methi chicken, dal fry", icon: Egg },
    ],
    tips: ["Small, frequent meals to reduce heartburn", "DHA-rich foods for baby's brain", "Stay comfortable while sleeping"],
  },
  {
    month: 8, title: "Month 8 — Almost There", emoji: "🐣",
    meals: [
      { time: "Breakfast", items: "Ragi porridge with jaggery and nuts", icon: Leaf },
      { time: "Snack", items: "Pomegranate seeds", icon: Apple },
      { time: "Lunch", items: "Paratha with curd, salad", icon: Milk },
      { time: "Snack", items: "Warm milk with turmeric", icon: Milk },
      { time: "Dinner", items: "Light khichdi with vegetables and ghee", icon: Leaf },
    ],
    tips: ["Pack your hospital bag", "Rest as much as possible", "Vitamin K foods are important now"],
  },
  {
    month: 9, title: "Month 9 — Ready to Bloom!", emoji: "🌷",
    meals: [
      { time: "Breakfast", items: "Toast with avocado and egg", icon: Egg },
      { time: "Snack", items: "Dates (6 per day for easier labor)", icon: Apple },
      { time: "Lunch", items: "Simple dal, rice, ghee, salad", icon: Leaf },
      { time: "Snack", items: "Warm soup with bread", icon: Leaf },
      { time: "Dinner", items: "Light upma or dalia with milk", icon: Milk },
    ],
    tips: ["Eat dates for easier delivery", "Stay calm and positive", "Keep walking daily", "Your baby is ready! 🎉"],
  },
];

const DietPlans = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const data = months[currentMonth];

  return (
    <div className="page-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Diet Plans</h1>
        <p className="text-muted-foreground mb-8">Personalized nutrition for a healthy pregnancy</p>
      </motion.div>

      {/* Month Selector */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Button variant="outline" size="icon" className="rounded-full" onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))} disabled={currentMonth === 0}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-1.5">
          {months.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentMonth(i)}
              className={`h-3 w-3 rounded-full transition-all ${i === currentMonth ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground/30"}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" className="rounded-full" onClick={() => setCurrentMonth(Math.min(months.length - 1, currentMonth + 1))} disabled={currentMonth === months.length - 1}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentMonth}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="text-6xl mb-3"
            >
              {data.emoji}
            </motion.p>
            <h2 className="font-display text-2xl font-semibold">{data.title}</h2>
          </div>

          {/* Meals */}
          <div className="max-w-2xl mx-auto space-y-3 mb-8">
            {data.meals.map((meal, i) => (
              <motion.div
                key={meal.time}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-4 flex items-center gap-4"
              >
                <div className="rounded-xl bg-accent/10 p-2.5">
                  <meal.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-primary uppercase tracking-wide">{meal.time}</p>
                  <p className="text-sm text-foreground">{meal.items}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <div className="max-w-2xl mx-auto glass-card p-6">
            <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <Utensils className="h-5 w-5 text-primary" /> Nutrition Tips
            </h3>
            <ul className="space-y-2">
              {data.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DietPlans;
