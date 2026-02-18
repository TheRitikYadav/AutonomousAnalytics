
# AutonomousAnalytics
> **A Premium Monitoring Dashboard for n8n Automation & IoT Ecosystems**

![Project Screenshot](/Users/ritik/.gemini/antigravity/brain/cf9c3e18-3d4c-4fc8-ad69-e4341194058d/dashboard_initial_view_1771390086849.png)

AutonomousAnalytics is a sophisticated, real-time dashboard designed to centralize the health and performance metrics of your autonomous systems. Built for clarity and speed, it seamlessly integrates with your n8n instance to provide instant visibility into workflow executions, error trends, and critical alerts.

## 🚀 Key Features

- **Live Workflow Monitoring**: Instantly identify active, paused, and failing workflows at a glance.
- **Deep Performance Analytics**: Visualize 14-day execution trends, success/error rates, and average execution times per workflow.
- **Real-Time Alerts System**: Categorized notifications (🔴 Critical, 🟡 Warning, 🔵 Info) help you resolve issues immediately.
- **Log Explorer**: A powerful, searchable interface to filter execution logs and debug failures fast.
- **Premium Dark Aesthetics**: A sleek, modern UI designed for 24/7 operations centers, optimized for readability.
- **Customizable Admin Profile**: Personalize your monitoring experience with custom avatars and detailed role information.

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 (Modern Variables & Flexbox/Grid), JavaScript (ES6+)
- **Backend / Proxy**: Node.js (Express-style handling for API forwarding & CORS)
- **Visualization**: Chart.js (Interactive Data Visualization)
- **Styling**: Custom Design System (Glassmorphism, Neon Accents, Responsive Layouts)

## 📦 Quick Start

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/autonomous-analytics.git
    cd autonomous-analytics
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or just ensure Node.js is installed
    ```

3.  **Configure Environment**
    Create a `.env` file (or update `server.js`) with your n8n API details:
    ```env
    N8N_API_URL=https://n8n.ritikyadav.com.np
    N8N_API_KEY=your_api_key_here
    ```

4.  **Launch Dashboard**
    ```bash
    node server.js
    ```
    Open your browser to `http://localhost:3456`.

## 📸 Gallery
*(Add more screenshots here to showcase Analytics, Logs, and Alerts pages)*
