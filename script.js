const fortunes = [
  "大吉 - Excellent luck!</br>Your wishes will come true!",
  "中吉 - Good luck!</br>Keep working hard for your wishes to come true!",
  "小吉 - Little luck!</br>Luck is on your side! Don't give up your wishes!",
  "吉 - Some luck!</br>Don't hesitate to get help from others;)",
  "末吉 - Slight luck.</br>Though it may take time, your dreams will come true - Patience is the key.",
  "凶 - Bad luck.</br>Always have a plan B!",
  "大凶 - Very bad luck!"
];

document.getElementById("drawBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortuneText = fortunes[randomIndex];
  document.getElementById("fortune").innerHTML = fortuneText;
});
