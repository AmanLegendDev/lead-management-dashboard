import Link from "next/link";

export default function LeadTable({ leads }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-900 rounded-xl overflow-hidden">
        <thead className="bg-gray-900 text-gray-300 text-sm">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left hidden sm:table-cell">Email</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead._id}
              className="border-t border-gray-900 hover:bg-gray-950 transition"
            >
              <td className="p-3 font-medium">{lead.name}</td>

              <td className="p-3 hidden sm:table-cell text-gray-400">
                {lead.email}
              </td>

              <td className="p-3 capitalize">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    lead.status === "converted"
                      ? "bg-green-900 text-green-300"
                      : lead.status === "in-progress"
                      ? "bg-yellow-900 text-yellow-300"
                      : "bg-blue-900 text-blue-300"
                  }`}
                >
                  {lead.status}
                </span>
              </td>

              <td className="p-3">
                <Link
                  href={`/leads/${lead._id}`}
                  className="text-blue-400 hover:underline"
                >
                  View →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
