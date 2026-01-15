# Complete React Tutorial - From Basics to Advanced

A comprehensive guide covering React fundamentals through practical examples, progressing from basic components to advanced hooks and Context API.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Section 1: Basic Components & Styling](#section-1-basic-components--styling)
3. [Section 2: Props & Conditional Rendering](#section-2-props--conditional-rendering)
4. [Section 3: Lists & Rendering Collections](#section-3-lists--rendering-collections)
5. [Section 4: Event Handling](#section-4-event-handling)
6. [Section 5: State Management with useState](#section-5-state-management-with-usestate)
7. [Section 6: Advanced State Updates](#section-6-advanced-state-updates)
8. [Section 7: Todo List Project](#section-7-todo-list-project)
9. [Section 8: useEffect & Side Effects](#section-8-useeffect--side-effects)
10. [Section 9: useRef Hook](#section-9-useref-hook)
11. [Best Practices & Patterns](#best-practices--patterns)

---

## Project Setup

### Prerequisites
```bash
Node.js and npm installed
```

### Installation
```bash
npm install
npm run dev
```

### Project Structure
```
react-video-tutorial/
├── src/          # Current working directory
├── src1/         # Basic components
├── src2/         # Props and conditionals
├── src3/         # Lists
├── src4/         # Events
├── src5/         # State basics
├── src6/         # Advanced state
├── src7/         # Todo app
├── src8/         # useEffect & Context
└── public/       # Static assets
```

### Key Configuration Files

**vite.config.js**
- Fast development server
- Hot Module Replacement (HMR)
- React plugin configuration

**eslint.config.js**
- Code quality enforcement
- React-specific rules
- Best practices validation

---

## Section 1: Basic Components & Styling

### Learning Objectives
- Create functional components
- Understand JSX syntax
- Apply CSS styling (regular & modules)
- Component composition

### 1.1 Header Component

**Purpose:** Reusable page header

**Key Concepts:**
- Functional component structure
- JSX elements
- Basic styling

**Example Structure:**
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
```

**CSS Styling:**
- Flexbox for layout
- Navigation styling
- Hover effects

### 1.2 Footer Component

**Purpose:** Reusable page footer

**Key Concepts:**
- Semantic HTML in JSX
- Copyright notices
- Footer styling

**Pattern:**
```jsx
function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Website</p>
    </footer>
  );
}
```

### 1.3 Card Component

**Purpose:** Reusable content container

**Structure:**
- Profile image
- Title/name
- Description
- Styled container

**Key Concepts:**
- Component composition
- Image handling in React
- CSS for card layouts

### 1.4 Food Component

**Purpose:** Simple data display component

**Demonstrates:**
- Basic component structure
- Rendering text and data
- Simple JSX expressions

### 1.5 Button Component with CSS Modules

**Purpose:** Styled button with scoped CSS

**File Structure:**
```
Button/
├── Button.jsx
└── Button.module.css
```

**CSS Modules Benefits:**
1. **Scoped Styling:** Classes are locally scoped
2. **No Conflicts:** Automatic unique class names
3. **Maintainability:** Component-specific styles

**Implementation Pattern:**
```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

**CSS Module Usage:**
- Import styles as object
- Access classes via `styles.className`
- Automatic class name hashing

---

## Section 2: Props & Conditional Rendering

### Learning Objectives
- Pass data between components
- Validate props with PropTypes
- Implement conditional rendering
- Handle default values

### 2.1 Student Component

**Purpose:** Display student information using props

**Props Received:**
- `name` (string): Student's name
- `age` (number): Student's age
- `isStudent` (boolean): Enrollment status

**Implementation Pattern:**
```jsx
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
```

**PropTypes Validation:**
```jsx
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
```

**Default Props:**
```jsx
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
```

**Benefits:**
- Type safety during development
- Clear component API
- Prevents runtime errors
- Self-documenting code

### 2.2 UserGreeting Component

**Purpose:** Conditional rendering based on login status

**Props:**
- `isLoggedIn` (boolean): User authentication status
- `username` (string): User's name

**Conditional Rendering Techniques:**

**1. Ternary Operator:**
```jsx
return isLoggedIn ? 
  <h2>Welcome {username}</h2> : 
  <h2>Please log in</h2>;
```

**2. Logical AND (&&):**
```jsx
return (
  <>
    {isLoggedIn && <h2>Welcome {username}</h2>}
    {!isLoggedIn && <h2>Please log in</h2>}
  </>
);
```

**3. Early Return:**
```jsx
if (isLoggedIn) {
  return <h2>Welcome {username}</h2>;
}
return <h2>Please log in</h2>;
```

**When to Use Each:**
- **Ternary:** Simple two-option rendering
- **Logical AND:** Optional rendering
- **Early Return:** Complex conditions or multiple returns

---

## Section 3: Lists & Rendering Collections

### Learning Objectives
- Render arrays of data
- Understand the importance of keys
- Filter and transform lists
- Handle empty states

### 3.1 List Component

**Purpose:** Display collections of data efficiently

**Key Concepts:**

**1. Basic List Rendering:**
```jsx
const fruits = ['Apple', 'Banana', 'Orange'];

function List() {
  return (
    <ul>
      {fruits.map((fruit, index) => 
        <li key={index}>{fruit}</li>
      )}
    </ul>
  );
}
```

**2. Objects in Lists:**
```jsx
const fruits = [
  { id: 1, name: 'Apple', calories: 95 },
  { id: 2, name: 'Banana', calories: 105 },
  { id: 3, name: 'Orange', calories: 45 },
];

function List() {
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

**3. Filtering Lists:**
```jsx
const lowCalFruits = fruits.filter(f => f.calories < 100);
```

**4. Sorting Lists:**
```jsx
const sortedFruits = [...fruits].sort((a, b) => 
  a.name.localeCompare(b.name)
);
```

**The Key Prop:**

**Why Keys Matter:**
- Help React identify which items changed
- Improve performance
- Maintain component state correctly

**Good Keys:**
```jsx
<li key={item.id}>        // ✅ Unique ID
<li key={item.email}>     // ✅ Unique field
```

**Bad Keys:**
```jsx
<li key={index}>          // ❌ Array index (can cause issues)
<li key={Math.random()}>  // ❌ Random values (breaks reconciliation)
```

**Empty State Handling:**
```jsx
{items.length === 0 ? 
  <p>No items to display</p> : 
  <ul>{items.map(item => ...)}</ul>
}
```

---

## Section 4: Event Handling

### Learning Objectives
- Handle user interactions
- Work with event objects
- Understand event types
- Prevent default behaviors

### 4.1 Button Component

**Purpose:** Demonstrate various click events

**Event Types:**

**1. Basic Click:**
```jsx
function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**2. Event Object:**
```jsx
const handleClick = (e) => {
  console.log(e);              // SyntheticEvent
  console.log(e.target);       // Button element
  console.log(e.type);         // "click"
};
```

**3. Passing Arguments:**
```jsx
const handleClick = (name) => {
  console.log(`${name} clicked`);
};

<button onClick={() => handleClick("Button1")}>Click</button>
```

**4. Double Click:**
```jsx
const handleDoubleClick = (e) => {
  e.target.textContent = "Double Clicked!";
};

<button onDoubleClick={handleDoubleClick}>Double Click</button>
```

### 4.2 Pic Component

**Purpose:** Image interaction events

**Mouse Events:**

**1. Click Events:**
```jsx
const handleClick = (e) => {
  e.target.style.display = "none";
};

<img onClick={handleClick} src="image.jpg" alt="Image" />
```

**2. Hover Events:**
```jsx
const handleMouseEnter = (e) => {
  e.target.style.transform = "scale(1.1)";
};

const handleMouseLeave = (e) => {
  e.target.style.transform = "scale(1)";
};

<img 
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  src="image.jpg"
/>
```

**Common Event Types:**
- `onClick` - Mouse click
- `onDoubleClick` - Double click
- `onMouseEnter` - Mouse enters element
- `onMouseLeave` - Mouse leaves element
- `onChange` - Input value changes
- `onSubmit` - Form submission
- `onKeyDown` - Key pressed
- `onFocus` - Element receives focus
- `onBlur` - Element loses focus

**Event Handler Best Practices:**
1. Name handlers with "handle" prefix
2. Use arrow functions for inline handlers
3. Avoid inline arrow functions in JSX (re-renders)
4. Pass minimal data to handlers

---

## Section 5: State Management with useState

### Learning Objectives
- Understand React state
- Use the useState hook
- Handle form inputs
- Create interactive components

### 5.1 Counter Component

**Purpose:** Simple state management example

**Implementation:**
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**Key Concepts:**
- `useState` returns `[state, setState]`
- State updates trigger re-renders
- State is component-specific
- Don't mutate state directly

### 5.2 MyComponent

**Purpose:** Basic state with string values

**Example:**
```jsx
function MyComponent() {
  const [name, setName] = useState("Guest");

  const updateName = () => {
    setName("John Doe");
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}
```

### 5.3 OnChange Component

**Purpose:** Controlled form inputs

**Implementation:**
```jsx
function OnChange() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("Delivery");

  return (
    <div>
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
    </div>
  );
}
```

**Controlled Components:**
- React state is "single source of truth"
- Input value is controlled by state
- Changes update state via onChange
- State updates re-render component

### 5.4 ColorPicker Component

**Purpose:** Interactive color selection

**Implementation:**
```jsx
function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div 
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px"
        }}
      >
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input 
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
```

**Features:**
- Live color preview
- Hex color display
- Inline styles with state
- Color input type

---

## Section 6: Advanced State Updates

### Learning Objectives
- Update state based on previous state
- Manage object state immutably
- Handle array state correctly
- Work with complex state structures

### 6.1 UpdaterFunction Component

**Purpose:** Demonstrate proper state updates

**Problem - Incorrect:**
```jsx
const increment = () => {
  setCount(count + 1);  // ❌ Uses stale state
  setCount(count + 1);  // ❌ Both use same count value
  setCount(count + 1);  // Result: count + 1, not count + 3
};
```

**Solution - Updater Function:**
```jsx
const increment = () => {
  setCount(prevCount => prevCount + 1);  // ✅ Uses latest state
  setCount(prevCount => prevCount + 1);  // ✅ Chains correctly
  setCount(prevCount => prevCount + 1);  // Result: count + 3
};
```

**When to Use Updater Functions:**
- Multiple state updates in succession
- State depends on previous value
- Asynchronous updates
- Ensuring correct state transitions

**Example:**
```jsx
function UpdaterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1);
  };

  const decrement = () => {
    setCount(c => c - 1);
  };

  const reset = () => {
    setCount(0);  // Direct value OK when not dependent
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### 6.2 ObjectStateUpdater Component

**Purpose:** Manage object state immutably

**Immutable Updates:**
```jsx
function ObjectStateUpdater() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang"
  });

  // ❌ Wrong - Mutates state directly
  const updateYear = () => {
    car.year = 2025;  // Never do this!
  };

  // ✅ Correct - Creates new object
  const updateYear = () => {
    setCar(prevCar => ({
      ...prevCar,
      year: 2025
    }));
  };

  const updateMake = (e) => {
    setCar(c => ({ ...c, make: e.target.value }));
  };

  const updateModel = (e) => {
    setCar(c => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>Your car: {car.year} {car.make} {car.model}</p>
      
      <input 
        type="number"
        value={car.year}
        onChange={(e) => setCar(c => ({ 
          ...c, 
          year: Number(e.target.value) 
        }))}
      />
      
      <input 
        type="text"
        value={car.make}
        onChange={updateMake}
      />
      
      <input 
        type="text"
        value={car.model}
        onChange={updateModel}
      />
    </div>
  );
}
```

**Spread Operator (`...`):**
- Creates shallow copy of object
- Preserves existing properties
- Overrides specified properties
- Essential for immutability

### 6.3 ArrayStateUpdater Component

**Purpose:** Manage array state correctly

**Array Operations:**

**1. Add Item:**
```jsx
const [foods, setFoods] = useState(["Apple", "Banana"]);

const addFood = () => {
  const newFood = document.getElementById("foodInput").value;
  setFoods(f => [...f, newFood]);  // Add to end
};
```

**2. Remove Item:**
```jsx
const removeFood = (index) => {
  setFoods(foods.filter((_, i) => i !== index));
};
```

**3. Update Item:**
```jsx
const updateFood = (index, newValue) => {
  setFoods(foods.map((food, i) => 
    i === index ? newValue : food
  ));
};
```

**Complete Example:**
```jsx
function ArrayStateUpdater() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  const addFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(f => [...f, newFood]);
  };

  const removeFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => removeFood(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food" />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}
```

**Array Methods for State:**
- `[...array, item]` - Add to end
- `[item, ...array]` - Add to beginning
- `array.filter()` - Remove items
- `array.map()` - Update items
- `array.slice()` - Get portion
- Never use `push()`, `pop()`, `splice()` directly

### 6.4 ListOfObjects Component

**Purpose:** Manage complex array state

**Implementation:**
```jsx
function ListOfObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const addCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    };

    setCars(c => [...c, newCar]);

    // Reset form
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const removeCar = (index) => {
    setCars(c => c.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}
            <button onClick={() => removeCar(index)}>Remove</button>
          </li>
        ))}
      </ul>

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
  );
}
```

**Key Patterns:**
- Separate state for form inputs
- Create new object for each item
- Use index for temporary keys (better: unique ID)
- Reset form after adding

---

## Section 7: Todo List Project

### Learning Objectives
- Build a complete application
- Combine multiple state management techniques
- Implement CRUD operations
- Handle complex user interactions

### 7.1 ToDoList Component

**Purpose:** Full-featured todo list application

**Features:**
1. Add new tasks
2. Delete tasks
3. Move tasks up/down
4. Toggle completion (if implemented)

**State Structure:**
```jsx
const [tasks, setTasks] = useState([
  "Task 1",
  "Task 2",
  "Task 3"
]);

const [newTask, setNewTask] = useState("");
```

**Implementation:**

**1. Add Task:**
```jsx
const addTask = () => {
  if (newTask.trim() !== "") {
    setTasks(t => [...t, newTask]);
    setNewTask("");
  }
};

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
};
```

**2. Delete Task:**
```jsx
const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index));
};
```

**3. Move Task Up:**
```jsx
const moveTaskUp = (index) => {
  if (index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = 
    [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
};
```

**4. Move Task Down:**
```jsx
const moveTaskDown = (index) => {
  if (index < tasks.length - 1) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = 
    [updatedTasks[index + 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
};
```

**Complete Component:**
```jsx
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      
      <div>
        <input 
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button 
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button 
              className="move-button"
              onClick={() => moveTaskUp(index)}
            >
              ☝
            </button>
            <button 
              className="move-button"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
```

**CSS Styling Considerations:**
```css
.to-do-list {
  max-width: 600px;
  margin: 0 auto;
}

.to-do-list ol {
  list-style: none;
  padding: 0;
}

.to-do-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
}

.text {
  flex: 1;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.move-button {
  background-color: #007bff;
  color: white;
}
```

**Enhancements (Exercise):**
1. Add task completion toggle
2. Persist tasks to localStorage
3. Add edit functionality
4. Filter completed/active tasks
5. Add due dates
6. Search functionality

---

## Section 8: useEffect & Side Effects

### Learning Objectives
- Understand the useEffect hook
- Handle side effects properly
- Implement cleanup functions
- Work with dependencies

### 8.1 Counter Component (with useEffect)

**Purpose:** Demonstrate basic useEffect usage

**Implementation:**
```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);  // Runs when count changes

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);  // Runs when either changes

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const changeColor = () => {
    setColor(c => c === "green" ? "red" : "green");
  };

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
```

**useEffect Syntax:**
```jsx
useEffect(() => {
  // Side effect code
  
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]);
```

**Dependency Array:**
- `[]` - Run once on mount
- `[dep1, dep2]` - Run when dependencies change
- No array - Run after every render

### 8.2 DigitalClock Component

**Purpose:** Real-time clock with intervals

**Implementation:**
```jsx
import { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);  // Cleanup
    };
  }, []);  // Run once on mount

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
```

**Key Concepts:**
- `setInterval` for periodic updates
- Cleanup prevents memory leaks
- Empty dependency array for mount-only effect
- Date formatting functions

**Common Pitfall:**
```jsx
// ❌ Memory leak - no cleanup
useEffect(() => {
  setInterval(() => {
    setTime(new Date());
  }, 1000);
}, []);

