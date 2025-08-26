// components/MainContent/Achievements.jsx
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_achievements_v1";

const Achievements = ({ darkMode }) => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", year: "", details: "" });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setItems(
      saved
        ? JSON.parse(saved)
        : [
            {
              id: Date.now(),
              title: "Certified Web Developer",
              year: "2023",
              details: "Completed professional web development training.",
            },
            {
              id: Date.now() + 1,
              title: "Google Data Analytics Cert",
              year: "2024",
              details: "Google Data Analytics Professional Certificate.",
            },
          ]
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    if (!form.title) return;
    const newItem = {
      id: Date.now(),
      title: form.title,
      year: form.year || new Date().getFullYear().toString(),
      details: form.details,
    };
    setItems((s) => [newItem, ...s]);
    setForm({ title: "", year: "", details: "" });
  };

  const removeItem = (id) => setItems((s) => s.filter((i) => i.id !== id));

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(items, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "achievements.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Achievements & Certifications</h2>
        <div className="flex gap-2">
          <button onClick={downloadJSON} className="px-3 py-1 rounded border">
            Export
          </button>
        </div>
      </div>

      <form onSubmit={addItem} className="flex gap-2 mb-3">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="flex-1 p-2 rounded border"
        />
        <input
          placeholder="Year"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          className="w-24 p-2 rounded border"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-teal-700 text-white rounded"
        >
          Add
        </button>
      </form>

      <div className="flex flex-col gap-2 max-h-[60vh] overflow-auto">
        {items.map((it) => (
          <div
            key={it.id}
            className={`p-3 rounded border ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start gap-3">
              <div>
                <h4 className="font-semibold">
                  {it.title}{" "}
                  <span className="text-sm opacity-70">• {it.year}</span>
                </h4>
                <p className="text-sm mt-1 opacity-80">{it.details}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => removeItem(it.id)}
                  className="text-sm text-red-400"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
