import { Minus, Plus } from '@phosphor-icons/react';
import { StepperContainer } from './styles';

interface StepperProps {
  maxValue: number;
}

export function Stepper({ maxValue }: StepperProps) {
  return (
    <StepperContainer>
      <button
        type="button"
        disabled={maxValue === 0}
      >
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        defaultValue={maxValue === 0 ? '0' : '1'}
        disabled={maxValue === 0}
        max={maxValue}
        min="0"
      />
      <button
        type="button"
        disabled={maxValue === 0}
      >
        <Plus size={14} weight="bold" />
      </button>
    </StepperContainer>
  );
}
