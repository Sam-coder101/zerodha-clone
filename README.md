# Zerodha Clone 📈

A full-stack clone of India's leading stock trading platform, Zerodha, built with React and Node.js. This project replicates the core functionality of a stock trading dashboard with features like holdings management, position tracking, order placement, and funds management.

## 🚀 Features

### Frontend (Landing Page)
- **Home Page**: Clean, responsive landing page
- **About Page**: Information about the platform
- **Products Page**: Trading products and services
- **Pricing Page**: Fee structure and pricing details
- **Support**: Customer support interface
- **Signup/Authentication**: User registration

### Dashboard
- **Real-time Watchlist**: Track your favorite stocks with live price updates
- **Holdings Management**: View and manage your stock holdings with P&L calculations
- **Positions Tracking**: Monitor open positions with real-time profit/loss
- **Order Placement**: Place buy/sell orders with custom quantity and price
- **Funds Management**: Track available margin, used margin, and account balance
- **Interactive Charts**: Visualize your portfolio performance (using react-chartjs-2)

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** - UI framework
- **React Router DOM 7.12.0** - Navigation and routing
- **Material-UI (MUI) 7.3.7** - Component library (Dashboard)
- **Axios 1.13.2** - HTTP client
- **React ChartJS 2** - Data visualization
- **SCSS/CSS** - Styling

### Backend
- **Node.js** with **Express 5.2.1** - Server framework
- **MongoDB** with **Mongoose 9.1.5** - Database
- **JWT (jsonwebtoken 9.0.3)** - Authentication
- **Passport.js** - Authentication middleware
  - passport-local
  - passport-local-mongoose
- **bcrypt 6.0.0** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Project Structure

```
zerodha-clone/
├── frontend/          # Landing page and marketing site
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── product/
│   │   │   ├── pricing/
│   │   │   ├── support/
│   │   │   └── signup/
│   │   └── index.js
│   └── package.json
│
├── dashboard/         # Trading dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Summary.js
│   │   │   ├── Holdings.js
│   │   │   ├── Positions.js
│   │   │   ├── Orders.js
│   │   │   ├── Funds.js
│   │   │   ├── BuyActionWindow.js
│   │   │   └── Apps.js
│   │   ├── data/
│   │   └── index.js
│   └── package.json
│
└── backend/          # Express API server
    ├── model/        # Mongoose models
    ├── schemas/      # Database schemas
    ├── index.js      # Server entry point
    └── package.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sam-coder101/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=3002
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   
   Start the backend server:
   ```bash
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. **Setup Dashboard**
   ```bash
   cd ../dashboard
   npm install
   npm start
   ```

## 🔌 API Endpoints

The backend provides the following API endpoints:

- `GET /allHoldings` - Fetch all user holdings
- `GET /allPositions` - Fetch all open positions
- `POST /newOrder` - Place a new buy/sell order
- Additional authentication endpoints (login, signup, etc.)

## 🎨 Language Composition

- **JavaScript**: 39.2%
- **SCSS**: 32.3%
- **CSS**: 28.3%
- **HTML**: 0.2%

## 📱 Key Components

### Dashboard Features
- **Watchlist**: Monitor stocks like INFY, ONGC, TCS, KPITTECH, etc.
- **Buy/Sell Window**: Interactive modal for placing orders
- **Real-time Updates**: Live price and P&L calculations
- **Responsive Design**: Works on desktop and mobile devices

### Security
- JWT-based authentication
- Password hashing with bcrypt
- Secure session management with Passport.js

## 🧪 Testing

The project includes testing libraries:
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`

Run tests:
```bash
npm test
```

## 👨‍💻 Author

**Sampad Das**

## 📝 License

ISC

## 🙏 Acknowledgments

This project is created for educational purposes and is inspired by Zerodha's platform design and functionality.

## 🐛 Known Issues

- Backend API URL is hardcoded to `localhost:3002` in dashboard components
- Some features are still in development

## 🔮 Future Enhancements

- [ ] Real-time WebSocket integration for live stock prices
- [ ] Advanced charting capabilities
- [ ] Portfolio analytics and insights
- [ ] Mobile application
- [ ] Paper trading mode
- [ ] Market news integration

## 📞 Support

For issues and questions, please open an issue in the GitHub repository.

---

**Note**: This is a clone project for educational purposes. It is not affiliated with or endorsed by Zerodha.
