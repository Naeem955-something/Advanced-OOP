const API = "https://literate-umbrella-pjp6vjpqqj9jc7ggj-8080.app.github.dev/api/habits";

export const getHabits = async () =>
  fetch(API).then(res => res.json());

export const addHabit = async (habit: any) =>
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habit),
  });

export const deleteHabit = async (id: number) =>
  fetch(`${API}/${id}`, { method: "DELETE" });

// ✅ Update an existing habit
export const updateHabit = async (id: number, habit: any) =>
  fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habit),
  });

// ✅ Mark a habit as completed
export const completeHabit = async (id: number) =>
  fetch(`${API}/${id}/complete`, {
    method: "PATCH",
  });
