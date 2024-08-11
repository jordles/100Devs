/* -------------------------- JAVASCRIPT.INFO TASKS ------------------------- */
console.group('Re-resolve a promise?')
console.log("What's the output of the code below?")
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});
promise.then(alert);
console.log("Answer: We will alert to the screen of the value 1. All other calls of resolve or reject are ignored since only the first call is taken into account")
console.groupEnd();
/* ----------------------------------- --- ---------------------------------- */
console.group('Delay with a promise')
console.log('The built-in function setTimeout uses callbacks. Create a promise-based alternative.The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:')
function delay(ms){
  //your code
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}
delay(3000).then(() => alert('runs after 3 seconds'))
console.groupEnd()
/* ----------------------------------- --- ---------------------------------- */
console.group('Animated circle with promise');
console.log('Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.')
showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});

function showCircle(x, y, r) {
  let div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left = x - r + 'px';
  div.style.top = y - r + 'px';
  div.style.width = 2 * r + 'px';
  div.style.height = 2 * r + 'px';
  div.style.borderRadius = r + 'px';
  div.style.background = 'blue';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
      resolve(div);
    }, 0);
  })
}

console.groupEnd()