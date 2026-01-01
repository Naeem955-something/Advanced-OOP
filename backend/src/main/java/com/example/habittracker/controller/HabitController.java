package com.example.habittracker.controller;

import com.example.habittracker.model.Habit;
import com.example.habittracker.service.HabitService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/habits")
@CrossOrigin(origins = "*")
public class HabitController {

    private final HabitService service;

    public HabitController(HabitService service) {
        this.service = service;
    }

    @GetMapping
    public List<Habit> getAll() {
        return service.getAllHabits();
    }

    @PostMapping
    public Habit create(@RequestBody Habit habit) {
        return service.createHabit(habit);
    }

    @PutMapping("/{id}")
    public Habit update(@PathVariable Long id, @RequestBody Habit habit) {
        return service.updateHabit(id, habit);
    }

    @PatchMapping("/{id}/complete")
    public Habit complete(@PathVariable Long id) {
        return service.markCompleted(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteHabit(id);
    }
}
