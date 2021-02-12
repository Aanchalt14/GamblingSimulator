var readlineSync=require('readline-sync');
console.log('Welcome to Gambling Simulation')
var stakeAmount=100;
var Amount=50;     //amount assign when win or lose
var game=1
var win=0;
var lose=0;
var totalAmount=0;
for(let m=1;m<=12;m++){
  var ch = readlineSync.question("Would you like to continue for next month : 1.YES   2.NO");
  if(ch==1){
    for(let i=1;i<=20;i++){
     var result =Math.floor(Math.random()*2)
  
    if(result==1) 
   {
     stakeAmount=+Amount;
     console.log('WIN :' ,stakeAmount );
     win++;
     console.log('Number of win',win);
    }
   else{
      stakeAmount-=Amount;
      console.log('LOSE:' ,stakeAmount );
      lose++;
      console.log('Number of lose',lose);
    
    }
    totalAmount+=stakeAmount;
    console.log('Total Amount is :',totalAmount)
  }
} 
 else 
   console.log("Exit")  
}
