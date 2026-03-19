import { prayers } from "@/lib/prayers";
import { useLocation } from "wouter";

/**
 * Home Page - Ultra Minimalist
 * Just a list of prayer titles. Click to go to prayer page.
 */
export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 w-full px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Prayer List */}
          {prayers.map((prayer) => (
            <button
              key={prayer.id}
              onClick={() => navigate(`/prayer/${prayer.id}`)}
              className="w-full text-left py-6 border-b border-border hover:text-primary transition-colors duration-300 group"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                {prayer.title}
              </h2>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
