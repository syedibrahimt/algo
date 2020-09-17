//given an array and a sum find that any pairs in an array sums equal to the target value

const array = [1,2,3,4,5,6,7,8];

function findPairs(arr, target){ // bruteforce/ naive approach
  let isAvailable = false;
  for(let i=0; i< arr.length -1; i++){
    for(let j=0; j< arr.length; j++){
      if(arr[i]+ arr[j] === target) {
        isAvailable = true;
      }
    }
  }
  return isAvailable;
}

function findPairs2(arr, target){
  let isAvailable = false;
  let complementSet = new Set();
  arr.forEach(item => {
    if(complementSet.has(item)) {
      isAvailable = true;
    }
    complementSet.add(target - item)
  })
  return isAvailable
}


console.log(findPairs2(array, 15))