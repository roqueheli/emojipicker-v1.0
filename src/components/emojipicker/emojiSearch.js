import React, { useState } from 'react';

const EmojiSearch = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSearch = (e) => {
        setInputValue(e.target.value);
        onSearch(e);
    }

    return (
        <input value={inputValue} onChange={handleSearch}></input>
    )
}

export default EmojiSearch;