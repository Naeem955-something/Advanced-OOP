import { useEffect, useState } from "react";
import { getHabits, deleteHabit, updateHabit, completeHabit } from "../services/habitService";

export default function HabitList() {
  const [habits, setHabits] = useState<any[]>([]);

  const refresh = () => {
    getHabits().then(setHabits);
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteHabit(id);
    refresh();
  };

  const handleComplete = async (id: number) => {
    await completeHabit(id);
    refresh();
  };

  const handleEdit = async (habit: any) => {
    const newName = prompt("Edit habit name:", habit.name);
    if (newName && newName.trim() !== "") {
      await updateHabit(habit.id, { ...habit, name: newName });
      refresh();
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Habit Tracker</h1>
      <ul style={{ padding: 0 }}>
        {habits.map(h => (
          <li
            key={h.id}
            style={{
              margin: "10px 0",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: h.completed ? "#e0ffe0" : "#fff",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "16px", color: h.completed ? "#555" : "#000" }}>
              {h.name} {h.completed ? "✅" : "❌"}
            </span>
            <div>
              <button
                onClick={() => handleDelete(h.id)}
                style={{
                  marginRight: "5px",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
              <button
                onClick={() => handleComplete(h.id)}
                style={{
                  marginRight: "5px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Complete
              </button>
              <button
                onClick={() => handleEdit(h)}
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
