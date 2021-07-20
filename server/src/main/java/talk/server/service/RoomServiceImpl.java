package talk.server.service;

import org.springframework.stereotype.Service;
import talk.server.vo.Room;

import java.util.ArrayList;

@Service
public class RoomServiceImpl implements RoomService{
    @Override
    public Room makeRoom(Room room) {
        // 방이 만들어지는 조건 확인 코드 넣기(?)
        // 일단 무조건 방은 만들어지는 것으로 해봄
        // db는 일단 미사용
        return room;
    }

    @Override
    public ArrayList<Room> roomList() {
        return null;
    }


}
