package com.cognizant.jwt.controller;

import com.cognizant.jwt.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping("/authenticate")
    public Map<String, String> generateToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String[] credentials = new String(decodedBytes).split(":", 2);
            String username = credentials[0];

            String token = jwtUtil.generateToken(username);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return response;
        } else {
            throw new RuntimeException("Missing or invalid Authorization header");
        }
    }
}
