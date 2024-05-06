# Challenge: Build a Stopwatch/Timer in React

In this challenge, you'll create a functional React component that acts as a simple stopwatch and timer. It will display the elapsed time in minutes and seconds, along with buttons to start, stop, and reset the timer.

## Functionality:

* **State Management:** The component will utilize the `useState` hook from React to manage the current time value, initially set to 0.
* **Timer Logic:**
 - Clicking the "Start" button will initiate an interval using `setInterval`. This interval will increment the `time` state by 1 every second (1000 milliseconds).
 - Clicking the "Stop" button will clear the interval using `clearInterval`, effectively pausing the timer.
* **Display:** The elapsed time will be formatted and displayed as "{minutes} mins {seconds} secs". The `Math.trunc` function is used to extract the whole minutes from the total seconds.
* **Reset Functionality:** Clicking the "Reset" button will clear the interval and reset the time state to 0, starting the timer from scratch.


## Steps:

1. **Set up the React Component**:

- Create a new React component file (e.g., `StopwatchTimer.js`).
- Import `useState` from `react`.

2. **Manage Time State:**

- Use `useState(0)` to initialize the `time` state to 0.


3. **Start Function:**

- Define the `startTime` function.
- Create an interval using `setInterval` that updates the `time` state with the previous value incremented by 1, and set the interval duration to 1000 milliseconds (1 second).
- Store the interval reference in a variable (e.g., `window.myTime`) for later clearing.
- Call `startTime` when the "Start" button is clicked.


4. **Stop Function**:

- Define the `stopTime` function.
- Use `clearInterval` with the stored interval reference (`window.myTime`) to stop the timer.
Call `stopTime` when the "Stop" button is clicked.


5. **Reset Function:**

- Define the `resetTime` function.
- Use `clearInterval` with the stored interval reference (`window.myTime`) to stop the timer.
- Reset the `time` state back to 0 using `setTime(0)`.
- Call `resetTime` when the "Reset" button is clicked.


5. **Render the UI:**

- Return a JSX structure representing the stopwatch/timer:
 -  A main container (`main`) with a heading ("Timer").
 -  A section for displaying the elapsed time (`{Math.trunc(time / 60)} mins {time} secs`).
 -  A section for the buttons (`div--btn`):
    -  A "Start" button (`btn--start`) that calls `startTime`.
    -  A "Stop" button (`btn--stop`) that calls `stopTime`.
    -  A "Reset" button (`btn--reset`) that calls `resetTime`.
