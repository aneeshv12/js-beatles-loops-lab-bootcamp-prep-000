// add solution here
function theBeatlesPlay(musicians,instruments){
  var empty = [];
  for(var i = 0;i<musicians.length;i++){
      empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    facts[i] = facts[i] + "!!!";
    i +=1;
  }
  return facts;
}
