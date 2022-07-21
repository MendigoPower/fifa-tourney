import React from 'react';

export default function Player(props) {
  let winText;
  if (!props.player.wins) {
    winText = <h2>Currently with no wins!</h2>;
  } else if (props.player.wins === 1) {
    winText = <h2>Currently at 1 win!</h2>;
  } else {
    winText = <h2>Currently at {props.player.wins} wins!</h2>;
  }
  return (
    <article className='Player'>
      <h1>
        {props.player.name}
        <span> {props.player.team} </span>
      </h1>
      {winText}
    </article>
  );
}
