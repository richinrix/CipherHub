//selectors
const subDisp = document.getElementById("subalpha");
const shiftBtn = document.getElementById("shiftBtn");
const Button = document.getElementById("btn");
const encInput = document.querySelector(".textboxes>.encryptInput>input");
const decInput = document.querySelector(".textboxes>.decryptInput>input");
const clearBtn = document.querySelector(".bttn>.clear");
const reset = document.getElementById("reset");

//original alphabets
const alphabets = "abcdefghijklmnopqrstuvwxyz";
let substitute = alphabets;
let subArray = substitute.split("");
console.log(subArray);

//shifting substitute by one letter
const shifting = () => {
  let temp = substitute[0];

  substitute = substitute.slice(1, 26) + temp;
  subArray = substitute.split("");

  subDisp.innerHTML = substitute;
};

const enc = (message) => {
  this.message = message;
  message = message.replace(/ /g, "~");
  console.log("message", message);
  const messageArray = message.split("");

  let newMssg = "";

  console.log(newMssg);
  messageArray.forEach((char) => {
    if (char === "~") {
      newMssg += " ";
    } else {
      let pos = alphabets.indexOf(char);
      newMssg += substitute[pos];
    }
  });
  encInput.value = newMssg;
  console.log(newMssg);
};

const dec = (message) => {
  this.message = message;
  message = message.replace(/ /g, "~");
  const messageArray = message.split("");

  let newMssg = "";

  console.log(newMssg);
  messageArray.forEach((char) => {
    if (char === "~") {
      newMssg += " ";
    } else {
      let pos = substitute.indexOf(char);
      newMssg += alphabets[pos];
    }
  });
  decInput.value = newMssg;
  console.log("decrypted", newMssg);
};

reset.addEventListener("click", () => {
  substitute = alphabets;
  subDisp.innerHTML = substitute;
});

shiftBtn.addEventListener("click", () => {
  shifting();
});
Button.addEventListener("click", () => {
  enc(encInput.value);
  dec(decInput.value);
});

clearBtn.addEventListener("click", () => {
  $("body").find("input[type='text'],textarea").val("");
});
