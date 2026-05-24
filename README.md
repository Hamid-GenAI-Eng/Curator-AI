# 🎨 Curator AI — Note Assistant App (Frontend)

Welcome to the frontend workspace of **Curator AI**, a premium, state-of-the-art interactive canvas that lets users scan handwritten pages, run highly precise OCR, refine note structures, and compile batch notes into professional-grade PDF briefs.

Built with **React**, **Vite**, **TypeScript**, and styled with high-fidelity glassmorphism, fluid animations, and a rich, tailored dark-aesthetic canvas.

---

## ✨ Features & User Experience

*   **Premium Interactive Canvas**: A responsive, modern layout equipped with harmony-curated color palettes, glowing gradients, and smooth state micro-animations.
*   **Handwriting OCR Uploader**: Drag-and-drop file uploader supporting images of handwriting, featuring instantaneous feedback during AI OCR extraction.
*   **Structured Synthesizer Board**: Synthesize multiple fragmented notes into cohesive, styled Markdown reports directly in the workspace.
*   **Premium PDF Exporter**: Instant download controls that interface directly with backend compilers to serve high-fidelity PDF documents.
*   **Dynamic API Resolution**: Integrated with an intelligent **self-healing base URL resolver** that seamlessly transitions between local development servers and live production endpoints automatically.

---

## 🛠️ Tech Stack

*   **Core Framework**: [React 18](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/) with [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Routing**: [React Router DOM v6](https://reactrouter.com/)

---

## ⚙️ Configuration (.env)

Create a `.env` file in the project root to target your API layer:

```env
# Point to your local backend (dev) or live Vercel backend (prod)
VITE_API_BASE_URL=https://curator-ai-backend-flame.vercel.app
```

> **Note**: Our **self-healing dynamic resolver** will automatically catch if Vercel caches a stale local URL and auto-override it to target production backend whenever run outside of `localhost`!

---

## 🏃 Local Development

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Hamid-GenAI-Eng/Curator-AI.git
    cd Curator-AI
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Start Development Server**:
    ```bash
    npm run dev
    # or
    bun dev
    ```
    *   Development Site: `http://localhost:5173`

4.  **Production Compile**:
    ```bash
    npm run build
    ```

---

## 🌐 Dynamic Deployment (Vercel)

This application is ready for zero-friction Vercel deployments:
1.  Connect this repository to Vercel.
2.  Add the environment variable `VITE_API_BASE_URL` pointing to your deployed backend URL.
3.  Deploy! The system will build and route correctly.

---

Developed and maintained with ❤️ by [Hamid-GenAI-Eng](https://github.com/Hamid-GenAI-Eng).
