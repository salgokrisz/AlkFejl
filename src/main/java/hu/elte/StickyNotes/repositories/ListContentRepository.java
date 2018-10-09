package hu.elte.StickyNotes.repositories;

import org.springframework.data.jpa.repository.support.CrudMethodMetadata;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.StickyNotes.entities.ListContent;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */
@Repository
public interface ListContentRepository extends CrudRepository<ListContent, Integer>{
    
}
