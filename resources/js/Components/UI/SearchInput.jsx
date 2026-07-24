import { Search } from "lucide-react";

export default function SearchInput({
    value,
    onChange,
    placeholder = "Cari...",
}) {
    return (
        <div className="relative">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                className="w-80 rounded-lg border border-slate-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}