import React, { forwardRef, useEffect, useRef, useState } from 'react';
import EmojiSearch from './emojiSearch';
import { data } from '../data';
import styles from './emojiPicker.module.scss';

const EmojiPicker = (props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [emojiList, setEmojiList] = useState([...data]);
    const containerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(!containerRef.current.contains(e.target)){
                setIsOpen(false);
                setEmojiList([...data]);
            }
        });
    }, []);

    const handleSearch = (e) => {
        if (!! e.target.value.toLocaleLowerCase()) {
            const search = emojiList.filter(emoji => emoji.name.toLocaleLowerCase().includes(e.target.value) || emoji.keywords.toLocaleLowerCase().includes(e.target.value));
            setEmojiList([...search]);
        } else {
            setEmojiList([...data]);
        }
    }

    const handleOnClickEmoji = (emoji) => {
        ref.current.value = ref.current.value.slice(0, ref.current.selectionStart) + emoji.symbol + ref.current.value.slice(ref.current.selectionStart);
        ref.current.selectionStart = ref.current.selectionStart + emoji.symbol.length;
        ref.current.selectionEnd = ref.current.selectionStart + emoji.symbol.length;
        ref.current.focus();
    }

    return (
        <div ref={containerRef} style={{ position: "relative", display: "inline" }}>
            <button className={styles.emojiPickerButton} onClick={() => setIsOpen(!isOpen)}>☺︎</button>
            {isOpen ? 
                <div className={styles.emojiPickerContainer}>
                    <EmojiSearch onSearch={handleSearch} />
                    <div>
                        {emojiList.map((emoji, index) => {
                            return <button className={styles.emojiButton} key={index} onClick={(e) => handleOnClickEmoji(emoji)}>{emoji.symbol}</button>
                        })}
                    </div>
                </div>
            : ""}
        </div>
    );
}

export default forwardRef(EmojiPicker);