// ✅ Proper cleanup
useEffect(() => {
  const id = setInterval(() => {
    setTime(new Date());
  }, 1000);
  
  return () => clearInterval(id);
}, []);
```

### 8.3 WinDim Component

**Purpose:** Track window dimensions

**Implementation:**
```jsx
import { useState, useEffect } from 'react';

function WinDim() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
}
```

**Key Concepts:**
- Event listener setup
- Cleanup removes listeners
- Prevents memory leaks
- Window API access

**useEffect Cleanup Patterns:**

**1. Timers:**
```jsx
useEffect(() => {
  const timer = setTimeout(() => {...}, 1000);
  return () => clearTimeout(timer);
}, []);
```

**2. Event Listeners:**
```jsx
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**3. Subscriptions:**
```jsx
useEffect(() => {
  const subscription = dataSource.subscribe();
  return () => subscription.unsubscribe();
}, []);
```

### 8.4 Context API Components

**Purpose:** Avoid prop drilling with Context

**ComponentA (Provider):**
```jsx
import { useState, createContext } from 'react';
import ComponentB from './ComponentB';

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("BroCode");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>Hello {user}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
```

**ComponentB (Intermediate):**
```jsx
import ComponentC from './ComponentC';

function ComponentB() {
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
}
```

**ComponentC (Consumer):**
```jsx
import { useContext } from 'react';
import { UserContext } from './ComponentA';

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>Bye {user}</h2>
    </div>
  );
}
```

