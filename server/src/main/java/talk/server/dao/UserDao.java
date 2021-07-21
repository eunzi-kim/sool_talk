package talk.server.dao;

import talk.server.vo.User;

public interface UserDao {
    public User getUser(String id);
}
