// Importação das bibliotecas necessárias
const express = require("express");
const route = express.Router();

// Configuração de rotas
route.post("/", (req, res) => {
  const novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    ano: req.body.ano,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco,
  };

  res.status(200).send({
    mensagem: "Veículo cadastrado com sucesso!",
    dadosNovoVeiculo: novoVeiculo,
  });
});

route.put("/", (req, res) => {
  const { id, preco } = req.body;
  res.status(200).send("Os dados foram devidamente atualizados.");
});

route.delete("/", (req, res) => {
  const { id } = req.body;
  res.status(200).send(`O veículo de ID ${id} foi excluído com sucesso.`);
});

// Exportação das rotas
module.exports = route;
