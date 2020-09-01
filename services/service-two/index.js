const app = require('./app.js');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`nodejs-pubsub-tutorial listening on port ${PORT}`),
);
