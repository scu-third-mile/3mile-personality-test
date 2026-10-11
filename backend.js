/* 1011_BE_v6 — 獨立、盡力傳送的匿名測驗統計。
 * 只發送一次，不等待回應、不重試、不阻擋結果頁。
 * Apps Script 不支援在此跨網域模式下可靠讀取回應；傳送成功不代表已寫入。
 */
(function () {
  "use strict";
  const VERSION = "1011_BE_v6"; // 後端使用 1010_BE_vN 格式驗證
  let sessionId = null;
  let submitted = false;

  function newSession() {
    sessionId = (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function")
      ? crypto.randomUUID()
      : null;
    submitted = false;
  }

  function resetSession() {
    sessionId = null;
    submitted = false;
  }

  function sendResult(answers, otherText, scores, finalRoles, roleInfo, normalize) {
    if (submitted || !sessionId) return;
    submitted = true; // 即使無網路也不因再次打開結果頁而重送

    try {
      const endpoint = window.THIRD_MILE_BACKEND_URL;
      if (typeof endpoint !== "string" ||
          !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint.trim())) return;
      if (typeof fetch !== "function") return;
      if (!answers || !Array.isArray(finalRoles) || !finalRoles.length) return;

      const percentages = normalize(scores);
      const payload = {
        submissionId: sessionId,
        completedAt: new Date().toISOString(),
        version: VERSION,
        answers: {
          q1: answers.q1, q2: answers.q2, q3: answers.q3,
          q4: answers.q4, q5: answers.q5, q6: answers.q6,
          q7: answers.q7, q8: Array.isArray(answers.q8) ? [...answers.q8] : []
        },
        otherText: typeof otherText === "string" ? otherText : "",
        finalRole: finalRoles.map(role => roleInfo[role].name).join(" × "),
        percentages: {
          explore: percentages.explore,
          challenge: percentages.challenge,
          team: percentages.team,
          steady: percentages.steady
        }
      };

      // no-cors + text/plain: 避免瀏覽器預檢請求；結果頁不等待請求。
      // opaque response 不能用來判定 Google Sheets 是否成功記錄。
      void fetch(endpoint.trim(), {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => {});
    } catch (_) {
      // 後端無論如何都不應中斷使用者的測驗流程。
    }
  }

  window.ThirdMileTelemetry = { newSession, resetSession, sendResult };
})();
