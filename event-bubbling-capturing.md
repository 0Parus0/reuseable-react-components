**_ Event Capture and Bubbling _**

When an event occurs, browser wants to find event handlers to call
Order in which this occurs is divided into three phases

1. - Capture Phase \*
     Phase One - Capture :- Go to most / top parent of clicked element, see if it has a handler. Go to second most / top parent ... etc.

     Sets up event handler for the capture phase

     `document.addEventListener('click', handleClick, true) `
     There must be a third argument to the addEventListener and it should be true.

   body (top/most parent)
   |
   div (2nd most/top parent and so on)
   |
   button (target)

   starts from body to div and to button

2. - Target Phase \*
     Phase Two - Target :- Go to clicked element, check to see if it has event handler

   button (direct to target)

3. - Bubble Phase \*
     Phase Three :- Go to immediate parent of clicked element, see it has handler. If not then go to parent's parent... etc

   button
   |
   div
   |
   body
