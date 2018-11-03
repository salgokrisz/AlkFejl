package hu.elte.StickyNotes.controllers;

import hu.elte.StickyNotes.repositories.ListContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.StickyNotes.entities.ListContent;
import java.util.Optional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * @author Salgo Krisztian, Hajdu Mark, Pleszkan Tamas
 */

@RestController
@RequestMapping("/listcontent")
public class ListContentController {
    
    @Autowired
    private ListContentRepository listContentRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<ListContent>> getAll() {
        return ResponseEntity.ok(listContentRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ListContent> get(@PathVariable Integer id) {
        Optional<ListContent> message = listContentRepository.findById(id);
        if (message.isPresent()) {
            return ResponseEntity.ok(message.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<ListContent> post(@RequestBody ListContent message) {
        ListContent savedMessage = listContentRepository.save(message);
        return ResponseEntity.ok(savedMessage);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ListContent> update
            (@PathVariable Integer id,
             @RequestBody ListContent message) {
        Optional<ListContent> oMessage = listContentRepository.findById(id);
        if (oMessage.isPresent()) {
            message.setId(id);
            return ResponseEntity.ok(listContentRepository.save(message));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @DeleteMapping("/{id}")
    public ResponseEntity<ListContent> delete
            (@PathVariable Integer id) {
        Optional<ListContent> oMessage = listContentRepository.findById(id);
        if (oMessage.isPresent()) {
            listContentRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
