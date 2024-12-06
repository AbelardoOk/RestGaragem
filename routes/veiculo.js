// Importação das bibliotecas necessárias
const express = require("express");
const route = express.Router();

// Configuração de rotas
route.post("/:nome&:fabricante$:ano&:combustivel&:cor&:preco", (req, res) => {
  const novoVeiculo = {
    nome: req.params.nome,
    fabricante: req.params.fabricante,
    ano: req.params.ano,
    combustivel: req.params.combustivel,
    cor: req.params.cor,
    preco: req.params.preco,
  };

  res.status(200).send({
    mensagem: "Veículo cadastrado com sucesso!",
    dadosNovoVeiculo: novoVeiculo,
  });
});

route.put("/:id&:preco", (req, res) => {
  res.status(200).send("Os dados foram devidamente atualizados.");
});

route.delete("/:id", (res, req) => {
  const id = req.params.id;
  res.status(200).send(`O veículo de ID ${id} foi excluído com sucesso.`);
});

// Exportação das rotas
module.exports = route;
