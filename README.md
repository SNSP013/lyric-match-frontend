# Lyric Match - Game Interface

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Game Interface](https://via.placeholder.com/800x400.png?text=Lyric+Match+UI)

> React frontend for the AI-powered song guessing game.

## 🎨 Technologies
- React.js
- Vite
- Axios
- CSS3 Animations

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/your-username/lyric-match-frontend.git
cd lyric-match-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create `.env` file:
```env
VITE_API_BASE_URL="http://localhost:8080"
```

### 4. Start Development Server
```bash
npm run dev
```
**Access UI:** `http://localhost:3000`

## 📂 Project Structure
```bash
src/
├── components/
│   ├── Header.jsx    # Animated title component
│   └── LyricSection.jsx  # Game logic component
├── styles/
│   ├── Header.css    # Title animations
│   └── LyricSection.css  # Game UI styling
├── App.jsx           # Root component
└── main.jsx          # Entry point
```

## 🔧 Build for Production
```bash
npm run build
```

## 🌐 Deployment
1. **Vercel/Netlify Setup**
   - Set environment variable:
     - `VITE_API_BASE_URL` (point to deployed backend)
   - Connect to GitHub repository
   - Deploy from `main` branch

2. **Verify Deployment**
```bash
curl https://your-frontend-url
```

## 🐛 Common Issues
- **Blank Screen**: Check backend connection
- **Input Lag**: Verify API response times
- **Style Issues**: Clear browser cache

## 📄 License
MIT License - See [LICENSE](LICENSE) for details
