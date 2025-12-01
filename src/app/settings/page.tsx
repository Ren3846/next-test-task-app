"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { LogOut } from "lucide-react";

export default function Settings() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [name, setName] = useState("User Random");
  const [password, setPassword] = useState("");

  const today = new Date();
  const formattedDate = format(today, "EEEE, d MMMM yyyy");
  const shortDate = format(today, "EEE, d MMM yyyy");

  const handleSave = () => {
    console.log("Saving settings", { name, password });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="flex flex-col md:flex-row min-h-screen">
        <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
        <Sidebar />
        <main className="flex-1 w-full p-3 sm:p-4 md:p-6 lg:p-8 pt-14 sm:pt-16 md:pt-6 overflow-hidden">
          <div className="mb-3 sm:mb-4 md:mb-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2">
              Settings
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#10b981] font-medium">
              <span className="hidden sm:inline">{formattedDate}</span>
              <span className="sm:hidden">{shortDate}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="lg:col-span-2">
              <Card className="p-3 sm:p-4 md:p-6">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      Your password is between 4 and 12 characters
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave}>Save</Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="hidden lg:block lg:col-span-1">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  My Profile
                </h2>
                <p className="text-sm text-[#10b981] mb-4">
                  75% completed your profile
                </p>

                <div className="relative w-32 h-32 mb-6 mx-auto">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56 * 0.75} ${
                        2 * Math.PI * 56
                      }`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      75%
                    </span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="font-semibold text-gray-900">User R.</p>
                  <p className="text-sm text-gray-500">
                    Developer at White Digital
                  </p>
                </div>

                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => console.log("Logout")}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
