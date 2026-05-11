interface SearchBarProps {
  defaultValue: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ defaultValue, onSearch, placeholder }: SearchBarProps) => {
  return (
    <div className="relative flex-1">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">Search</span>
      <input
        type="text"
        placeholder={placeholder ?? 'Buscar por titulo (ej: Vela, Cocina...)'}
        defaultValue={defaultValue}
        onChange={(event) => onSearch(event.target.value)}
        className="w-full rounded-xl border border-slate-200 py-3 pl-16 pr-4 outline-none transition-all focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
