let score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        };
        updateScoreElement(); 
        /*if(!score)
    {
        score = {
            wins:0,
            losses:0,
            ties:0
        };
    }*/

        function pickComputerMove()
        {
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber < 1/3 && randomNumber >=0)
    {
       computerMove = 'rock';
    }
    else if(randomNumber < 2/3 && randomNumber >= 1/3)
    {
       computerMove = 'paper';
    }
    else if(randomNumber < 1 && randomNumber >= 2/3)
    {
       computerMove = 'scissor';
    }
    console.log(computerMove);
    return computerMove;
        }
        function playGame(playerMove){
    let computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'rock')
    {
        if(computerMove === 'rock')
    {
        result = 'Tie.';
    }
    else if(computerMove === 'paper')
    {
        result = 'You lose.';
    }
    else if(computerMove === 'scissor')
    {
        result = 'You win.';
    }
    }
    else if(playerMove === 'paper')
    {
      if(computerMove === 'paper')
    {
        result = 'Tie.';
    }
    else if(computerMove === 'scissor')
    {
        result = 'You lose.';
    }
    else if(computerMove === 'rock')
    {
        result = 'You win.';
    }
    }
    else{
        if(computerMove === 'scissor')
    {
        result = 'Tie.';
    }
    else if(computerMove === 'rock')
    {
        result = 'You lose.';
    }                  
    else if(computerMove === 'paper')
    {
        result = 'You win.';
    }
    }
    if(result === 'You win.')
    {
        score.wins +=1;
    }
    else if(result === 'You lose.')
    {
        score.losses +=1;
    }
    else if(result === 'Tie.')
    {
        score.ties +=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
      
    updateScoreElement();
    if(result === 'You win.')
    {
        dimoji = 'grinning-face';
        document.querySelector('.js-result').style.color = 'green';
    }
    else if(result === 'You lose.')
    {
        dimoji = 'disappointed-face';
        document.querySelector('.js-result').style.color = 'red';
    }
    else{
        dimoji = 'neutral-face';
        document.querySelector('.js-result').style.color = 'orange';
    }
    document.querySelector('.js-result').innerHTML = `${result} <img src="images/${dimoji}.png" class="move-icon">`;
    document.querySelector('.js-moves').innerHTML = `you <img src="images/${playerMove}-emoji.png" class="move-icon">
            <img src="images/${computerMove}-emoji.png" class="move-icon"> computer`;
        }
        function updateScoreElement()
        {
            document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},
         Ties: ${score.ties}`;

        }
        let isAutoPlaying = false;
        let intervalId;
        function autoPlay()
        {
          
           if(!isAutoPlaying)
            {
            intervalId = setInterval(function(){
                const playerMove = pickComputerMove();
               playGame(playerMove); 
               isAutoPlaying = true;
            },2000);
          }
            else{
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
    }



