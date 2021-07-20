package com.example.board.controller;

import com.example.board.jwt.JwtTokenProvider;
import com.example.board.service.CustomUserDetailService;
import com.example.board.service.TbService;
import com.example.board.service.UserService;
import com.example.board.vo.Tb;
import com.example.board.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RequestMapping("/board")
@RestController
public class ApiController {
    @Autowired
    private TbService service;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping(value = "/boardlist")
    public ResponseEntity<ArrayList<Tb>> getAllTb() {
        ArrayList<Tb> list = service.getAllTb();
        if (list != null) return new ResponseEntity<>(list, HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/user")
//    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<User> getUser(@RequestParam String id) {
//        User user = userService.getUser(id);
//        jwtTokenProvider.createToken(user.getUsername(), user.getAuthorities());
        return ResponseEntity.ok(userService.getUser(id));
    }
}
