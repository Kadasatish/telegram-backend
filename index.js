const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook/telegram', (req, res) => {
  console.log('Telegram Message:', req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Bot is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
