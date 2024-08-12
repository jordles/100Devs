/* -------------------------- JAVASCRIPT.INFO TASKS ------------------------- */

/* -------------------------------- PROMISES -------------------------------- */
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
      div.style.width = r * 2 + 'px';
      div.style.height = r * 2 + 'px';
      resolve(div);
    }, 0);
  })
}

console.groupEnd()


/* ---------------------------- PROMISE CHAINING ---------------------------- */

//testing for lessons
/* fetch(`https://api.github.com/users/iliakan`)
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then(githubUser => {
    console.log(githubUser);
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove()
      alert('This is gonna be removed')
    }, 3000); // (*)
  }) */

  console.group('Promise: Then Verses Catch')
  console.log('Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?')
  console.log('promise.then(f1).catch(f2)');
  console.log('promise.then(f1,f2)');
  console.log('They are not the same, because they do not behave the same way for the error handling. Both functions will response to how the promise is fulfilled. However the difference is when the promise is rejected in the then() handler, because the second function needs another then or catch function to handle the latter rejection. The f2 on the second function is meant to handle the rejection of the first promise itself not the rejection of then() handler.');
  console.groupEnd()

  console.group('Error in setTimeout')
  console.log('What do you think? Will the .catch trigger? Explain your answer.')
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);
  console.log('The catch will not trigger as setTimeout is async but the promise itself is not. Since the code is done running, the catch cannot be triggered by the time it throws an error. Promise do however return an async function at the end');
  console.groupEnd();