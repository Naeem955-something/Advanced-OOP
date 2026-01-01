import React, { useState, useEffect } from "react";
import { Habit, createHabit, updateHabit } from "../services/habitService";

interface Props {
  habitToEdit?: Habit;
  onSaved: () => void;
  onCancel?: () => void;
}

export const HabitForm: React.FC<Props> = ({ habitToEdit, onSaved, onCancel }) => {
  const [name, setName] = useState("");
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (habitToEdit) {
      setName(habitToEdit.name);
      setStreak(habitToEdit.streak);
      setCompleted(habitToEdit.completed);
    }
  }, [habitToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const habit: Habit = { name, streak, completed };
    if (habitToEdit?.id) {
      await updateHabit(habitToEdit.id, habit);
    } else {
      await createHabit(habit);
    }
    setName("");
    setStreak(0);
    setCompleted(false);
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input
        type="number"
        placeholder="Streak"
        value={streak}
        onChange={(e) => setStreak(parseInt(e.target.value))}
      />
      <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
      </label>
      <button type="submit">{habitToEdit ? "Update" : "Add"} Habit</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};
