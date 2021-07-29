package talk.server.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class resLoginUser {
    private String result;
    private boolean success;
    private String token;
    private String nickname;
}
