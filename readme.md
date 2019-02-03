# Keypad.js
a jQuery (3.3.1) plugin that creates a keypad/pinpad popup.

## Files
1. "keypad.css" contains the basic styling
2. "keypad.js" is the script

## Getting Started
Create your div element like normal
```html
<div id="keypad1"></div>
```

### Import
Import like any other javascript file
```html
<script src="keypad.js"></script>
```

### Constructor / Syntax
```js
$("#test").keypad({type: "text", limit: 5, shuffle: true});
```

#### Type
Type can be either "text" or "password". By default, type will set the input type to be password.

#### Limit
Limit can be any number. By default, the max length of the input is set to 4.

#### Shuffle
Shuffle can be a boolean or a string value.
* true will display the keypad shuffle the buttons in a random order.
* false will display the keypad in its original order
* "always" will shuffle the keypad everytime after you hit the submit/check button.