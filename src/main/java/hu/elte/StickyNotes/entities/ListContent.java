package hu.elte.StickyNotes.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    @NotNull
    private String text;
    
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime created_at;
    
    @Column
    @UpdateTimestamp
    private LocalDateTime updated_at;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private ToDoList toDoList;
}
