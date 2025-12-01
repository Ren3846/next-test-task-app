"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { KanbanColumn } from "@/components/kanban-column";
import { useTasks } from "@/hooks/use-tasks";
import { Task, TaskStatus } from "@/types/task";
import { format } from "date-fns";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: tasks = [], isLoading, error } = useTasks();

  const groupTasksByStatus = (tasks: Task[]) => {
    const grouped: Record<TaskStatus, Task[]> = {
      "to-do": [],
      "in-progress": [],
      review: [],
      completed: [],
    };

    tasks.forEach((task) => {
      grouped[task.status].push(task);
    });

    return grouped;
  };

  const groupedTasks = groupTasksByStatus(tasks);

  const today = new Date();
  const formattedDate = format(today, "EEEE, d MMMM yyyy");
  const shortDate = format(today, "EEE, d MMM yyyy");

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
        <Sidebar />
        <main className="flex-1 w-full p-3 sm:p-4 md:p-6 lg:p-8 pt-14 sm:pt-16 md:pt-6 overflow-hidden">
          <div className="mb-3 sm:mb-4 md:mb-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2">
              My Tasks
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#10b981] font-medium">
              <span className="hidden sm:inline">{formattedDate}</span>
              <span className="sm:hidden">{shortDate}</span>
            </p>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Loading tasks...</p>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-64">
              <p className="text-red-500">
                Error loading tasks. Please try again.
              </p>
            </div>
          )}

          {!isLoading && !error && (
            <>
              <div className="md:hidden space-y-6">
                <KanbanColumn
                  title="To do"
                  status="to-do"
                  tasks={groupedTasks["to-do"]}
                />
                <KanbanColumn
                  title="In progress"
                  status="in-progress"
                  tasks={groupedTasks["in-progress"]}
                />
                <KanbanColumn
                  title="Review"
                  status="review"
                  tasks={groupedTasks.review}
                />
                <KanbanColumn
                  title="Completed"
                  status="completed"
                  tasks={groupedTasks.completed}
                />
              </div>
              <div className="hidden md:flex gap-4 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide">
                <KanbanColumn
                  title="To do"
                  status="to-do"
                  tasks={groupedTasks["to-do"]}
                />
                <KanbanColumn
                  title="In progress"
                  status="in-progress"
                  tasks={groupedTasks["in-progress"]}
                />
                <KanbanColumn
                  title="Review"
                  status="review"
                  tasks={groupedTasks.review}
                />
                <KanbanColumn
                  title="Completed"
                  status="completed"
                  tasks={groupedTasks.completed}
                />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
