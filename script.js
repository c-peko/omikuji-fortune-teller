const fortunes = [
  "大吉 - Excellent luck!",
  "中吉 - Good luck!",
  "小吉 - Little luck!",
  "吉 - Some luck!",
  "末吉 - Slight luck.",
  "凶 - Bad luck.",
  "大凶 - Very bad luck!"
];

document.getElementById("drawBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortuneText = fortunes[randomIndex];
  document.getElementById("fortune").textContent = fortuneText;
});
