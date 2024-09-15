const express = require('express');
const cors = require('cors');
const matter = require('gray-matter');

const app = express();
app.use(cors());
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
  res.send('AtulNotes API')
})

app.get('/slider', (req, res) => {
  const filepath = `json/index.json`
  const fileContent = fs.readFileSync(filepath, "utf-8")
  res.send(fileContent)
})

app.get('/data/:lang/:page', async (req, res) => {
  const page = req.params.page;
  const lang = req.params.lang;
  if (page != 'home') {
    filepath = `data/${lang}/${page}.md`;
  } else {
    filepath = `data/${page}.md`;
  }
  console.log(filepath);
  
  try {
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent)
    res.send(
      ({
        data,
        content
      })
    );
  } catch (err) {
    res.status(404).send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})