function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i == 1) {
    array.push("I am 1 strange loop.")
  }
  else { 
    array.push("I am ${i} strange loops.")
  }
}
return array
}

function whileLoop(i) {
  let countdown = i;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    console.log(--countdown);
  } while (array.length > 0 && maybeTrue());
  return array;
}