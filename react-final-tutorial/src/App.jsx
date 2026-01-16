import { useState, useEffect, useReducer, useRef, useMemo, useCallback, useContext, createContext } from 'react';

// ============================================
// 1. COMPONENTS & JSX
// ============================================

// Functional Component
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// ============================================
// 2. STATE MANAGEMENT - useState
// ============================================

function CounterExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">useState Hook</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
        Increment
      </button>
      <button onClick={() => setCount(prev => prev - 1)} className="bg-red-500 text-white px-3 py-1 rounded">
        Decrement (functional update)
      </button>
      <p className="mt-2">User: {user.name}, Age: {user.age}</p>
      <button 
        onClick={() => setUser(prev => ({ ...prev, age: prev.age + 1 }))}
        className="bg-green-500 text-white px-3 py-1 rounded mt-2"
      >
        Increment Age
      </button>
    </div>
  );
}

// ============================================
// 3. SIDE EFFECTS - useEffect
// ============================================

function EffectExample() {
  const [seconds, setSeconds] = useState(0);
  const [data, setData] = useState(null);

  // Effect runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // Effect runs once on mount
  useEffect(() => {
    console.log('Component mounted');
    setData('Initial data loaded');
  }, []);

  // Effect with dependencies and cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">useEffect Hook</h3>
      <p>Timer: {seconds}s</p>
      <p>Data: {data}</p>
    </div>
  );
}

// ============================================
// 4. COMPLEX STATE - useReducer
// ============================================

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">useReducer Hook</h3>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
        +{state.step}
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })} className="bg-red-500 text-white px-3 py-1 rounded mr-2">
        -{state.step}
      </button>
      <button onClick={() => dispatch({ type: 'reset' })} className="bg-gray-500 text-white px-3 py-1 rounded mr-2">
        Reset
      </button>
      <input 
        type="number" 
        value={state.step}
        onChange={(e) => dispatch({ type: 'setStep', payload: Number(e.target.value) })}
        className="border px-2 py-1 w-20"
      />
    </div>
  );
}

// ============================================
// 5. REFS - useRef
// ============================================

function RefExample() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">useRef Hook</h3>
      <p>Render count: {renderCount.current}</p>
      <input ref={inputRef} type="text" className="border px-2 py-1 mr-2" placeholder="Focus me" />
      <button onClick={focusInput} className="bg-purple-500 text-white px-3 py-1 rounded">
        Focus Input
      </button>
    </div>
  );
}

// ============================================
// 6. PERFORMANCE - useMemo & useCallback
// ============================================

function PerformanceExample() {
  const [count, setCount] = useState(0);
  const [items] = useState([1, 2, 3, 4, 5]);

  // Expensive calculation memoized
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return items.reduce((acc, item) => acc + item, 0) * count;
  }, [items, count]);

  // Memoized callback
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(c => c + 1);
  }, []);

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">useMemo & useCallback</h3>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={handleClick} className="bg-indigo-500 text-white px-3 py-1 rounded">
        Increment
      </button>
    </div>
  );
}

// ============================================
// 7. CONTEXT API - useContext
// ============================================

const ThemeContext = createContext();

