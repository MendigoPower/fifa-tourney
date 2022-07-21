import React from 'react';
import Player from './Player';

export default function PlayersList(props) {
  //const players = props.players
  //const matches = props.matches
  const { players, matches } = props;
  const newPlayersObj = {};
  Object.values(players).forEach((player) => {
    const newPlayer = { ...player };
    newPlayer.wins = 0;
    newPlayersObj[`id${player.id}`] = newPlayer;
  });
  matches.forEach((match) => {
    if (match.winner !== 0) {
      let winnerPlayer;
      // if winner player is in new players obj
      if (newPlayersObj[`id${match.winner}`]) {
        // get player obj from newPlayersObj
        winnerPlayer = { ...newPlayersObj[`id${match.winner}`] };
      } else {
        // if not, get player from original data
        winnerPlayer = { ...players[`id${match.winner}`] };
      }
      // if winner player has not wins property
      if (!winnerPlayer.wins) {
        // add wins = 1
        winnerPlayer.wins = 1;
      } else {
        // add 1 more win
        winnerPlayer.wins++;
      }
      // assign winner player obj into newPlayersObj
      newPlayersObj[`id${match.winner}`] = { ...winnerPlayer };
    }
  });
  const playersArr = Object.values(newPlayersObj).map((player, index) => {
    return <Player key={index} player={player} />;
  });
  return (
    <section className='PlayerList'>
      <h1>Current participant players</h1>
      {playersArr}
    </section>
  );
}
