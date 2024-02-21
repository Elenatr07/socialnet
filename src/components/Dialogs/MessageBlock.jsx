import React from 'react'
import Message from './Message/Message'

export default function MessageBlock(props) {
     //функция reverse изменяет state, чтобы этого не было компонента должна для работы сосздать КОПИЮ стайта [...props.postsData], а не использовать сам стайт props.postsData
  
    let messagesElemants = [...props.dialogs].reverse().map((obj) => {
  
    

        return (
           
           <div>
            
             <Message key={obj.id} id={obj.id} 
             message={obj.body} photo={obj.photos} senderId ={obj.senderId} 
           friendId={obj.recipientId } /> 
           
            </div>  
           
        )
    })
  return (
    <div>
        {messagesElemants}
    </div>
  )
}
