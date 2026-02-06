# Chatbot-Sentiment-Analysis

A simple React-based chatbot that analyzes the sentiment of user messages and classifies them as **Positive**, **Negative**, or **Neutral**.

![React](https://img.shields.io/badge/React-18.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 About The Project

This is a beginner-friendly React project that demonstrates:
- Basic React components and props
- State management with `useState`
- Form handling
- Conditional rendering
- Simple sentiment analysis logic

The chatbot uses keyword-based sentiment analysis to determine whether a message is positive, negative, or neutral.

## 🎯 Features

- ✅ Real-time sentiment analysis
- ✅ Color-coded message display (Green for positive, Red for negative, Gray for neutral)
- ✅ Message history with timestamps
- ✅ Clean and simple UI
- ✅ Fully responsive design
- ✅ No external API or dependencies required


## 🛠️ Built With

- **React** - Frontend library
- **CSS3** - Styling
- **JavaScript (ES6+)** - Logic

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sentiment-chatbot.git
   ```

2. **Navigate to project directory**
   ```bash
   cd sentiment-chatbot
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   The app will automatically open at `http://localhost:3000`

## 📁 Project Structure

```
sentiment-chatbot/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header component
│   │   ├── ChatMessage.jsx     # Message display component
│   │   ├── ChatInput.jsx       # Input form component
│   │   └── Legend.jsx          # Color legend component
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # All styles
│   └── index.js                # Entry point
├── package.json
└── README.md
```

## 💡 How It Works

### Sentiment Analysis Algorithm

The chatbot uses a simple keyword-matching algorithm:

1. **Positive Words**: good, great, awesome, excellent, happy, love, wonderful, fantastic, amazing, perfect, best
2. **Negative Words**: bad, terrible, awful, horrible, hate, worst, poor, sad, angry, frustrated

The algorithm:
- Converts the message to lowercase
- Counts how many positive words are found
- Counts how many negative words are found
- Compares the counts to determine sentiment

```javascript
if (positiveCount > negativeCount) → Positive
else if (negativeCount > positiveCount) → Negative
else → Neutral
```

## 📚 Code Explanation & Concepts

### 1. React Components

**What are Components?**
Components are reusable pieces of UI. Think of them like LEGO blocks - you build your app by combining smaller pieces.

```javascript
// This is a functional component
function Header() {
  return <div>Hello World</div>;
}
```

**Why use components?**
- Reusability: Write once, use many times
- Organization: Each component has one job
- Maintainability: Easy to find and fix bugs

### 2. Props (Properties)

**What are Props?**
Props are how we pass data from parent to child components. Like passing parameters to a function.

```javascript
// Parent component (App.jsx)
<ChatMessage text="Hello" sentiment="positive" />

// Child component (ChatMessage.jsx)
function ChatMessage(props) {
  return <div>{props.text}</div>; // Displays: Hello
}
```

**Key Points:**
- Props flow **downward** (parent → child)
- Props are **read-only** (cannot be changed by child)
- Props make components flexible and reusable

### 3. State Management with useState

**What is State?**
State is data that can change over time. When state changes, React re-renders the component.

```javascript
// Creating state
const [messages, setMessages] = useState([]);
//     ↑            ↑              ↑
//  current value  updater      initial value
```

**How it works in our app:**

```javascript
// ChatInput.jsx - Input field state
const [inputValue, setInputValue] = useState('');

// When user types:
function handleInputChange(e) {
  setInputValue(e.target.value); // Updates state
}

// The input always shows current state:
<input value={inputValue} onChange={handleInputChange} />
```

**Why use state?**
- Track changing data (user input, messages, etc.)
- Trigger re-renders when data changes
- Keep UI in sync with data

### 4. Event Handling

**Form Submission:**
```javascript
function handleSubmit(e) {
  e.preventDefault(); // Stop page refresh
  // Process the form...
}

<form onSubmit={handleSubmit}>
```

**Why preventDefault()?**
By default, forms refresh the page when submitted. We prevent this to keep our app running smoothly.

**Input Changes:**
```javascript
<input onChange={handleInputChange} />
```
The `onChange` event fires every time the user types a character.

### 5. Conditional Rendering

**Showing different UI based on conditions:**

```javascript
{messages.length === 0 ? (
  <p>No messages</p>  // Show this if no messages
) : (
  <MessageList />      // Show this if messages exist
)}
```

**This is like an if-else statement in JSX:**
- If condition is true → show first option
- If condition is false → show second option

### 6. Array Methods

**map() - Transform each item in an array:**

```javascript
messages.map(function(message) {
  return <ChatMessage key={message.id} text={message.text} />;
})
```

**What happens:**
1. Loop through each message
2. Create a ChatMessage component for each one
3. Return an array of components
4. React displays them all

**Why key prop?**
```javascript
<ChatMessage key={message.id} />
```
React uses `key` to track which items changed. Always use unique keys when mapping arrays.

### 7. Spread Operator (...)

**Adding items to arrays:**

```javascript
// Old array: [1, 2, 3]
const newArray = [...messages, newMessage];
// New array: [1, 2, 3, newMessage]
```

**Why use it?**
- State should never be mutated directly
- Spread creates a new array with old items + new item
- React detects the change and re-renders

### 8. String Methods

**toLowerCase() - Convert to lowercase:**
```javascript
"Hello World".toLowerCase() // "hello world"
```
Used for case-insensitive matching.

**includes() - Check if string contains substring:**
```javascript
"I love coding".includes("love") // true
```

**charAt() and slice() - Capitalize first letter:**
```javascript
const word = "positive";
word.charAt(0).toUpperCase() + word.slice(1)
// "P" + "ositive" = "Positive"
```

### 9. CSS Class Naming

**Dynamic classes based on data:**

```javascript
// Combine static and dynamic class names
className={'message-card ' + getSentimentClass()}
// Result: "message-card positive" or "message-card negative"
```

**This allows different styling based on sentiment:**
```css
.message-card.positive { background: green; }
.message-card.negative { background: red; }
```

### 10. Data Flow Architecture

**How data moves in our app:**

```
User types → ChatInput (state) → Send clicked
                                      ↓
                             handleSendMessage (App.jsx)
                                      ↓
                              analyzeSentiment()
                                      ↓
                          Create message object
                                      ↓
                         Update messages state
                                      ↓
                            React re-renders
                                      ↓
                         ChatMessage displays
```

**Key Principle: Unidirectional Data Flow**
- Data flows DOWN (parent → child) via props
- Events flow UP (child → parent) via callback functions
- State lives in parent, passed down as needed

## 🎨 Usage Examples

Try these messages:

**Positive Messages:**
- "I love this amazing project!"
- "This is great and wonderful!"

**Negative Messages:**
- "This is terrible and frustrating"
- "I hate this awful experience"

**Neutral Messages:**
- "The sky is blue"
- "I went to the store today"

## 🔧 Customization

### Adding More Keywords

Edit the keyword arrays in `App.jsx`:

```javascript
// Add more positive words
const positiveWords = ['good', 'great', 'awesome', 'yourword'];

// Add more negative words
const negativeWords = ['bad', 'terrible', 'awful', 'yourword'];
```

### Changing Colors

Edit the colors in `App.css`:

```css
.message-card.positive {
  background: #d4edda; /* Change this color */
  border-color: #28a745;
}
```

### Improving the Algorithm

**Current:** Simple keyword count
**Enhancement ideas:**
1. Weight certain words more heavily
2. Check word order (e.g., "not good" is negative)
3. Use sentiment intensity scores
4. Integrate ML-based sentiment analysis API

## 📝 Future Enhancements

- [ ] Add sentiment score percentage
- [ ] Implement emoji reactions
- [ ] Save chat history to local storage
- [ ] Add dark mode
- [ ] Export chat as PDF
- [ ] Integrate with real sentiment analysis API
- [ ] Add message editing/deletion
- [ ] Implement message search functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/ArlieRohan)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com


---

⭐ **Star this repository if you found it helpful!**
