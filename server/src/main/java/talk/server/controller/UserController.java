package talk.server.controller;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import talk.server.jwt.JwtTokenProvider;
import talk.server.service.UserService;
import talk.server.vo.User;
import talk.server.vo.resLoginUser;

import java.util.Map;

@Api(tags = {"회원관련 컨트롤러"})
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
    public ResponseEntity<resLoginUser> signin(@RequestBody Map<String, String> map) {
        // 로그인 로직
        User user = userService.getUser(map);
        resLoginUser result = new resLoginUser();
        result.setNickname(user.getNickname());
        result.setSuccess(true);
        result.setToken(user.getAuth());
        return ResponseEntity.ok(result);
    }
}
