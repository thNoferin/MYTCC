const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;  // Alterar para uma porta diferente se 3000 estiver em uso

app.use(express.json());
app.use(cors());

app.post('/send-message', async (req, res) => {
    try {
        // Envia a mensagem para o Node-RED
        const response = await axios.post('http://127.0.0.1:1880/endpoint', {
            message: 'Oi'  // Mensagem que você quer enviar
        });
        res.status(200).send('Mensagem enviada com sucesso!');
    } catch (error) {
        // Verifique e exiba o erro detalhado
        console.error('Erro ao enviar mensagem:', error.response ? error.response.data : error.message);
        res.status(500).send('Erro interno do servidor.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
