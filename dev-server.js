// dev-server.js
const app = require('./api/server');
const port = process.env.PORT || 2008;

app.listen(port, () => {
  console.log(`Dev server listening at http://localhost:${port}`);
});
