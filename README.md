# advanced-react-patterns
A collection of common React design patterns for writing scalable and maintainable applications.

# Advanced React Patterns 🚀

A collection of React design patterns to improve reusability, maintainability, and performance in modern React applications.

## 📌 Features
- Higher-Order Components (HOC)
- Render Props Pattern
- Compound Components
- Context API
- Fully typed with TypeScript
- Dark/Light theme toggle using Context API

---

## 📂 Project Structure
```
advanced-react-patterns/
│── src/
│   ├── patterns/
│   │   ├── HigherOrderComponent/
│   │   │   ├── withLogger.tsx
│   │   │   ├── Example.tsx
│   │   ├── RenderProps/
│   │   │   ├── MouseTracker.tsx
│   │   │   ├── Example.tsx
│   │   ├── CompoundComponents/
│   │   │   ├── Tabs.tsx
│   │   │   ├── Example.tsx
│   │   ├── ContextAPI/
│   │   │   ├── ThemeProvider.tsx
│   │   │   ├── useTheme.ts
│   │   │   ├── Example.tsx
│   ├── App.tsx
│   ├── index.tsx
│── README.md
│── package.json
│── tsconfig.json
│── .gitignore
│── LICENSE
```
---

## 🚀 Getting Started

## 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (LTS recommended)
- **npm** (or `npx`)
- **Git** (for version control)

## 2️⃣ Installation & Setup
Clone the repo and install dependencies:

```sh
git clone https://github.com/root2ja/advanced-react-patterns.git
cd advanced-react-patterns
npm install
```
## 3️⃣ Running the Project
Start the development server:
```sh
npm start
```
Then open http://localhost:3000 in your browser.

## 📖 Usage
🎭 Higher-Order Components
 ```tsx 
const EnhancedComponent = withLogger(MyComponent);
```
🖱️ Render Props
```tsx
  
<MouseTracker render={(position) => <p>Mouse is at {position.x}, {position.y}</p>} />
```
🧩 Compound Components
```tsx

<Tabs>
  <Tabs.Tab label="Tab 1">Content for Tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">Content for Tab 2</Tabs.Tab>
</Tabs>
```
🎨 Context API for Theme Toggle
  ```tsx

const { theme, setTheme } = useTheme();
<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
```
## 🛠️ Development & Contribution
1️⃣ Contribution Guidelines
Fork the repository.
Create a new feature branch:
 ```sh
git checkout -b feature-branch-name
```
Make your changes and commit them:
```sh
git commit -m "Added new feature"
```
Push to your fork and create a pull request.
2️⃣ Development Setup
To enable hot reloading and debugging:
 ```bash
npm run dev
```
## ⚖️ License
This project is licensed under the MIT License – see the LICENSE file for details.



## 🌟 Show Your Support
⭐ If you found this project useful, give it a star on GitHub!
💬 Feel free to open an issue if you have ideas or suggestions.

## 📩 Connect
- 💼 [LinkedIn](https://in.linkedin.com/in/rutuja-b)  
- 🐙 [GitHub](https://github.com/Roo2ja)
