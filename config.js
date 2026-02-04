<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Will You Be My Valentine? 💝</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    :root {
      --bg-start: #ffafbd;
      --bg-end: #ffc3a0;
      --btn-bg: #ff6b6b;
      --btn-hover: #ff8787;
      --text-color: #ff4757;
    }

    * {
      box-sizing: border-box;
      font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont;
    }

    body {
      margin: 0;
      height: 100vh;
      overflow: hidden;
      background: linear-gradient(135deg, var(--bg-start), var(--bg-end));
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
    }

    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.25);
      padding: 40px 30px;
      border-radius: 24px;
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    h1 {
      font-size: 2.2rem;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.3rem;
      margin-bottom: 30px;
      font-weight: 500;
    }

    .buttons {
      position: relative;
      height: 120px;
    }

    button {
      border: none;
      padding: 14px 32px;
      font-size: 1.1rem;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.25s ease;
      position: absolute;
    }

    #yesBtn {
      background: var(--btn-bg);
      color: white;
      left: 50%;
      transform: translateX(-120%);
    }

    #yesBtn:hover {
      background: var(--btn-hover);
      transform: translateX(-120%) scale(1.05);
    }

    #noBtn {
      background: white;
      color: var(--btn-bg);
      border: 2px solid var(--btn-bg);
      left: 50%;
      transform: translateX(20%);
    }

    .floating-emoji {
      position: absolute;
      bottom: -50px;
      font-size: 24px;
      animation: floatUp linear infinite;
      opacity: 0.8;
      pointer-events: none;
    }

    @keyframes floatUp {
      from {
        transform: translateY(0) translateX(0);
        opacity: 1;
      }
      to {
        transform: translateY(-110vh) translateX(var(--float-x));
        opacity: 0;
      }
    }

    .love-message {
      font-size: 1.5rem;
      margin-top: 20px;
      animation: pop 0.6s ease forwards;
    }

    @keyframes pop {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Hey Divyanshu 💖</h1>
    <h2>Will you be my Valentine?</h2>

    <div class="buttons">
      <button id="yesBtn">Yes 💘</button>
      <button id="noBtn">No 🙈</button>
    </div>

    <div id="result"></div>
  </div>

  <script>
    // ============================================
    // 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
    // ============================================

    const CONFIG = {
      valentineName: "Divyanshu",
      pageTitle: "Will You Be My Valentine? 💝",
      floatingEmojis: {
        hearts: ["❤️", "💖", "💝", "💗", "💓"],
        bears: ["🧸", "🐻"]
      },
      colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
      },
      animations: {
        floatDuration: "15s",
        floatDistance: "60px"
      }
    };

    document.title = CONFIG.pageTitle;

    document.documentElement.style.setProperty("--bg-start", CONFIG.colors.backgroundStart);
    document.documentElement.style.setProperty("--bg-end", CONFIG.colors.backgroundEnd);
    document.documentElement.style.setProperty("--btn-bg", CONFIG.colors.buttonBackground);
    document.documentElement.style.setProperty("--btn-hover", CONFIG.colors.buttonHover);
    document.documentElement.style.setProperty("--text-color", CONFIG.colors.textColor);

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const result = document.getElementById("result");

    function moveNoButton() {
      const maxX = window.innerWidth - noBtn.offsetWidth - 20;
      const maxY = window.innerHeight - noBtn.offsetHeight - 20;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
    }

    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

    yesBtn.addEventListener("click", () => {
      result.innerHTML = `<div class="love-message">Yayyy 🥰💖<br>Best decision ever!</div>`;
      spawnHearts(30);
    });

    function spawnHearts(count) {
      const emojis = [...CONFIG.floatingEmojis.hearts, ...CONFIG.floatingEmojis.bears];

      for (let i = 0; i < count; i++) {
        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = 20 + Math.random() * 20 + "px";
        emoji.style.animationDuration = CONFIG.animations.floatDuration;
        emoji.style.setProperty("--float-x", `${Math.random() * 120 - 60}px`);

        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 16000);
      }
    }

    setInterval(() => spawnHearts(1), 700);
  </script>
</body>
</html>
