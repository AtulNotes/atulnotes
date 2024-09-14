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

app.get('/aside/:page', (req, res) => {
  const page = req.params.page;
  const filepath = `json/aside/${page}.json`;
  try {
    const fileContent = fs.readFileSync(filepath, "utf-8");
    res.send(fileContent);
  } catch (err) {
    res.status(404).send('File not found');
  }
});

app.get('/data/:page', (req, res) => {
  const page = req.params.page;
  const filepath = `data/${page}.md`;
  
  try {
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const {content, data} = matter(fileContent)
  //  ================================================
  // Add unified the data and content





  
  //  ================================================
  res.send(fileContent);
  } catch (err) {
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})