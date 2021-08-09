package talk.server.dao;

import talk.server.vo.User;

import javax.servlet.http.HttpSession;
import java.util.Map;
import java.util.Optional;

public interface UserDao {
    public Optional<User> getUserByNickName(String nickname);
    public Optional<User> getUserById(String id);
    public Optional<User> getUser(Map<String, String> map);
    public int setUser(Map<String, Object> map);
    public Map<String, Object> getProfileImg(String id);

//    //로그아웃
//    public void logout(HttpSession session) {
//        System.out.println(" 로그아웃 처리 ");
//        session.invalidate();
//    }

}
