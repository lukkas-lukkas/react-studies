import './style.scss';

interface Props {
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}

function Button({ text, type = 'button', onClick }: Props) {
    return (
        <button className='button' type={type} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
