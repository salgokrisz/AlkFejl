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

    @Column(nullable = false)
	@NotNull
	private String author;
	
	@Column(nullable = false)
	@NotNull
	private String name;
    
	@Column(nullable = false)
	@NotNull
	private String text;
	
	
	@Column(nullable = false)
	@NotNull
	private boolean complete = false;
	
	public ToDoList(){}
	
	public ToDoList(String author, String name, String text){
		this.author = author;
		this.name = name;
		this.text = text;
	}
	
	
	public String getAuthor(){
		return this.author;
	}
	
	public String getName(){
		return this.name;
	}
	
	public boolean isComplete(){
		return this.complete;
	}
	
	public void setComplete(boolean complete){
		this.complete = complete;
	}
	
}
