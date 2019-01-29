# Keypad.js
Create randomized numeric keypads on page load with vanilla javascript.

## Files
1. "keypad.css" contains the basic styling
2. "keypad.js" is the script

## How To
Create your element with atleast these attributes
```html
<div data-type="keypad" data-desc="Password 1"></div>
```
> data-type(required): must be "keypad"
> data-desc(optional): describe what this keypad is for

```html
<script src="keypad.js"></script>
```
> import script like normal javascript

```html
<script>new Keypad();</script>
```
> initialize Keypad

## Syntax
By default, Keypad sets the character limit to 4. You can change it to however long by doing

```javascript
new Keypad(limit=10);
```

## Going further
Things I would like to implement later on:
* add more configuration (parameters or based on data-* attributes)
* (parameter based) individually based on elements (the codes there)
* (parameter based) everytime i click on the "base" element, randomize keypad buttons