// server.js
const app = require('./src/app');
const { PORT } = require('./src/config');

app.listen(PORT, () => {
  console.log(`🚀 SmartBank Pro running at http://localhost:${PORT}`);
});
