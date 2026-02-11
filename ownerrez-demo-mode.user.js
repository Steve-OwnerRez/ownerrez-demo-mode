// ==UserScript==
// @name         OwnerRez – Demo Mode Pro
// @namespace    http://ownerrez.com/
// @version      2.2
// @description  Toggleable demo mode with disable-markup and OR header styling
// @match        *://*.ownerrez.com/*
// @run-at       document-start
// @grant        GM_addStyle
// @author       Steve Clark
// @lastUpdated  2026-02-10
// @updateURL    https://raw.githubusercontent.com/Steve-OwnerRez/ownerrez-demo-mode/main/ownerrez-demo-mode.user.js
// @downloadURL  https://raw.githubusercontent.com/Steve-OwnerRez/ownerrez-demo-mode/main/ownerrez-demo-mode.user.js
// ==/UserScript==



/* ---------------------------
   STATE MANAGEMENT
---------------------------- */

let demoMode = true; // Default ON

function applyDemoMode() {
    if (!document.body) return;

    if (demoMode) {
        document.body.classList.add('disable-markup');
        document.body.classList.add('or-demo-mode');
    } else {
        document.body.classList.remove('disable-markup');
        document.body.classList.remove('or-demo-mode');
    }
}

/* ---------------------------
   WAIT FOR APP LOAD
---------------------------- */

const waitForApp = setInterval(() => {
    const app = document.querySelector('.app-body-container');
    if (app) {
        applyDemoMode();
        clearInterval(waitForApp);
    }
}, 200);

/* Re-apply after SPA navigation */
const observer = new MutationObserver(applyDemoMode);
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

/* ---------------------------
   KEYBOARD TOGGLE (Press D)
---------------------------- */

document.addEventListener('keydown', function (e) {
    const target = e.target;

    const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

    if (isTyping) return;

    if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey &&
        e.key.toLowerCase() === 'd') {

        demoMode = !demoMode;
        applyDemoMode();
        console.log("Demo Mode:", demoMode ? "ON" : "OFF");
    }
});



/* ---------------------------
   STYLING
---------------------------- */

GM_addStyle(`

/* OR Branded Muted Green Header */
.or-demo-mode .admin-bar {
    background: #1f5f4a !important;
    border-bottom: 1px solid #144235 !important;
    box-shadow: none !important;
}

/* Hide admin controls inside header */
.or-demo-mode .admin-bar * {
    display: none !important;
}

`);
