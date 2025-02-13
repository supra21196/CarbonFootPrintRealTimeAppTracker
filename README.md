# CarbonFootPrintRealTimeAppTracker
🌍 AI-Powered CO₂ Tracker App
🚀 Real-time Carbon Footprint Tracker powered by AI, GPS, and Smart Devices.

📌 Features

✅ AI-powered CO₂ Estimation based on movement detection

✅ Real-time GPS Tracking to detect mode of transport

✅ Automatic Distance Calculation without manual input

✅ Daily & Weekly CO₂ Dashboard with trends and comparison

✅ Local Storage to Save CO₂ Data for future analysis

✅ Sync Smart Devices for Energy Monitoring

✅ Bottom Navigation for Home & Device Syncing

⚡ Technologies Used

React.js - UI and component-based development

Material UI - UI components and styling

TensorFlow.js - AI model for CO₂ estimation

Local Storage - Stores weekly/monthly CO₂ data

Chart.js - Visual representation of CO₂ trends


📥 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/co2-tracker.git

cd co2-tracker

2️⃣ Install Dependencies

npm install

3️⃣ Start the Application

npm start

This will start the app at http://localhost:3000



/src
 ├── components
  
  ├── App.js                # Navigation & routing
  
  ├── index.js              # Entry point
  
  ├── styles.css            # Global styles
  
  ├── HomePage.js           # Dashboard with weekly trends
  
  ├── CO2Tracker.js         # Real-time CO₂ tracking & transport detection
  
  ├── SyncDevices.js        # Sync with smart devices
  
  ├── co2Prediction.js      # AI-powered CO₂ prediction logic
  
  ├── CO2Chart.js           # Shows CO₂ trends over time

  🛠️ How It Works
  
1️⃣ AI-Powered CO₂ Estimation

💡 The app uses AI to predict CO₂ emissions based on:

🔹 Transport Mode (Walking, Cycling, Public Transport, Car)

🔹 Distance Traveled (Auto-detected via GPS)

🔹 Energy Usage from Smart Devices

2️⃣ Automatic Distance & Transport Detection

Uses Geolocation API to track speed & movement

Detects transport mode:

🚶 Walking (Speed < 5 km/h)

🚲 Cycling (Speed 5-20 km/h)

🚌 Public Transport (Speed 20-60 km/h)

🚗 Car (Speed > 60 km/h)

Dynamically calculates CO₂ emission without user input

3️⃣ CO₂ Dashboard

Displays weekly CO₂ emission trends

Compares emissions with last week

Toggle to view daily breakdown

4️⃣ Smart Device Sync

Allows users to connect smart home devices

Fetches real-time energy consumption

AI predicts future energy usage trends

📊 Future Enhancements

✅ Integration with Wearables (Apple Watch, Fitbit)

✅ AI Assistant to Suggest CO₂ Reduction Tips

✅ Leaderboard & Gamification (Eco Points)

✅ Cloud Storage for CO₂ Data & History

🤝 Contributing

Fork the project

Create a new branch (feature/some-feature)

Commit changes (git commit -m "Added feature X")

Push to the branch (git push origin feature/some-feature)

Create a Pull Request
 
