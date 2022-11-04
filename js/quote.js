const quotes = [
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "Money and success don't change people. they merely amplify what is already there.",
        author: "Will Smith"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma. which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    },
    {
        quote: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
        author: "Henry Ford"
    },
    {
        quote: "In order to write about life first you must live it.",
        author: "Ernest Hemingway"
    }
]

chosenQuote = quotes[Math.round(Math.random() * (quotes.length-1))];

const quote = document.querySelector('#quote span:first-child');
const author =document.querySelector('#quote span:last-child');

quote.innerText = chosenQuote["quote"];
author.innerText = chosenQuote["author"];

