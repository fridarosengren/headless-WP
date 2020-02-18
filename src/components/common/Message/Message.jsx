import React from 'react';
import Styles from './Message.module.css';

const Message = ({ error, success, children }) => {
	return <span className={error ? Styles.error : success ? Styles.success : Styles.normal}>{children}</span>;
};

export default Message;