function ThemeProvider({ children }) {
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

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`p-4 border rounded mb-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <h3 className="font-bold mb-2">useContext Hook</h3>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme} className="bg-yellow-500 text-black px-3 py-1 rounded">
        Toggle Theme
      </button>
    </div>
  );
}

// ============================================
// 8. CONDITIONAL RENDERING
// ============================================

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('home');

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Conditional Rendering</h3>
      
      {/* Ternary operator */}
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
      
      {/* Logical AND */}
      {isLoggedIn && <button className="bg-red-500 text-white px-3 py-1 rounded mr-2">Logout</button>}
      
      {/* Switch-like rendering */}
      {view === 'home' && <p>Home View</p>}
      {view === 'profile' && <p>Profile View</p>}
      {view === 'settings' && <p>Settings View</p>}
      
      <div className="mt-2">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
          Toggle Login
        </button>
        <select onChange={(e) => setView(e.target.value)} className="border px-2 py-1">
          <option value="home">Home</option>
          <option value="profile">Profile</option>
          <option value="settings">Settings</option>
        </select>
      </div>
    </div>
  );
}

// ============================================
// 9. LISTS & KEYS
// ============================================

function ListExample() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy app', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Lists & Keys</h3>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center">
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================
// 10. FORMS & CONTROLLED COMPONENTS
// ============================================

function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Forms & Controlled Components</h3>
      <div className="space-y-2">
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border px-2 py-1 w-full"
        />
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border px-2 py-1 w-full"
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border px-2 py-1 w-full"
        />
        <label className="flex items-center">
          <input 
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className="mr-2"
          />
          Subscribe to newsletter
        </label>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}

// ============================================
// 11. PROPS & COMPONENT COMPOSITION
// ============================================

function Button({ onClick, children, variant = 'primary' }) {
  const colors = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    danger: 'bg-red-500'
  };

  return (
    <button 
      onClick={onClick}
      className={`${colors[variant]} text-white px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
}

function PropsExample() {
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Props & Composition</h3>
      <div className="space-x-2">
        <Button onClick={() => alert('Primary')} variant="primary">
          Primary
        </Button>
        <Button onClick={() => alert('Secondary')} variant="secondary">
          Secondary
        </Button>
        <Button onClick={() => alert('Danger')} variant="danger">
          Danger
        </Button>
      </div>
    </div>
  );
}

// ============================================
// 12. LIFTING STATE UP
// ============================================

function TemperatureInput({ temperature, onTemperatureChange, scale }) {
  return (
    <div className="mb-2">
      <label className="block mb-1">Temperature in {scale}:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        className="border px-2 py-1 w-full"
      />
    </div>
  );
}

function LiftingStateExample() {
  const [celsius, setCelsius] = useState('');

  const toFahrenheit = (c) => (c * 9/5 + 32).toFixed(2);
  const toCelsius = (f) => ((f - 32) * 5/9).toFixed(2);

  const fahrenheit = celsius ? toFahrenheit(parseFloat(celsius)) : '';

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Lifting State Up</h3>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={setCelsius}
        scale="Celsius"
      />
      <p>= {fahrenheit} Fahrenheit</p>
    </div>
  );
}

// ============================================
// MAIN APP
// ============================================

export default function App() {
  return (
    <ThemeProvider>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">React Tutorial - Essential Concepts</h1>
        
        <Welcome name="React Developer" />
        
        <CounterExample />
        <EffectExample />
        <ReducerExample />
        <RefExample />
        <PerformanceExample />
        <ThemedComponent />
        <ConditionalExample />
        <ListExample />
        <FormExample />
        <PropsExample />
        <LiftingStateExample />

        <div className="p-4 border rounded bg-blue-50 mt-6">
          <h3 className="font-bold mb-2">Key Concepts Summary</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Components:</strong> Building blocks of React apps (functional & class-based)</li>
            <li><strong>JSX:</strong> JavaScript XML syntax for describing UI</li>
            <li><strong>Props:</strong> Read-only data passed from parent to child</li>
            <li><strong>State (useState):</strong> Component's mutable data that triggers re-renders</li>
            <li><strong>Effects (useEffect):</strong> Side effects like data fetching, subscriptions, timers</li>
            <li><strong>Reducer (useReducer):</strong> Complex state logic with actions</li>
            <li><strong>Refs (useRef):</strong> Access DOM elements & persist values without re-renders</li>
            <li><strong>Memoization (useMemo/useCallback):</strong> Performance optimization</li>
            <li><strong>Context (useContext):</strong> Share global data without prop drilling</li>
            <li><strong>Conditional Rendering:</strong> Show/hide components based on conditions</li>
            <li><strong>Lists & Keys:</strong> Render arrays with unique keys for optimization</li>
            <li><strong>Forms:</strong> Controlled components manage input state</li>
            <li><strong>Composition:</strong> Build complex UIs from simple components</li>
            <li><strong>Lifting State:</strong> Share state between components via common parent</li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
}