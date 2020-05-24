import React, { useState } from 'react';
import StarNumbers from './StarNumbers.js';
import utils from './utils.js';
import PlayNumber from './PlayNumber.js';
import PlayAgain from './PlayAgain.js';
import useGameState from './useGameState';

const Game = (props) => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums == 0 ? 'won' : secondsLeft == 0 ? 'lost' : 'active';

  const numberStatus = (number) => {
    // console.log('testing...')
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == 'used' || secondsLeft == 0) {
      return;
    }

    const newCandidateNums =
      currentStatus == 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div className="game" key={props.key}>
      <div className="help">
        Pick one or more numbers that sum to the number of stars.{' '}
      </div>{' '}
      <div className="body">
        <div className="left">
          {' '}
          {gameStatus != 'active' ? (
            <PlayAgain onClick={props.resetGame} gameStatus={gameStatus} />
          ) : (
            <StarNumbers stars={stars} />
          )}{' '}
        </div>{' '}
        <div className="right">
          {' '}
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              number={number}
              status={numberStatus(number)}
              key={number}
              onClick={onNumberClick}
            />
          ))}{' '}
        </div>{' '}
      </div>{' '}
      <div className="timer"> Time Remaining: {secondsLeft} </div>{' '}
    </div>
  );
};

function StarMatch() {
  const [gameId, setGameId] = useState(1);
  const resetGame = () => {
    setGameId(gameId + 1);
  };
  return <Game resetGame={resetGame} key={gameId} />;
}

export default StarMatch;

