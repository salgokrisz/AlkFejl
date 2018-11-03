package hu.elte.StickyNotes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class StickyNotesApplication {

	public static void main(String[] args) {
            SpringApplication.run(StickyNotesApplication.class, args);
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            System.out.println(encoder.encode("a"));
	}
}
