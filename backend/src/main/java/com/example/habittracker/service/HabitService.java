package com.example.habittracker.service;

import com.example.habittracker.model.Habit;

import java.util.List;

public interface HabitService {
    List<Habit> getAllHabits();
    Habit getHabitById(Long id);
    Habit createHabit(Habit habit);
    Habit updateHabit(Long id, Habit habit);
    Habit partialUpdateHabit(Long id, Habit habit);
    void deleteHabit(Long id);
}
