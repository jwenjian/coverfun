let scaleFactor = 1; // Initial scale factor
const zoomSpeed = 0.1; // Adjust zoom sensitivity

const currentWindow = window.__TAURI__.window.getCurrentWindow(0);

console.log(currentWindow);

async function minimizeWindow() {
  await currentWindow.minimize();
}

async function startDragging() {
  await currentWindow.startDragging();
}

window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      minimizeWindow();
    }
  });

  document.addEventListener("mousedown", (e) => {
    startDragging();
  });
});
