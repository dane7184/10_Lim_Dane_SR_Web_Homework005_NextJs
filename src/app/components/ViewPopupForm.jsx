"use client";
import React, { useState } from "react";

export default function ViewPopupForm({ prpos, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
      <div className=" rounded-2xl w-1/3  p-4 text-2xl py-6 bg-gray-700">
        <p className="py-2">Item Details</p>
        <p className="py-2">ID: {prpos.id}</p>
        <p className="py-2">Name: {prpos.item_name}</p>
        <p className="py-2">Price: ${prpos.item_price}</p>
        <p className="py-2">Description:</p>
        <p className="py-2"> {prpos.item_description}</p>
        <button
          type="button"
          data-autofocus
          onClick={() => onClose(false)}
          className="mt-3 inline-flex w-full justify-center rounded-md border-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
