import Button from "../Button";
import Clock from "./Clock";
import './style.scss';

export default function Timer() {
  return (
    <div className='timer'>
      <p className='title'>Choise a card and start timer</p>
      <div className='clockWrapper'>
        <Clock />
      </div>
      <Button text="Start" />
    </div>
  )
}
