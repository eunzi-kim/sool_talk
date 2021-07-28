package talk.server.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;
import talk.server.vo.Message;

@RestController
public class ChattingController {
    @MessageMapping("/hello/1")
    @SendTo("/topic/1")
    public Message boradCast(Message message){
        System.out.println("1 >> " + message);
        return message;
    }

    @MessageMapping("/hello/2")
    @SendTo("/topic/2")
    public Message boradCast2(Message message){
        System.out.println("2 >> " + message);
        return message;
    }
}
