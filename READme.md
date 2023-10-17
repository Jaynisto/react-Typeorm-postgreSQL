# React useState Hook

This is a react hook that enable you to add a state variable in your component.

### Declaration

```javascript
const [state, setState] = useState(initialState);
```

- The **state** element in the above array is actually the current state, in most cases it is always set to the **initialState** that's being provided during that moment.

- The **setState** element is actually a function that enables you to **update** the state to any value, that you might desire.


Call useState at the **top** level of your component so that you can be able to declare a state variable.

```javascript
import { useState } from 'react';
```

You must always name state variables using **array destructuring**:

```javascript
const [currentState, setCurrentState]
```

### Parameters

- **initialState** : This is the value you want the state to be initially, it can be a value of any type.

### Retuns

- useState returns an array with exactly two values.
- The current state during the first render it will match the initialState you have passed.
