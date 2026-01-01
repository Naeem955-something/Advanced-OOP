import { useState } from "react";
import { addHabit } from "../services/habitService";

interface HabitFormProps {
  refresh: () => void; // function passed from parent to reload habits
}

export default function HabitForm({ refresh }: HabitFormProps) {
  const [name, setName] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "") return;

    await addHabit({ name, completed: false }); // add new habit
    setName(""); // clear input
    refresh(); // refresh the habit list in parent
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter habit"
      />
      <button type="submit">Add</button>
    </form>
  );
}
