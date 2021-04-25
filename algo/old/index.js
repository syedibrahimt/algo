//given an array and a sum find that any pairs in an array sums equal to the target value

function flip(str){
  if(!str || typeof str !== 'string') return "invalid"
  const reverseArray=[];
  for(let i=str.length - 1; i >=0; i--){
    reverseArray.push(str[i]);
  }
  return reverseArray.join("");
}

flip("this is the sample string")