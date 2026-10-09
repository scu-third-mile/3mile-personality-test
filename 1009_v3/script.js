const ROLE_INFO = {
  explore: {
    emoji: "📸",
    icon: "assets/role-explore.svg",
    name: "沿途探索家",
    max: 11,
    quote: "「都來了，當然要看看這一路會遇到什麼！ 📷」",
    description:
      "你在意的不只是抵達終點，也會期待沿途的風景、美食、城市和第一次體驗。對你來說，環島好玩的地方，就是每天都有新的發現值得記住。",
    keywords: ["探索", "體驗", "風景", "回憶"]
  },
  challenge: {
    emoji: "🔥",
    icon: "assets/role-challenge.svg",
    name: "熱血挑戰者",
    max: 9,
    quote: "「越難，我越想證明自己做得到。要拼 🔥」",
    description:
      "長坡、逆風、疲累可能很痛苦，但越有挑戰，你反而越不想認輸。對你來說，環島最有成就感的，就是把原本覺得很難的事情真的完成。",
    keywords: ["挑戰", "突破", "不服輸", "毅力"]
  },
  team: {
    emoji: "🤝",
    icon: "assets/role-team.svg",
    name: "夥伴黏著劑",
    max: 9,
    quote: "「去哪裡很重要，但跟誰一起走更重要。 🤝」",
    description:
      "你很在意一起騎的人、隊伍氣氛和共同回憶。大家累的時候，你可能就是那個願意陪著撐、聊天打氣，讓整個隊伍重新有精神的人。",
    keywords: ["夥伴", "陪伴", "氣氛", "一起完成"]
  },
  steady: {
    emoji: "🛡️",
    icon: "assets/role-steady.svg",
    name: "穩定節奏型",
    max: 11,
    quote: "「不是騎最快，是知道怎麼一路騎到底。 🧭」",
    description:
      "你習慣找到適合自己的節奏，知道什麼時候該出力、什麼時候該休息。遇到狀況時也比較不容易慌，是那種穩穩完成、讓人覺得很可靠的人。",
    keywords: ["節奏", "規劃", "冷靜", "可靠"]
  }
};

const DUAL_INFO = {
  "challenge|team": {
    emoji: "🔥🤝",
    title: "熱血挑戰者 × 夥伴黏著劑",
    description:
      "你不只想證明自己做得到，也很在意身邊的夥伴能不能一起完成。遇到困難時，你既有不服輸的衝勁，也會從大家一起努力這件事得到力量。",
    tagline: "自己不認輸，也不想讓夥伴掉隊。",
    keywords: ["挑戰", "夥伴", "毅力", "一起完成"]
  },
  "explore|steady": {
    emoji: "📸🛡️",
    title: "沿途探索家 × 穩定節奏型",
    description:
      "你會期待一路上的風景、新體驗和不同發現，同時也懂得掌握自己的狀態、穩穩完成旅程。",
    tagline: "好好探索，也穩穩前進。",
    keywords: ["探索", "體驗", "節奏", "可靠"]
  }
};

