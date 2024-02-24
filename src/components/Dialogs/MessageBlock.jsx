import React, { useEffect } from "react";
import Message from "./Message/Message";
import Paginator from "../FormControls/Paginator/Paginator";

export default function MessageBlock(props) {
  //функция reverse изменяет state, чтобы этого не было компонента должна для работы сосздать КОПИЮ стайта [...props.postsData], а не использовать сам стайт props.postsData

  let messagesElemants = [...props.dialogs].reverse().map((obj) => {
   

    return (
      <div>
        <Message
          key={obj.id}
          messageId={obj.id}
          message={obj.body}
          senderId={obj.senderId}
          friendId={obj.recipientId}
          owner={props.owner}
          senderName={obj.senderName}
          addedAt={obj.addedAt}
          viewed={obj.viewed}
          delMessage={props.delMessage}
        />
      </div>
    );
  });
  return <div>{messagesElemants}</div>;
}
