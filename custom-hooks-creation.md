**_ Custom Hook Creation _**

1. Make a function called 'useSomething'
2. Find all the non-JSX expressions that refer to 1 or 2 very particular pieces of state
3. Cut them all out, paste them into 'useSomething'
4. Find 'not defined' errors in the component.
5. In the hook return an object that contains the variables the component needs.
6. In the component, call the hook. Destructure the properties the component need.
7. Find 'not defined' errors in the hook. Pass the missing variables in as arguments to the hook function.
8. Rename the hook to something more meaningful
9. Rename returned properties to something more descriptive.
