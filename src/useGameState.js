import { useState, useEffect } from 'react';
import utils from './utils.js';
//Custom Hook
const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setcandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums != 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
<<<<<<< HEAD
      // return () => clearTimeout(timerId);
=======
//       return () => clearTimeout(timerId);
>>>>>>> 0bc12da14cc7007aa6320b701f709b02056e5d9a
    }
  });

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setcandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setAvailableNums(newAvailableNums);
      setcandidateNums([]);
      setStars(utils.randomSumIn(newAvailableNums, 9));
    }
  };

  return {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  };
};
export default useGameState;
