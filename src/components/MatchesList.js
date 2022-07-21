import React from 'react';
// import matches from '../data/matchesData';
// import players from '../data/playersData';
import Match from './Match';

export default function MatchesList(props) {
  const { matches, players, setWinner } = props;
  const newMatchesArr = matches.map((match, index) => {
    const player1Id = match.players[0];
    const player2Id = match.players[1];
    const player1Name = players[`id${player1Id}`].name;
    const player2Name = players[`id${player2Id}`].name;
    const newMatch = { ...match, player1Name, player2Name };
    return <Match key={index} match={newMatch} setWinner={setWinner} />;
  });
  return <section className='MatchList'>{newMatchesArr}</section>;
}
