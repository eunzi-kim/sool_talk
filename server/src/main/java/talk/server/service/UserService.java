package talk.server.service;

import talk.server.vo.User;

import java.util.Map;

public interface UserService {
    public int getUserByNickName(String nickname);
    public int getUserByUserName(String username);
    public User getUser(Map<String, String> map);
    public boolean setUser(Map<String, String> map);
}
