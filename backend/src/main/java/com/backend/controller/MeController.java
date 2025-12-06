package com.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dto.UserResponseDto;

@RestController
@RequestMapping("/me")
public class MeController {
    
    @GetMapping
    @ResponseBody
    public ResponseEntity<UserResponseDto> getCurrentUser(@AuthenticationPrincipal User user) {
        UserResponseDto userResponseDto = new UserResponseDto(user.getUsername());
        return ResponseEntity.ok(userResponseDto);
    };
}