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

// Docs
app.get('/docs/slider', (req, res) => {
  const filepath = `json/docs.json`
  const fileContent = fs.readFileSync(filepath, "utf-8")
  res.send(fileContent)
})

app.get('/docs/:lang/:page', async (req, res) => {
  const page = req.params.page;
  const lang = req.params.lang;
  if (page != 'home') {
    filepath = `docs/${lang}/${page}.md`;
  } else {
    filepath = `docs/${page}.md`;
  }
  
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

// Blogs 
app.get('/blogs/slider', (req, res) => {
  const filepath = `json/blogs.json`
  const fileContent = fs.readFileSync(filepath, "utf-8")
  res.send(fileContent)
})

app.get('/blogs/:lang/:page', async (req, res) => {
  const page = req.params.page;
  const lang = req.params.lang;
  if (page != 'home') {
    filepath = `blogs/${lang}/${page}.md`;
  } else {
    filepath = `blogs/${page}.md`;
  }
  
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