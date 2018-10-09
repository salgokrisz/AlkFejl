package hu.elte.StickyNotes.repositories;

import hu.elte.StickyNotes.entities.User;
import java.util.Optional;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    
}
