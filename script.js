// ==UserScript==
// @name     WP Poczta - Adblock
// @version  3
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
  observer.observe(document.body, { childList: true, subtree: true });
}

waitForButton('Rozumiem ryzyko, przechodzę do poczty', btn => {
  btn.click();
  console.log(`Przycisk 'Rozumiem ryzyko, przechodzę do poczty' został kliknięty`);
});

function hideAdDivs() {
  const adClasses = ['pt_2', 'pb_2', 'pl_4', 'pr_2', 'bg-c_white', 'min-h_unset'];

  function checkAndHide() {
    document.querySelectorAll('div').forEach(div => {
      const cn = div.className;
      if (adClasses.every(cls => cn.includes(cls))) {
        div.style.setProperty('display', 'none', 'important');
        console.log('Reklama ukryta:', cn);
      }
    });
  }

  checkAndHide();
  const observer = new MutationObserver(checkAndHide);
  observer.observe(document.body, { childList: true, subtree: true });
}

hideAdDivs();
