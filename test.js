function asyncForEach(array , cb){
  array.forEach(function(i){
    setTimeout(()=>{cb(i)} , 0)
  })
}


asyncForEach([1,2,3,4,5] , function(i){
  console.log(i)
})
