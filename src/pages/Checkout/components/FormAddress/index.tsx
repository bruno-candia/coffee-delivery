import { MapPinLine } from "@phosphor-icons/react";
import { Form, Input, InputRow, InputWrapper } from "./styles";
import { CardContainer, CardHeader, CardWrapper } from "../../styles";

export function FormAddress() {
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

      <Form>
        <Input
          type="text"
          name="cep"
          inputMode="numeric"
          placeholder="CEP"
        />
        <Input type="text" placeholder="Rua" />
        <InputRow>
          <Input type="text" placeholder="Número" />
          <InputWrapper>
            <Input type="text" placeholder="Complemento" />
          </InputWrapper>
        </InputRow>
        <InputRow>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" maxLength={2} />
        </InputRow>
      </Form>
    </CardContainer>
  </CardWrapper>
  );
}
