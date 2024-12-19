# PurgeCSS and Dynamic Tailwind Classes

This repository demonstrates a common issue when using PurgeCSS with Tailwind CSS and dynamically generated class names.  The bug occurs because PurgeCSS removes classes it doesn't see in your HTML at build time. If your JavaScript framework (like React, Vue, or Svelte) adds classes dynamically, these classes will be purged, leading to missing styles.

## Bug

The `bug.js` file contains a simple example of dynamically adding Tailwind classes.  When you run the build process, PurgeCSS will remove these classes, causing rendering problems.

## Solution

The `bugSolution.js` file shows the fix.  There are multiple solutions. You can adjust your PurgeCSS configuration to whitelist necessary classes or utilize a different approach like Tailwind's `@apply` directive which applies the styles without adding a class that may be removed by the purge process.