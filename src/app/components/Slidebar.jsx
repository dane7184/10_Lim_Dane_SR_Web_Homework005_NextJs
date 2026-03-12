"use client";
import { useState } from "react";
import { items } from "../../../public/data/items";
import ViewPopupForm from "./ViewPopupForm";
import { ArrowUpAZ, ArrowDownAZ, Book } from "lucide-react";
import MenuComponent from "./MenuComponent";

export default function Slidebar() {
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(false);
  const [sortData, setSortData] = useState(items);
  const [showBookmark, setShowBookmark] = useState(false);

  function sortAtoZ() {
    const name = [...sortData].sort((a, b) =>
      a.item_name.localeCompare(b.item_name),
    );
    setSortData(name);
  }

  function sortZtoA() {
    const name = [...sortData].sort((a, b) =>
      b.item_name.localeCompare(a.item_name),
    );
    setSortData(name);
  }

  const bookMark = (id) => {
    const updated = sortData.map((item) =>
      item.id === id ? { ...item, saved: !item.saved } : item,
    );

    setSortData(updated);
  };

  const filteredItems = showBookmark
    ? sortData.filter((item) => item.saved)
    : sortData;

  return (
    <div className="flex h-screen bg-black text-gray-300 font-sans">
      <MenuComponent />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16  px-8 border-b border-gray-800">
          <div className="flex justify-between mt-2">
            <button
              className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium"
              onClick={() => setShowBookmark(false)}
            >
              Back
            </button>
            <div className="flex gap-4">
              <button
                className="hover:text-orange-400 transition-colors flex gap-2"
                onClick={() => setShowBookmark(!showBookmark)}
              >
                <div className="flex">
                  Your Book Mark <Book />
                </div>
              </button>
              <button
                className="hover:text-orange-400 transition-colors"
                onClick={sortAtoZ}
              >
                <ArrowUpAZ />
              </button>
              <button
                className="hover:text-orange-400 transition-colors"
                onClick={sortZtoA}
              >
                <ArrowDownAZ />
              </button>
            </div>
          </div>
        </header>
        <div className="px-8 py-4 flex justify-end items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium text-white cursor-pointer"></div>
        </div>

        <section className="flex-1 overflow-y-auto px-8 pb-10 space-y-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#0f1115] border border-gray-800 rounded-xl p-4 flex items-center gap-6 group hover:border-gray-600 transition-all"
            >
              <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-700 rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-semibold">{item.item_name}</h3>
                  <span className="text-gray-500 text-sm">
                    {item.item_price}
                  </span>
                  <button
                    onClick={() => bookMark(item.id)}
                    className={
                      item.saved
                        ? "text-yellow-400"
                        : "text-gray-400 hover:text-yellow-400"
                    }
                  >
                    <Book />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1 max-w-md">
                  {item.item_description}
                </p>
              </div>

              <button
                onClick={() => {
                  setIndex(index);
                  setCheck(true);
                }}
                className="bg-[#1c1e26] hover:bg-[#2a2d3a] text-white px-6 py-2 rounded-lg border border-gray-700"
              >
                View
              </button>
            </div>
          ))}
        </section>
      </main>
      {check && (
        <ViewPopupForm prpos={filteredItems[index]} onClose={setCheck} />
      )}
    </div>
  );
}
