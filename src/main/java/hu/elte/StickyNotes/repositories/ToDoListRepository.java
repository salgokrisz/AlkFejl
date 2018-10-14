package hu.elte.StickyNotes.repositories;

import hu.elte.StickyNotes.entities.ToDoList;
import hu.elte.StickyNotes.entities.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */
@Repository
public interface ToDoListRepository extends CrudRepository<ToDoList, Integer> {
    public Iterable<ToDoList> findAllByUser(User user);
}
