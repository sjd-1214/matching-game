# Memory Match 🎮

A retro-styled memory matching game built with vanilla HTML, CSS, and jQuery. Features an old-school CRT monitor aesthetic with scanlines, pixel fonts, and glowing neon effects.

![Game Preview](https://img.shields.io/badge/Status-Complete-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

Simply open `index.html` in any modern web browser to play the game.

---

## Features

- **4x4 Game Grid** — 16 cards with 8 matching emoji pairs
- **Move Counter** — Track how many attempts you've made
- **Pairs Counter** — See your progress (0/8 to 8/8)
- **Card Flip Animation** — Smooth reveal with visual feedback
- **Match Detection** — Correctly matched pairs stay revealed
- **Win Condition** — Alert notification when all pairs are found
- **Reset Button** — Start a new game anytime
- **Retro CRT Aesthetic** — Scanlines, glow effects, pixel font
- **Responsive Design** — Works on desktop and mobile
- **No Dependencies** — Only requires jQuery (loaded via CDN)

---

## Screenshots

```
┌─────────────────────────────────┐
│        MEMORY MATCH             │
│   MOVES: 12      PAIRS: 4/8     │
│                                 │
│   [?] [🎮] [?] [?]              │
│   [🎯] [?] [🎯] [?]              │
│   [?] [🎮] [?] [?]              │
│   [?] [?] [?] [?]               │
│                                 │
│         [ RESET ]               │
└─────────────────────────────────┘
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Styling, animations, CRT effects |
| JavaScript | Game logic |
| jQuery 3.6 | DOM manipulation, event handling |
| Google Fonts | Press Start 2P pixel font |

---

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or server required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/matching-game.git
   cd matching-game
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file open
   open index.html
   
   # Option 2: Use a local server (optional)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

That's it! No npm install, no build step.

---

## Project Structure

```
matching-game/
├── index.html      # Main HTML file
├── style.css       # All styles including retro effects
├── game.js         # jQuery game logic
├── README.md       # This file
└── medium_post.md  # Tutorial blog post
```

### File Breakdown

| File | Lines | Description |
|------|-------|-------------|
| `index.html` | ~25 | Minimal markup with game container |
| `style.css` | ~130 | Retro styling, animations, layout |
| `game.js` | ~85 | Game state, shuffle, match logic |

---

## How to Play

1. **Click** any card to flip it and reveal the emoji
2. **Click** a second card to try to find its match
3. **Match** — If both cards show the same emoji, they stay face-up
4. **No Match** — Cards flip back after 0.8 seconds
5. **Win** — Find all 8 pairs to complete the game
6. **Reset** — Click the reset button to shuffle and start over

### Tips

- Try to remember card positions as you reveal them
- Fewer moves = better score
- The emojis used are: 🎮 🎯 🎨 🎪 🎭 🎸 🎺 🎲

---

## Customization

### Change Emojis

Edit the `emojis` array in `game.js`:

```javascript
const emojis = ['🎮', '🎯', '🎨', '🎪', '🎭', '🎸', '🎺', '🎲'];
```

### Change Grid Size

For a 6x6 grid (18 pairs), update:

1. **game.js** — Add more emojis (18 total)
2. **style.css** — Change grid columns:
   ```css
   .game-board {
       grid-template-columns: repeat(6, 70px);
   }
   ```

### Change Color Scheme

The main colors in `style.css`:

```css
#33ff33  /* Terminal green - borders, glow */
#ffcc00  /* Yellow - stats, revealed cards */
#ff6600  /* Orange - matched cards, reset button */
#000     /* Black - background */
```

### Remove CRT Effect

Delete or comment out the `.scanlines` styles and HTML element.

---

## Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome 60+ | ✅ |
| Firefox 55+ | ✅ |
| Safari 12+ | ✅ |
| Edge 79+ | ✅ |
| IE 11 | ❌ |

---

## Performance

- **No framework overhead** — Pure CSS animations
- **Event delegation** — Single click handler for all cards
- **Minimal DOM updates** — Only class toggles
- **CDN-hosted jQuery** — Cached across sites

---

## Future Improvements

- [ ] Add difficulty levels (Easy 4x4, Medium 6x6, Hard 8x8)
- [ ] Implement timer
- [ ] Add sound effects (flip, match, win)
- [ ] Save high scores to localStorage
- [ ] Add multiplayer mode
- [ ] Keyboard navigation support

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License — see below:

```
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## Acknowledgments

- [Press Start 2P Font](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38
- Inspired by classic memory card games
- CRT effect techniques from various CSS experiments

---

Made with ❤️ and nostalgia
