# Complete React Tutorial - From Basics to Advanced

A comprehensive guide covering React fundamentals through practical examples, progressing from basic components to advanced hooks and Context API.

---

## 1. Introduction & Project Setup

### 1.1 Prerequisites

Before starting this tutorial, ensure you have the following installed:

```bash
Node.js (v16 or higher recommended)
npm (comes with Node.js)
```

### 1.2 Installation

Clone or navigate to the project directory and install dependencies:

```bash
npm install
npm run dev
```

### 1.3 Project Structure

```
react-video-tutorial/
├── src/              # Current working directory
├── src1/ - src8/     # Tutorial sections
└── public/           # Static assets
```

---

## 2. React Fundamentals

### 2.1 What is React?

React is a JavaScript library for building UIs using a **component-based architecture**.

### 2.2 JSX (JavaScript XML)

JSX lets you write HTML-like code in JavaScript.

#### JSX Rules

| Rule | Example |
|------|---------|
| Single Root Element | Use `<div>` or `<>` (Fragment) |
| JavaScript in `{}` | `<h1>Hello, {name}!</h1>` |
| camelCase Attributes | `className`, `onClick` |
| Self-Closing Tags | `<img />`, `<input />` |

```jsx
// ✅ Correct - Single root with Fragment
function Example() {
  const name = "React";
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p className="description">Welcome to React</p>
      <img src="photo.jpg" alt="Photo" />
    </>
  );
}
```

### 2.3 Functional Components

Modern React uses functional components—JavaScript functions that return JSX:

```jsx
// Standard function
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Arrow function
const Greeting = () => <h1>Hello, World!</h1>;
```

### 2.4 Component Composition

Components can be nested inside other components to build complex UIs:

```jsx
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
```

---

## 3. Basic Components & Styling

### 3.1 Header Component

```jsx
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
```

### 3.2 Footer Component

```jsx
function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Website</p>
    </footer>
  );
}

export default Footer;
```

> **Key Concept:** `{new Date().getFullYear()}` dynamically displays the current year.

### 3.3 Card Component

```jsx
function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
```

### 3.4 CSS Modules

CSS Modules provide **scoped styling** preventing class name conflicts.

```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

Class names are automatically hashed (e.g., `Button_button_x7h2k`).

---

## 4. Props & Conditional Rendering

### 4.1 Understanding Props

Props (properties) are the mechanism for passing data from parent to child components. They are:
- **Read-only** - Cannot be modified by the child
- **Unidirectional** - Flow from parent to child only

### 4.2 Student Component

A component demonstrating prop usage and validation:

```jsx
import PropTypes from 'prop-types';

