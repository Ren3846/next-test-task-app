import { Task } from "@/types/task";
import { Card } from "@/components/ui/card";
import { Clock, MoreVertical } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const taskDate = new Date(task.createdAt);
  const isCompleted = task.status === "completed";

  // Format date for mobile (shorter format)
  const dateStr = format(taskDate, "d MMMM");
  const shortDateStr = format(taskDate, "d MMM");

  return (
    <Card className="p-2.5 sm:p-3 md:p-4 mb-2 md:mb-3 cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-1.5 sm:mb-2 md:mb-3 gap-1.5 sm:gap-2">
        <h3 className="font-semibold text-[11px] sm:text-xs md:text-sm text-gray-900 line-clamp-2 flex-1 leading-tight">
          {task.title}
        </h3>
        <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-[10px] sm:text-xs text-gray-600 mb-1.5 sm:mb-2 md:mb-3 line-clamp-2 leading-snug">
        {task.description}
      </p>
      <div className="flex items-center justify-between gap-1.5 sm:gap-2">
        <div
          className={cn(
            "flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] md:text-xs flex-shrink-0",
            isCompleted
              ? "bg-gray-100 text-gray-500"
              : "bg-[#10b981]/10 text-[#10b981]"
          )}
        >
          <Clock
            className={cn(
              "w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0",
              isCompleted && "text-gray-400"
            )}
          />
          <span className="whitespace-nowrap hidden sm:inline">{dateStr}</span>
          <span className="whitespace-nowrap sm:hidden">{shortDateStr}</span>
        </div>
        <div className="hidden sm:flex -space-x-1 md:-space-x-2 flex-shrink-0">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-300 border-2 border-white"
            />
          ))}
        </div>
        <div className="flex sm:hidden -space-x-1 flex-shrink-0">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white"
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
