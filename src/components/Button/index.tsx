import React from 'react';
import './style.scss';

class Button extends React.Component<{
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}> {
    render() {
        const { type = 'button', onClick } = this.props;

        return (
            <button className='button' type={type} onClick={onClick}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;
