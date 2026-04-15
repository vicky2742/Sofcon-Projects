let input = document.querySelector("#inputTxt");
let btn = document.querySelector("#searchBtn");
let msg = document.querySelector(".meaning");

btn.addEventListener("click", async () => {
  let search = input.value;

  console.log(search);
  console.log("clicked");

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    msg.innerText = data[0].meanings[0].definitions[0].definition;
    document.querySelector(".word").innerText = data[0].word;

  } catch (error) {
    console.log("Error:", error);
    msg.innerText = "Word not found";
  }
});
