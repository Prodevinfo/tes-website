# TES - Talent Extraction System

## 📝 Project Overview
**TES (Talent Extraction System)** is a modern, responsive landing page designed to connect professionals with career mentorship and job placement services. 

This is a **frontend-only website** built using React. It does not currently have a backend or database connected.

---

## ⚡ Key Features
* **Interactive Landing Page**: A fully responsive website showcasing services, mentors, features, and success results.
* **Light / Dark Mode**: Users can easily switch themes, with their choice saved automatically.
* **Get Started Form**: A Contact / CTA (Call to Action) form that helps onboard interested candidates.

### 📋 Onboarding Form Details
The "Start Your Journey" form collects the following candidate details:
* **Full Name**
* **Email Address**
* **Current Role / Industry**
* **Primary Goal** (selected from a list of career goals)

#### Current Form Behavior:
* **No Backend Connection**: It does **not** send data to a database or external server.
* **React State**: The collected data is stored locally in the React component's state.
* **Console Log**: The submitted data is logged to the browser's developer console.
* **Success Message**: A browser alert popup is shown to the user upon clicking submit.

---

## 🛠️ Tech Stack
* **React** (Frontend library)
* **JavaScript** (Application logic)
* **CSS** (Custom styling and layout)
* **GitHub** (Version control and code repository)
* **Netlify** (Hosting and deployment platform)

---

## 📁 Project Structure
The primary files and directories are organized as follows:
* **`public/`**: Contains static files such as `index.html` and the favicon.
* **`src/assets/`**: Houses visual assets like light and dark logos.
* **`src/components/`**: Modular React components that build up the pages (e.g. Navigation, Hero, Services, CTA form).
* **`src/styles/`**: Custom CSS stylesheets for individual components.

---

## 🚀 Setup Instructions

Follow these simple steps to run this project on your local machine:

### 1. Install Dependencies
Open your terminal inside the project folder (`tes-website`) and run:
```bash
npm install
```

### 2. Start the Development Server
To launch the website locally in your browser:
```bash
npm start
```
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it.

### 3. Build for Production
To generate a production-ready folder containing optimized static files:
```bash
npm run build
```

---

## 🌐 Deployment (Netlify)

To deploy this project to Netlify, follow these quick steps:
1. Push the repository to GitHub.
2. Log into your [Netlify account](https://www.netlify.com/).
3. Click **Add new site** and choose **Import an existing project** from GitHub.
4. Select this repository.
5. Set the build settings as follows:
   * **Build command**: `npm run build`
   * **Publish directory**: `build`
6. Click **Deploy site**. Netlify will automatically build and publish your website whenever you push new changes to GitHub.

---

## 🔮 Future Improvements
In the future, we plan to implement the following features:
* **Backend Integration**: Create an API server to process and validate user registrations.
* **Database Storage**: Store submitted form data securely in a database (such as MongoDB or PostgreSQL).
* **Email Notifications**: Automatically send confirmation emails to users and notification alerts to the admin team upon registration.
