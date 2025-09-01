import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };

  return <GiftedChat messages={messages} onSend={onSend} user={{ _id: 1 }} />;
}