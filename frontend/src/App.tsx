import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

export default function App() {
  const reload = () => window.location.reload();

  return (
    <>
      <h1>Habit Tracker</h1>
      <HabitForm refresh={reload} />
      <HabitList />
    </>
  );
}
