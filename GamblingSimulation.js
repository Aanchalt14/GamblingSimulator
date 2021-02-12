console.log('Welcome to Gambling Simulation')
var stakeAmount=100;
var Amount=50;     //amount assign when win or lose
var game=1
var win=1;
var lose=2;
  var result =Math.floor(Math.random()*2)
  if(result==1) 
   {
     stakeAmount=+Amount;
     console.log('WIN :' ,stakeAmount);
    }
 else{
      stakeAmount-=Amount;
      console.log('LOSE:' ,stakeAmount );
    }
