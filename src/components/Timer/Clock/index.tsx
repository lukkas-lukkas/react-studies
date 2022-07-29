import './style.scss';

export default function Clock({ time = 0 }: { time: number | undefined}) {
  const minuts = Math.floor(time / 60);
  const seconds = time % 60;
  const minutsArray = String(minuts).padStart(2, '0');
  const secondsArray = String(seconds).padStart(2, '0');

  return (
    <>
      <span className='clockNumber'>{minutsArray[0]}</span>
      <span className='clockNumber'>{minutsArray[1]}</span>
      <span className='clockDivider'>:</span>
      <span className='clockNumber'>{secondsArray[0]}</span>
      <span className='clockNumber'>{secondsArray[1]}</span>
    </>
  )
}
