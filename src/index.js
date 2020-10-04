
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let arr=[]
  if (arguments.length==0){
    return arr
  }
  for (let i = 0; i < matrix.length; i++) {
    i%2==0?Array.prototype.push.apply(arr, matrix[i]):Array.prototype.push.apply(arr, matrix[i].reverse())   
    
  }

  return arr
}
