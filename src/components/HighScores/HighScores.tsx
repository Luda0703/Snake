import { useState, useEffect, FC } from 'react';

type HighScoresProps = {
  name: string;
  speed: number;
};

export const HighScores: FC<HighScoresProps> = () => {
  const [highScores, setHighScores] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/high-scores')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setHighScores(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Лучшие счета</h2>
      <ul>
        {highScores.map((score, index) => (
          <li key={index}>
            {score.name}: {score.speed} очков
          </li>
        ))}
      </ul>
    </div>
  );
};





