---
title: Scripts (defer, async) & The DOM
date: 2023-01-11T05:41:23.845Z
description: Know when to make use of the script tag's attributes
tag: DOM, javascript, script, async
author: SO_JIMM
---

When the browser loads HTML and comes across a `<script>...</script>` tag, it can’t continue building the DOM. It must execute the script right now. The browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

### defer

The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

- Scripts with defer never block the page.
- Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

### async

The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior.

The async attribute means that a script is completely independent:

- The browser doesn’t block on async scripts (like defer)
- Other scripts don’t wait for async scripts, and async scripts don’t wait for them
- DOMContentLoaded and async scripts don’t wait for each other:
  - DOMContentLoaded may happen both before an async script (if an async script finishes loading after the page is complete)
  - …or after an async script (if an async script is short or was in HTTP-cache)

In other words, async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded.

## Dynamic Scripts

There’s one more important way of adding a script to the page.

We can create a script and append it to the document dynamically using JavaScript:

```js
let script = document.createElement("script")
script.src = "/article/script-async-defer/long.js"
document.body.append(script) // (*)
```

**Dynamic scripts behave as “async” by default.**

**Both async and defer have one common thing: downloading of such scripts doesn’t block page rendering.**

#### Resources

[Scripts: async, defer](https://javascript.info/script-async-defer)
