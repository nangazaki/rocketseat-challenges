import { FormContainer, InputAmountMinutes, InputTask } from './styles'
import { useContext } from 'react'
import { CycleContext } from '../..'
import { useFormContext } from 'react-hook-form'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <InputTask
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
