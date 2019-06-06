# js-scroll-to
A pure JS solution for scrolling to a specified element on command.

# About
The solution is made purely in JS with cross-framework and cross-browser compatibility in mind.

# Parameters
All arguments should be encapsuled in a single object like the following
```html
{ 
  elementId: 'id',
  behaviour: 'smooth',
  axis: 'both'
}
```

**elementId (*):** The id of the element to which the view will scroll to.

**axis (*) _('x' || 'y' || 'both') (default: 'none')_:** The axis on which to scroll.

**xOffset _(optional) (integer)_:** The x axis offset.

**yOffset _(optional) (integer)_:** The y axis offset.

**behavior _(optional) ('smooth' || 'auto') (default: 'smooth)_:** The scroll animation behavior.

# How to use

Just import it with the new ES6 syntax
```javascript
import scrollTo from 'js-scroll-to'
```
or with the good old require 
```javascript
const scrollTo = require('js-scroll-to')
```
and then use it like any other function
```javascript
scrollTo({
  elementId: 'some-id',
  yOffset: 10,
  axis: 'y'
})
```