function Student({ name, age, isStudent }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Prop validation
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

// Default values
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
```

### 4.3 Conditional Rendering Techniques

#### 1. Ternary Operator
Best for simple two-option scenarios:

```jsx
function UserGreeting({ isLoggedIn, username }) {
  return isLoggedIn ? 
    <h2>Welcome, {username}!</h2> : 
    <h2>Please log in</h2>;
}
```

#### 2. Logical AND (&&)
Best for optional/conditional rendering:

```jsx
function Notification({ hasMessages, count }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasMessages && <p>You have {count} new messages</p>}
    </div>
  );
}
```

#### 3. Early Return
Best for complex conditions or guard clauses:

```jsx
function UserGreeting({ isLoggedIn, username }) {
  if (!isLoggedIn) {
    return <h2>Please log in</h2>;
  }
  return <h2>Welcome, {username}!</h2>;
}
```

#### When to Use Each Pattern

| Pattern | Use Case |
|---------|----------|
| Ternary (`? :`) | Two mutually exclusive options |
| Logical AND (`&&`) | Show/hide a single element |
| Early Return | Multiple conditions, guard clauses |

---

## 5. Lists & Rendering Collections

### 5.1 Basic List Rendering

Use the `map()` method to transform arrays into JSX elements:

```jsx
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => 
        <li key={index}>{fruit}</li>
      )}
    </ul>
  );
}
```

### 5.2 Rendering Objects in Lists

```jsx
function FruitList() {
  const fruits = [
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Banana', calories: 105 },
    { id: 3, name: 'Orange', calories: 45 },
  ];

  return (
    <ul>
      {fruits.map(fruit => 
        <li key={fruit.id}>
          {fruit.name}: {fruit.calories} cal
        </li>
      )}
    </ul>
  );
}
```

### 5.3 Filtering and Sorting

```jsx
// Filtering
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// Sorting (always create a copy first)
const sortedFruits = [...fruits].sort((a, b) => 
  a.name.localeCompare(b.name)
);
```

### 5.4 The Key Prop

Keys help React identify which items have changed.

| ✅ Good Keys | ❌ Bad Keys |
|--------------|-------------|
| `key={item.id}` | `key={index}` - Unstable with reordering |
| `key={item.email}` | `key={Math.random()}` |

### 5.5 Handling Empty States

Always provide feedback when lists are empty:

```jsx
function ItemList({ items }) {
  if (items.length === 0) {
    return <p>No items to display</p>;
  }
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

---

## 6. Event Handling

### 6.1 Basic Event Handling

React events use camelCase naming:

```jsx
function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### 6.2 The Event Object

React wraps native events in a SyntheticEvent for cross-browser compatibility:

```jsx
const handleClick = (e) => {
  console.log(e);              // SyntheticEvent object
  console.log(e.target);       // DOM element that triggered event
  console.log(e.type);         // Event type: "click"
  e.preventDefault();          // Prevent default behavior
  e.stopPropagation();         // Stop event bubbling
};
```

### 6.3 Passing Arguments to Handlers

Use an arrow function wrapper:

```jsx
const handleClick = (name) => {
  console.log(`${name} was clicked`);
};

// In JSX
<button onClick={() => handleClick("Submit")}>Submit</button>
<button onClick={() => handleClick("Cancel")}>Cancel</button>
```

### 6.4 Mouse Events

```jsx
function InteractiveImage() {
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <img 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => e.target.style.display = "none"}
      onDoubleClick={(e) => e.target.style.border = "2px solid red"}
      src="image.jpg"
      alt="Interactive"
    />
  );
}
```

### 6.5 Common Events

| Event | Trigger |
|-------|---------|
| `onClick`, `onDoubleClick` | Click events |
| `onMouseEnter`, `onMouseLeave` | Hover events |
| `onChange`, `onSubmit` | Form events |
| `onKeyDown`, `onKeyUp` | Keyboard events |
| `onFocus`, `onBlur` | Focus events |

### 6.6 Best Practices

```jsx
// ❌ Avoid - Creates new function each render
<button onClick={() => doSomething(item)}>Click</button>

// ✅ Better - Define handler separately
const handleClick = () => doSomething(item);
<button onClick={handleClick}>Click</button>
```

---

## 7. State Management with useState

### 7.1 What is State?

State is data that changes over time. When state updates, React re-renders the component.

### 7.2 The useState Hook

```jsx
const [value, setValue] = useState(initialValue);
```

#### Counter Example

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### 7.3 State with Different Data Types

```jsx
const [name, setName] = useState("Guest");        // String
const [age, setAge] = useState(0);                // Number
const [isActive, setIsActive] = useState(false);  // Boolean
const [user, setUser] = useState({});             // Object
const [items, setItems] = useState([]);           // Array
```

### 7.4 Controlled Form Inputs

In controlled components, React state is the "single source of truth":

```jsx
function FormExample() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("Delivery");

  return (
    <form>
      {/* Text Input */}
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      {/* Number Input */}
      <input 
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      {/* Textarea */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter comment"
      />

      {/* Select Dropdown */}
      <select 
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
      >
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="PayPal">PayPal</option>
      </select>

      {/* Radio Buttons */}
      <label>
        <input 
          type="radio"
          value="Pickup"
          checked={shipping === "Pickup"}
          onChange={(e) => setShipping(e.target.value)}
        />
        Pickup
      </label>
      <label>
        <input 
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={(e) => setShipping(e.target.value)}
        />
        Delivery
      </label>
    </form>
  );
}
```

#### How Controlled Components Work

```
User types → onChange fires → State updates → Re-render → Input shows new value
```

### 7.5 ColorPicker Example

An interactive example combining state with inline styles:

```jsx
function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div>
      <h1>Color Picker</h1>
      <div 
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p>Selected: {color}</p>
      </div>
      <label>Select a Color: </label>
      <input 
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
```

---

## 8. Advanced State Updates

### 8.1 The Updater Function Pattern

When new state depends on previous state, use an updater function:

#### The Problem - Stale State

```jsx
const increment = () => {
  setCount(count + 1);  // Uses stale closure value
  setCount(count + 1);  // Same stale value
  setCount(count + 1);  // Result: count + 1, NOT count + 3
};
```

#### The Solution - Updater Function

```jsx
const increment = () => {
  setCount(prev => prev + 1);  // Uses latest state
  setCount(prev => prev + 1);  // Chains correctly
  setCount(prev => prev + 1);  // Result: count + 3
};
```

#### When to Use Updater Functions

| Scenario | Use Updater? |
|----------|--------------|
| Multiple updates in succession | ✅ Yes |
| State depends on previous value | ✅ Yes |
| Updates inside callbacks/async | ✅ Yes |
| Setting independent value | ❌ No (direct OK) |

```jsx
// ✅ Updater for dependent updates
setCount(prev => prev + 1);

