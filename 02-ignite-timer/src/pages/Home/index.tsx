import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  HomeContainer,
  ButtonStartCountdown,
  ButtonStopCountdown,
} from './style'
import { createContext, useState } from 'react'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser no minímo 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo 60 minutos'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  resetAmountSecondsPassed: (difference?: number) => void
}

export const CycleContext = createContext({} as CycleContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        }
        return cycle
      }),
    )

    setActiveCycleId(null)
  }

  function resetAmountSecondsPassed(difference?: number) {
    difference ? setAmountSecondsPassed(difference) : setAmountSecondsPassed(0)
  }

  const newCycleForm = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewData(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    resetAmountSecondsPassed()

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        }
        return cycle
      }),
    )

    setActiveCycleId(null)
  }

  const task = watch('task')
  const isStartButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewData)} action="">
        <CycleContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            resetAmountSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CycleContext.Provider>

        {activeCycle ? (
          <ButtonStopCountdown type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} /> Interromper
          </ButtonStopCountdown>
        ) : (
          <ButtonStartCountdown type="submit" disabled={isStartButtonDisabled}>
            <Play size={24} /> Começar
          </ButtonStartCountdown>
        )}
      </form>
    </HomeContainer>
  )
}
