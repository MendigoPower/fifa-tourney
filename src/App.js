import { useState } from 'react';
import './App.css';
import MatchesList from './components/MatchesList';
import PlayersList from './components/PlayersList';
import players from './data/playersData';
import matches from './data/matchesData';

function App() {
  const [playersData, setPlayersData] = useState(players);
  const [matchesData, setMatchesData] = useState(matches);
  const setWinner = (matchId, winnerId) => {
    const newMatchesData = [...matchesData];
    const matchFound = newMatchesData.find((match) => match.id === matchId);
    const newMatch = { ...matchFound, winner: winnerId };
    const updatedMatchesData = newMatchesData.map((match) => {
      if (match.id === matchId) {
        return newMatch;
      }
      return match;
    });
    setMatchesData(updatedMatchesData);
  };
  return (
    <div className='App'>
      <h1>Fifa Tourney</h1>
      <main>
        <PlayersList players={playersData} matches={matchesData} />
        <MatchesList
          players={playersData}
          matches={matchesData}
          setWinner={setWinner}
        />
      </main>
    </div>
  );
}

export default App;
