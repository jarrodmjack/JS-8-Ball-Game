







// event listener for activate button
const activateBall = document.querySelector('.activateBall').addEventListener('click', activateEightBall)

// FUNCTION START
function activateEightBall(){

  
// saving a random number to this variable
let randomNumber = Math.floor(Math.random() * 8);

// // creating the eightball
// let eightBall = '';

switch (eightBall = randomNumber){
  case 0:
  document.querySelector('#eightBallSays').innerText = '8 Ball Says: It is certain';
  break;
  case 1:
    document.querySelector('#eightBallSays').innerText = '8 Ball Says: It is decidedly so';
  break;
  case 2:
    document.querySelector('#eightBallSays').innerText = '8 Ball Says: Reply hazy try again';
  break;
  case 3:
    document.querySelector('#eightBallSays').innerText = '8 Ball Says: Cannot predict now';
  break;
  case 4:
    document.querySelector('#eightBallSays').innerText = '8 Ball Says: Do not count on it';
  break;
  case 5:
    document.querySelector('#eightBallSays').innerText = '8 Ball Says: My sources say no';
  break;
  case 6:
    document.querySelector('#eightBallSays').innerText = '8 Ball Says: Outlook not so good';
  break;
  default:
    document.querySelector('#eightBallSays').innerText = '8 Ball Says: Signs point to yes';
  break;
}

  // getting value from inputs
  let userName = document.getElementById('userName').value;
  let userAsks = document.getElementById('question').value;
  
// ternary for username. Did they enter a name? If so, use the name entered, if not, leave it blank

  if(userName === '' && userAsks === ''){
    document.querySelector('#userAsks').innerText = '';
    document.querySelector('#eightBallSays').innerText = '';
  }else{
    userName ? document.querySelector('#userAsks').innerText = `${userName} asks: ${userAsks}` : document.querySelector('#userAsks').innerText = `User asks: ${userAsks}`
  }


}

activateEightBall()
