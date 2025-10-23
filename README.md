# E-commerce-forever

This repository contains a full-stack E-commerce application with three main folders: `admin`, `backend`, and `frontend`.

Quick start

1. Backend

```powershell
cd backend
npm install
# run server
npm run server
```

The backend uses Node/Express and exposes API endpoints. See `backend/server.js` for entrypoint. Environment variables (like MongoDB URI, Cloudinary, Stripe keys) should be stored in a `.env` file.

2. Frontend

```powershell
cd frontend
npm install
npm run dev
```

The frontend is built with React + Vite. Open the URL shown by Vite (usually http://localhost:5173).

3. Admin

The `admin` folder contains an admin frontend. Run it similar to the frontend if you want to run it locally:

```powershell
cd admin
npm install
npm run dev
```

Notes
- Add a `.env` file in `backend` with your DB and secret keys before starting the server.
- This project includes third-party services (Cloudinary, Stripe, Razorpay) — ensure keys are available.

License

MIT
