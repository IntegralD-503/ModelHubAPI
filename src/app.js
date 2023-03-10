// servicelambda
const express = require('express');
const mlModels = require('./routes/ml-models');
const app = express();

app.use('/api/v0/models', mlModels);

const PORT = 8080
app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`);
});

module.exports = app
