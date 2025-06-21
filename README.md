

---

````markdown
Stay Creative

🧩 Project Overview

Stay Creative is a full-stack web application powered by Node.js that:

- Serves static frontend assets  
- Handles contact form submissions via the SendGrid email API  
- Provides custom error pages and CORS support

🟢 Live Site: [https://staycreative.art/](https://staycreative.art/)

---

 ✨ Features

- 📁 Serves static files from the `/assets` directory  
- 📬 API endpoint `/contact` to send emails via SendGrid  
- ❌ Custom 404 error page  
- 🌐 Cross-Origin Resource Sharing (CORS) enabled  
- 🔐 Uses `.env` for environment configuration

---

 🚀 Getting Started

 ✅ Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)  
- npm (Node Package Manager)

---

 📦 Installation

1. Clone the repository

   ```bash
   git clone https://github.com/saurabhjoshi065/stay-creative.git
   cd stay-creative/Backend
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend` folder with the following:

   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key
   SENDGRID_SENDER_EMAIL=your_verified_email@example.com
   ```

   > ⚠️ Be sure to add `.env` to your `.gitignore` file to prevent exposing secrets.

4. Run the server

   ```bash
   node server.js
   ```

5. Open your browser and go to:

   ```
   http://localhost:5000/
   ```

---

 📡 API Endpoint

 POST `/contact`

Accepts a JSON payload like:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Feedback",
  "message": "Great site!"
}
```

Sends an email using SendGrid.

---

 🗂 Project Structure

```
stay-creative/
├── Backend/
│   ├── server.js
│   ├── 404.html
│   ├── .env
├── assets/
│   ├── css/
│   ├── images/
├── index.html
├── contact.html
```

---

 📦 Dependencies

* express
* body-parser
* cors
* dotenv
* @sendgrid/mail

---

 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

```

---

 ✅ Tip
To preview this markdown in VS Code:
- Open `README.md`
- Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac)  
- Or click the "Open Preview" icon in the top-right corner of the editor

Let me know if you'd like `.gitignore` content or deployment steps for platforms like Vercel, Render, or Heroku.
```
