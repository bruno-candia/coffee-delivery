import { MapPinLine } from '@phosphor-icons/react';
import { AddressContainer, Input, InputRow, InputWrapper } from './styles';
import { CardContainer, CardHeader, CardWrapper } from '../../styles';
import { useFormContext } from 'react-hook-form';

export function FormAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <CardWrapper>
      <h4>Complete seu pedido</h4>
      <CardContainer>
        <CardHeader>
          <MapPinLine size={22} weight="regular" data-icon="map" />
          <span>
            <h5>Endereço de entrega</h5>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </span>
        </CardHeader>

        <AddressContainer>
          <Input
            type="text"
            id="zipCode"
            inputMode="numeric"
            placeholder="CEP"
            aria-invalid={errors.zipCode ? 'true' : 'false'}
            {...register('zipCode')}
          />
          <Input
            type="text"
            placeholder="Rua"
            id="street"
            aria-invalid={errors.street ? 'true' : 'false'}
            {...register('street')}
          />
          <InputRow>
            <Input
              type="text"
              placeholder="Número"
              aria-invalid={errors.number ? 'true' : 'false'}
              {...register('number')}
            />
            <InputWrapper>
              <Input
                type="text"
                placeholder="Complemento"
                id="complement"
                aria-invalid={errors.complement ? 'true' : 'false'}
                {...register('complement')}
              />
            </InputWrapper>
          </InputRow>
          <InputRow>
            <Input
              type="text"
              placeholder="Bairro"
              id="district"
              aria-invalid={errors.district ? 'true' : 'false'}
              {...register('district')}
            />
            <Input
              type="text"
              placeholder="Cidade"
              id="city"
              aria-invalid={errors.city ? 'true' : 'false'}
              {...register('city')}
            />
            <Input
              type="text"
              placeholder="UF"
              maxLength={2}
              id="acronymState"
              aria-invalid={errors.acronymState ? 'true' : 'false'}
              {...register('acronymState')}
            />
          </InputRow>
        </AddressContainer>
      </CardContainer>
    </CardWrapper>
  );
}
