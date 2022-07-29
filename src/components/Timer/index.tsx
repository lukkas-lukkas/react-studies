import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";
import { ITask } from "../../interfaces/ITask";
import Button from "../Button";
import Clock from "./Clock";
import './style.scss';

interface Props {
  taskSelected: ITask | undefined
}

export default function Timer({ taskSelected }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (taskSelected?.time) {
      setTime(timeToSeconds(taskSelected.time));
    }
  }, [taskSelected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        const currencyTime = counter - 1;
        setTime(currencyTime);
        return regressive(currencyTime);
      }
    }, 1000);
  }

  return (
    <div className='timer'>
      <p className='title'>Choise a card and start timer</p>
      <div className='clockWrapper'>
        <Clock time={time}/>
      </div>
      <Button text="Start" onClick={() => regressive(time)} />
    </div>
  )
}
