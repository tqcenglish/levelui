var app = require('electron').app;

var dialog = require('electron').dialog;
var BrowserWindow = require('electron').BrowserWindow;
let crashReporter =require('electron').crashReporter; 
var cr = crashReporter.start({
    productName: 'YourName',
  companyName: 'YourCompany',
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: true
});

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({ width: 900, height: 600, 'min-width': 900, 'min-height': 600, frame: false });

  mainWindow.loadURL('file://' + __dirname + '/assets/html/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

