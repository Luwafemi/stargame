import { useState, useEffect, useRef } from "react";
import utils from "./utils.js";

//Custom Hook
const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setcandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  const availableNumsRef = useRef(availableNums);

  useEffect(() => {
    availableNumsRef.current = availableNums;
  }, [availableNums]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (availableNumsRef.current.length === 0) {
        clearInterval(interval);
        return;
      }
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setcandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n),
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
