const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(cors())
app.use(express.json()) // Entender requisições body json
app.use(routes);
app.listen(3333);

mongoose.connect('mongodb+srv://usuario_admin:usuario_admin@cluster0-uixp6.mongodb.net/ls?retryWrites=true&w=majority' ,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//Métodos HTTP: GET, POST, PUT, DELETE
//Tipos de parâmetros:
//Query Params: req.query (Filtros, ordenação, paginação, ...)
//Routes Params: req.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)





