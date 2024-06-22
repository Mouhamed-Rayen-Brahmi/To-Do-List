const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let todoList = [];

app.get('/', (req, res) => {
    res.render('index', { todoList: todoList });
});

app.post('/add', (req, res) => {
    const newItem = req.body.newItem;
    todoList.push(newItem);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const itemIndex = req.body.itemIndex;
    if (itemIndex !== undefined && itemIndex !== null) {
        todoList.splice(itemIndex, 1);
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
