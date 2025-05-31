package com.backend.StudentBackend.service;

import com.backend.StudentBackend.model.User;
import com.backend.StudentBackend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            // For now, return a static token
            return "dummy-token-123";
        }
        return null;
    }
} 