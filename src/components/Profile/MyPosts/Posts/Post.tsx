import React from 'react';
import s from './Post.module.css';

type MessagePropsType = {
    message: string
}

const Post: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )

}

export default Post;