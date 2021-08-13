package talk.server.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Userupdate {
    private int userNo;
    private String email;
    private String id;
    private String password;
    private String nickname;
    private String address;
    private int age;
}
