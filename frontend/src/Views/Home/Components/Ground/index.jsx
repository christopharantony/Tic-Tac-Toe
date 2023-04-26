import React, { useState } from "react";
import "./ground.css";
import { useEffect } from "react";
import Ximg from "../../../../assets/round-triangle-chain.png";
import Yimg from "../../../../assets/burger-shape.png";

const Ground = () => {
  const [reset, setReset] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(0);

  const lineStyle = {
    background: "#ffb703",
  };

  const draw = (event, index) => {
    if (data[index - 1] === "" && winner === "") {
      // Draws X if it's player 1's turn else draws O
      const current = turn === 0 ? "X" : "O";

      // Updating the data state
      data[index - 1] = current;

      // Switching the turn
      setTurn(turn === 0 ? 1 : 0);
    }
  };

  // useEffect hook used to check for a winner
  useEffect(() => {
    // Checks for the win condition in rows
    const checkRow = () => {
      let ans = false;
      for (let i = 0; i < 9; i += 3) {
        ans |=
          data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== "";
      }
      return ans;
    };

    // Checks for the win condition in cols
    const checkCol = () => {
      let ans = false;
      for (let i = 0; i < 3; i++) {
        ans |=
          data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== "";
      }
      return ans;
    };

    // Checks for the win condition in diagonals
    const checkDiagonal = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };

    // Checks if at all a win condition is present
    const checkWin = () => {
      return checkRow() || checkCol() || checkDiagonal();
    };

    // Checks for a tie
    const checkTie = () => {
      let count = 0;
      data.forEach((cell) => {
        if (cell !== "") {
          count++;
        }
      });
      return count === 9;
    };

    // Setting the winner in case of a win
    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      // Setting the winner to tie in case of a tie
      setWinner("It's a Tie!");
    }
  });

  useEffect(() => {
    // Clearing the data state
    setData(["", "", "", "", "", "", "", "", ""]);

    // Resetting the turn to player 0
    setTurn(0);

    // Resetting the winner
    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  useEffect(() => {
    const handleRefresh = (event) => {
      if (event.ctrlKey && event.keyCode === 82) {
        event.preventDefault(); // Prevent the default refresh behavior
        setReset(true);
      }
    };

    window.addEventListener("keydown", handleRefresh);

    return () => {
      window.removeEventListener("keydown", handleRefresh);
    };
  }, []);

  return (
    <div className="ground">
      <div className="tl" onClick={(e) => draw(e, 1)}>
        {data[0] && data[0] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[0] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="tc" onClick={(e) => draw(e, 2)}>
        {data[1] && data[1] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[1] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="tr" onClick={(e) => draw(e, 3)}>
        {data[2] && data[2] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[2] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="cl" onClick={(e) => draw(e, 4)}>
        {data[3] && data[3] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[3] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="cc" onClick={(e) => draw(e, 5)}>
        {data[4] && data[4] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[4] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="cr" onClick={(e) => draw(e, 6)}>
        {data[5] && data[5] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[5] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="bl" onClick={(e) => draw(e, 7)}>
        {data[6] && data[6] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[6] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="bc" onClick={(e) => draw(e, 8)}>
        {data[7] && data[7] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[7] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div className="br" onClick={(e) => draw(e, 9)}>
        {data[8] && data[8] === "X" ? (
          <img className="playerIcon" src={Ximg} alt="X" />
        ) : data[8] === "O" ? (
          <img className="playerIcon" src={Yimg} alt="Y" />
        ) : (
          ""
        )}
      </div>
      <div id="line1" className="line" style={lineStyle}></div>
      <div id="line2" className="line" style={lineStyle}></div>
      <div id="line3" className="line" style={lineStyle}></div>
      <div id="line4" className="line" style={lineStyle}></div>
    </div>
  );
};

export default Ground;
