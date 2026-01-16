"use client";

import { useEffect, useState } from "react";
import LeadTable from "@/components/LeadTable";
import AnalyticsCards from "@/components/AnalyticsCards";   
import Link from "next/link";

export default function DashboardPage() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) window.location.href = "/";
  }, []);

  useEffect(() => {
    fetch(`/api/leads?search=${search}&status=${status}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.leads || []);
        setStats(data.stats || null);
      });
  }, [search, status, page]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      
      <div className="mb-6">
        <div className="flex justify-between m-4">
          <h1 className="text-3xl font-bold">Lead Management Dashboard</h1>
          <Link href="/">
          <button className="p-2 rounded m-2 bg-red-600 font-bold">Logout</button>
          </Link>
        </div>
        <p className="text-gray-400 text-sm">Manage and track leads efficiently</p>
      </div>

     
      <AnalyticsCards stats={stats} />

     
      <div className="flex flex-col sm:flex-row gap-4 my-6">
        <input
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-black border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-black border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
        >
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="in-progress">In Progress</option>
          <option value="converted">Converted</option>
        </select>
      </div>

      <div className="bg-black border border-gray-900 rounded-xl p-4">
        <LeadTable leads={leads} />
      </div>


      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 disabled:opacity-40"
          disabled={page === 1}
        >
          ← Prev
        </button>

        <span className="text-sm text-gray-400">Page {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page >= 17}
          className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
