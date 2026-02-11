# OwnerRez Demo Mode Script
⚠ Internal OwnerRez Tool – Not for external distribution
Internal demo mode userscript for OwnerRez.  
---

## What It Does

* Automatically enables `disable-markup`
* Styles the admin bar with a muted OR green header
* Hides admin controls for clean screen recordings
* Press **D** to toggle Demo Mode on/off
* Remembers ON/OFF state across navigation and reload

---

## Installation

1. Install **Tampermonkey** (Chrome extension)
   [https://www.tampermonkey.net/](https://www.tampermonkey.net/)

2. Open the raw script file:
   [https://raw.githubusercontent.com/Steve-OwnerRez/ownerrez-demo-mode/main/ownerrez-demo-mode.user.js](https://raw.githubusercontent.com/Steve-OwnerRez/ownerrez-demo-mode/main/ownerrez-demo-mode.user.js)

3. Click **Install** when prompted.

4. Refresh your OwnerRez tab.

---

## Required Chrome Settings

If the script does not run, verify the following:

### Allow User Scripts

1. Open Chrome
2. Click the three-dot menu (⋮)
3. Click **Extensions**
4. Find **Tampermonkey**
5. Click **Details**
6. Enable **Allow User Scripts**

Without this enabled, Tampermonkey will not execute scripts.

---

### Allow in Incognito Mode (Recommended for Demos)

If you run OwnerRez in Incognito for impersonation or clean sessions:

1. Open Chrome
2. Click the three-dot menu (⋮)
3. Click **Extensions**
4. Click **Details** under Tampermonkey
5. Toggle on **Allow in Incognito**

Chrome will warn that extensions may record browsing activity in Incognito. This is expected.

By default, extensions do not run in Incognito mode unless explicitly enabled.

---

## Troubleshooting

If the script appears installed but is not running:

* Fully close all Chrome windows and reopen
* Confirm Tampermonkey shows a red badge count on ownerrez.com
* Confirm Tampermonkey says “This can read and change site data”
* Verify “Allow User Scripts” is enabled
* Verify Incognito permission if applicable

---

## Usage

* Demo Mode is **ON by default**
* Press **D** to toggle it on/off
* Will not trigger while typing in a form field
* Works across page navigation
* Remembers state between sessions

---

## Version History

### v2.3 — 2026-02-10

* Added persistent toggle state via localStorage
* Demo mode now remembers ON/OFF across navigation and reload
* Safe D-key toggle (disabled while typing)
* Internal polish and stabilization

### v2.2

* Restored D-key toggle
* Added safeguard to prevent triggering while typing in form fields

### v2.1

* Changed keyboard toggle to Ctrl+Shift+D

### v2.0

* Stable demo mode implementation
* Auto-enables `disable-markup`
* OR-branded muted green admin bar
* Admin controls hidden
* Keyboard toggle
* SPA navigation safe

### v1.0

* Initial personal demo script
* Manual toggle via bookmarklet

---

## Notes

This is an internal tool for OwnerRez demos and recordings.
