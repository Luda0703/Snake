
export function handlePlayerNameSubmit(name: string) {
  fetch('http://localhost:8080/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Имя игрока успешно отправлено на сервер');       
      } else {
        console.error('Не удалось отправить имя игрока на сервер');
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке имени игрока:', error);
    });
}


export interface GameData {
  snakeCoordinates: [number, number][];
  foodPosition: [number, number];
}

export const sendGameResult = async (name: string, speed: number) => {
  try {
    const response = await fetch('http://localhost:8080/api/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, speed }),
    });

    if (response.ok) {
      console.log('Результат игры отправлен на сервер');
    } else {
      console.error('Не удалось отправить результат игры');
    }
  } catch (error) {
    console.error('Ошибка при отправке результатов игры:', error);
  }
};


// export interface HighScore {
//   playerName: string;
//   score: number;
// }

// export const getHighScores = async (): Promise<HighScore[]> => {
//   try {
//     const response = await fetch('/api/high-scores');
//     if (response.ok) {
//       const highScores: HighScore[] = await response.json();
//       return highScores;
//     } else {
//       console.error('Не удалось получить список рекордов');
//       return [];
//     }
//   } catch (error) {
//     console.error('Ошибка при получении списка рекордов:', error);
//     return [];
//   }
// };

