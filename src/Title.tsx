import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root')

// An object to store multiple states with different keys.
let states = {};

// Function to retrieve the current value of a state with a specified key.
// If the state doesn't exist, it initializes it with the provided initial value.
function _getM2(initialValue, key) {
  if (states[key] === undefined) {
    states[key] = initialValue;
  }
  return states[key];
}

// Function to set the value of a state with a specified key and trigger a re-render.
function _setM2(value, key) {
  states[key] = value;
  ReactDOM.render(<Title />, rootEl);
}

function Title() {
    let countH = _getM2(0, 'H');
    let countW = _getM2(0, 'W');
    
   // Function to handle the click event for the 'H' counter button
    const onClickH = () => {
        console.log('clickedH', countH);
        countH = countH + 1;
        _setM2(countH, 'H');
    };

    // Function to handle the click event for the 'W' counter button
    const onClickW = () => {
        console.log('clickedW', countW);
        countW = countW + 1;
        _setM2(countW, 'W');
    };

    // Log the updated values of counters 'H' and 'W'
    console.log('updatedH', countH);
    console.log('updatedW', countW);
  
    // Return the JSX or React elements that should be rendered by this component
    return (
        <>
            <button onClick={onClickH}>+</button>
            <h1>Hello+{countH}</h1>
            <button onClick={onClickW}>+</button>
            <h1>World+{countW}</h1>
        </>
    );
}

export default Title