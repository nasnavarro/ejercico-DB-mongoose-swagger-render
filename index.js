const express = require('express');
const app = express();
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
app.use('/', routes);


dbConnection();

app.listen(process.env.PORT || 3000, () => console.log(`Server started on port ${process.env.PORT}`));