const array1= ['a', 'b', 'c', 'd', 'z'];
const array2= ['u', 'v', 'w', 'x', 'y', 'z'];

function isCommonPresent(a1, a2){
  let found = false;
  a1.forEach((i) => {
    a2.forEach((j) => {
      if(i === j){
        found = true;
      }
    })
  });
  return found;
}

function isCommonPresent2(a1, a2){
  for(let i = 0; i< a1.length; i++) {
   for(let j = 0; j< a2.length; j++) {
    if(a1[i] === a2[j]) return true;
   } 
  }
  return false;
}

function isCommonPresent3(arr1, arr2) {
  let customObj = {};
  let found = false;
  arr1.forEach(item => {
    if(!customObj[item]){
      customObj[item] = true;
    }
  })
  arr2.forEach(item => {
    if(customObj[item]) found = true;
  })
  return found;
}

console.log(isCommonPresent3(array1, array2))