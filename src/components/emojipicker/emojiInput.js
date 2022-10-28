import React, { useRef } from 'react';
import EmojiPicker from './emojiPicker';
import styles from './emojiPicker.module.scss';

const EmojiInput = () => {
    const refInput = useRef();

    return (
        <div className={styles.inputContainer}>
            <input ref={refInput} type="text" />
            <EmojiPicker ref={refInput} />
        </div>
    );
}

export default EmojiInput;