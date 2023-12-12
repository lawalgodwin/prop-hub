import express from "express";

const PORT: number = Number(process.env.PORT) || 5000;

const app = express();

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
