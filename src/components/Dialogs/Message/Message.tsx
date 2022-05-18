import React from 'react';
import s from '../Dialogs.module.css';
import {MessageType} from '../../../index';

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.dialogs}>{props.message}</div>
    )
}

export default Message