// ✅ Direct value for independent updates
setName("John");
setCount(0);  // Reset to specific value
```

### 8.2 Managing Object State

Objects must be updated **immutably**—never modify directly.

```jsx
function CarForm() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang"
  });

  // ❌ WRONG - Direct mutation
  const wrongUpdate = () => {
    car.year = 2025;
    setCar(car);
  };

  // ✅ CORRECT - Spread operator creates new object
  const handleChange = (field, value) => {
    setCar(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <p>{car.year} {car.make} {car.model}</p>
      <input 
        type="number"
        value={car.year}
        onChange={(e) => handleChange('year', Number(e.target.value))}
      />
    </div>
  );
}
```

### 8.3 Managing Array State

#### Array Operations Reference

| Operation | ❌ Mutating | ✅ Immutable |
|-----------|-------------|--------------|
| Add | `arr.push(item)` | `[...arr, item]` |
| Remove | `arr.splice(i, 1)` | `arr.filter((_, i) => i !== idx)` |
| Update | `arr[i] = newVal` | `arr.map((x, i) => i === idx ? newVal : x)` |

```jsx
function FoodList() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);
  const [newFood, setNewFood] = useState("");

  const addFood = () => {
    if (newFood.trim()) {
      setFoods(prev => [...prev, newFood]);
      setNewFood("");
    }
  };

  const removeFood = (index) => {
    setFoods(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => removeFood(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newFood}
        onChange={(e) => setNewFood(e.target.value)}
        placeholder="Enter food" 
      />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}
```

### 8.4 Managing Arrays of Objects

Combining object and array patterns for complex state:

```jsx
function CarList() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const addCar = () => {
    if (!carMake || !carModel) return;
    
    const newCar = {
      id: Date.now(),  // Simple unique ID
      year: carYear,
      make: carMake,
      model: carModel
    };

    setCars(prev => [...prev, newCar]);

    // Reset form
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const removeCar = (id) => {
    setCars(prev => prev.filter(car => car.id !== id));
  };

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.year} {car.make} {car.model}
            <button onClick={() => removeCar(car.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="form">
        <input 
          type="number"
          value={carYear}
          onChange={(e) => setCarYear(Number(e.target.value))}
          placeholder="Year"
        />
        <input 
          type="text"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
          placeholder="Make"
        />
        <input 
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          placeholder="Model"
        />
        <button onClick={addCar}>Add Car</button>
      </div>
    </div>
  );
}
```

---

## 9. Project: Todo List Application

### 9.1 Features
- Add/Delete tasks
- Reorder tasks (up/down)
- Keyboard support (Enter to add)

### 9.2 Implementation

```jsx
import { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks(prev => [...prev, newTask]);
      setNewTask("");
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  // Move task up
  const moveTaskUp = (index) => {
    if (index > 0) {
      setTasks(prev => {
        const updated = [...prev];
        [updated[index], updated[index - 1]] = 
        [updated[index - 1], updated[index]];
        return updated;
      });
    }
  };

  // Move task down
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      setTasks(prev => {
        const updated = [...prev];
        [updated[index], updated[index + 1]] = 
        [updated[index + 1], updated[index]];
        return updated;
      });
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      
      <div className="input-container">
        <input 
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-message">No tasks yet. Add one above!</p>
      ) : (
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <div className="buttons">
                <button 
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button 
                  className="move-button"
                  onClick={() => moveTaskUp(index)}
                  disabled={index === 0}
                >
                  ☝
                </button>
                <button 
                  className="move-button"
                  onClick={() => moveTaskDown(index)}
                  disabled={index === tasks.length - 1}
                >
                  👇
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default ToDoList;
```

### 9.3 CSS Styling

```css
.to-do-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-container input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-container button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.to-do-list ol {
  list-style: none;
  padding: 0;
}

.to-do-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 5px;
}

.text {
  flex: 1;
}

.buttons {
  display: flex;
  gap: 5px;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.move-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.move-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.empty-message {
  text-align: center;
  color: #666;
  font-style: italic;
}
```

### 9.4 Enhancement Ideas
- Task completion toggle
- Local storage persistence
- Edit functionality
- Filters (all/active/completed)
- Search/filter by text

---

## 10. Side Effects with useEffect

### 10.1 What Are Side Effects?

Operations that interact outside the component: API calls, DOM manipulation, timers, subscriptions.

### 10.2 The useEffect Hook

```jsx
useEffect(() => {
  // Effect code (runs after render)
  return () => { /* Cleanup (optional) */ };
}, [dependencies]);
```

| Dependency Array | When Effect Runs |
|------------------|------------------|
| `[]` (empty) | Once on mount only |
| `[dep1, dep2]` | On mount + when any dependency changes |
| Omitted | After every render (rarely needed) |

### 10.3 Basic useEffect Examples

#### Updating Document Title

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // Runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Runs when count OR color changes
  useEffect(() => {
    console.log(`Count: ${count}, Color: ${color}`);
  }, [count, color]);

  return (
    <div>
      <p style={{ color }}>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setColor(c => c === "green" ? "red" : "green")}>
        Toggle Color
      </button>
    </div>
  );
}
```

### 10.4 Digital Clock - Timers with Cleanup

Timers must be cleaned up to prevent memory leaks:

```jsx
import { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up interval
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function - runs on unmount
    return () => clearInterval(intervalId);
  }, []);  // Empty array = run once on mount

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    const pad = (n) => String(n).padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${meridiem}`;
  };

  return (
    <div className="clock">
      <span>{formatTime()}</span>
    </div>
  );
}
```

#### Memory Leak Prevention

```jsx
// ❌ Memory leak - interval runs forever
useEffect(() => {
  setInterval(() => setTime(new Date()), 1000);
}, []);

