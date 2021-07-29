package talk.server.dao;

import talk.server.vo.User;

import javax.servlet.http.HttpSession;
import java.util.Map;

public interface UserDao {
    public int getUserByNickName(String nickname);
    public int getUserByUserName(String username);
    public User getUser(Map<String, String> map);
    public int setUser(Map<String, String> map);
    
    public void logout(HttpSession session); {
        System.out.println(">>>로그아웃 처리");
        session.invalidate();
    }
}
