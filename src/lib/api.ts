import { Task } from "@/types/task";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://683857ff2c55e01d184cee44.mockapi.io/api/v1";

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(`${API_URL}/tasks`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  return data;
}
