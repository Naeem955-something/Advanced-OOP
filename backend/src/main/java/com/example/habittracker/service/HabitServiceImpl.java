package com.example.habittracker.service;

import com.example.habittracker.model.Habit;
import com.example.habittracker.repository.HabitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabitServiceImpl implements HabitService {

    private final HabitRepository repository;

    public HabitServiceImpl(HabitRepository repository) {
        this.repository = repository;
    }

    public List<Habit> getAllHabits() {
        return repository.findAll();
    }

    public Habit getHabit(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Habit createHabit(Habit habit) {
        return repository.save(habit);
    }

    public Habit updateHabit(Long id, Habit habit) {
        Habit existing = getHabit(id);
        existing.setName(habit.getName());
        existing.setDescription(habit.getDescription());
        return repository.save(existing);
    }

    public Habit markCompleted(Long id) {
        Habit habit = getHabit(id);
        habit.setCompleted(true);
        return repository.save(habit);
    }

    public void deleteHabit(Long id) {
        repository.deleteById(id);
    }
}
