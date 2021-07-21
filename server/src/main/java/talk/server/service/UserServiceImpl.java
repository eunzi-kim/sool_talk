package talk.server.service;

import talk.server.dao.UserDao;
import talk.server.jwt.JwtTokenProvider;
import talk.server.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDao dao;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public User getUser(String id) {
        User user = dao.getUser(id);
        String token = jwtTokenProvider.createToken(user.getUsername(), user.getAuthorities());
        List<String> list = new ArrayList<>();
        list.add("ROLE_USER");
        list.add("ADMIN");
        user.setRoles(list);
        user.setAuth(token);
        return user;
    }
}
