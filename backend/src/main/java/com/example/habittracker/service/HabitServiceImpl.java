package com.example.habittracker.service;

import com.example.habittracker.model.Habit;
import com.example.habittracker.repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HabitServiceImpl implements HabitService {

    @Autowired
    private HabitRepository habitRepository;

    @Override
    public List<Habit> getAllHabits() {
        return habitRepository.findAll();
    }

    @Override
    public Habit getHabitById(Long id) {
        return habitRepository.findById(id).orElse(null);
    }

    @Override
    public Habit createHabit(Habit habit) {
        return habitRepository.save(habit);
    }

    @Override
    public Habit updateHabit(Long id, Habit habit) {
        if(habitRepository.existsById(id)) {
            habit.setId(id);
            return habitRepository.save(habit);
        }
        return null;
    }

    @Override
    public Habit partialUpdateHabit(Long id, Habit habit) {
        Optional<Habit> existing = habitRepository.findById(id);
        if(existing.isPresent()) {
            Habit e = existing.get();
            if(habit.getName() != null) e.setName(habit.getName());
            if(habit.getDescription() != null) e.setDescription(habit.getDescription());
            return habitRepository.save(e);
        }
        return null;
    }

    @Override
    public void deleteHabit(Long id) {
        habitRepository.deleteById(id);
    }
}
