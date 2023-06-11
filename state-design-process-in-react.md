# When Should I use state?

**_ When we need to change content on the screen _**

# What state + event handlers are there?

1. List out what a suer will do and changes they will see while using our app

2. Categorize each step as 'state' or 'event handler'

   - User sees something on the screen change
   - We probably need state to implement this step
     -User committed some action
   - We probably need an event handler to implement this

3. Group common steps. Remove duplicates. Rewrite description.

# What should it be called?

# What type of data will my state be?

# What name and type?

4. Look at mockup. Remove or simplify parts that aren't changing
5. Replace remaining elements with text descriptions
6. Repeat #4 and #5 with a different variation
7. Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props, what other arguments would you need?

# Which component should it be defined in?

# Where the state should be defined?

8. Decide where each event handler + state will be defined
