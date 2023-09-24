import React from "react";
import LoadingSticker from "../../assets/images/loading_bitmoji2-min.png";
import "./LoadingScreen.css";

const funnyFacts = [
  "Sea otters hold hands while sleeping to keep from drifting apart!",
  "Honeybees can recognize human faces!",
  "A group of pugs is called a 'grumble'!",
  "The world's largest desert is Antarctica!",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion!",
  "Bananas are naturally radioactive!",
  "Sloths can hold their breath longer than dolphins!",
  "A 'jiffy' is an actual unit of time, equivalent to 1/100th of a second!",
  "A single strand of spaghetti is called a 'spaghetto'!",
  "A day on Venus is longer than a year on Venus!",
  "There are more possible iterations of a game of chess than atoms in the known universe!",
  "Cows have best friends and can become stressed when separated!",
  "Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs!",
  "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body!",
  "A group of flamingos is called a 'flamboyance'!",
  "The unicorn is Scotland's national animal!",
  "In Switzerland, it's illegal to own just one guinea pig because they are prone to loneliness!",
  "Polar bears have black skin to absorb and retain heat from the sun!",
  "The oldest known 'Yo Mama' joke is from ancient Sumeria, dating back to 1900 BC!",
  "The world's largest volcano, Mauna Loa in Hawaii, is still considered active.",
  "A day on Pluto is less than 7 hours and 40 minutes long.",
  "The original name of Bank of America was 'Bank of Italy.'",
  "The electric chair was invented by a dentist.",
  "A day on Mercury is longer than its year.",
  "Cows have a regional accent.",
  "Humpback whales create unique songs that evolve and change over time.",
  "Honey never spoils; pots of honey over 3,000 years old have been found in Egyptian tombs and are still edible.",
  "The Great Wall of China is not visible from space without aid.",
  "Octopuses can solve puzzles, unscrew jars, and even mimic other ocean creatures.",
];

// Generate a random index within the array's length.
const randomIndex = Math.floor(Math.random() * funnyFacts.length);

// Access a random fact using the random index.
const randomFact = funnyFacts[randomIndex];

function LoadingScreen() {
  return (
    <>
      <div className="loading-container">
        <div className="loader-holder">
          <div className="loading_sticker_holder">
            {/* <div className="loading_sticker"> */}
            <img src={LoadingSticker} alt="" />
            {/* </div> */}
          </div>
          <div className="inner-load-holder">
            <span>Fun fact : </span>
            {randomFact}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
