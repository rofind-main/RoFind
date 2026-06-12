const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';
loadingScreen.innerHTML = `<div id="loading-content" style="display:flex;justify-content: center;align-content: center;flex-direction: column;align-items: center;">
  <img src="../images/Cropped_FullColor_White.png" style="width:250px">
  <p style="color: grey">Loading...</p>
</div>`;
document.body.prepend(loadingScreen);

window.addEventListener('load', () => {
  loadingScreen.style.opacity = '0';
  loadingScreen.style.zIndex = '99999'
  setTimeout(() => loadingScreen.remove(), 3000);
});