const QUESTIONS = [
  {
    id: "q1",
    title: "看到前面有個很陡很長的陡坡，你的第一念頭是？",
    type: "single",
    options: [
      {
        key: "A",
        text: "來啊！都到這裡了，當然要騎上去啊，搞不好上面風景很值得！",
        score: { challenge: 1, explore: 1 }
      },
      {
        key: "B",
        text: "OMG，我真的可以嗎？好吧，我就慢慢騎看看吧……",
        score: { steady: 2 }
      },
      {
        key: "C",
        text: "大家都還在騎，我就跟緊前面的夥伴，一起慢慢撐上去！",
        score: { team: 2 }
      },
      {
        key: "D",
        text: "算了啦，大不了真的不行就下來牽。",
        score: { steady: 1 }
      }
    ]
  },
  {
    id: "q2",
    title: "騎了一整天，今天真的超累，但好不容易來到一個你從沒去過的城市……",
    type: "single",
    options: [
      {
        key: "A",
        text: "都來了！再累也想出去晃晃，看看有什麼必吃、必看，說不定還有意外發現。",
        score: { explore: 2 }
      },
      {
        key: "B",
        text: "明天還有路要騎，先整理裝備、補充體力、早點休息。",
        score: { steady: 2 }
      },
      {
        key: "C",
        text: "看大家要去哪，有人揪就一起！難得大家一起來，當然要一起留下回憶。",
        score: { team: 2 }
      }
    ]
  },
  {
    id: "q3",
    title: "已經騎了很久、真的有點累了，但距離今天的終點只剩最後 5 公里，你心裡的想法是？",
    type: "single",
    options: [
      {
        key: "A",
        text: "蛤，還有 5 公里喔……都騎到這裡了，不行，怎樣都要騎完！先喝口水，拚啦！",
        score: { challenge: 2 }
      },
      {
        key: "B",
        text: "不要急，照現在的節奏穩穩騎完就好。",
        score: { steady: 2 }
      },
      {
        key: "C",
        text: "跟緊前面的夥伴，想到等等可以跟大家一起到終點，就覺得再撐一下也可以！",
        score: { team: 2 }
      },
      {
        key: "D",
        text: "現在真的好累……但還是很期待前面還會看到什麼風景。",
        score: { explore: 2 }
      }
    ]
  },
  {
    id: "q4",
    title: "騎到一半突然下大雨，你內心想的事是……？",
    type: "single",
    options: [
      {
        key: "A",
        text: "好吧，這也是環島的一部分，算是體驗到雨天版環島了。",
        score: { explore: 2 }
      },
      {
        key: "B",
        text: "夥伴們都還在一起奮戰，我也不能落下！",
        score: { team: 1, challenge: 1 }
      },
      {
        key: "C",
        text: "提醒身邊的夥伴小心一點，路滑不要摔了！",
        score: { team: 1, steady: 1 }
      },
      {
        key: "D",
        text: "雨而已！颳風下雨我都不怕！",
        score: { challenge: 2 }
      }
    ]
  },
  {
    id: "q5",
    title: "明天是環島最有挑戰性的一天，睡前你比較像哪一種？",
    type: "single",
    options: [
      {
        key: "A",
        text: "先確認明天路線、裝備、補給，東西整理好再睡。",
        score: { steady: 2 },
        tieRole: "steady"
      },
      {
        key: "B",
        text: "看看明天會經過哪裡，有沒有值得期待的風景、美食，或會遇到什麼沒體驗過的東西。",
        score: { explore: 2 },
        tieRole: "explore"
      },
      {
        key: "C",
        text: "睡前還想跟大家聊聊天、討論明天，想到又可以一起騎、一起玩就很期待。",
        score: { team: 2 },
        tieRole: "team"
      },
      {
        key: "D",
        text: "聽說明天那段超硬？很好，你引起我的注意了。",
        score: { challenge: 2 },
        tieRole: "challenge"
      }
    ]
  },
  {
    id: "q6",
    title: "如果只能選，你比較想騎哪一種？",
    type: "single",
    options: [
      {
        key: "A",
        icon: "🌊",
        text: "沿著海線前進，一路看看海景和沿途風光。",
        score: { explore: 2 }
      },
      {
        key: "B",
        icon: "⛰️",
        text: "比較陡、比較難，但騎完一定超有成就感的山路。",
        score: { challenge: 2 }
      },
      {
        key: "C",
        icon: "🗺️",
        text: "路況熟悉、有把握，可以穩穩騎完的平路。",
        score: { steady: 2 }
      }
    ]
  },
  {
    id: "q7",
    title: "環島四大酷刑，硬要選一個，你寧願遇到哪個？",
    
    type: "single",
    options: [
      {
        key: "wind",
        icon: "🌬️",
        text: "逆風",
        detail: "每踩一下都覺得有人在把你往後拉。"
      },
      {
        key: "climb",
        icon: "⛰️",
        text: "連續爬坡",
        detail: "轉過一個彎，發現：怎麼還有？"
      },
      {
        key: "rain",
        icon: "🌧️",
        text: "下雨",
        detail: "全身濕、鞋子濕，連靈魂都快濕了。"
      },
      {
        key: "heat",
        icon: "☀️",
        text: "高溫曝曬",
        detail: "一路被太陽烤，感覺自己快變成行動烤肉。"
      }
    ]
  },
  {
    id: "q8",
    title: "如果真的要去環島，你目前最擔心哪些事情？",
    note: "複選題，最多選 3 項。",
    type: "multi",
    maxSelect: 3,
    options: [
      {
        key: "fitness",
        icon: "🚴",
        text: "體力不夠／怕自己騎不完",
        detail: "擔心長距離騎乘負荷不了。"
      },
      {
        key: "soreness",
        icon: "💪",
        text: "身體酸痛／連續騎很多天吃不消",
        detail: "擔心腿痠、肩頸不舒服、身體恢復不了等問題。"
      },
      {
        key: "schedule",
        icon: "⏰",
        text: "團體行程與作息適應",
        detail: "擔心每天的集合、騎乘、休息與活動安排較緊湊，自己可能不容易適應。"
      },
      {
        key: "safety",
        icon: "🚗",
        text: "騎乘安全",
        detail: "例如擔心摔車、車禍、道路車流量大，或對道路騎乘感到害怕。"
      },
      {
        key: "friends",
        icon: "👥",
        text: "沒有認識的人一起參加",
        detail: "擔心自己一個人報名、融不進團體或不知道會跟誰一起。"
      },
      {
        key: "budget",
        icon: "💰",
        text: "預算考量",
        detail: "擔心報名、裝備、車輛或其他相關花費。"
      },
      {
        key: "gear",
        icon: "🚲",
        text: "單車／裝備方面的問題",
        detail: "例如沒有適合的單車、不知道需要準備哪些裝備，或擔心途中車輛故障。"
      },
      {
        key: "time",
        icon: "📚",
        text: "個人時間是否能配合",
        detail: "擔心訓練、認證與正式環島和課業、打工或其他既有安排衝突。"
      },
      {
        key: "other",
        icon: "✏️",
        text: "其他",
        detail: "如果還有其他擔心，也可以告訴我們。"
      }
    ]
  }
];

