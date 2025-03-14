# Modern React Dashboard with Node.js Backend

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

A professional dashboard application featuring a modern UI with a React frontend and Node.js/Express backend. This project showcases a responsive design, interactive components, and real-time server communication.

## ✨ Live Demo

Visit the live application: [Modern Dashboard](https://playing-copilot-1.vercel.app)

## 🚀 Features

- **Modern UI Design** with professional color scheme and typography
- **Responsive Layout** that works on desktop and mobile devices
- **Interactive Dashboard** with three main sections:
  - **Home**: Welcoming landing page with feature highlights
  - **Ping Server**: Test backend connection with real-time response metrics
  - **Calculator**: Interactive calculator with calculation history

## 📸 Screenshots

*[Consider adding screenshots of your application here]*

## 🛠️ Technologies Used

### Frontend
- React 18 with functional components and hooks
- React Router for navigation
- Custom CSS with variables for theming
- SVG icons for a scalable, modern look
- Responsive design techniques

### Backend
- Node.js with Express
- RESTful API architecture
- CORS configuration for secure cross-origin requests
- Serverless function deployment

### Deployment
- Vercel for hosting both frontend and backend
- Serverless functions for API endpoints

## 🔧 Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd playing-copilot-1
   ```

2. Install server dependencies
   ```bash
   npm install
   ```

3. Install client dependencies
   ```bash
   npm run install-client
   ```

## 🚀 Running the Application

### Development Mode
Run both the server and client concurrently:
```bash
npm run dev
```
- Server runs on port 5300
- Client runs on port 3000

### Server Only
```bash
npm run server
```

### Client Only
```bash
npm run client
```

## 🏗️ Building for Production
```bash
npm run build
```

## 📦 Deployment

This project is configured for deployment on Vercel:

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel
   ```bash
   vercel login
   ```

3. Deploy the application
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
/
├── api/                  # Vercel serverless functions
│   ├── index.js          # API root endpoint
│   └── ping.js           # Ping server endpoint
├── client/               # React frontend application
│   ├── public/           # Static assets
│   └── src/              # React source code
│       ├── pages/        # Page components
│       │   ├── HomePage.js
│       │   ├── PingServerPage.js
│       │   └── CalculatorPage.js
│       ├── App.js        # Main application component
│       ├── index.js      # Application entry point
│       └── index.css     # Global styles
├── server/               # Express server (for local development)
│   └── server.js         # Server configuration
├── package.json          # Project dependencies and scripts
└── vercel.json           # Vercel deployment configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

*[Your name or username here]*
