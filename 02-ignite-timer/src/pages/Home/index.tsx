import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  HomeContainer,
  ButtonStartCountdown,
  ButtonStopCountdown,
} from './style'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { useContext } from 'react'
import { CycleContext } from '../../contexts/cycleContext'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser no minímo 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo 60 minutos'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, interruptCycle, createNewCycle } =
    useContext(CycleContext)

  const newCycleForm = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isStartButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <ButtonStopCountdown type="button" onClick={interruptCycle}>
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
