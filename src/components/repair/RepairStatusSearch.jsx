import React, { useState } from 'react';

export default function RepairStatusSearch() {
  const [ticket, setTicket] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (ticket.trim()) {
      window.location.href = `/repair-status?ticket=${ticket}`;
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4">
      <input
        type="text"
        placeholder="Enter Repair Ticket ID"
        value={ticket}
        onChange={(e) => setTicket(e.target.value)}
        className="flex-1 px-6 py-4 rounded-xl bg-gray-800 text-white border border-borderGlass focus:outline-none focus:border-primary transition-colors"
        required
      />
      <button type="submit" className="bg-primary hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]">
        Track
      </button>
    </form>
  );
}
