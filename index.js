const express = require('express');
const app = express();
app.use(express.json());

let messages = [];

app.post('/webhook/telegram', (req, res) => {
  try {
    const msg = req.body?.message?.text; // ఎర్రర్ రాకుండా ασφαగా చదవటం
    console.log('Telegram Message:', msg);

    if (msg) {
      messages.push(msg); // ఖాళీ msg అయితే add చేయదు
    }

    res.sendStatus(200);
  } catch (e) {
    console.error('Error:', e); // error వస్తే console లో చూపుతుంది
    res.sendStatus(500);
  }
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});
