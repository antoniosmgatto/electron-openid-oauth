const { app } = require('electron');
const {createAuthWindow} = require('./main/auth-process');
const createAppWindow = require('./main/app-process');
const authService = require('./services/auth-service');

async function showWindow() {
  try {
    // await authService.refreshTokens();
    return createAppWindow();
  } catch (err) {
    console.log("saiu");
    console.log(err);
    createAuthWindow();
  }
}

app.on('ready', showWindow);

app.on('window-all-closed', () => {
  app.quit();
})