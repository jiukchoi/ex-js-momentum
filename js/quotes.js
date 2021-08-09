const quotes = [
  {
    quote: "\"삶이 있는 한 희망은 있다.\"",
    author: "-  키케로"
  },
  {
    quote: "\"산다는 것 그것은 치열한 전투이다.\"",
    author: "- 로망 로랑"
  },
  {
    quote: "\"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.\"",
    author: "- 사무엘 존슨"
  },
  {
    quote: "\"언제나 현재에 집중할 수 있다면 행복할 것이다.\"",
    author: "- 파울로 코엘료"
  },
  {
    quote: "\"진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해.\"",
    author: "- 찰리 채플린"
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
