package talk.server.controller;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import talk.server.jwt.JwtTokenProvider;
import talk.server.service.JwtUserDetailsService;
import talk.server.service.UserService;
import talk.server.vo.FailureLogin;
import talk.server.vo.ResUserInfo;
import talk.server.vo.User;


import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Api(tags = {"회원관련 컨트롤러"})
@RequestMapping("/user")
@RestController
// @CrossOrigin("*")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestParam String id,
                       @RequestParam String password,
                       @RequestParam String nickname,
                       @RequestParam(required = false) String email,
                       @RequestParam String sex,
                       @RequestParam String address,
                       @RequestParam String age,
                       @RequestParam(required = false) String likes,
                       @RequestParam(required = false) MultipartFile profileImg) throws IOException {
        Optional<User> userOptional = userService.getUserById(id);
        // 중복된 id 라면
        if (userOptional.isPresent()) {
            return new ResponseEntity<>("username", HttpStatus.OK);
        }

        userOptional = userService.getUserByNickName(nickname);
        // 중복된 nickname 이라면
        if (userOptional.isPresent()) {
            return new ResponseEntity<>("nickname", HttpStatus.OK);
        }


        Map<String, Object> map = new HashMap<>();
        map.put("id", id);
        map.put("password", password);
        map.put("nickname", nickname);
        map.put("email", email);
        map.put("address", address);
        map.put("sex", sex);
        map.put("profileImg", profileImg.getBytes());
        map.put("likes", 0);
        map.put("age", age);

        userService.setUser(map);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody Map<String, String> map) {

        Optional<User> userOptional = userService.getUserById(map.get("id"));
        // id가 없다면
        if (!userOptional.isPresent()) {
            FailureLogin failureLogin = new FailureLogin();
            failureLogin.setResult("noid");
            failureLogin.setSuccess(false);

            return new ResponseEntity<>(failureLogin, HttpStatus.OK);
        }
        // pw가 틀리다면
        userOptional = userService.getUser(map);
        if (!userOptional.isPresent()) {
            FailureLogin failureLogin = new FailureLogin();
            failureLogin.setResult("nopassword");
            failureLogin.setSuccess(false);

            return new ResponseEntity<>(failureLogin, HttpStatus.OK);
        }

        final String token = jwtTokenProvider.createToken(userOptional.get().getId());

        ResUserInfo resUserInfo = new ResUserInfo();
        resUserInfo.setId(userOptional.get().getId());
        resUserInfo.setNickname(userOptional.get().getNickname());
        resUserInfo.setEmail(userOptional.get().getEmail());
        resUserInfo.setProfileImg(userOptional.get().getProfileImg().getBytes());
        resUserInfo.setAddress(userOptional.get().getAddress());
        resUserInfo.setSex(userOptional.get().getSex());
        resUserInfo.setAge(userOptional.get().getAge());
        resUserInfo.setLikes(userOptional.get().getLikes());
        resUserInfo.setToken(token);

        return new ResponseEntity<>(resUserInfo, HttpStatus.OK);
    }
}
