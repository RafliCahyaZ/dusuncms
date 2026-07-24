import Card from "@/Components/UI/Card";

export default function StatCard({
    title,
    value,
    icon: Icon,
}) {
    return (
        <Card className="p-5">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {value}
                    </h2>
                </div>

                {Icon && (
                    <div className="rounded-lg bg-blue-100 p-3">
                        <Icon className="text-blue-600" size={24} />
                    </div>
                )}
            </div>
        </Card>
    );
}