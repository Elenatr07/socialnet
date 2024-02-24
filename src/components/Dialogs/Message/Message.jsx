import React, { useEffect, useState } from "react";
import style from "./../Dialogs.module.css";
import checkMarckGreen from "./../../../img/checkMarckGreen.jpg";
import checkMarckBlack from './../../../img/checkMarkBlack.png'
import backet from './../../../img/backet.png'

import moment from "moment";


let url = "https://buzookod.ru/media/2816616767_vubrbeJ.jpg";
export default function Message(props) {

 
    const imgPath={
      notViewed: checkMarckBlack,
      wiewed: checkMarckGreen
    }
  const[open, setOpen] = useState(true);
  
  const toggleCheckMark = () => {
    setOpen(false)
  }
 
  const delMessage = (messageId) => {
    props.delMessage(messageId =props.messageId)
  }

  const getCheckMarkImg = ()=> open ? 'notViewed' : 'wiewed'
  const imgCheck = getCheckMarkImg()


  let newDate = moment(props.addedAt).format('DD/MM/YYYY, h:mm a')

  let owner = props.owner === props.senderId;

  return (
    <div className={owner ? style.message : style.messageRecieved}>
      <div className={style.messageBlock}>
        <div className={style.dateBlock}>
           <div>{props.senderName}</div>
        <div>{newDate}</div>
        </div>
       
         {owner ? (
          <div className={style.messageBody}> 
          <p>{props.message}</p>
          <div className={style.checkMarkBox}>
            <img onClick={delMessage} className={style.backet} src={backet} alt="" />
            {props.viewed ? 
          <img className={style.checkMark} src={checkMarckGreen} alt=""/> : 
          <img className={style.checkMark} src={checkMarckBlack} alt=""/>}
          
          </div>
          
          </div>
        ) : (
          <div  className={props.viewed ? style.messageBodyRecieved : style.newMessage}>
            <p>{props.message}</p>
            <div  className={style.checkMarkBox}>{props.viewed ? 
              <img className={style.checkMark} src={checkMarckGreen} alt=""/> : 
              <img onClick={toggleCheckMark} className={style.checkMark} src={imgPath[imgCheck]} alt=""/>}</div>
          </div>
        )}
      </div>
      
        
      
      <div>
       
      </div>
   
    </div>
  );
}
