import React from 'react';
import './style.scss';

class Button extends React.Component<{
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
}> {
    render() {
        const { type = 'button' } = this.props;

        return (
            <button className='button' type={type}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;
