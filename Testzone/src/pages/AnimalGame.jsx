import React, { useState, useEffect } from "react";
import dogImage from '../assets/images/dog.jpg';
import catImage from '../assets/images/cat.png';
import elephantImage from '../assets/images/elephant.png';
import lionImage from '../assets/images/lion.png';
import tigerImage from '../assets/images/tiger.png';
import turtleImage from '../assets/images/turtle.png';
import birdImage from '../assets/images/bird.png';
import giraffeImage from '../assets/images/giraffe.jpg';
import kangarooImage from '../assets/images/kangaroo.png';
import monkeyImage from '../assets/images/monkey.jpg';
import fishImage from '../assets/images/fish.png';
import mouseImage from '../assets/images/mouse.png';

export default function Animals() {
  const allAnimals = [
    {
      name: "Dog",
      value: "dog",
      image: dogImage,
    },
    {
        name: "Cat",
        value: "cat",
        image: catImage,
      },
      {
        name: "Elephant",
        value: "elephant",
        image: elephantImage,
      },
      {
        name: "Lion",
        value: "lion",
        image: lionImage,
      },
      {
        name: "Tiger",
        value: "tiger",
        image: tigerImage,
      },
      {
        name: "Turtle",
        value: "turtle",
        image: turtleImage,
      },
      {
        name: "Bird",
        value: "bird",
        image: birdImage,
      },
      {
        name: "Giraffe",
        value: "giraffe",
        image: giraffeImage,
      },
      {
        name: "Kangaroo",
        value: "kangaroo",
        image: kangarooImage,
      },
      {
        name: "Monkey",
        value: "monkey",
        image: monkeyImage,
      },
      {
        name: "Fish",
        value: "fish",
        image: fishImage,
      },
      {
        name: "Mouse",
        value: "mouse",
        image: mouseImage,
      }
  ];

  const [randomAnimal, setRandomAnimal] = useState('');
  const [message, setMessage] = useState('');
  const [displayAnimals, setDisplayAnimals] = useState([]);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * allAnimals.length);
    setRandomAnimal(allAnimals[randomIndex]);
    setMessage('');

    const availableAnimals = allAnimals.filter(animal => animal.name !== allAnimals[randomIndex].name);
    const shuffledAnimals = shuffleArray(availableAnimals).slice(0, 3); // Selecting 3 random animals
    setDisplayAnimals([...shuffledAnimals, allAnimals[randomIndex]]); // Including the correct animal
  };

  const checkAnimal = (selectedAnimal) => {
    if (selectedAnimal === randomAnimal.name) {
      setMessage('Correct! Generating a new question...');
      setTimeout(() => {
        generateQuestion();
      }, 1500);
    } else {
      setMessage('Wrong! Try again.');
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex, tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }

    return array;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Click on the {randomAnimal.name}!</h2>

      <div className="flex flex-row space-x-4">
        {displayAnimals.map((animal, index) => (
          <div
            key={index}
            className="group relative bg-gray-100 p-1 rounded-md shadow-sm cursor-pointer"
            onClick={() => checkAnimal(animal.name)}
          >
            <div className="aspect-w-2 aspect-h-3 overflow-hidden bg-gray-200 group-hover:opacity-75">
              <img
                src={animal.image}
                alt={`Image of ${animal.name}`}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="mt-1">
              <h3 className="text-xs font-medium text-gray-900"></h3>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4">{message}</p>
    </div>
  );
};
