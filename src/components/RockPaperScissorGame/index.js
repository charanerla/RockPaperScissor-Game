import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  GameContainer,
  HeaderContainer,
  ScoreContainer,
  ScoreHeading,
  Heading,
  GameScore,
  ButtonsContainer,
  ImgButton,
  ImageTag,
  TextButton,
  RightAlignDiv,
  PopupContainer,
  PopupImg,
  CloseButton,
  GameResultContainer,
  DynamicGameResultContainer,
  ChosenContainer,
  MainHeading,
} from './styledComponents'

class RockPaperScissorGame extends Component {
  state = {
    isGameOver: false,
    chosenImgId: '',
    score: 0,
    opponentChosenId: '',
    gameResult: '',
  }

  renderGameResult = value => {
    switch (value) {
      case 'ROCK&SCISSORS':
        return 'YOU WON'
      case 'ROCK&PAPER':
        return 'YOU LOSE'
      case 'SCISSORS&ROCK':
        return 'YOU LOSE'
      case 'SCISSORS&PAPER':
        return 'YOU WON'
      case 'PAPER&ROCK':
        return 'YOU WON'
      case 'PAPER&SCISSORS':
        return 'YOU LOSE'
      default:
        return 'IT IS DRAW'
    }
  }

  updateState = id => {
    const {score} = this.state
    const {choicesList} = this.props
    const opponentChosenId = choicesList[Math.floor(Math.random() * 3)].id
    const result = this.renderGameResult(`${id}&${opponentChosenId}`)
    let updatedScore = score
    if (result === 'YOU WON') {
      updatedScore += 1
    } else if (result === 'YOU LOSE') {
      updatedScore -= 1
    }
    this.setState({
      isGameOver: true,
      score: updatedScore,
      chosenImgId: id,
      opponentChosenId,
      gameResult: result,
    })
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <ButtonsContainer>
        {choicesList.map(eachObj => (
          <ImgButton
            data-testid={`${eachObj.id.toLowerCase()}Button`}
            key={eachObj.id}
            type="button"
            onClick={() => this.updateState(eachObj.id)}
          >
            <ImageTag src={eachObj.imageUrl} alt={eachObj.id} />
          </ImgButton>
        ))}
      </ButtonsContainer>
    )
  }

  renderGameOverView = () => {
    const {choicesList} = this.props
    const {chosenImgId, opponentChosenId, gameResult} = this.state

    const opponentChosenImg = choicesList.filter(
      eachObj => eachObj.id === opponentChosenId,
    )[0].imageUrl
    const youChosenImg = choicesList.filter(
      eachObj => eachObj.id === chosenImgId,
    )

    const playAgain = () => {
      this.setState({
        isGameOver: false,
        chosenImgId: '',
        opponentChosenId: '',
        gameResult: '',
      })
    }

    return (
      <GameResultContainer>
        <DynamicGameResultContainer>
          <ChosenContainer>
            <Heading size="30px">YOU</Heading>
            <ImageTag src={youChosenImg[0].imageUrl} alt="your choice" />
          </ChosenContainer>
          <ChosenContainer>
            <Heading size="30px">OPPONENT</Heading>
            <ImageTag src={opponentChosenImg} alt="opponent choice" />
          </ChosenContainer>
        </DynamicGameResultContainer>
        <Heading size="35px">{gameResult}</Heading>
        <TextButton
          borderRadius="16px"
          padding="16px 26px 16px 26px"
          type="button"
          onClick={playAgain}
        >
          PLAY AGAIN
        </TextButton>
      </GameResultContainer>
    )
  }

  render() {
    const {isGameOver, score} = this.state

    return (
      <GameContainer>
        <HeaderContainer>
          <MainHeading>Rock Paper Scissors</MainHeading>
          <ScoreContainer>
            <ScoreHeading size="20px">Score</ScoreHeading>
            <GameScore>{score}</GameScore>
          </ScoreContainer>
        </HeaderContainer>
        {isGameOver ? this.renderGameOverView() : this.renderPlayingView()}
        <RightAlignDiv>
          <Popup
            modal
            trigger={
              <TextButton
                type="button"
                padding="16px 22px 16px 22px"
                borderRadius="10px"
              >
                Rules
              </TextButton>
            }
          >
            {close => (
              <PopupContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine size="30px" />
                </CloseButton>
                <PopupImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            )}
          </Popup>
        </RightAlignDiv>
      </GameContainer>
    )
  }
}

export default RockPaperScissorGame
