const windowWidth = window.innerWidth;

const inputText = document.getElementById("textarea");
const outputText = document.getElementById("output");

const copyBtn = document.getElementById("copy__btn");

const resultOutput = document.getElementById("resultOutput");
const notResultOutput = document.getElementById("notResultOutput");

const toggledOutput = () => {
  if (inputText.value === "") {
    resultOutput.classList.add("none");
    notResultOutput.classList.remove("none");
  } else {
    resultOutput.classList.remove("none");
    notResultOutput.classList.add("none");
  }
};

const encrypt = () => {
  toggledOutput();

  let textArr = inputText.value.split("");
  let newArr = [];

  for (let letter of textArr) {
    switch (letter) {
      case "a":
        letter = "ai";
        break;
      case "e":
        letter = "enter";
        break;
      case "i":
        letter = "imes";
        break;
      case "o":
        letter = "ober";
        break;
      case "u":
        letter = "ufat";
        break;

      default:
        break;
    }

    newArr.push(letter);
  }

  let formatedText = newArr.join("");
  outputText.innerHTML = formatedText;
};

const decrypt = () => {
  toggledOutput();

  let textInput = inputText.value;
  let textOutput = "";

  textOutput = textInput.replace(/ai/g, "a");
  textOutput = textOutput.replace(/enter/g, "e");
  textOutput = textOutput.replace(/imes/g, "i");
  textOutput = textOutput.replace(/ober/g, "o");
  textOutput = textOutput.replace(/ufat/g, "u");

  outputText.innerHTML = textOutput;
};

const copy = () => {
  const textToCopy = outputText.innerHTML;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      copyBtn.innerHTML = "Copiado com sucesso!";
    })
    .catch(() => {
      copyBtn.innerHTML = "Erro ao copiar!";
    });
};
