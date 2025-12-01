"use client";

import { Menu } from "lucide-react";

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm w-full">
      <div className="flex items-center justify-between p-3 sm:p-4 w-full">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FF6B35] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">C</span>
          </div>
          <span className="font-bold text-sm sm:text-base text-black">
            TESTAPP
          </span>
        </div>

        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
