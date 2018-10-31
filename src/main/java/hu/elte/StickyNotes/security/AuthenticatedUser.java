package hu.elte.StickyNotes.security;

import hu.elte.StickyNotes.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@Component
@Data
@NoArgsConstructor
@AllArgsConstructor

public class AuthenticatedUser {
    private User user;
}
