package talk.server.service;

import talk.server.vo.User;

import javax.servlet.http.HttpSession;
import java.util.Map;
import java.util.Optional;

public interface UserService {
    //로그인 확인
    public Optional<User> getUserByNickName(String nickname);
    public Optional<User> getUserById(String id);
    public Optional<User> getUser(Map<String, String> map);
    public boolean setUser(Map<String, Object> map);
    public Map<String, Object> getProfileImg(String id);

    //로그아웃
//    public void logout(HttpSession session);
}
