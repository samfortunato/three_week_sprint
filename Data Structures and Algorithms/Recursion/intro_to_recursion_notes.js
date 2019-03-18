function countDown(num) {
  if (num === 0) {
    console.log('Done');
    return;
  }
  
  console.log(num);
  countDown(num - 1);
}
