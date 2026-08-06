# 📈 TradeScape Dashboard

A responsive trading dashboard built with **React**, **Tailwind CSS**, and **Recharts**. The application provides a clear overview of account performance, risk metrics, equity growth, and recent trading activity.

## 🚀 Live Demo

**Live URL:** https://trade-dashboard-lac.vercel.app/

## 📂 GitHub Repository

**Repository:** https://github.com/nickdevtech/Trade_Dashboard.git

---

# Features

## Dashboard Summary

- Starting Balance
- Current Balance
- Total Profit & Loss
- Win Rate
- Winning Trades
- Losing Trades
- Largest Winner
- Largest Loser

## Equity Curve

- Interactive equity chart
- Running account balance after each trade
- Responsive design
- Tooltip support

## Risk Monitoring

- Maximum Drawdown
- Daily Loss Limit
- Remaining Risk
- Risk Status (Safe / Approaching Limit / At Risk)
- Progress indicators

## Trade History

- Trading Pair
- Position (Long / Short)
- Profit & Loss
- Trade Status
- Responsive table
- Color-coded badges

## Performance Analytics

- Average Win
- Average Loss
- Profit Factor
- Win Rate
- Total P&L

---

# Tech Stack

- React
- Vite
- Tailwind CSS
- Recharts
- React Icons
- JavaScript (ES6)

---

# Project Structure

```
src
│
├── components
│   ├── SummaryCard.jsx
│   ├── TradeTable.jsx
│   ├── EquityChart.jsx
│   ├── RiskCard.jsx
│   └── StatusBadge.jsx
│
├── data
│   └── trades.js
│
├── utils
│   └── calculations.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/nickdevtech/Trade_Dashboard.git

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# Additional Features Implemented

- Modern responsive dashboard UI
- Sidebar navigation
- Performance analytics section
- Risk monitoring cards with progress bars
- Interactive equity curve using Recharts
- Color-coded trade status badges
- Responsive layout for desktop and mobile
- Reusable React components
- Clean and modular project structure

---

# Product Decisions

### How is risk calculated?

Risk is calculated using:

- Maximum Drawdown
- Daily Loss Limit
- Remaining allowable risk

The dashboard automatically updates the risk status based on the remaining limit.

### Why an equity curve?

The equity curve provides a visual representation of account growth and allows users to quickly identify profitable and losing periods.

### Why reusable components?

The application is divided into reusable components (`SummaryCard`, `RiskCard`, `TradeTable`, `EquityChart`) to improve maintainability, readability, and scalability.

---

# Future Improvements

- Live market data integration
- User authentication
- Trade filtering and search
- Export reports (CSV/PDF)
- Dark/Light mode
- Portfolio analytics
- TradingView chart integration
- Real-time notifications

---

