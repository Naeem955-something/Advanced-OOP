import React, { useEffect, useState } from "react";
import { Habit, getHabits, deleteHabit } from "../services/habitService";

interface Props {
  onEdit: (habit: Habit) => void;
}

export const HabitList: React.FC<Props> = ({ onEdit }) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const loadHabits = async () => {
    const data = await getHabits();
    setHabits(data);
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;
    await deleteHabit(id);
    loadHabits();
  };

  useEffect(() => {
    loadHabits();
  }, []);

  return (
    <div>
      <h2>Habit List</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.name} - Streak: {habit.streak} - Completed: {habit.completed ? "Yes" : "No"}
            <button onClick={() => onEdit(habit)}>Edit</button>
            <button onClick={() => handleDelete(habit.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
