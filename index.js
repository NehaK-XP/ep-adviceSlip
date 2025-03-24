const adviceButton = document.querySelector("#adviceDisplay");
const deleteButton = document.querySelector("#deleteAdvice");
const adviceCard = document.querySelector('.adviceCard');
const advice = document.querySelector("#advice");
const number = document.querySelector("#number");

adviceCard.style.display = 'none';

adviceButton.addEventListener('click', () => {
    dateAndTime();
})

deleteButton.addEventListener('click', () => {
  if (adviceCard.style.display !== 'none') {
    adviceCard.style.display = 'none';
    adviceButton.style.display = 'inline';
  }

})

tweetButton.addEventListener('click', () => {
  let tweetText = document.getElementById('advice').innerText;
  let tweetURL =`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  document.getElementById('tweetButton').href = tweetURL;
})


const url = 'https://api.adviceslip.com/advice';

/* function clickForAdvice() {
  fetch(url)
  .then(
    response => {
      return response.json(); 
    }
  ).then(
    data => {
      const jsonNumber = data.slip.id;
      const jsonAdvice = data.slip.advice;
      number.innerHTML = jsonNumber;
      advice.innerHTML = `${jsonAdvice}` ;
    }
  )
  .catch(error => console.error(error));
}

adviceButton.addEventListener('click',function(){
  clickForAdvice();
}) */

async function clickForAdvice() {


  try {
    const response = await fetch(url);
    const data = await response.json();

    const jsonNumber = data.slip.id;
    const jsonAdvice = data.slip.advice;
    number.innerHTML = jsonNumber;
    advice.innerHTML = `${jsonAdvice}` ;

    adviceCard.style.display = 'flex';
    adviceButton.style.display = 'none';
  } catch(error) {
    console.error("Error : ", error);
  }
}

adviceButton.addEventListener('click', async function(){
  await clickForAdvice();
})

//time and date

function dateAndTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = String(currentTime.getMinutes()).padStart(2,'0');
  const displayTime = `${hours}:${minutes}`;
  const displayDate = `${currentTime.getDate()}/${currentTime.getMonth()+1}/${currentTime.getFullYear()} `;

  document.getElementById("date").innerHTML = displayDate;
  document.getElementById("time").innerHTML = displayTime;
}

