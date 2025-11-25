# 🧠 NotebookLM to Whimsical Converter

<div align="center">
<br />

<p align="center">
<strong>Unlock your NotebookLM Mind Maps.</strong>
<br />
Extract visual structures from Google NotebookLM and instantly convert them for Whimsical, Markmap, and Mermaid.
</p>

[Report Bug](https://github.com/your-username/notebooklm-to-whimsical/issues) · [Request Feature](https://github.com/your-username/notebooklm-to-whimsical/issues)
</div>

## 🚀 The Problem

Google's **NotebookLM** is an amazing tool for synthesizing information and generating mind maps. However, these maps are often rendered as "locked" SVG elements.

If you want to:
*   Edit the map structure.
*   Expand it with your own nodes.
*   Move it to a dedicated diagramming tool like Whimsical.

...you are stuck manually re-typing everything.

## 💡 The Solution

**NotebookLM to Whimsical** acts as a smart bridge. It parses the raw HTML/SVG code directly from the browser, reconstructs the logical hierarchy of the nodes based on their X/Y coordinates, and outputs a formatted text structure specifically optimized for:

*   **Whimsical** (via "Paste as Mind Map")
*   **Markmap** (Markdown visualization)
*   **Mermaid.js** (Code-based diagrams)

## ✨ Key Features

*   **Smart SVG Parsing:** Intelligently parses `g.node` elements from NotebookLM's SVG output to reconstruct the original tree structure based on visual positioning.
*   **Whimsical Optimization:** Generates strict indented lists (4 spaces) that automatically trigger Whimsical's mind map creation feature when pasted.
*   **Multi-Format Support:** flexible export options for different workflows.
*   **Privacy First:** All processing happens locally in your browser. No data is sent to any external server.

## 🛠️ How to Use

### Step 1: Extract from NotebookLM
1.  Open your Mind Map in NotebookLM.
2.  Right-click the background of the map and select **Inspect**.
3.  Locate the `<svg>` element in the Elements panel.
4.  Right-click the element -> **Copy** -> **Copy element**.

### Step 2: Convert
1.  Paste the copied code into the **Source Material** box in this app.
2.  Click the **Convert** button.

### Step 3: Import to Whimsical
1.  Ensure "Whimsical" is selected as the output format.
2.  Click **Copy**.
3.  Open a **Board** in Whimsical.
4.  Press `Ctrl+V` (Paste).
5.  Select "**Paste as Mind Map**" from the small context menu that appears.

## 💻 Tech Stack

This project was built with a focus on modern, fast web technologies:

*   **[React 19](https://react.dev/)** - For a responsive and modern UI.
*   **[TypeScript](https://www.typescriptlang.org/)** - For type-safe code and robustness.
*   **[Vite](https://vitejs.dev/)** - For lightning-fast development and building.
*   **[Tailwind CSS](https://tailwindcss.com/)** - For beautiful, utility-first styling.
*   **[Lucide React](https://lucide.dev/)** - For crisp, consistent iconography.

## 📦 Installation & Local Development

To run this tool locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/notebooklm-to-whimsical.git
    cd notebooklm-to-whimsical
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  Created with ❤️ by <strong>Gilson Nogueira</strong>
</div>
