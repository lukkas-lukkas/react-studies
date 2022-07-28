import React from 'react';
import './style.scss';

class Button extends React.Component<{text: string}> {
    render() {
        return (
            <button className='button'>
                {this.props.text}
            </button>
        )
    }
}

export default Button;
