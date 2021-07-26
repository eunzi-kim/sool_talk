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
public class BoardController {
    @Autowired
    private TbService service;

    @GetMapping(value = "/boardlist")
    public ResponseEntity<ArrayList<Tb>> getAllTb() {
        ArrayList<Tb> list = service.getAllTb();
        if (list != null) return new ResponseEntity<>(list, HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}