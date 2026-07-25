export default function Table({ headers = [], children }) {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full">
                <thead className="bg-slate-100">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="px-6 py-3 text-left text-sm font-semibold text-slate-700"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}