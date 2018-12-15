package hu.elte.StickyNotes.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import hu.elte.StickyNotes.entities.User.Role;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
public class ToDoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    @NotNull
    private String name;

    @Column(nullable = false)
    @NotNull
    private boolean complete = false;
    
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Progress progress;
    
    public enum Progress {
        NEW, IN_PROGRESS, TESTING, DONE
    }
    
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime created_at;

    @Column
    @UpdateTimestamp
    private LocalDateTime updated_at;
    
    @OneToMany(mappedBy = "todolist")
    private List<ListContent> listcontent;
    
    @ManyToMany
    @JoinTable
    private List<Label> labels;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private User user;
}
