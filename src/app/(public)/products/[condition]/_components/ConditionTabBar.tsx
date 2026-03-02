// components/ConditionTabBar.tsx
"use client";

import React, { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";

interface ConditionTabBarProps {
  options: { value: string; label: string }[];
  selected: string;
  onTabChange: (tab: string) => void;
}

const ConditionTabBar: React.FC<ConditionTabBarProps> = ({
  options,
  selected,
  onTabChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (val: string) => {
    onTabChange(val);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button on the Right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 right-0 -translate-y-1/2 z-40 bg-primary text-white p-3 rounded-l-full shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 group"
        aria-label="Open Conditions Filter"
      >
        <div className="flex flex-col items-center">
          <FiFilter className="w-6 h-6 animate-pulse group-hover:animate-none" />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-wider hidden md:block">
            Filter
          </span>
        </div>
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <FiFilter className="text-primary" />
            Conditions
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900/40 hover:text-red-600 rounded-full transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Options List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
          {options
            .filter((o) => o.value)
            .map((opt) => {
              const isSelected = selected === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold capitalize transition-all duration-300 border-2 ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-md translate-x-1"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-transparent hover:border-primary/30 hover:bg-blue-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ConditionTabBar;
