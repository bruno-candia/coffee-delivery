import { Minus, Plus } from '@phosphor-icons/react';
import { StepperContainer } from './styles';

interface StepperProps {
  maxValue: number;
  onUpdate: (quantity: number) => void;
  value: number;
}

export function Stepper({ maxValue, value, onUpdate }: StepperProps) {
  function incrementSelectedProducts() {
    const newValue = Math.min(value + 1, maxValue);
    onUpdate(newValue);
  }

  function decrementSelectedProducts() {
    const newValue = Math.max(value - 1, 0);
    onUpdate(newValue);
  }

  function updateSelectedProducts(event: React.ChangeEvent<HTMLInputElement>) {
    let newValue = Number(event.target.value);
    if (newValue > maxValue) newValue = maxValue;
    if (newValue < 0) newValue = 0;
    onUpdate(newValue);
  }

  return (
    <StepperContainer>
      <button
        type="button"
        disabled={maxValue === 0 || value <= 1}
        onClick={decrementSelectedProducts}
      >
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        disabled={true}
        max={maxValue}
        min="0"
        value={maxValue === 0 ? 0 : value}
        onChange={updateSelectedProducts}
      />
      <button
        type="button"
        disabled={maxValue === 0 || value >= maxValue}
        onClick={incrementSelectedProducts}
      >
        <Plus size={14} weight="bold" />
      </button>
    </StepperContainer>
  );
}
