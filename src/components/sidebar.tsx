"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#F5F5F5] min-h-screen">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg text-black">C</span>
          </div>
          <span className="font-bold text-lg text-black">TESTAPP</span>
        </div>

        <nav className="space-y-2">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              pathname === "/"
                ? "text-[#10b981]"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <LayoutDashboard
              className={cn("w-5 h-5", pathname === "/" && "text-[#10b981]")}
            />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              pathname === "/settings"
                ? "text-[#10b981]"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <Settings
              className={cn(
                "w-5 h-5",
                pathname === "/settings" && "text-[#10b981]"
              )}
            />
            <span className="font-medium">Setting</span>
          </Link>
        </nav>
      </div>

      <div className="mt-auto p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="font-semibold text-sm">User R.</p>
            <p className="text-xs text-gray-500">test-mail@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
