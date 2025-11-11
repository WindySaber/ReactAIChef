# AI Recipe Generator

An intelligent recipe generator that suggests dishes based on available ingredients using Alibaba Cloud's Tongyi Qianwen AI model.

## 🚀 Features

- 📝 **Ingredient Management**: Add and manage your available ingredients(When Ingredients more than 3,you can see the button to get the recipe!)
- 🤖 **AI-Powered Recipes**: Get personalized recipe suggestions in Markdown format
- 🔒 **Secure API Handling**: API keys isolated in backend environment
- ⚡ **Real-time Generation**: Instant recipe generation with loading states

## 🛠️ Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js + Express
- **AI Model**: Alibaba Cloud Tongyi Qianwen (`qwen-turbo`)
- **Styling**: CSS Modules (Vanilla CSS)

## 📁 Project Structure

```
my-react-app/
├── backend/
│   ├── .env                 # API key (NEVER commit this!)
│   ├── ai.js                # AI service logic
│   └── server.js            # Express server
├── src/
│   ├── composes/
│   │   ├── Header.jsx       # Header component
│   │   └── Main.jsx         # Main app logic
│   └── App.jsx              # Root component
├── .gitignore               # Protects .env files
└── package.json
```

## 🔧 Installation

### 1. Clone & Install Dependencies

```bash
git clone <your-repo-url>
cd my-react-app

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install express cors dotenv @huggingface/inference
cd ..
```

### 2. Configure Environment Variables

Create `backend/.env` file:

```bash
cd backend
echo "ALIYUN_API_KEY=sk-your-api-key" > .env
```

**Get your API key from [Alibaba Cloud Bailian Console](https://bailian.console.aliyun.com/)**

### 3. Run Development Servers

**Terminal 1 (Backend):**
```bash
cd backend
node server.js
# Server running on port 3000
```

**Terminal 2 (Frontend):**
```bash
npm run dev
# Vite dev server running (e.g., http://localhost:5173)
```

## 🔐 Security Best Practices

⚠️ **NEVER commit `.env` file to Git!**

✅ **Already handled by `.gitignore`:**
```
backend/.env
node_modules/
```

✅ **Never hardcode API keys in frontend code:**
```javascript
// ❌ WRONG: exposes key to browser
const API_KEY = "sk-1234...";

// ✅ CORRECT: key stays in backend
fetch('/api/recipe', { ... })
```

## 🚀 Deployment

### 1. Frontend Deployment (Vercel/Netlify)
- Push code to GitHub
- Connect repository to Vercel
- No environment variables needed on frontend

### 2. Backend Deployment (Render/Railway)
- Set environment variable: `ALIYUN_API_KEY=sk-...`
- Deploy `backend/` directory
- Update frontend fetch URL to deployed backend URL

## 📄 License

MIT License - feel free to use and modify!

---

**Happy Cooking!** 🍳# ReactAIChef
