/**
 * Header Component
 * Navigation and branding for the spiritual prayers website
 * Design: Monastic Minimalism - clean, serene, with gold accents
 */
export default function Header() {
  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Decorative Top Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6"></div>

        {/* Main Header Content */}
        <div className="text-center">
          {/* Decorative Cross */}
          <div className="flex justify-center mb-4">
            <svg
              className="w-8 h-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Preghiere Spirituali
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground font-serif max-w-xl mx-auto">
            Una raccolta di preghiere per la consacrazione, la forza e l'affidamento a Dio
          </p>
        </div>

        {/* Decorative Bottom Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-6"></div>
      </div>
    </header>
  );
}
