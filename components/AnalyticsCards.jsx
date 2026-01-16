export default function AnalyticsCards({ stats }) {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-black border border-gray-800 p-5 rounded-xl">
        <p className="text-sm text-gray-400">Total Leads</p>
        <h2 className="text-2xl font-bold">{stats.totalLeads}</h2>
      </div>

      <div className="bg-black border border-gray-800 p-5 rounded-xl">
        <p className="text-sm text-gray-400">Converted</p>
        <h2 className="text-2xl font-bold text-green-400">{stats.converted}</h2>
      </div>

      <div className="bg-black border border-gray-800 p-5 rounded-xl">
        <p className="text-sm text-gray-400">New Leads</p>
        <h2 className="text-2xl font-bold text-yellow-400">{stats.newLeads}</h2>
      </div>
    </div>
  );
}
