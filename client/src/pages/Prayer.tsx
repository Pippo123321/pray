import { prayers } from "@/lib/prayers";
import { useLocation } from "wouter";

/**
 * Prayer Page - Ultra Minimalist
 * Display a single prayer with minimal distractions
 */
export default function Prayer() {
  const [location, navigate] = useLocation();
  
  // Extract prayer ID from URL
  const prayerId = location.split("/prayer/")[1];
  const prayer = prayers.find((p) => p.id === prayerId);

  if (!prayer) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="text-primary hover:text-accent transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ← Indietro
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 w-full px-4 py-12 md:py-16 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto w-full">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-12 text-primary hover:text-accent transition-colors text-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ← Indietro
          </button>

          {/* Prayer Title */}
          <h1
            className="text-4xl md:text-5xl font-semibold text-foreground mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {prayer.title}
          </h1>

          {/* Prayer Content */}
          <div className="prose prose-sm max-w-none">
            <p
              className="text-lg leading-relaxed text-foreground whitespace-pre-line"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {prayer.content}
            </p>
          </div>

          {/* Copy Button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(prayer.content);
            }}
            className="mt-12 px-4 py-2 text-sm font-semibold text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Copia
          </button>
        </div>
      </main>
    </div>
  );
}
