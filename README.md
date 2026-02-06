# Golf Ryder Cup - Team Taiwan vs Team Korea

A beautiful website showcasing the annual Ryder Cup history between four friends: Team Taiwan (Bryan Leong & Rich Tsai) vs Team Korea (Jamin Cho & Tae Kyung).

## Features

- 🏌️ Beautiful golf-themed design
- 📊 Statistics dashboard
- 📖 Yearly Ryder Cup stories
- 📸 Image support for players and events
- 💾 Local storage for data persistence
- 📱 Fully responsive design

## Setup

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Or use a local server (see below)

## Local Development

### Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

### Using Node.js:
```bash
npx serve
```

## Adding Images

1. Create an `images/` folder in the project root
2. Add player photos with these exact names:
   - `bryan-leong.jpg` (or .png)
   - `rich-tsai.jpg`
   - `jamin-cho.jpg`
   - `tae-kyung.jpg`
3. Or update the image paths in `index.html` to match your file names

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy Options:**
- **Netlify Drop**: Drag & drop your folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: `npm i -g vercel && vercel`
- **GitHub Pages**: Push to GitHub and enable Pages in settings

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── images/             # Player photos and event images
├── DEPLOYMENT.md       # Deployment guide
└── README.md           # This file
```

## Usage

1. **View Stories**: Scroll to see yearly Ryder Cup stories
2. **Add New Year**: Use the form at the bottom to add a new Ryder Cup year
3. **Add Images**: Include image URLs when adding a new year
4. **Statistics**: View win counts and totals at the top

## Technologies

- HTML5
- CSS3 (with gradients and animations)
- Vanilla JavaScript
- LocalStorage API

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

---

Made with ❤️ for the annual Ryder Cup competition
