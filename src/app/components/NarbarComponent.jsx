"use client";
import Image from 'next/image';

export default function NarbarComponent({ onSearch }) {
  return (
    <div className="flex justify-between bg-gray-900 h-15 p-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden">
          <Image
            src="/doom.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          ></Image>
        </div>
        <p className="text-white">Lim Dane</p>
      </div>

      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search by item name..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white rounded-md py-2 pl-4 text-sm"
        />
      </div>
    </div>
  );
}
