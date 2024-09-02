const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Use a porta fornecida pela variável de ambiente PORT
const port = process.env.PORT || 3001; 

app.use(express.json());
app.use(cors());

app.post('/send-message', async (req, res) => {
    try {
        // Substitua pelo URL público do Node-RED
        const response = await axios.post('http://PUBLIC_IP_OR_URL:1880/endpoint', {
            message: 'Oi'  // Mensagem que você quer enviar
        });
        res.status(200).send('Mensagem enviada com sucesso!');
    } catch (error) {
        // Verifique e exiba o erro detalhado
        console.error('Erro ao enviar mensagem:', error.response ? error.response.data : error.message);
        res.status(500).send('Erro interno do servidor.');
    }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
