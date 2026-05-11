import { Category } from '@/types';

interface FilterBarProps {
  currentCategory: string;
  onCategoryChange: (value: string) => void;
  allLabel?: string;
}

export const FilterBar = ({ currentCategory, onCategoryChange, allLabel }: FilterBarProps) => {
  const categories: Category[] = ['Adventure', 'Culture', 'Food', 'Wellness', 'Nature'];

  return (
    <select
      value={currentCategory}
      onChange={(event) => onCategoryChange(event.target.value)}
      className="rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">{allLabel ?? 'Todas las categorias'}</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
