package talk.server.dao;

import talk.server.vo.User;

import java.util.Map;

public interface UserDao {
    public int getUserByNickName(String nickname);
    public int getUserByUserName(String username);
    public User getUser(Map<String, String> map);
    public int setUser(Map<String, String> map);
}
