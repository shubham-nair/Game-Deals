# 🎮 Steam Game Deals Finder

A simple web application that allows users to search for game deals on **Steam** using the [CheapShark API](https://apidocs.cheapshark.com/).

## 🚀 Features

- Search Steam games by title
- View live deals with:
  - Game thumbnail
  - Sale and normal price
  - Percentage savings
  - Link to the Steam deal
- Uses semantic HTML
- Clean and modern CSS styling
- Uses only vanilla JavaScript (`fetch()` API)

## 🔧 How It Works

- The user enters a **game title** in the input field.
- On submit, the app fetches data from:

  ```
  https://www.cheapshark.com/api/1.0/deals?storeID=1&title=<GAME_TITLE>
  ```

- Results are displayed as a list of matching Steam game deals.

## 📁 Files Included

```
├── index.html     # Semantic HTML page
├── style.css      # CSS styles for layout and design
└── script.js      # JavaScript logic to call API and render results
```

## 🖼️ Demo Screenshot

> _Add a screenshot here if desired_

## 📝 Example Usage

Search for: `Hades`, `Portal`, `Cyberpunk`, `Elden Ring`

## ✅ Requirements Met

- [x] Uses a real API
- [x] Accepts user input
- [x] Dynamically fetches and displays data
- [x] Valid semantic HTML
- [x] Clean, readable CSS
- [x] Works offline (just open `index.html` in browser)

## 📦 To Run Locally

1. Clone the repo:

   ```bash
   git clone <repo-url>
   ```

2. Open `index.html` in your browser – that’s it!

> No backend or build tools required.

## 📚 API Reference

- [CheapShark API Documentation](https://apidocs.cheapshark.com/)

## 📌 Notes

- The API returns a maximum of 60 results per search.
- This app currently displays only the **first page** of results.

## 🙋 Suggestions for Future Enhancements

- Add pagination support (load more results)
- Add price filter (min and max)
- Filter by deal rating or savings

## 🧑‍💻 Author

Made by **Shubham** using HTML, CSS, and JavaScript.
