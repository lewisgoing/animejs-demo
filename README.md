1.  -   `# Bento Grid App A Next.js app showcasing a bento-styled component grid using `react-grid-layout`, featuring an audio visualizer, visualizer parameters, and song play/pause controls. ## Getting Started 1. **Clone the repository**: ```bash git clone <your-repo-url> cd bento-grid-app`

2.  **Install dependencies**:

    bash

    Copy

    `npm install`

3.  **Add sample.mp3**:
    -   Download sample.mp3 from <https://github.com/rafaelreis-hotmart/Audio-Sample-files/blob/master/sample.mp3>.
    -   Place it in the public/ folder.
4.  **Run the development server**:

    bash

    Copy

    `npm run dev`

    Open <http://localhost:3000> to view the app.

Features
--------

-   **AudioVisualizer**: A 1x2 grid component using Anime.js 4.0 to animate bars based on audio frequencies.
-   **VisualizerParameters**: A 1x1 component to adjust visualizer bar width and color.
-   **SongPlayPause**: A 1x1 component to play/pause a sample MP3 using Web Audio API.
-   **Styling**: Tailwind CSS with a bento-box aesthetic (rounded corners, shadows).
-   **Grid**: Built with react-grid-layout for a static, responsive layout.

Dependencies
------------

-   Next.js 14.2.3
-   React 18
-   react-grid-layout 1.4.4
-   animejs 4.0.1
-   Tailwind CSS 3.4.1

Notes
-----

-   The grid is static (non-draggable/resizable) for simplicity.
-   The visualizer uses the Web Audio API for real-time audio analysis.
-   Ensure sample.mp3 is in the public/ folder before running the app.

License
-------

MIT