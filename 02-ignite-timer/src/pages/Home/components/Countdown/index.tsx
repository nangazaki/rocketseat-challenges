import { useContext, useEffect } from 'react'
import { CountdownContainer } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from '../..'

export const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    resetAmountSecondsPassed,
  } = useContext(CycleContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const difference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (difference > totalSeconds) {
          markCurrentCycleAsFinished()
        } else {
          resetAmountSecondsPassed(difference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    resetAmountSecondsPassed,
  ])

  const amountMinnutes = Math.floor(currentSeconds / 60)
  const amountSeconds = currentSeconds % 60

  const minutes = String(amountMinnutes).padStart(2, '0')
  const seconds = String(amountSeconds).padStart(2, '0')

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <span>:</span>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
