import { Button } from '../Button';
import {Container, StyledModal} from './styles';

type ModalProps={
  modalVisibility:boolean, 
  setVisibility:() =>void, 
  handleConfirme:() =>void,
}

export const Modal=({modalVisibility, setVisibility, handleConfirme}:ModalProps)=>{
  return (
    <StyledModal
      isOpen={modalVisibility}
      onEscapeKeydown={setVisibility}
      onBackgroundClick={setVisibility}
    >
     <Container>
      <h2>Você quer deletar a pergunta?</h2>
      <div>
        <Button  
          btnType="outline" 
          onClick={setVisibility}
        >
          Cancelar
        </Button>
        <Button  
          btnType="fill"
          onClick={handleConfirme}
        >
          Deletar
        </Button>
      </div>
     </Container>
    </StyledModal>
  )
}
