import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Food from "./components/Food/Food";
import GameOverBoard from "./components/GameOverBoard/GameOverBoard";
import MouseController from "./components/MouseController/MouseController";
import Snake from "./components/Snake/Snake";
import StartBoard from "./components/StartBoard/StartBoard";
import { ISnake } from "./interfases/ISnake";
import RegisterForm from './components/RegisterForm/RegisterForm';
import { handlePlayerNameSubmit } from "./options"; 

function App() {
  const BOARD_LENGTH = 10;
  const [direction, setDirection] = useState<string>("right");
  const [snake, setSnake] = useState<ISnake[]>([
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ]);

  const [level, setLevel] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(0);
  const [totalSpeed, setTotalSpeed] = useState<number>(0);
  const generateFood = () => {
    const x = Math.floor(Math.random() * BOARD_LENGTH);
    const y = Math.floor(Math.random() * BOARD_LENGTH);
    return { x, y };
  };
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [food, setFood] = useState(generateFood);
  const [isGame, setIsGame] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const startGameHangler = () => {
    setLevel(1);
    setSpeed(0);
    setGameOver(false);
    setFood(generateFood);
    setDirection("right");
    setSnake([
      { x: 1, y: 0 },
      { x: 0, y: 0 },
    ]);
    setIsGame(true);
  };

  const isSnakeChack = (element: ISnake, index: number) => {
    const x = index % BOARD_LENGTH;
    const y = Math.floor(index / BOARD_LENGTH);
    return element.x === x && element.y === y;
  };

  const pressKeyHangler = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          if (direction !== "left") {
            setDirection("right");
          }
          break;
        case "ArrowLeft":
          if (direction !== "right") {
            setDirection("left");
          }
          break;
        case "ArrowUp":
          if (direction !== "down") {
            setDirection("up");
          }
          break;
        case "ArrowDown":
          if (direction !== "up") {
            setDirection("down");
          }
          break;
        default:
          break;
      }
    },
    [direction]
  );

  const snakeMoveHandler = useCallback(() => {
    const newSnake = [...snake];
    const snakeHead = { ...newSnake[0] };

    switch (direction) {
      case "right":
        snakeHead.x + 1 > 9 ? (snakeHead.x = 0) : (snakeHead.x += 1);
        break;
      case "left":
        snakeHead.x - 1 < 0 ? (snakeHead.x = 9) : (snakeHead.x -= 1);
        break;
      case "up":
        snakeHead.y - 1 < 0 ? (snakeHead.y = 9) : (snakeHead.y -= 1);
        break;
      case "down":
        snakeHead.y + 1 > 9 ? (snakeHead.y = 0) : (snakeHead.y += 1);
        break;
      default:
        break;
    }

    newSnake.unshift(snakeHead);
    if (newSnake.length > 1) {
      newSnake.pop();
    }
    setSnake(newSnake);
  }, [snake, direction]);

  useEffect(() => {
    const moveInterval = setInterval(snakeMoveHandler, 700 - level * 50);
    return () => {
      clearInterval(moveInterval);
    };
  }, [snakeMoveHandler, level]);

  useEffect(() => {
    if (snake[0].x === food.x && snake[0].y === food.y) {
      setFood(generateFood());
      setSpeed((prev) => (prev += 10));
      if (snake.length % 5 === 0) {
        if (level < 13) {
          setLevel((prev) => (prev += 1));
          setDirection("right");
          setSnake([
            { x: 1, y: 0 },
            { x: 0, y: 0 },
          ]);
        } else {
          const newSnake = [...snake];
          const tail = { ...newSnake[newSnake.length - 1] };
          newSnake.push(tail);
          setSnake(newSnake);
        }
      } else {
        const newSnake = [...snake];
        const tail = { ...newSnake[newSnake.length - 1] };
        newSnake.push(tail);
        setSnake(newSnake);
      }
    }

    for (let i = 1; i < snake.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        setGameOver(true);
        if (totalSpeed < speed) {
          localStorage.setItem("totalSpeed", JSON.stringify(speed));
          setTotalSpeed(speed);
        }
      }
    }
  }, [food, snake, speed, level, totalSpeed]);

  useEffect(() => {
    document.addEventListener("keydown", pressKeyHangler);
    return () => {
      document.removeEventListener("keydown", pressKeyHangler);
    };
  }, [pressKeyHangler]);

  useEffect(() => {
    const newTotalSpeed = localStorage.getItem("totalSpeed");
    if (!newTotalSpeed) {
      localStorage.setItem("totalSpeed", JSON.stringify(0));
    } else {
      setTotalSpeed(Number(newTotalSpeed));
    }
  }, [totalSpeed]);

  function handlePlayerNameSubmitOn(name: string, surname: string) {
    setName(name);
    setSurname(surname);
    handlePlayerNameSubmit(name, surname);
    console.log(`Имя игрока: ${name} ${surname}`);
    setIsFormSubmitted(true);
  }

  return (
    <div>
    {/* {!isFormSubmitted ? (  */}
      <RegisterForm onSubmit={handlePlayerNameSubmitOn} /> 
    {/* ) : (  */}
      <div className="App">
        <h1 className="text">SNAKE GAME</h1>
        <p className="gamer">Welcome {name} {surname}</p> 
        <section>
          <p className="level-speed">LEVEL: {level}</p>
          <p className="level-speed">SPEED: {speed}</p>
        </section>
        {!isGame ? (
          <StartBoard startFn={startGameHangler} tSpeed={totalSpeed}/>
        ) : (
          <div className="gameBord">
            {!gameOver ? (
              <Food x={food.x} y={food.y} />
            ) : (
              <GameOverBoard startFn={startGameHangler} tSpeed={totalSpeed}/>
            )}
            {!gameOver &&
              Array.from({ length: BOARD_LENGTH * BOARD_LENGTH }, (_, i) => (
                <div key={i} className="item">
                  {snake.some((element) => isSnakeChack(element, i)) && (
                    <Snake
                      isHead={isSnakeChack(snake[0], i)}
                      direction={direction}
                    />
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
      <MouseController direction={direction} setDirection={setDirection} />
   {/* )}  */}
    </div>
  )
}

export default App
