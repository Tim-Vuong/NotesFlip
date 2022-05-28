// Retrives notes stored in notes
chrome.storage.sync.get(["notes"], (data) => {
  if (data.notes != null) {
    document.querySelector(".notes-box").innerHTML = data.notes;
  }
});

// Generates random heads or tails
let headsCount = 0;
let tailsCount = 0;

document.querySelector("#generate-button").addEventListener("click", function (e) {
    let generated = document.querySelector("#result");
    let flip = Math.floor(Math.random() * 2);
    if (flip == 0) {
      generated.innerHTML = "Heads: " + ++headsCount;
    } else {
      generated.innerHTML = "Tails: " + ++tailsCount;
    }
    generated.style.display = "block";
    e.preventDefault();
  });

// Stores notes in chrome storage
document.querySelector(".notes-box").addEventListener("input", function (e) {
  let textArea = document.querySelector(".notes-box").value;
  chrome.storage.sync.set({ notes: textArea });
  console.log(textArea);
  e.preventDefault();
});
