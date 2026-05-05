// ==UserScript==
// @name     WP Poczta - Adblock Popup Skip
// @version  1
// @include  https://poczta.wp.pl/*
// @grant    none
// ==/UserScript==

function waitForButton(text, callback) {
  const observer = new MutationObserver(() => {
    const btn = Array.from(document.querySelectorAll('button'))
      .find(btn => btn.innerText === text);

    if (btn) {
      observer.disconnect();
      callback(btn);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

waitForButton('Rozumiem ryzyko, przechodzę do poczty', btn => {
  btn.click();
});
