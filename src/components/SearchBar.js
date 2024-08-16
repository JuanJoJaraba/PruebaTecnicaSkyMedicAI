import { Input } from './ui/input';

export default function SearchBar({ searchTerm, onSearchChange, onSearchSubmit }) {
  return (
    <div className="flex items-center space-x-2 p-4">
      <Input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
      />
    </div>
  );
}
