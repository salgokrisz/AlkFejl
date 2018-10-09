package hu.elte.StickyNotes.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ToDoList {

    @Id
    private Integer id;
    
}
