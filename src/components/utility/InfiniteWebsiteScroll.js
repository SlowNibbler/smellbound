import React, { useEffect, useState } from 'react';

const wordsPerPage = 100; // Number of words per page

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const InfiniteScrollingWebsite = () => {
  const initialWords = Array(200).fill('website');
  const [words, setWords] = useState(initialWords);
  const [wordColors, setWordColors] = useState(Array(wordsPerPage).fill('white'));

  useEffect(() => {
    const interval = setInterval(() => {
      const newWords = [...words, 'website'];

      // Change the color of every 100th word
      const newWordColors = newWords.map((_, index) =>
        (index + 1) % wordsPerPage === 0 ? getRandomColor() : 'white'
      );

      setWords(newWords);
      setWordColors(newWordColors);
    }, 500); // Change word every 0.5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [words]);

  return (
    <div className="infinite-scroll">
      {words.map((word, index) => (
        <span key={index} style={{ color: wordColors[index] }}>
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

export default InfiniteScrollingWebsite;
