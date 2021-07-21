package talk.server.controller;

import talk.server.jwt.JwtTokenProvider;
import talk.server.service.TbService;
import talk.server.service.UserService;
import talk.server.vo.Tb;
import talk.server.vo.User;
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