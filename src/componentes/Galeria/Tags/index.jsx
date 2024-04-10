import { styled } from "styled-components"
import tags from './tags.json';

const TagTitulo  = styled.span`
  font-family: 'GandhiSansRegular';
  font-weight: 400;
  font-size: 24px;
  line-height: 28.8px;
  color: #D9D9D9;
`
const ButtonsGroup = styled.div`
  display: flex;
  gap: 10px;
`
const TagButton = styled.button`
  font-size: 24px;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`

const TagsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 60px;
  margin-top: 30px;
`

const Tags = () => {
  return <TagsWrapper>
    <TagTitulo >Busque por tags:</TagTitulo >
    <ButtonsGroup>
      { tags.map( tag => <TagButton key = {tag.id}>{tag.titulo}</TagButton>) }
    </ButtonsGroup>
  </TagsWrapper>
}

export default Tags