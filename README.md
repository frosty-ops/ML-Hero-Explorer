# 🛡️ Mobile Legends Hero Explorer

A simple web application built using **HTML, CSS, and JavaScript** that allows users to search for Mobile Legends heroes and view their information.

This project reads hero data from a JSON file and displays the hero's image, role, lane, difficulty level, and skills.

---

## 📌 Features

- Search heroes by name
- Display hero image
- Show hero role
- View lane information
- Display hero difficulty
- View all hero skills
- Hero data stored in JSON
- Handles invalid hero names
- Simple and responsive user interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON

---

## 📂 Project Structure

```
Mobile-Legends-Hero-Explorer/
│
├── index.html
├── explorer.html
├── landing.css
├── style.css
├── script.js
├── heroes.json
├── images/
└── README.md
```

---

## 🚀 How It Works

1. Open the landing page.
2. Click **Enter Hero Explorer**.
3. Type the name of a Mobile Legends hero.
4. Click **Search Hero**.
5. The application displays:
   - Hero Image
   - Hero Name
   - Hero Role
6. Click **View Details** to see:
   - Lane
   - Difficulty
   - Hero Skills

---

## ⚠️ Error Handling

The project includes basic error handling.

- If a hero is not available in the JSON file, the application displays **"Hero not found"**.
- The JSON data is loaded using **fetch()** inside a **try...catch** block.
- The **View Details** button only works after a hero has been searched.

---
## 📚 Concepts Used

- HTML5
- CSS3
- JavaScript
- JSON
- DOM Manipulation
- Event Listeners
- Functions
- Arrays
- Array `find()` Method
- Array `forEach()` Method
- Fetch API
- Async/Await
- Conditional Statements (`if`)
- Error Handling (`try...catch`)
- CSS Flexbox
- CSS Animations
- CSS Hover Effects
---

## 🎯 Learning Outcome

Through this project, I learned how to:

- Read data from a JSON file using Fetch API
- Search data using JavaScript
- Update webpage content dynamically
- Handle user input
- Implement basic error handling
- Design a responsive and attractive user interface
- Organize project files properly

---

## 📸 Screenshots

### Landing Page

![Landing Page](screenshots/landing-page.png)

### Hero Search

![Hero Search](screenshots/hero-search.png)

### Hero Details

### Hero Details

![Hero Details](screenshots/hero-details.png)
---

## 👩‍💻 Author

**Kirti Gadhave**

B.Sc. Computer Science Student

This project was created for learning JavaScript, JSON, Fetch API, DOM Manipulation, and Web Development.