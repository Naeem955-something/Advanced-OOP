const API_URL = "http://localhost:8080/api/habits";

export interface Habit {
  id?: number;
  name: string;
  streak: number;
  completed: boolean;
}

// Get all habits
export const getHabits = async (): Promise<Habit[]> => {
  const res = await fetch(API_URL);
  return await res.json();
};

// Create habit
export const createHabit = async (habit: Habit) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habit),
  });
  return await res.json();
};

// Update habit
export const updateHabit = async (id: number, habit: Habit) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habit),
  });
  return await res.json();
};

// Delete habit
export const deleteHabit = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
