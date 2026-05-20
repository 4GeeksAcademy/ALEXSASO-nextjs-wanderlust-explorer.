type SortOption = 'asc' | 'desc';

interface ResultsHeaderProps {
  resultsCount: number;
  sortOrder: SortOption;
  onSortChange: (value: SortOption) => void;
}

export const ResultsHeader = ({ resultsCount, sortOrder, onSortChange }: ResultsHeaderProps) => {
  return (
    <header className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-medium text-slate-700">{resultsCount} alojamientos disponibles</p>

      <label className="flex items-center gap-2 text-sm text-slate-600" htmlFor="sort-price">
        Orden por precio
        <select
          id="sort-price"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label>
    </header>
  );
};