const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const retryBtn = document.getElementById("retryBtn");
const homeBtn = document.getElementById("homeBtn");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const questionArea = document.getElementById("questionArea");
const quizError = document.getElementById("quizError");

let currentQuestion = 0;
let answers = {};
let otherText = "";

function showPage(pageEl) {
  [homePage, quizPage, resultPage].forEach((page) => page.classList.remove("active-page"));
  pageEl.classList.add("active-page");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function startQuiz() {
  currentQuestion = 0;
  answers = {};
  otherText = "";
  showPage(quizPage);
  renderQuestion();
}

function restartQuiz() {
  currentQuestion = 0;
  answers = {};
  otherText = "";
  showPage(quizPage);
  renderQuestion();
}

function goHome() {
  currentQuestion = 0;
  answers = {};
  otherText = "";
  showPage(homePage);
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  quizError.textContent = "";

  progressBar.style.width = `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`;
  progressText.textContent = `${currentQuestion + 1} / ${QUESTIONS.length}`;
  backBtn.style.visibility = currentQuestion === 0 ? "hidden" : "visible";
  nextBtn.textContent = currentQuestion === QUESTIONS.length - 1 ? "看結果" : "下一題";

  const selected = answers[q.id];

  let html = `
    <p class="question-kicker">Q${currentQuestion + 1}</p>
    <h2 class="question-title">${q.title}</h2>
    ${q.note ? `<p class="question-note">${q.note}</p>` : ""}
    <div class="options">
  `;

  q.options.forEach((option) => {
    let isSelected = false;

    if (q.type === "single") {
      isSelected = selected === option.key;
    } else {
      isSelected = Array.isArray(selected) && selected.includes(option.key);
    }

    html += `
      <button
        type="button"
        class="option-card ${isSelected ? "selected" : ""} ${["q7", "q8"].includes(q.id) ? "survey-option" : ""}"
        data-option="${option.key}"
      >
        <span class="option-label">${option.icon ? `${option.icon} ` : ""}${option.text}</span>
        ${option.detail ? `<span class="option-detail">${option.detail}</span>` : ""}
      </button>
    `;
  });

  html += "</div>";

  if (q.id === "q8" && Array.isArray(selected) && selected.includes("other")) {
    html += `
      <textarea
        id="otherInput"
        class="other-input"
        maxlength="120"
        placeholder="其他想補充的事情（選填）"
      >${escapeHtml(otherText)}</textarea>
    `;
  }

  questionArea.innerHTML = html;

  questionArea.querySelectorAll(".option-card").forEach((button) => {
    button.addEventListener("click", () => selectOption(button.dataset.option));
  });

  const otherInput = document.getElementById("otherInput");
  if (otherInput) {
    otherInput.addEventListener("input", (event) => {
      otherText = event.target.value;
    });
  }
}

function selectOption(optionKey) {
  const q = QUESTIONS[currentQuestion];
  quizError.textContent = "";

  if (q.type === "single") {
    answers[q.id] = optionKey;
  } else {
    const selected = Array.isArray(answers[q.id]) ? [...answers[q.id]] : [];
    const index = selected.indexOf(optionKey);

    if (index >= 0) {
      selected.splice(index, 1);
      if (optionKey === "other") otherText = "";
    } else {
      if (selected.length >= q.maxSelect) {
        quizError.textContent = `這題最多選 ${q.maxSelect} 項喔！`;
        return;
      }
      selected.push(optionKey);
    }

    answers[q.id] = selected;
  }

  renderQuestion();
}

function validateCurrentQuestion() {
  const q = QUESTIONS[currentQuestion];
  const selected = answers[q.id];

  if (q.type === "single" && !selected) {
    quizError.textContent = "先選一個最符合你直覺的答案吧！";
    return false;
  }

  if (q.type === "multi" && (!Array.isArray(selected) || selected.length === 0)) {
    quizError.textContent = "至少選 1 項再繼續喔！";
    return false;
  }

  return true;
}

function goNext() {
  if (!validateCurrentQuestion()) return;

  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResult();
  }
}

