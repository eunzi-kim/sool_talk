package talk.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import talk.server.jwt.JwtTokenProvider;
import talk.server.service.UserService;
import talk.server.vo.User;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    // 일반, 소셜 회원가입 로그인 구분

    @PostMapping("/signup")
    public void signup() {
        // 회원 가입 로직
    }

    @PostMapping("/signin")
    public void signin() {
        // 로그인 로직
    }

    // 일단 두고 나중에 필요없어서 지워야함
    @GetMapping("/user")
    public ResponseEntity<User> getUser(@RequestParam String id) {
        return ResponseEntity.ok(userService.getUser(id));
    }
}
