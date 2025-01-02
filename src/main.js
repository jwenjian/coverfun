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

  // document.addEventListener('wheel', async (e) => {
  //   e.preventDefault();
  
  //   // Adjust scale factor
  //   scaleFactor += e.deltaY < 0 ? zoomSpeed : -zoomSpeed;
  //   scaleFactor = Math.max(0.5, Math.min(3, scaleFactor)); // Limit zoom scale
  
  //   // Get current window size
  //   const { width, height } = await window.__TAURI__.window.innerSize();
  
  //   // Set new window size
  //   window.__TAURI__.window.setSize({
  //     width: Math.round(width * scaleFactor),
  //     height: Math.round(height * scaleFactor),
  //   });
  // });
});
