import React from 'react';

export default function Match(props) {
  let winnerName;
  let winnerText = (
    <div>
      <h2>No winners yet!</h2>
      <button
        onClick={() => {
          props.setWinner(props.match.id, props.match.players[0]);
        }}
      >
        {props.match.player1Name}
      </button>
      <button
        onClick={() => {
          props.setWinner(props.match.id, props.match.players[1]);
        }}
      >
        {props.match.player2Name}
      </button>
    </div>
  );
  if (props.match.winner !== 0) {
    if (props.match.winner === props.match.players[0]) {
      winnerName = props.match.player1Name;
    } else if (props.match.winner === props.match.players[1]) {
      winnerName = props.match.player2Name;
    }
    winnerText = (
      <h2>
        {winnerName} is the winner by {props.match.scoreDifference}!
      </h2>
    );
  }

  return (
    <article className='Match'>
      <h1>
        {props.match.player1Name} <span>vs</span> {props.match.player2Name}
      </h1>
      {winnerText}
    </article>
  );
}
