import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import ChatInput from '../components/ChatInput';
import ChatView from '../components/ChatView';


let sockJS = new SockJS("http://localhost:8080/webSocket");
let stompClient: Stomp.Client = Stomp.over(sockJS);
stompClient.debug = (str) => {
    console.log(str);
};

type ChatAppProps = {
    roomId: string;
}

function ChatApp({ match }: RouteComponentProps<ChatAppProps>) {
    const { roomId } = match.params;
    const [msgs, setMsgs] = useState<string[]>([]);

    useEffect(() => {
        console.log(match);
        // jwt token은 임시로 발급받은거 직접 넣어줌
        let headers = {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjI3MDQ1OTA5LCJleHAiOjE2MjcwNDk1MDl9.JYZ-f0kyz0CMGnTFor5LaxepcRPkhBHo5SUFItRYogg'
        };

        stompClient.connect(headers, () => {
            stompClient.subscribe(`/topic/${roomId}`, (data) => {
                const revMsg = JSON.parse(data.body);
                setMsgs(prev => [...prev, revMsg['msg']]);
            });
        })
    }, []);

    const onInput = (msg: string) => {
        stompClient.send(`/hello/${roomId}`, {}, JSON.stringify(msg));
    }

    return (
        <>
            <ChatInput onInput={onInput} />
            <ChatView msgs={msgs} />
        </>
    );
}

export default ChatApp;