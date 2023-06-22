import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  InputTask,
  InputAmountMinutes,
  ButtonStartCountdown,
} from './style'
import { useState } from 'react'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser no minímo 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo 60 minutos'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewData(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    console.log(cycles)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const amountMinnutes = Math.floor(currentSeconds / 60)
  const amountSeconds = currentSeconds % 60

  const minutes = String(amountMinnutes).padStart(2, '0')
  const seconds = String(amountSeconds).padStart(2, '0')

  const task = watch('task')
  const isStartButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewData)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option>Organizar a casa</option>
            <option>Ler um livro</option>
            <option>Estudar Frontend</option>
            <option>Desenvolver uma landing page</option>
            <option>Aperfeiçoar o meu inglês</option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <InputAmountMinutes
            id="minutesAmount"
            type="number"
            placeholder="00"
            min={5}
            max={60}
            step={5}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span>:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <ButtonStartCountdown type="submit" disabled={isStartButtonDisabled}>
          <Play size={24} /> Começar
        </ButtonStartCountdown>
      </form>
    </HomeContainer>
  )
}
