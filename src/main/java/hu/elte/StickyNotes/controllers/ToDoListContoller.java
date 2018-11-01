/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.StickyNotes.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.StickyNotes.entities.ToDoList;
import hu.elte.StickyNotes.repositories.ToDoListRepository;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */


@RestContoller
@RequestMapping("/todo");
public class ToDoListContoller {
    @Autowired
    private ToDoListRepository toDoListRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<toDoList>> getAll() {
        return ResponseEntity.ok(toDoListRepository.findAll());
    }
    
     @GetMapping("/{id}")
    public ResponseEntity<ToDoList> get(@PathVariable Integer id) {
        Optional<ToDoList> toDoList = toDoListRepository.findById(id);
        if (toDoList.isPresent()) {
            return ResponseEntity.ok(toDoList.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<ToDoList> post(@RequestBody ToDoList toDoList) {
        ToDoList savedToDoList = toDoListRepository.save(toDoList);
        return ResponseEntity.ok(savedToDoList);
    }
    
     @PutMapping("/{id}")
    public ResponseEntity<ToDoList> put(@RequestBody ToDoList toDoList, @PathVariable Integer id) {
        Optional<ToDoList> oToDoList = toDoListRepository.findById(id);
        if (oToDoList.isPresent()) {
            toDoList.setId(id);
            return ResponseEntity.ok(toDoListRepository.save(toDoList));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<ToDoList> oToDoList = toDoListRepository.findById(id);
        if (oToDoList.isPresent()) {
            toDoListRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
