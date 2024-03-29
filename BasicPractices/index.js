// let num = [1,10,3,4,5];

// function double(x){
//     return x * 2;
// }
// let nuum = []
// // console.log(num.map(double));

// num.forEach(function (x){
//     nuum.push(x**2);
// });

// console.log(nuum);

// let newNum = num.filter(function(x){
//     return x > 3;
// });
// console.log(newNum);

// // where x = accumulator, and y = currentNumber;
// let numSum = num.reduce(function(x,y){
//     return x * y;
// });

// console.log(numSum);

// console.log(num.find(function(x){
//     return x >3;
// }));

// console.log(num.findIndex(function(x){
//     return x>3;
// }));

const emojipedia = [
    {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
      id: 2,
      emoji: "🙏",
      name: "Person With Folded Hands",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
      id: 3,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
      id: 4,
      emoji: "🤓",
      name: "Nerd Face",
      meaning:
        "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
    }
  ];
  

  

// let emojiMean = emojipedia.map(functon(x){
//     return x.meaning.substring(0,100);
// })

// console.log(emojiMean);

// console.log(emojipedia);

let emojiMean = emojipedia.map(function(x){
    return x.meaning.substring(0,100);
});

console.log(emojiMean);