import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  InputTask,
  InputAmountMinutes,
  ButtonStartCountdown,
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option>Task 1</option>
            <option>Task 2</option>
            <option>Task 3</option>
            <option>Task 4</option>
            <option>Task 5</option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <InputAmountMinutes
            type="number"
            id="minutesAmount"
            placeholder="00"
            min={5}
            max={60}
            step={5}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <ButtonStartCountdown type="submit" disabled>
          <Play size={24} /> Começar
        </ButtonStartCountdown>
      </form>
    </HomeContainer>
  )
}
