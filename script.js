const time = document.getElementById("delay");
const message = document.getElementById("text");
const output = document.getElementById("output");

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message.value);
    }, Number(time.value));
  });
}

async function handlepromise(e) {
  e.preventDefault();

  let data;
  try {
    data = await promise1();
  } catch (e) {
    console.log("error", e);
  }

  if (data) {
    output.innerText = data;
  }
}

document.getElementById("btn").addEventListener("click", handlepromise);
