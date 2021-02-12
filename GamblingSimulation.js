console.log('Welcome to Gambling Simulation')
var stakeAmount=100;
var Amount=50;     //amount assign when win or lose
var game=1
var win=1;
var lose=2;
var totalAmount=0;
for(let i=1;i<=20;i++){
  var result =Math.floor(Math.random()*2)
  console.log(result)
  if(result==1) 
   {
     stakeAmount=+Amount;
     console.log('WIN :' ,stakeAmount );
    }
 else{
      stakeAmount-=Amount;
      console.log('LOSE:' ,stakeAmount );
    
    }
    totalAmount+=stakeAmount;
    console.log('Total Amount is :',totalAmount)
}
