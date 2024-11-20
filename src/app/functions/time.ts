export const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)

  return {
    uniText: `${hours}h ${minutes}m ${seconds}s`,
    hours,
    minutes,
    seconds
  }
}