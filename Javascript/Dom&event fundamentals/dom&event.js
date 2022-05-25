/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "❤ correct number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 5;
*/

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.getElementsByClassName('number')[0].textContent=number;
//document.querySelector(".number").textContent = number;
console.log(document.querySelector('.number'))
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  //document.querySelector(".message").textContent = "👍correct Number";
  const guess = Number(document.querySelector(".guess").value);
  //when ther is no input
  if (!guess) {
    document.getElementsByClassName(".message").textContent = "👎No number";

    //document.querySelector("body").style.backgroundColor = "#60b347";
  }

  //when player wins
  else if (guess === number) {
    document.querySelector(".message").textContent = "👍correct number";
    document.querySelector(".number").textContent = number;
  }
  //when guess is tooo high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost  the game";
    }
  }
  //when guess is low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "yo =u lost the game";
    }
  }
});
