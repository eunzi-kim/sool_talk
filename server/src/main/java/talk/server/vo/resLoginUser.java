package talk.server.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class resLoginUser {
    private String id;
    private String nickname;
    private String email;
    private String address;
    private String sex;
    private int age;
    private int likes;
    private String token;
    private String profileImg;
}
