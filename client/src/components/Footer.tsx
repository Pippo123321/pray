/**
 * Footer Component
 * Closing section with decorative elements and copyright
 * Design: Monastic Minimalism - serene, minimal, with ornamental touches
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-border mt-16 md:mt-24">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Decorative Ornament */}
        <div className="flex justify-center mb-8">
          <svg
            className="w-16 h-16 text-primary opacity-40"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            {/* Decorative star/cross pattern */}
            <circle cx="50" cy="50" r="40" />
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="20" y1="20" x2="80" y2="80" />
            <line x1="80" y1="20" x2="20" y2="80" />
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="text-center space-y-4">
          {/* Tagline */}
          <p className="text-base text-foreground font-serif italic">
            "La preghiera è il respiro dell'anima"
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-primary mx-auto"></div>

          {/* Description */}
          <p className="text-sm text-muted-foreground font-serif max-w-md mx-auto">
            Una raccolta di preghiere tradizionali per la consacrazione, la forza nella
            tentazione e l'affidamento a Dio e a Maria Santissima.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            © {currentYear} Preghiere Spirituali. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
