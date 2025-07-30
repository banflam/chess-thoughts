type Quote = {
  text: string;
  author: string;
};

const quotes: Quote[] = [
  {
    text: "Real total restraint, which reigns over whole stretches of the board and which gives your opponent breathing difficulties, is only possible when that opponent is suffering from the disadvantage of doubled pawns.",
    author: "Aron Nimzowitsch",
  },
  {
    text: "They say my chess games should be more interesting. I could be more interesting — and also lose.",
    author: "Tigran Petrosian",
  },
  {
    text: "Some consider that when I play I am excessively cautious, but it seems to me that the question may be a different one. I try to avoid chance. Those who rely on chance should play cards or roulette. Chess is something quite different.",
    author: "Tigran Petrosian",
  },
  {
    text: "Chess never has been and never can be aught but a recreation. It should not be indulged in to the detriment of other and more serious avocations.",
    author: "Paul Morphy",
  },
  {
    text: "In my opinion, the King's Gambit is busted. It loses by force.",
    author: "Bobby Fischer",
  },
  {
    text: "Chess is simply a medium through which concentration and a higher state of mind is achieved... it is like contemplating your navel, only better.",
    author: "Jon Speelman",
  },
  {
    text: "Alekhine is a poet who creates a work of art out of something that would hardly inspire another man to send home a picture post card.",
    author: "Max Euwe",
  },
  {
    text: "The fact that a player is very short of time is, to my mind, as little to be considered as an excuse as, for instance, the statement of the law-breaker that he was drunk at the moment he committed the crime.",
    author: "Alexander Alekhine",
  },
  {
    text: "During a chess competition a chess master should be a combination of a beast of prey and a monk.",
    author: "Alexander Alekhine",
  },
  {
    text: "It has been truly said that Morphy was at once the Caesar and the Napoleon of chess. He revolutionized chess. He brought life and dash and beauty into the game at a time when an age of dullness was about to set in and he did this at a stroke. Then he quit forever. Only two years from the beginning to the end. The negotiations for some modern matches have taken that long!",
    author: "JA Galbreath",
  },
  {
    text: "A thorough understanding of the typical mating continuations makes the most complicated sacrificial combinations leading up to them not only not difficult, but almost a matter of course.",
    author: "Siegbert Tarrasch",
  },

  {
    text: "Personally, I rather look forward to a computer program winning the world Chess Championship. Humanity needs a lesson in humility.",
    author: "Richard Dawkings",
  },

  {
    text: "Chess is a foolish expedient for making idle people believe they are doing something very clever when they are only wasting their time.",
    author: "George Bernard Shaw",
  },

  {
    text: "Mistrust is the most necessary characteristic of the chess player.",
    author: "Siegbert Tarrasch",
  },

  {
    text: "All Chess players should have a hobby.",
    author: "Savielly Tartakower",
  },

  {
    text: "It is the aim of the modern school, not to treat every position according to one general law, but according to the principle inherent in the position",
    author: "Richard Reti",
  },

  {
    text: "The only thing chess players have in common is chess.",
    author: "Lodewijk Prins",
  },

  {
    text: "We must make sure that Chess will not be like a dead language, very interesting, but for a very small group.",
    author: "Sytze Faber",
  },

  {
    text: "Modern Chess is too much concerned with things like Pawn structure. Forget it, Checkmate ends the game.",
    author: "Nigel Short",
  },

  {
    text: "The ability to play chess is the sign of a gentleman. The ability to play chess well is the sign of a wasted life.",
    author: "Paul Morphy",
  },

  {
    text: "Chess is a struggle between my desire not to think and my desire not to lose.",
    author: "Jan Gustafsson",
  },

  {
    text: "You must take your opponent into a deep, dark forest where 2+2 is 5 and the path leading out is only wide enough for one.",
    author: "Mikhail Tal",
  },

  {
    text: "Play the opening like a book, the middle game like a magician, and the endgame like a machine.",
    author: "Rudolf Spielmann",
  },

  { text: "Chess demands total concentration.", author: "Bobby Fischer" },

  { text: "Pawns are the soul of chess.", author: "Philidor" },

  {
    text: "All I want to do, ever, is just play chess.",
    author: "Bobby Fischer",
  },

  {
    text: "Adequate compensation for a sacrifice is having a sound combination leading to a winning position; adequate compensation for a blunder is having your opponent snatch defeat from the jaws of victory.",
    author: "Bruce A. Moon",
  },

  {
    text: "Only the player with the initiative has the right to attack.",
    author: "Wilhelm Steinitz",
  },

  {
    text: "I like the moment when I break a man’s ego.",
    author: "Bobby Fischer",
  },

  {
    text: "I got locked up when I was living in Maryland, selling drugs and stuff. But that doesn't mean that the game was over. That's how I equate chess with life.",
    author: "Marcel Anderson, chess hustler",
  },

  {
    text: "My girlfriend said, ‘It’s either me or the chess pieces, Marcel.’... I looked at my chess pieces, I looked at her again. And the more I'm looking at her, the more I can see how toxic she is. The more I look at my chess pieces, I can see lots of solitude. I say, “You know what? I'll talk to you later.” I picked up my pieces, I left.",
    author: "Marcel Anderson, chess hustler",
  },

  {
    text: "I threw my phone off the Brooklyn Bridge. You need to give the game your full attention.",
    author: "Ambakisye Osayaba, chess hustler",
  },

  {
    text: "Alekhine is a poet who creates a work of art out of something that would hardly inspire another man to send home a picture post card.",
    author: "Max Euwe",
  },

  {
    text: "During a chess competition a Chessmaster should be a combination of a beast of prey and a monk.",
    author: "Alexander Alekhine",
  },

  { text: "Chess is above all, a fight!", author: "Emmanuel Lasker" },

  {
    text: "The passed Pawn is a criminal, who should be kept under lock and key. Mild measures, such as police surveillance, are not sufficient.",
    author: "Aaron Nimzovich",
  },

  { text: "Life is too short for chess.", author: "Henry James Byron" },

  {
    text: "Let the chessboard supercede the card table, and a great improvement will be visible in the morals of the community.",
    author: "Paul Morphy",
  },

  {
    text: "My life was in crisis. All my values were becoming meaningless. I was discovering that my chosen profession was empty, foolish, as useless as—as playing chess.",
    author: "Robert Silverberg",
  },

  {
    text: "Shall we play Bezique? Or Nightjack? I’ve cards, or chess if you prefer, but I’ve always found chess to be a bit too much like real life to provide much enjoyment as a game.",
    author: "Catherynne M. Valente",
  },

  { text: "I’d rather have a pawn than a finger.", author: "Reuben Fine" },
  { text: "When in doubt, play chess.", author: "Michael Tevis" },
  {
    text: "The winner of the game is the person who makes the next-to-last mistake.",
    author: "Savielly Tartakower",
  },
  {
    text: "The mistakes are all there waiting to be made.",
    author: "Savielly Tartakower",
  },
  {
    text: "No price is too great for the scalp of the enemy King.",
    author: "Alexander Koblencs",
  },
  {
    text: "The threat is stronger than the execution.",
    author: "Aron Nimzowitsch",
  },
  {
    text: "I found that I was frequently underestimating the bishop pair as a long-term asset.",
    author: "Sam Shankland",
  },
  {
    text: "Even the laziest King flees wildly in the face of a double check!",
    author: "Aron Nimzowitsch",
  },
  {
    text: "A win by an unsound combination, however showy, fills me with artistic horror.",
    author: "Wilhelm Steinitz",
  },
  {
    text: "One doesn't have to play well, it's enough to play better than your opponent.",
    author: "Siegbert Tarrasch",
  },
  {
    text: "You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.",
    author: "Mikhail Tal",
  },

  {
    text: "It is to Petrosian's advantage that his opponents never know when he is suddenly going to play like Mikhail Tal.",
    author: "Boris Spassky",
  },

  {
    text: "Tactics is knowing what to do when there is something to do. Strategy is knowing what to do when there is nothing to do.",
    author: "Savielly Tartakower",
  },

  {
    text: "The move is there, but you must see it.",
    author: "Savielly Tartakower",
  },

  {
    text: "That which has reached us from the discoveries of their clear thinking and the marvels of their inventions is the (game) of chess. The Indians have, in the construction of its cells, its double numbers, its symbols and secrets, reached the forefront of knowledge.",
    author: "Said al-Andalusi",
  },

  {
    text: "It is eminently and emphatically the philosopher's game.",
    author: "Paul Morphy",
  },

  {
    text: "The checkmate is the 'knockout' of chess.",
    author: "Bobby Fischer",
  },

  {
    text: "Chess games are being played everywhere -- on benches and tables in the park, at Chess clubs, YMCAs, high schools, colleges, army posts, prisons. Even by mail. You shouldn't have any trouble getting a game.",
    author: "Bobby Fischer",
  },

  { text: "A good player is always lucky.", author: "Jose Capablanca" },

  {
    text: "It doesn’t matter how strong a player you are, if you fail to register some development in the opening, then you are asking for trouble.",
    author: "John Emms",
  },

  {
    text: "For in the idea of chess and the development of the chess mind we have a picture of the intellectual struggle of mankind.",
    author: "Richard Réti",
  },

  {
    text: "In chess, as a purely intellectual game, where randomness is excluded, - for someone to play against himself is absurd ... It is as paradoxical, as attempting to jump over his own shadow.",
    author: "Stephan Zweig",
  },
];

export default quotes;
