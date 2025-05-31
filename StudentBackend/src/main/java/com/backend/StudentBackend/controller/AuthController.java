package com.backend.StudentBackend.controller;

import com.backend.StudentBackend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")  // Allow requests from any origin
public class AuthController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/login", consumes = {"application/x-www-form-urlencoded", "application/json"})
    public ResponseEntity<?> login(@RequestParam(value = "username", required = false) String username,
                                 @RequestParam(value = "password", required = false) String password,
                                 @RequestBody(required = false) Map<String, String> body) {
        
        // If parameters are in body (JSON), use them
        if (body != null) {
            username = body.get("username");
            password = body.get("password");
        }

        logger.info("Login attempt for username: {}", username);
        
        try {
            String token = userService.login(username, password);
            if (token != null) {
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                logger.info("Login successful for user: {}", username);
                return ResponseEntity.ok(response);
            }
        } catch (Exception e) {
            logger.error("Login error: ", e);
        }
        
        logger.error("Login failed for user: {}", username);
        return ResponseEntity.badRequest().body("Invalid credentials");
    }
} 