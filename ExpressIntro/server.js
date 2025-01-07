const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
      { id: 1, name: 'Item 1', description: 'Description of Item 1' },
      { id: 2, name: 'Item 2', description: 'Description of Item 2' },
      { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];

app.get('/api/items', (req, res) => {
      res.json(items);
});

app.get('/api/items/:id', (req, res) => {
      const id = parseInt(req.params.id, 10);
      const item = items.find((item) => item.id === id);

      if (item) {
            res.json(item);
      } else {
            res.status(404).json({ error: 'Item not found' });
      }
});

app.post('/api/items', (req, res) => {
      const { name, description } = req.body;

      if (!name || !description) {
            return res.status(400).json({ error: 'Name and description are required' });
      }

      const newItem = {
            id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
            name,
            description,
      };

      items.push(newItem);
      res.status(201).json(newItem);
});

app.delete('/api/items/:id', (req, res) => {
      const id = parseInt(req.params.id, 10);
      const index = items.findIndex((item) => item.id === id);

      if (index !== -1) {
            const deletedItem = items.splice(index, 1);
            res.json({ message: 'Item deleted', item: deletedItem[0] });
      } else {
            res.status(404).json({ error: 'Item not found' });
      }
});

app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
});
