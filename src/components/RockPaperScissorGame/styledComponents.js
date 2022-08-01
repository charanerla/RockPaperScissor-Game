import styled from 'styled-components'

export const GameContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px 10px 0px;
`
export const HeaderContainer = styled.div`
  width: 90vw;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 16px 20px;
  font-family: 'Bree Serif';
  @media all and (min-width: 768px) {
    width: 80vw;
  }
  @media all and (min-width: 992px) {
    width: 70vw;
  }
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
export const ListItem = styled.li`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  @media all and (min-width: 768px) {
    font-size: 25px;
  }
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px 20px 16px 20px;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 400;
  margin: 0px;
  font-size: ${props => props.size};
`
export const Heading = styled(ScoreHeading)`
  color: #ffffff;
  font-size: ${props => props.size};
  font-weight: 400;
  font-family: 'Roboto';
`
export const GameScore = styled(ScoreHeading)`
  font-family: 'Roboto';
  font-size: 35px;
  margin: 0px;
  text-align: center;
  font-weight: bold;
`
export const ImgButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
export const TextButton = styled.button`
  border: none;
  outline: none;
  border-radius: ${props => props.borderRadius};
  background-color: #ffffff;
  color: #223a5f;
  padding: ${props => props.padding};
  font-family: 'Bree Serif';
  font-size: 20px;
  margin-top: 26px;
  cursor: pointer;
`

export const ImageTag = styled.img`
  width: 150px;
  height: 150px;
  @media all and (min-width: 576px) {
    width: 175px;
    height: 175px;
  }
`

export const ButtonsContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  @media all and (min-width: 576px) {
    width: 80vw;
  }
  @media all and (min-width: 768px) {
    width: 60vw;
  }
  @media all and (min-width: 992px) {
    width: 40vw;
  }
  @media all and (min-width: 1200px) {
    width: 30vw;
  }
`
export const GameResultContainer = styled(ButtonsContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const DynamicGameResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const ChosenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const RightAlignDiv = styled.div`
  align-self: flex-end;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-bottom: 20px;
  padding-top: 20px;
  width: 60%;
  margin: auto;
`
export const PopupImg = styled.img`
  width: 80%;
`
export const CloseButton = styled(ImgButton)`
  align-self: flex-end;
`
export const MainHeading = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #ffffff;
  width: min-content;
  margin: 0px;
`
