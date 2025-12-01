"use client";

import { Task, TaskStatus } from "@/types/task";
import { TaskCard } from "./task-card";

interface KanbanColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}

export function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  const displayTitle = title === "To do" ? "To do" : title;

  return (
    <div className="w-full md:flex-1 md:min-w-[220px] lg:min-w-[260px] xl:min-w-[280px] md:flex-shrink-0">
      <div className="mb-3 md:mb-4">
        <h2 className="text-xs sm:text-sm font-semibold text-gray-700 break-words">
          {displayTitle}{" "}
          <span className="text-gray-500 whitespace-nowrap">
            ({tasks.length})
          </span>
        </h2>
      </div>
      <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {Array.from({ length: Math.max(0, 3 - tasks.length) }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="h-16 sm:h-20 md:h-24 border-2 border-dashed border-gray-300 rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}
