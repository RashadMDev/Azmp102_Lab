const express = require('express');
let mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const PORT = 3000;

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING)
      .then(() => {
            console.log("connected");
      });

let itemSchema = new mongoose.Schema({
      name: String,
      description: String,
});

let ItemModel = mongoose.model("Item", itemSchema);

app.use(cors());
app.use(express.json());

app.post('/api/items', async (req, res) => {
      console.log(req.body);
      try {
            let prod = new ItemModel(req.body);
            await prod.save();
            res.status(201).json(prod);
      } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
      }
});

app.get('/api/items', async (req, res) => {
      try {
            let items = await ItemModel.find();
            res.status(200).json(items);
      } catch (error) {
            res.status(500).json({ error: error.message });
      }
});

app.put('/api/items/:id', async (req, res) => {
      try {
            let item = await ItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(item);
      } catch (error) {
            res.status(400).json({ error: error.message });
      }
});

app.delete('/api/items/:id', async (req, res) => {
      try {
            await ItemModel.findByIdAndDelete(req.params.id);
            res.status(204).send();
      } catch (error) {
            res.status(400).json({ error: error.message });
      }
});


app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
});
