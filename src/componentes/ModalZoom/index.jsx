import { styled } from "styled-components"
import Imagem from "../Galeria/Imagem"
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 295px;
  width: 1156px;
  height: 740px;
  padding: 0;
  border: 0;
  background-color: transparent;

  figure {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 0;

    figcaption {
      padding: 20px;
      
      footer button img {
        width: 32px;
        height: 32px;
      }
    }
  }

  form {
    top: 30px;
    right: 30px;
    position: absolute;

    button img {
      width: 32px;
      height: 32px;
    }
  }
`

const ModalZoom = ({ foto }) => {
  return (
  <>
    {/* se eu tenho a foto E o dialog, mostra, senão não */}
    { foto && <>
      <Overlay />
      <DialogEstilizado open={!!foto}>
        <Imagem foto={foto} expandida={true} />
        <form method="dialog">
          <BotaoIcone formMethod="dialog">
            <img src="/icones/close.png" alt="Icone de fechar" />
          </BotaoIcone>
        </form>
      </DialogEstilizado>
    </> }
  </>
  )
}

export default ModalZoom