import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao"


const Aside = styled.aside`
  display: inline-block;
  width: 20vw;
`
const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
`


const BarraLateral = () => {
  return (
    <Aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home.png" 
            iconeInativo="/icones/home-inativo.png"
            ativo={true}
          >
          Início
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/mais-vistas.png" 
            iconeInativo="/icones/mais-vistas-inativo.png"
          >
          Mais Vistas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/mais-curtidas.png" 
            iconeInativo="/icones/mais-curtidas-inativo.png"
          >
          Mais Curtidas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/novas.png" 
            iconeInativo="/icones/novas-inativo.png"
          >
          Novas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/surpreenda-me.png" 
            iconeInativo="/icones/surpreenda-me-inativo.png"
          >
          Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </Aside>
  )
}

export default BarraLateral