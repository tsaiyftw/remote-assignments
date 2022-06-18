function binarySearchPosition(numbers, target) {
   let lt = 0, rt = numbers.length - 1, mid = (lt + rt) / 2 ; 
   while (lt <= rt) {
      mid = (lt + rt) >> 1; 
      if (target == numbers[mid]) {
         return mid
      }
      else if (target < numbers[mid]) {
         rt = mid -1
      }
      else {
         lt = mid + 1
      }
   }
    
   }
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); 
// should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); 
// should print 3