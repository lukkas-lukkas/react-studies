export function timeToSeconds(time: string) {
    const [hours, minuts, seconds] = time.split(':');

    const hoursToSeconds = Number(hours) * 3600;
    const minutsToSeconds = Number(minuts) * 60;

    return hoursToSeconds + minutsToSeconds + Number(seconds);
}
