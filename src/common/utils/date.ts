function timeToSeconds(tempo: string) {

    const [hours = '0', minutes, seconds] = tempo.split(":");

    const hoursForSeconds = Number(hours) * 3600;
    const minutesForSeconds = Number(minutes) * 60;

    return (hoursForSeconds + minutesForSeconds + Number(seconds))

}

export default timeToSeconds;