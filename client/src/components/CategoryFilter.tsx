import { categories } from "@/lib/prayers";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

/**
 * CategoryFilter Component
 * Filter prayers by category
 * Design: Monastic Minimalism - subtle, elegant button styles
 */
export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      {/* Filter Label */}
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Filtra per categoria
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {/* All Button */}
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-4 py-2 text-sm font-semibold rounded transition-all duration-300 ${
            selectedCategory === null
              ? "bg-primary text-white"
              : "border border-primary text-primary hover:bg-primary hover:text-white"
          }`}
        >
          Tutte
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm font-semibold rounded transition-all duration-300 ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "border border-primary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
