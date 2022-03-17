import React from 'react';

const textAreaStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    border: '0',
    overflow: 'auto',
    resize: 'none',
    fontSize: '14px',
    lineHeight: '18px',
}

const TextArea = () => (
    <textarea style={textAreaStyle} />
);

export default TextArea;