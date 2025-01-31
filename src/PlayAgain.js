import React from "react";
function PlayAgain(props) {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{
          color: props.gameStatus == "won" ? "Green" : "Red",
        }}
      >
        {props.gameStatus == "won" ? "You win!" : "Game Over"}{" "}
      </div>{" "}
      <button onClick={props.onClick}> Play Again </button>{" "}
    </div>
  );
}
export default PlayAgain;
