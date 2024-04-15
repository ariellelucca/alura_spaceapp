import { styled } from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const ImageWrapper = styled.li`
  list-style-type: none;
`


const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImageWrapper>
            { fotos.map( foto => 
              <Imagem key={foto.id}
                      foto={foto}></Imagem>
            ) }
          </ImageWrapper>
        </SecaoFluida>
        <Populares></Populares>
      </GaleriaContainer>
    </>
    
  )
}

export default Galeria