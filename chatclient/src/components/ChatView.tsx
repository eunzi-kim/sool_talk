import React from 'react';

type ChatViewProps = {
    msgs: string[]
};

function ChatView({ msgs }: ChatViewProps) {
    let key = 0;

    return (
        <>
            {msgs.map((msg) => (
                <div key={key++}>{msg}</div>
            ))}
        </>
    );
}

export default ChatView;