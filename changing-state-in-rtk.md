**_ Changing State _**

1. Add a reducer to one of your slices that changes state in some particular way.
2. Export the action creator that the slice automatically creates.
3. Find the component that you want to dispatch from
4. Import the action creator function and 'useDispatch' hook from react-redux.
5. Call the 'useDispatch' hook to get access to the dispatch function
6. When the user does something, call the action creator to get an action, then dispatch it.
