console.log('Welcome to Gambling Simulation')
var stakeAmount=100;
var game=1
var result =Math.floor(Math.random*2);
var win=1;
var lose=2;
if(result==win)
{
    stakeAmount++;
}
else{
    stakeAmount--;
}