// ✅ Proper cleanup
useEffect(() => {
  const id = setInterval(() => setTime(new Date()), 1000);
  return () => clearInterval(id);
}, []);
```

### 10.5 Window Dimensions - Event Listeners

```jsx
import { useState, useEffect } from 'react';

function WindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add listener
    window.addEventListener('resize', handleResize);

    // Cleanup - remove listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
```

### 10.6 Cleanup Patterns Reference

| Resource | Setup | Cleanup |
|----------|-------|---------|
| Interval | `setInterval(fn, ms)` | `clearInterval(id)` |
| Timeout | `setTimeout(fn, ms)` | `clearTimeout(id)` |
| Event Listener | `addEventListener(type, fn)` | `removeEventListener(type, fn)` |
| Subscription | `source.subscribe(fn)` | `subscription.unsubscribe()` |
| Fetch | `fetch(url, { signal })` | `controller.abort()` |

#### Fetch with Abort Controller

```jsx
useEffect(() => {
  const controller = new AbortController();
  
  fetch(url, { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') {
        console.error(err);
      }
    });

  return () => controller.abort();
}, [url]);
```

---

## 11. DOM References with useRef

### 11.1 What is useRef?

Creates a mutable reference that persists across renders but does **NOT** trigger re-renders.

```jsx
const ref = useRef(initialValue);
// ref.current = initialValue
```

### 11.2 useRef vs useState

| Feature | useRef | useState |
|---------|--------|----------|
| Triggers re-render | ❌ No | ✅ Yes |
| Persists across renders | ✅ Yes | ✅ Yes |

### 11.3 Accessing DOM Elements

```jsx
import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

