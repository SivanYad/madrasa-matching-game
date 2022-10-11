import { useMemo } from 'react';
import { useState, useEffect } from 'react';
import text1CardsData from '../src/data/WordsData';
import CardItem from './components/CardItem';
import './App.css';

function getRandomWords(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffleSlice(cards, count) {
  const data = [...cards];
  const shuffledCards = [];

  for (let i = 0; i < count; i++) {
    const wordIdx = getRandomWords(0, data.length);

    const newData = Object.values(data[wordIdx]).map((word, idx, array) => {
      if (idx % 2 === 0) {
        return {
          word,
          flipped: false,
          matched: false,
          matchingWord: array[idx + 1],
        };
      } else {
        return {
          word,
          flipped: false,
          matched: false,
          matchingWord: array[idx - 1],
        };
      }
    });
    shuffledCards.push(...newData);
    data.splice(wordIdx, 1);
  }
  // console.log(shuffledCards)
  return shuffledCards;
}

function App() {
  //States declarations
  const [points, setPoints] = useState(0);
  const [wordsCount, setWordsCount] = useState(6);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [cards, setCards] = useState(() => {
    const initialState = shuffleSlice(text1CardsData, wordsCount);
    return initialState;
  });

  //Handle choice
  const handleChoice = (card) => {
    // choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    if (choiceOne) {
      console.log('CARD', card);
      setChoiceTwo(card);
      // console.log('Choice **ONE**', choiceOne, 'Choice **TWO**', choiceTwo,)
    } else {
      setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.word === choiceTwo.matchingWord) {
        console.log('matched');
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (
              card.word === choiceOne.matchingWord ||
              card.word === choiceTwo.matchingWord
            ) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setPoints(points + 10)
        setTimeout(() => resetTurn(), 1000);
      } else {
        setPoints(points - 5)
        console.log('not matched');
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, points]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false)
  };

  const checkVictory = () => {
    const cardsNum  = wordsCount * 2
    const matchedCards =  cards.filter((card) => card.matched === true)
    if (matchedCards.length === cardsNum) {
      return (
        'victory'
      )
    } else {
      return 'hide'
    }
  }

  return (
    <div className='App'>
      <h1> מדרסה משחק זיכרון </h1>
      <h1 className={checkVictory()}>ניצחון! فوز פַוְז</h1>
      <h2>ניקוד: {points}</h2>
      <div className='card-grid'>
        {cards.map((card, idx) => (
          <CardItem handleChoice={handleChoice} key={idx} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;

function useCountdown(from, timeInterval) {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (current === 0) {
      return;
    }

    const id = setTimeout(() => {
      setCurrent(current - 1);
    }, timeInterval);

    return () => {
      clearTimeout(id);
    };
  }, [current, timeInterval]);

  return current;
}
