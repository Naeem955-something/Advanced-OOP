package com.example.habittracker.service;

import com.example.habittracker.model.Habit;
import java.util.List;

public interface HabitService {
    List<Habit> getAllHabits();
    Habit getHabit(Long id);
    Habit createHabit(Habit habit);
    Habit updateHabit(Long id, Habit habit);
    Habit markCompleted(Long id);
    void deleteHabit(Long id);
}
