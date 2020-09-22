import React from "react";
import "../../styling/TTT/TicTacPlayerBox.css";
import "../../styling/PlayerBox.css";

const TicTacPlayerBox = ({ side, name, game, id, value }) => {
  const borderClass = id === game.currentPlayer.id ? " player-box-border" : "";
  const renderMiniSquareValue = () => {
    if (value === "x") {
      return (
        <img
          className="ttt-player-box-icon"
          alt="small red cross"
          src="/images/ttt-cross.svg"
        />
      );
    }

    return (
      <img
        className="ttt-player-box-icon"
        alt="small yellow circle"
        src="/images/ttt-circle.svg"
      />
    );
  };

  return (
    <span className={`ttt player-box-container ${side}${borderClass}`}>
      <span className="user-icon-circle">
        <img alt="user icon" src="/images/user-icon.svg" />
      </span>
      <div className="player-box-name">{name}</div>
      {renderMiniSquareValue()}
    </span>
  );
};

export default TicTacPlayerBox;