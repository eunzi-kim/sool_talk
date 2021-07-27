package talk.server.service;

import talk.server.dao.UserDao;
import talk.server.jwt.JwtTokenProvider;
import talk.server.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDao dao;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public int getUserByNickName(String nickname) {
        return dao.getUserByNickName(nickname);
    }

    @Override
    public int getUserByUserName(String username) {
        return dao.getUserByUserName(username);
    }

    @Override
    public User getUser(Map<String, String> map) {
        User user = dao.getUser(map);
        String token = jwtTokenProvider.createToken(user.getUsername(), user.getAuthorities());
        List<String> list = new ArrayList<>();
        list.add("ROLE_USER");
        user.setRoles(list);
        user.setAuth(token);
        return user;
    }

    @Override
    public boolean setUser(Map<String, String> map) {
        int result = dao.setUser(map);
        if (result == 1) return true;
        else return false;
    }
}
