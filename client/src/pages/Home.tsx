import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrayerCard from "@/components/PrayerCard";
import { prayers } from "@/lib/prayers";
import { useState } from "react";

/**
 * Home Page - Preghiere Spirituali
 * Design: Monastic Minimalism - serene, contemplative layout
 * - White background with gold accents
 * - Generous whitespace for meditation
 * - Elegant serif typography
 * - Smooth transitions and minimal animations
 */
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter prayers based on selected category
  const filteredPrayers = selectedCategory
    ? prayers.filter((prayer) => prayer.category === selectedCategory)
    : prayers;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full px-4 py-12 md:py-16">
        {/* Hero Section with Background Image */}
        <section className="max-w-3xl mx-auto mb-16">
          <div
            className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/98317441/Rt2PCsnHcRrJimxwyABmbf/hero-light-KoT2ta2oRzWbrKqoKxoM93.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-white/40"></div>

            {/* Hero Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg md:text-xl text-foreground font-serif italic">
                  "La preghiera è il dialogo dell'anima con Dio"
                </p>
              </div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="text-center mb-12">
            <p className="text-lg text-foreground font-serif leading-relaxed max-w-2xl mx-auto">
              Benvenuto in questa raccolta di preghiere spirituali. Qui troverai preghiere
              tradizionali per la consacrazione, la forza nella tentazione, l'affidamento a
              Dio e Maria Santissima, e il perdono. Ogni preghiera è un invito alla
              meditazione e al dialogo con il Divino.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-3xl mx-auto mb-16">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* Prayers List */}
        <section className="max-w-3xl mx-auto">
          {filteredPrayers.length > 0 ? (
            <div>
              {/* Results Count */}
              <p className="text-sm text-muted-foreground mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {filteredPrayers.length} preghiera{filteredPrayers.length !== 1 ? "e" : ""}
                {selectedCategory && ` in "${selectedCategory}"`}
              </p>

              {/* Prayer Cards */}
              {filteredPrayers.map((prayer) => (
                <PrayerCard key={prayer.id} prayer={prayer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground font-serif">
                Nessuna preghiera trovata in questa categoria.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
