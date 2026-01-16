"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function LeadDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/leads/${id}`)
      .then((res) => res.json())
      .then(setLead);
  }, [id]);

  if (!lead) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-xl mx-auto bg-black border border-gray-900 p-6 rounded-xl space-y-4">

       
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-400 hover:underline"
        >
          ← Back to dashboard
        </button>

       
        <h1 className="text-2xl font-bold">{lead.name}</h1>

       
        <div className="space-y-2 text-gray-300">
          <p><span className="text-gray-500">Email:</span> {lead.email}</p>
          <p><span className="text-gray-500">Phone:</span> {lead.phone}</p>
          <p><span className="text-gray-500">Status:</span> {lead.status}</p>
          <p><span className="text-gray-500">Source:</span> {lead.source}</p>
        </div>
      </div>
    </div>
  );
}
