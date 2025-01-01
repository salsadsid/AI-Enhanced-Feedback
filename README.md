# AI Enhanced Feedback

This project is built using Next.js, TypeScript, and ShadCN for the frontend, with a Node.js, Express.js, Mongoose, and Google GenAI API-powered backend hosted in a separate repository.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** or **yarn** (for package management)
- **MongoDB** (local or hosted)

### Steps to Run Locally

#### 1. Clone Frontend Repository

```bash
git clone https://github.com/salsadsid/AI-Enhanced-Feedback.git
cd AI-Enhanced-Feedback
```

#### 2. Install Frontend Dependencies

```bash
npm install
```

#### 3. Configure Frontend Environment Variables

Create a `.env` file in the frontend folder and add:

```bash
NEXT_PUBLIC_API_URL=<backend-url>
```

Replace `<backend-url>` with the backend server's URL, e.g., `http://localhost:5000` if running locally.

#### 4. Start Frontend Development Server

```bash
npm run dev
```

The frontend will be accessible at `http://localhost:3000`.

---

### Backend Setup

The backend repository is hosted separately. Follow the instructions below to set it up:

#### 1. Clone Backend Repository

```bash
git clone https://github.com/salsadsid/nodejs-ai-integration.git
cd nodejs-ai-integration
```

#### 2. Install Backend Dependencies

```bash
npm install
```

#### 3. Configure Backend Environment Variables

Create a `.env` file in the backend folder and add:

```bash
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
GOOGLE_API_KEY=<your-google-genai-api-key>
```

#### 4. Start Backend Server

```bash
npm run start
```

The backend will be accessible at `http://localhost:5000`.

---

### Tools Used

#### Frontend

- **Next.js**: Server-side rendering and static site generation.
- **TypeScript**: Type-safe codebase.
- **ShadCN**: Modular and reusable component library for UI.

#### Backend

- **Node.js & Express.js**: Server and API creation.
- **Mongoose**: MongoDB integration for database operations.
- **Google GenAI API**: AI-based functionalities.

---

### Approach

#### Frontend:

- Modular design with reusable components.
- Secure connection to backend via RESTful API.
- Strong type definitions using TypeScript.

#### Backend:

- REST API with clear endpoints for data flow.
- Database operations with Mongoose.
- AI-powered functionalities with Google GenAI API.

---

### Future Enhancements

- Add automated testing.
- Enhance scalability and performance.
- Include additional AI-powered features.
