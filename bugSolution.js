There are several ways to solve this:

**1. Whitelisting Classes:** Add the dynamically generated classes to the `whitelist` or `whitelistPatterns` option in your PurgeCSS configuration. This tells PurgeCSS to keep these classes regardless of whether they're used in your static HTML.

**2. Using `@apply`:** Instead of generating classes dynamically, use Tailwind's `@apply` directive to apply styles directly to your elements.  This avoids creating classes that might be removed.

**3.  Safelisting Classes:** If you want to preserve a class regardless of whether it exists in your HTML, use the `safelist` option in PurgeCSS. This is ideal if you have classes that aren't part of your application's standard style but might be added conditionally.

Example of using `@apply`:
```javascript
<div class="bg-blue-500 p-4 @apply text-white">
  Hello
</div>
```

Here's how you would adjust your PurgeCSS configuration for whitelisting (choose the method which best suits your needs):

```javascript
module.exports = {
  // ... other PurgeCSS options
  whitelist: ['dynamic-class-1', 'dynamic-class-2'], // or whitelistPatterns: [/dynamic-class-.*/]
};
```