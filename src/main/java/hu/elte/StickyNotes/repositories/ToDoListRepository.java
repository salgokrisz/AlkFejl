/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.StickyNotes.repositories;

import hu.elte.StickyNotes.entities.ToDoList;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */
@Repository
public interface ToDoListRepository extends CrudRepository<ToDoList, Integer> {
    
}
