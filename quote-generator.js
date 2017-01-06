//Random Quote Generator

/* Array to hold quotes */
var quotes = [
"If you have everything under control, you\’re not moving fast enough. - Mario Andretti",
"Leadership is service, not position. - Tim Fargo",
"You are not your resume; you are your work. – Seth Godin",
"One finds limits by pushing them. – Herbert Simon",
"What you do, who you\’re with, and how you feel about the world around you is completely up to you. – Mike Rowe",
"If you see a bandwagon, it\’s too late. – James Goldsmith",
"There\’s no shortage of remarkable ideas; what\’s missing is the will to execute them. – Seth Godin",
"Far and away, the best prize that life offers is the chance to work hard at work worth doing. – Theodore Roosevelt",
"Change is not a threat; it\’s an opportunity. Survival is not the goal; transformative success is. – Seth Godin",
"Even if you are on the right track, you\’ll get run over if you just sit there. – Will Rogers",
"Yesterday\’s home runs don\’t win today\’s games. – Babe Ruth",
"You miss 100 percent of the shots you don\’t take. – Wayne Gretzky",
"Winning is habit. Unfortunately, so is losing. – Vince Lombardi",
"All good businesses are personal. The best businesses are very personal. – Mark Cuban",
"Opportunity is missed by most people because it is dressed in overalls and looks like work. – Thomas Edison",
"Leadership is doing what is right when no one is watching. – George Van Valkenburg",
"Those who say it cannot be done should not interrupt those doing it. – Chinese Proverb",
"To succeed in business, to reach the top, an individual must know all it is possible to know about that business. – J. Paul Getty",
"I can\’t change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
"I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
"Control your own destiny or someone else will. - Jack Welch",
"I don\’t know how anybody gets better at anything aside from doing it. - David Duchovny",
"Business is a sprint until you find an opportunity; then, it\’s the patience of a marathon runner. - Robert Herjavec",
"When you\’ve got 10,000 people trying to do the same thing, why would you want to be number 10,001? - Mark Cuban",
"Most brands started from a strong base and kept a strong belief. - Daymond John",
"When you shake somebody\’s hand, it\’s got to mean something. - Marcus Lemonis",
"Things work out best for those who make the best of how things work out. - John Wooden",
"You don\’t quit because you happen to be behind. You want to see how you do. Maybe somebody will stumble. - Ron Paul",
"Opportunities don\’t happen; you create them. - Chris Grosser",
"You must either modify your dreams or magnify your skills. – Jim Rohn",
"To be successful, you have to have your heart in your business, and your business in your heart. – Sr. Thomas Watson",
"Success is often achieved by those who don\’t know that failure is inevitable. – Coco Chanel",
"The successful man is the one who finds out what is the matter with his business before his competitors do. – Roy L. Smith"
]


/* Use the Math.random() function to generate a random number, which will,
in effect, be the position of a particular quote within the array. To ensure
that the number generated does not go outside the scope of the array, multiply
it by the array's length. */
function newQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

/* Tweet out the quote and add the hashtag #quote */
function tweetIt () {
  var phrase = document.getElementById('quoteDisplay').innerText + " #quote";
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase);
  window.open(tweetUrl);
}
