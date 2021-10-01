function findEvenNum () {
  const evenNum = [];
  for(let i=0; i<=50; i++){
    if(i%2==0){
      evenNum.push(i);
    }
  }
  return evenNum;
}
findEvenNum();