### 11.4 Stopwatch Implementation

```jsx
import { useState, useEffect, useRef } from 'react';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // useRef for values that shouldn't trigger re-renders
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => setIsRunning(false);

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start-button">Start</button>
        <button onClick={stop} className="stop-button">Stop</button>
        <button onClick={reset} className="reset-button">Reset</button>
      </div>
    </div>
  );
}
```

### 11.5 Common useRef Use Cases
- Focus management
- Timer IDs (setInterval/setTimeout)
- DOM element manipulation
- Storing previous values

---

## 12. Global State with Context API

### 12.1 The Problem: Prop Drilling

When data needs to pass through many component layers:

```jsx
// Without Context - Tedious prop drilling
<App>                         // Has user state
  <Header user={user}>        // Just passes down
    <Nav user={user}>         // Just passes down
      <UserMenu user={user}/> // Finally uses it
    </Nav>
  </Header>
</App>
```

### 12.2 The Solution: Context API

Context provides a way to share values without passing props through every level.

#### Three Steps

| Step | API | Purpose |
|------|-----|---------|
| 1. Create | `createContext()` | Create the context object |
| 2. Provide | `<Context.Provider value={}>` | Make value available |
| 3. Consume | `useContext(Context)` | Access value anywhere |

### 12.3 Implementation Example

#### Step 1: Create Context & Provider (ComponentA.jsx)

```jsx
import { useState, createContext } from 'react';
import ComponentB from './ComponentB';

// Create context
export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("BroCode");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>Hello {user}</h2>
      
      {/* Provide value to all children */}
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
```

#### Step 2: Intermediate Component (ComponentB.jsx)

```jsx
import ComponentC from './ComponentC';

function ComponentB() {
  // No need to receive or pass props!
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
```

#### Step 3: Consume Context (ComponentC.jsx)

```jsx
import { useContext } from 'react';
import { UserContext } from './ComponentA';

function ComponentC() {
  // Access value directly
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>Bye {user}</h2>
    </div>
  );
}

export default ComponentC;
```

### 12.4 Advanced Pattern: Context with Updater

Pass both state and setter through context:

```jsx
import { useState, createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Custom hook for easier consumption
export const useTheme = () => useContext(ThemeContext);

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Usage in any child component
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current: {theme} - Click to toggle
    </button>
  );
}
```

### 12.5 When to Use Context

✅ **Good for:** Theme, Authentication, Localization, Shopping cart

❌ **Avoid for:** Data needed by nearby components (use props), frequently changing data (use Redux/Zustand)
- As a replacement for all prop passing

---

## 13. Best Practices & Patterns

### 13.1 Component Design

#### Single Responsibility Principle

```jsx
// ❌ Too many responsibilities
function UserDashboard() {
  // User data + Authentication + Analytics + Notifications + Settings
}

// ✅ Separated concerns
function UserDashboard() {
  return (
    <>
      <UserProfile />
      <UserAnalytics />
      <UserNotifications />
      <UserSettings />
    </>
  );
}
```

#### Props Destructuring

```jsx
// ❌ Verbose
function Student(props) {
  return <div>{props.name} - {props.age}</div>;
}

// ✅ Clean
function Student({ name, age }) {
  return <div>{name} - {age}</div>;
}

// ✅ With defaults
function Button({ text = "Click me", onClick = () => {} }) {
  return <button onClick={onClick}>{text}</button>;
}
```

### 13.2 State Management

| Guideline | Description |
|-----------|-------------|
| Keep state local | Only lift when sharing is needed |
| Use updater functions | When new state depends on previous |
| Never mutate directly | Always create new objects/arrays |
| Colocate state | Keep state close to where it's used |

