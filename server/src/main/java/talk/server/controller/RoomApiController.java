package talk.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import talk.server.service.RoomService;
import talk.server.vo.Room;

import java.util.ArrayList;

@RestController
@RequestMapping("/room")
public class RoomApiController {
    @Autowired
    private RoomService roomService;

    private ArrayList<Room> roomList = new ArrayList<>();

    @PostMapping("/makeroom")
    public ResponseEntity<Room> makeRoom(@RequestBody Room paramRoom) {
        Room room = roomService.makeRoom(paramRoom);
        if (room != null) {
            roomList.add(room);
            return new ResponseEntity<Room>(room, HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/roomlist")
    public ResponseEntity<ArrayList<Room>> roomList() {
        roomService.roomList(); // 일단 나중에 필요할 수도 있어서 코드만 추가
        if (roomList.size() == 0) return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 만들어진 방이 없을 때
        else return new ResponseEntity<ArrayList<Room>>(roomList, HttpStatus.OK);
    }
}
