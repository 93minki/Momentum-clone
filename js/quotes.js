const quotes = [
  {
    quote:
      "Simply put, life without music is a wrong life, a weary life, and a life of exile.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "Simply put, life without music is a wrong life, a weary life, and a life of exile.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "Respecting a strong faith is not proof of a strong faith, but vice versa. If a person has a strong faith, he or she can fall into the luxury of skepticism.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "A person with a personality has a typical experience that is always repeated.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "Common property, a word that contradicts itself. A common thing has no value.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "A man who fights a monster must be careful not to become a monster himself in the fight. If we look into the monster's abyss for a long time, the abyss will also look into us.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "Creation is both a salvation of suffering and a consolation to life. To create, however, requires a lot of change as his own suffering follows.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote: "Philosophy is highly valued by having the public replace religion.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote: "All truths that are silenced become poison.",
    author: " Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "A voyage without wind waves, how monotonous! The more difficult it is, the more my heart beats.",
    author: " Friedrich Wilhelm Nietzsche",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
