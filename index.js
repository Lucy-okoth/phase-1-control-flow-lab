function scuberGreetingForFeet(ride){
if (ride <= 400){
  return 'This one is on me!'
}
else if (ride > 2000 && ride<=2500){
  return 'I will gladly take your thirty bucks.'
}
else return 'No can do.'
}
  // Write your code here!
  scuberGreetingForFeet(2501)
  function ternaryCheckCity(city){
    return (city === 'NYC'? 'Ok, sounds good.':'No go.')
  }
  console.log(ternaryCheckCity('NYC'));

 
 /*
 function scuberGreetingForFeet(distance){
  let charges;
 }
 */

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
      case 'not as generous':
      return 'Thank you.';
      default:
        return 'Bye.';
  }
}