function goBack() {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function calculateScores() {
  const scores = {
    explore: 0,
    challenge: 0,
    team: 0,
    steady: 0
  };

  QUESTIONS.slice(0, 6).forEach((q) => {
    const selectedKey = answers[q.id];
    const option = q.options.find((item) => item.key === selectedKey);

    if (!option || !option.score) return;

    Object.entries(option.score).forEach(([role, points]) => {
      scores[role] += points;
    });
  });

  return scores;
}

function getTopRoles(scores) {
  // 用交叉相乘比較分數比例，避免浮點數同分判斷誤差。
  const roles = Object.keys(ROLE_INFO);

  let tops = [roles[0]];

  for (let i = 1; i < roles.length; i += 1) {
    const role = roles[i];
    const currentTop = tops[0];

    const left = scores[role] * ROLE_INFO[currentTop].max;
    const right = scores[currentTop] * ROLE_INFO[role].max;

    if (left > right) {
      tops = [role];
    } else if (left === right) {
      tops.push(role);
    }
  }

  return tops;
}

function applyQ5TieBreaker(topRoles) {
  if (topRoles.length <= 1) return topRoles;

  const selectedQ5 = answers.q5;
  const q5 = QUESTIONS.find((q) => q.id === "q5");
  const option = q5.options.find((item) => item.key === selectedQ5);
  const tieRole = option?.tieRole;

  if (tieRole && topRoles.includes(tieRole)) {
    return [tieRole];
  }

  return topRoles;
}

function showResult() {
  const scores = calculateScores();
  const topRoles = getTopRoles(scores);
  const finalRoles = applyQ5TieBreaker(topRoles);

  renderResult(scores, finalRoles);
  showPage(resultPage);
}


function normalizeDisplayPercents(scores) {
  const roles = Object.keys(ROLE_INFO);
  const rawRates = roles.map((role) => ({
    role,
    rate: scores[role] / ROLE_INFO[role].max
  }));

  const totalRate = rawRates.reduce((sum, item) => sum + item.rate, 0);

  if (totalRate === 0) {
    return {
      explore: 25,
      challenge: 25,
      team: 25,
      steady: 25
    };
  }

  const exact = rawRates.map((item) => {
    const value = (item.rate / totalRate) * 100;
    return {
      role: item.role,
      exact: value,
      floor: Math.floor(value),
      remainder: value - Math.floor(value)
    };
  });

  let assigned = exact.reduce((sum, item) => sum + item.floor, 0);
  let remaining = 100 - assigned;

  exact
    .sort((a, b) => b.remainder - a.remainder)
    .forEach((item) => {
      if (remaining > 0) {
        item.floor += 1;
        remaining -= 1;
      }
    });

  const result = {};
  exact.forEach((item) => {
    result[item.role] = item.floor;
  });

  return result;
}

function renderResult(scores, finalRoles) {
  const displayPercents = normalizeDisplayPercents(scores);

  const resultEmoji = document.getElementById("resultEmoji");
  const resultTitle = document.getElementById("resultTitle");
  const resultQuote = document.getElementById("resultQuote");
  const resultDescription = document.getElementById("resultDescription");
  const dualBadge = document.getElementById("dualBadge");
  const resultTagline = document.getElementById("resultTagline");
  const keywordList = document.getElementById("keywordList");
  const tendencyList = document.getElementById("tendencyList");

  let keywords = [];

  if (finalRoles.length === 1) {
    const role = finalRoles[0];
    const info = ROLE_INFO[role];

    resultEmoji.innerHTML = `<img class="result-role-rover" src="${info.icon}" alt="${info.name} Rover">`;
    resultTitle.textContent = info.name;
    resultQuote.textContent = info.quote;
    resultDescription.textContent = info.description;

    dualBadge.classList.add("hidden");
    resultTagline.classList.add("hidden");
    resultTagline.textContent = "";

    keywords = info.keywords;
  } else {
    const key = [...finalRoles].sort().join("|");
    const dual = DUAL_INFO[key];

    if (dual) {
      resultEmoji.innerHTML = finalRoles.map((role) => `<img class="result-role-rover dual-role-rover" src="${ROLE_INFO[role].icon}" alt="${ROLE_INFO[role].name} Rover">`).join("");
      resultTitle.textContent = dual.title;
      resultQuote.textContent = "";
      resultDescription.textContent = dual.description;

      dualBadge.classList.remove("hidden");
      resultTagline.classList.remove("hidden");
      resultTagline.textContent = dual.tagline;

      keywords = dual.keywords;
    } else {
      // 理論上目前配分只會留下兩組雙重角色；保留 fallback 以防未來改題目。
      resultEmoji.innerHTML = finalRoles.map((role) => `<img class="result-role-rover dual-role-rover" src="${ROLE_INFO[role].icon}" alt="${ROLE_INFO[role].name} Rover">`).join("");
      resultTitle.textContent = finalRoles.map((role) => ROLE_INFO[role].name).join(" × ");
      resultQuote.textContent = "";
      resultDescription.textContent = "你的作答同時展現了兩種很接近的環島傾向。";

      dualBadge.classList.remove("hidden");
      resultTagline.classList.add("hidden");

      keywords = [...new Set(finalRoles.flatMap((role) => ROLE_INFO[role].keywords))].slice(0, 4);
    }
  }

  keywordList.textContent = keywords.join(" ｜ ");

  const displayOrder = ["explore", "challenge", "team", "steady"];

  tendencyList.innerHTML = displayOrder
    .map((role) => {
      const info = ROLE_INFO[role];
      const percent = displayPercents[role];
      const isResult = finalRoles.includes(role);

      return `
        <div class="tendency-row ${isResult ? "is-result" : ""}">
          <div class="tendency-name"><img class="tendency-rover-icon" src="${info.icon}" alt=""> <span>${info.name}</span></div>
          <div class="tendency-track">
            <div class="tendency-fill" style="width: ${percent}%"></div>
          </div>
          <div class="tendency-value">${percent}%</div>
        </div>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goNext);
backBtn.addEventListener("click", goBack);
retryBtn.addEventListener("click", restartQuiz);
homeBtn.addEventListener("click", goHome);
