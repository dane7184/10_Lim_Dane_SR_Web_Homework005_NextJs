import React from "react";

export default function MenuComponent() {
  return (
    <aside className="w-64 bg-black border-r border-gray-800 flex flex-col p-6">
      <nav className="space-y-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Menu
        </p>
        {["Overview", "Items", "Orders", "Customers", "Settings"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className={`block px-4 py-2.5 rounded-lg transition-all ${
                item === "Items"
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {item}
            </a>
          ),
        )}
      </nav>
    </aside>
  );
}
