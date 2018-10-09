package hu.elte.StickyNotes.repositories;

import hu.elte.StickyNotes.entities.Label;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */
@Repository
public interface LabelRepository extends CrudRepository<Label, Integer>{
    
}