```jsx
// ✅ Updater for dependent updates
setCount(prev => prev + 1);

// ✅ Direct value for independent updates
setName("John");

// ✅ Immutable object update
setUser(prev => ({ ...prev, name: "John" }));

// ✅ Immutable array update
setItems(prev => [...prev, newItem]);
```

### 13.3 Performance Tips

```jsx
// ❌ Inline function creates new instance each render
<button onClick={() => handleClick(id)}>Click</button>

// ✅ Define handler separately (or use useCallback)
const handleItemClick = () => handleClick(id);
<button onClick={handleItemClick}>Click</button>

// ❌ Index as key (problematic with reordering)
{items.map((item, i) => <Item key={i} data={item} />)}

// ✅ Unique identifier
{items.map(item => <Item key={item.id} data={item} />)}
```

### 13.4 Conditional Rendering Patterns

```jsx
// Early return for guard clauses
if (!data) return <Loading />;
return <DataDisplay data={data} />;

// Ternary for either/or
{isLoggedIn ? <Dashboard /> : <Login />}

// Logical AND for optional
{error && <ErrorMessage error={error} />}
```

### 13.5 Code Organization

```
src/
├── components/
│   ├── common/           # Reusable UI
│   └── features/         # Feature-specific
├── hooks/                # Custom hooks
├── context/              # Context providers
├── utils/                # Utilities
└── App.jsx
```

### 13.6 Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `UserProfile` |
| Functions | camelCase | `handleClick` |
| Event handlers | handle + Action | `handleSubmit` |
| Custom hooks | use + Name | `useLocalStorage` |

---

## 14. Common Pitfalls & Solutions

### 14.1 Infinite Loops

```jsx
// ❌ Infinite loop
useEffect(() => {
  setCount(count + 1);
}, [count]);

// ✅ Use updater
useEffect(() => {
  const id = setInterval(() => setCount(c => c + 1), 1000);
  return () => clearInterval(id);
}, []);
```

### 14.2 Stale Closures

```jsx
// ❌ Stale closure
setInterval(() => setCount(count + 1), 1000);

// ✅ Updater function
setInterval(() => setCount(c => c + 1), 1000);
```

### 14.3 Missing Dependencies

```jsx
// ❌ Missing dependency
useEffect(() => { fetchData(userId); }, []);

// ✅ Include dependencies
useEffect(() => { fetchData(userId); }, [userId]);
```

### 14.4 Mutating State

```jsx
// ❌ Direct mutation - React won't detect
const addItem = () => {
  items.push(newItem);  // Mutates original
  setItems(items);      // Same reference
};

// ✅ Create new array
const addItem = () => {
  setItems([...items, newItem]);
};
```

### 14.5 Forgetting Cleanup

```jsx
// ❌ Memory leak
useEffect(() => {
  window.addEventListener('resize', handleResize);
}, []);

// ✅ Proper cleanup
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 14.6 Key Prop Issues

```jsx
// ❌ Index as key with dynamic list
{items.map((item, i) => <Item key={i} data={item} />)}

// ✅ Stable unique identifier
{items.map(item => <Item key={item.id} data={item} />)}
```

---

## 15. Next Steps & Resources

### Learning Path

| Level | Topics |
|-------|--------|
| **Intermediate** | React Router, Form Libraries, API Integration, Error Boundaries |
| **Advanced** | Redux/Zustand, React Query, Testing, TypeScript, Performance |

### Practice Projects
- Weather App (API, async state)
- E-commerce Cart (complex state, localStorage)
- Blog Platform (CRUD, routing)

### Resources
- Official: https://react.dev
- UI: Material-UI, Chakra UI
- State: Redux Toolkit, Zustand
- Forms: React Hook Form
- Data: React Query, SWR

---

## Quick Reference

```jsx
// useState
const [value, setValue] = useState(initial);
setValue(prev => prev + 1);

// useEffect
useEffect(() => {
  // effect
  return () => { /* cleanup */ };
}, [deps]);

// useRef
const ref = useRef(initial);
ref.current = newValue;  // No re-render

// useContext
const value = useContext(MyContext);
```

---

**Happy Coding! 🚀**
