import React from 'react';
import { MessageType } from '../../../redux/state';
import s from '../Dialogs.module.css';

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.dialogs}>{props.message}</div>
    )
}

export default Message