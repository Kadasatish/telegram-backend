const express = require('express');
const cors = require('cors'); // ← CORS module import

const app = express();

// Use middlewares
app.use(cors());              // ← Enable CORS for frontend requests
app.use(express.json());

let messages = [];

app.post('/webhook/telegram', (req, res) => {
  try {
    const msg = req.body?.message?.text;
    console.log('Telegram Message:', msg);

    if (msg) {
      messages.push(msg);
    }

    res.sendStatus(200);
  } catch (e) {
    console.error('Error:', e);
    res.sendStatus(500);
  }
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});