**Context API Steps:**
1. Create context: `createContext()`
2. Provide value: `<Context.Provider value={...}>`
3. Consume value: `useContext(Context)`

**Benefits:**
- Avoids prop drilling
- Global state management
- Cleaner component tree
- Better code organization

**When to Use Context:**
- Theme data (dark/light mode)
- User authentication
- Language preferences
- Shopping cart state
- Any data needed by many components

---

## Section 9: useRef Hook

### Learning Objectives
- Understand useRef purpose
- Access DOM elements directly
- Persist values without re-renders
- Implement practical applications

### 9.1 UseRef Component

**Purpose:** DOM manipulation with useRef

**Implementation:**
```jsx
import { useRef } from 'react';

function UseRef() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
  };

  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
  };

  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
  };

  return (
    <div>
      <button onClick={handleClick1}>Click me 1</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3</button>
      <input ref={inputRef3} />
    </div>
  );
}
```

**Key Concepts:**
- `useRef` creates mutable reference
- `.current` accesses the DOM element
- Direct DOM manipulation
- No re-renders on change

**useRef vs useState:**

```jsx
// useState - Causes re-render
const [count, setCount] = useState(0);
setCount(1);  // Component re-renders

// useRef - No re-render
const countRef = useRef(0);
countRef.current = 1;  // No re-render
```

