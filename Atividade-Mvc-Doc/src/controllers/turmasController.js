import * as Turma from "../models/turmasModel.js";

export const listarTurmas = (req, res) => {
  res.json(Turma.getAllTurmas());
};

export const criarTurma = (req, res) => {
  const { id, nome } = req.body;
  if (!id || !nome) return res.status(400).json({ msg: "Dados inválidos" });
  Turma.addTurma({ id, nome });
  res.status(201).json({ msg: "Turma cadastrada com sucesso" });
};

export const removerTurma = (req, res) => {
  const { id } = req.params;
  Turma.deleteTurma(Number(id));
  res.json({ msg: "Turma removida com sucesso" });
};
    