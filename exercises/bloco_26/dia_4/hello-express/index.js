const express = require('express');

const app = express();

app.get('/hello', handleHelloRequest);

const port = 3000

app.listen(port, () => {
  console.log(`Aplicação ouvindo na porta: ${port}`);
})

function handleHelloRequest(_rq, rs) {
  rs.status(200).send('Hello world');
}
