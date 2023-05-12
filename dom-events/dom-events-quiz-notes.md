# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
If we want to see things appear on our screen
- What is the purpose of events and event handling?
controls the event and decides what should happen if an event occurs
- Are all possible parameters required to use a JavaScript method or function?
yes
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener()
- What is a callback function?
 function passed as an argument of another function, which will be executed eventually
- What object is passed into an event listener callback when the event fires?
EventData
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
 a property of an event object that refers to the element that triggered the event
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```  method
    ```js
    element.addEventListener('click', handleClick())
    ``` function


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
