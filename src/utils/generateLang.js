const Sync = require('sync-spreadsheet'); // eslint-disable-line

const spreadSheetId = '1eJLi40gEQdTHCzy4Itg3RimOSyYutEikHIjaeqVE51U';
// Find here -> https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit#gid=0

Sync({
  spreadSheetId, // required
  pathMessages: 'src/i18n', // required
  tabIndex: 0, // export specific tab index, if you want export all tabs, don't define this option
})
  .then(() => {
    console.log('done !');
  })
  .catch(err => {
    console.log('SYNC MESSAGES FAILED:', err);
  });
