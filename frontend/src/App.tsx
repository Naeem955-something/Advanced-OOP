import React, { useState } from "react";
import { Habit, HabitForm } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";

const App: React.FC = () => {
  const [habitToEdit, setHabitToEdit] = useState<Habit | undefined>();

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm
        habitToEdit={habitToEdit}
        onSaved={() => setHabitToEdit(undefined)}
        onCancel={() => setHabitToEdit(undefined)}
      />
      <HabitList onEdit={(habit) => setHabitToEdit(habit)} />
    </div>
  );
};

export default App;
