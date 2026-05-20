interface CategoryChipsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export const CategoryChips = ({ categories, activeCategory, onChange }: CategoryChipsProps) => {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-300 bg-white text-slate-600 hover:border-slate-500'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};