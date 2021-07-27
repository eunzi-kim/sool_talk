package talk.server.service;

import talk.server.dao.UserDao;
import talk.server.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    UserDao dao;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        User user = null;
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with id '%s'.", id));
        } else {
            user.getAuthorities();
            List<String> list = new ArrayList<>();
            list.add("ROLE_USER");
            list.add("ADMIN");
            user.setRoles(list);
            return user;
        }
    }
}
