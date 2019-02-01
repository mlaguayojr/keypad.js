# Keypad.js
a jQuery plugin that creates a keypad/pinpad popup.

## Files
1. "keypad.css" contains the basic styling
2. "keypad.js" is the script

## How To
Create your element with atleast these attributes

```html
<div id="keypad1" data-desc="Password 1"></div>
```
> data-desc(optional): describe what this keypad is for

### Import
```html
<script src="keypad.js"></script>
```
> import script like normal javascript

### Constructor / Syntax
```js
$("#test").keypad({type: "text", limit: 5, shuffle: true});
```
> type: this is based off of the input type (text, password, etc.). The default is password.

> limit: the max number of numbers allowed. The default is 4.

> shuffle: reassign the buttons to new random values. The default is false.