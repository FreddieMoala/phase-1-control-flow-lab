function scuberGreetingForFeet(x){
  if (x <= 400) {
    return "This one is on me!";
  }else if (x > 400 && x < 2000) {
    return "That will be twenty bucks.";
  }else if (x >= 2000 && x < 2500) {
    return "I will gladly take your thirty bucks.";
  }else {
    return "No can do.";
  }
}


function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good.": "No go.";
}
ternaryCheckCity("Pittsburgh");


function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }

}