**Common Use Cases:**
1. Focus management
2. Scroll position
3. Canvas drawing
4. Video/audio controls
5. Previous state values
6. Timer IDs

### 9.2 StopWatch Component

**Purpose:** Practical stopwatch implementation

**Implementation:**
```jsx
import { useState, useEffect, useRef } from 'react';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
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

**Why useRef Here:**
- `intervalIdRef` - Stores interval ID without causing re-renders
- `startTimeRef` - Tracks start time across renders
- Prevents unnecessary re-renders
- Maintains consistent timing

**Key Patterns:**
1. Use state for rendered values (`elapsedTime`)
2. Use ref for non-rendered values (`intervalId`)
3. Cleanup intervals in useEffect
4. Calculate elapsed time properly

**CSS for StopWatch:**
```css
.stopwatch {
  text-align: center;
  font-family: monospace;
}

.display {
  font-size: 75px;
  color: #00ff00;
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.controls button {
  font-size: 20px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.start-button {
  background-color: #4CAF50;
  color: white;
}

.stop-button {
  background-color: #f44336;
  color: white;
}

.reset-button {
  background-color: #2196F3;
  color: white;
}
```

---
In React, **`useRef`** is a Hook that lets you create a **mutable reference** that persists across renders **without causing a re-render when it changes**.

It serves two primary purposes:

* * *

## 1. Referencing DOM elements (most common use)

`useRef` allows you to directly access a DOM node created by React.

### Example

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

### Key points

* `inputRef.current` points to the **actual DOM element**
    
* Useful for:
    
    * Focusing inputs
        
    * Scrolling
        
    * Measuring element size/position
        
    * Integrating with non-React libraries
        

* * *

## 2. Storing mutable values without re-rendering

`useRef` can store **any value**, not just DOM nodes. Unlike `useState`, changing `.current` **does not trigger a re-render**.

### Example

```jsx
import { useRef, useState } from "react";

function RenderCounter() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current++;

  return (
    <div>
      <p>State count: {count}</p>
      <p>Render count: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Why this works

* `renderCount` persists across renders
    
* Updating it doesn’t cause an infinite render loop
    
* Perfect for:
    
    * Previous values
        
    * Timers / intervals
        
    * Flags (e.g., `isFirstRender`)
        
    * Caching values
        

* * *

## How `useRef` works internally (conceptually)

```js
const ref = useRef(initialValue);

// ref = { current: initialValue }
```

* The **same object** is returned on every render
    
* Only `.current` is mutable
    

* * *

## `useRef` vs `useState`

| Feature | useRef | useState |
| --- | --- | --- |
| Triggers re-render | ❌ No | ✅ Yes |
| Persists across renders | ✅ Yes | ✅ Yes |
| Causes UI update | ❌ No | ✅ Yes |
| Used for DOM access | ✅ Yes | ❌ No |

* * *

## When **not** to use `useRef`

* When the value should affect what is rendered → use `useState`
    
* As a replacement for state (bad practice)
    

* * *

## Common real-world use cases

* Accessing input values imperatively
    
* Storing timeout/interval IDs
    
* Tracking previous props/state
    
* Preventing effects from running on first render
    

* * *

### One-line summary

> **`useRef` stores a persistent, mutable value that does not trigger re-renders and is commonly used for DOM access or instance-like variables.**

If you want, I can also explain:

* `useRef` vs `useEffect`
    
* How to get previous state using `useRef`
    
* Why `useRef` is preferred over `document.querySelector` in React

## Best Practices & Patterns

### Component Design

**1. Single Responsibility:**
```jsx
// ❌ Too many responsibilities
function UserDashboard() {
  // User data
  // Authentication
  // Analytics
  // Notifications
  // Settings
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

**2. Props Destructuring:**
```jsx
// ❌ Verbose
function Student(props) {
  return <div>{props.name} - {props.age}</div>;
}

// ✅ Cleaner
function Student({ name, age }) {
  return <div>{name} - {age}</div>;
}
```

**3. Default Props:**
```jsx
function Button({ text = "Click me", onClick = () => {} }) {
  return <button onClick={onClick}>{text}</button>;
}
```

### State Management

**1. State Location:**
- Keep state as local as possible
- Lift state up when shared
- Use Context for global state

**2. State Updates:**
```jsx
// ✅ Updater function when dependent on previous
setCount(prev => prev + 1);

// ✅ Direct value when independent
setName("John");
```

**3. Immutability:**
```jsx
// ❌ Mutation
state.push(item);
state.property = value;

// ✅ Immutable
setState([...state, item]);
setState({ ...state, property: value });
```

### Performance

**1. Avoid Inline Functions in JSX:**
```jsx
// ❌ Creates new function each render
<button onClick={() => handleClick(id)}>Click</button>

// ✅ Memoized handler
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
<button onClick={handleClick}>Click</button>
```

**2. Key Prop:**
```jsx
// ❌ Index as key (problematic)
{items.map((item, index) => <div key={index}>{item}</div>)}

// ✅ Unique identifier
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

**3. Conditional Rendering:**
```jsx
// ✅ Early return
if (!data) return <Loading />;
return <DataDisplay data={data} />;

// ✅ Ternary for simple cases
{isLoggedIn ? <Dashboard /> : <Login />}

// ✅ Logical AND for optional rendering
{error && <ErrorMessage error={error} />}
```

### Code Organization

**1. File Structure:**
```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   ├── features/
│   │   ├── TodoList/
│   │   │   ├── TodoList.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoList.css
├── hooks/
│   └── useLocalStorage.js
├── context/
│   └── UserContext.jsx
├── utils/
│   └── formatters.js
└── App.jsx
```

**2. Custom Hooks:**
```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

**3. Constants:**
```jsx
// constants.js
export const COLORS = {
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
};

export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts',
};
```

### Naming Conventions

**1. Components:** PascalCase
```jsx
function UserProfile() { }
function TodoList() { }
```

**2. Functions:** camelCase
```jsx
const handleClick = () => { };
const fetchUserData = () => { };
```

**3. Constants:** UPPER_SNAKE_CASE
```jsx
const MAX_ITEMS = 100;
const API_BASE_URL = 'https://api.example.com';
```

**4. Event Handlers:** handle prefix
```jsx
const handleSubmit = () => { };
const handleChange = () => { };
const handleDelete = () => { };
```

---

## Next Steps

### Intermediate Topics
1. **React Router** - Navigation between pages
2. **Form Validation** - Using libraries like Formik or React Hook Form
3. **API Integration** - Fetch data from APIs
4. **Error Boundaries** - Graceful error handling
5. **Code Splitting** - Lazy loading components

### Advanced Topics
1. **State Management Libraries** - Redux, Zustand, Recoil
2. **Server State** - React Query, SWR
3. **Testing** - Jest, React Testing Library
4. **TypeScript** - Type safety in React
5. **Performance Optimization** - memo, useMemo, useCallback
6. **Custom Hooks** - Reusable logic extraction
7. **Compound Components** - Advanced component patterns

### Project Ideas
1. **Weather App** - API integration, geolocation
2. **E-commerce Cart** - State management, local storage
3. **Blog Platform** - CRUD operations, routing
4. **Chat Application** - Real-time updates, WebSockets
5. **Dashboard** - Data visualization, charts
6. **Recipe App** - Search, filters, favorites

### Resources
- **Official React Docs:** https://react.dev
- **React Patterns:** https://reactpatterns.com
- **Component Libraries:** Material-UI, Chakra UI, Ant Design
- **State Management:** Redux Toolkit, Zustand
- **Forms:** React Hook Form, Formik
- **Routing:** React Router
- **Testing:** Jest, React Testing Library

---

## Common Pitfalls & Solutions

### 1. Infinite Loops in useEffect
```jsx
// ❌ Causes infinite loop
useEffect(() => {
  setCount(count + 1);
}, [count]);

// ✅ Fixed with proper dependencies
useEffect(() => {
  // Run only on mount
}, []);
```

### 2. Stale Closures
```jsx
// ❌ Uses stale count value
useEffect(() => {
  const interval = setInterval(() => {
    setCount(count + 1);  // Always uses initial count
  }, 1000);
  return () => clearInterval(interval);
}, []);

// ✅ Uses updater function
useEffect(() => {
  const interval = setInterval(() => {
    setCount(c => c + 1);  // Uses latest count
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

### 3. Missing Dependencies
```jsx
// ❌ ESLint warning
useEffect(() => {
  fetchData(userId);
}, []);  // userId should be in dependencies

// ✅ Include all dependencies
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### 4. Mutating State
```jsx
// ❌ Direct mutation
const addItem = () => {
  items.push(newItem);  // Wrong!
  setItems(items);
};

// ✅ Create new array
const addItem = () => {
  setItems([...items, newItem]);
};
```

### 5. Key Prop Issues
```jsx
// ❌ Index as key with dynamic list
{items.map((item, index) => 
  <Item key={index} data={item} />
)}

// ✅ Stable unique identifier
{items.map(item => 
  <Item key={item.id} data={item} />
)}
```

---

## Summary

This tutorial covered:

1. ✅ **React Fundamentals** - Components, JSX, Props
2. ✅ **Styling** - CSS, CSS Modules
3. ✅ **State Management** - useState, complex state
4. ✅ **Side Effects** - useEffect, cleanup
5. ✅ **Refs** - useRef, DOM manipulation
6. ✅ **Context** - Global state without prop drilling
7. ✅ **Best Practices** - Code organization, patterns
8. ✅ **Real Projects** - Todo List, Stopwatch, Clock

You now have a solid foundation in React. Practice by building projects and exploring advanced topics!

Happy Coding! 🚀