// ==UserScript==
// @name     WP Poczta - Adblock Popup Skip
// @version  2
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
  })
  
  observer.observe(document.body, { childList: true, subtree: true });
}

function removeAdDiv(cls) {
	const observer = new MutationObserver(() => {
    const div = Array.from(document.querySelectorAll(cls))
    	.forEach(el => el.remove());
  })
  
  observer.observe(document.body, { childList: true, subtree: true });
}

waitForButton('Rozumiem ryzyko, przechodzę do poczty', btn => {
  btn.click();
});

removeAdDiv('div.d_flex.pt_2.pb_2.pl_4.pr_2.bd_base.bd-c_transparent.bd-b-c_gray\\.100\\/12.bg-c_white.min-h_unset');
