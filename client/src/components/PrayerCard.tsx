import { Prayer } from "@/lib/prayers";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface PrayerCardProps {
  prayer: Prayer;
}

/**
 * PrayerCard Component
 * Displays a single prayer with expandable content
 * Design: Monastic Minimalism - white background with gold accents
 */
export default function PrayerCard({ prayer }: PrayerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 border-b border-border pb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group"
      >
        {/* Category Badge */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {prayer.category}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-primary transition-colors group-hover:text-accent" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-primary" />
          )}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
          {prayer.title}
        </h2>

        {/* Author and Date */}
        {(prayer.author || prayer.date) && (
          <p className="text-sm text-muted-foreground italic">
            {prayer.author && <span>{prayer.author}</span>}
            {prayer.author && prayer.date && <span> • </span>}
            {prayer.date && <span>{prayer.date}</span>}
          </p>
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 animate-in fade-in duration-300">
          {/* Decorative Line */}
          <div className="w-12 h-0.5 bg-primary mb-6"></div>

          {/* Prayer Content */}
          <div className="prose prose-sm max-w-none">
            <p className="text-base leading-relaxed text-foreground whitespace-pre-line font-serif">
              {prayer.content}
            </p>
          </div>

          {/* Copy Button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(prayer.content);
              // Could add a toast notification here
            }}
            className="mt-6 px-4 py-2 text-sm font-semibold text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Copia Preghiera
          </button>
        </div>
      )}
    </div>
  );
}
