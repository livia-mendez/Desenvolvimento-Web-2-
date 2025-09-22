import * as Aluno from "../models/alunosModel.js";

export const listarAlunos = (req, res) => {
  const { nome, turma } = req.query;

  if (nome && turma) {
    return res.json(
      Aluno.getAllAlunos().filter(
        (a) =>
          a.turma === turma &&
          a.nome.toLowerCase().includes(nome.toLowerCase())
      )
    );
  }
  if (nome) return res.json(Aluno.getAlunosByNome(nome));
  if (turma) return res.json(Aluno.getAlunosByTurma(turma));

  res.json(Aluno.getAllAlunos());
};

export const criarAluno = (req, res) => {
  const { id, nome, protocolo, turma, email } = req.body;
  if (!id || !nome || !protocolo || !turma || !email) {
    return res.status(400).json({ msg: "Campos obrigatórios faltando" });
  }
  Aluno.addAluno({ id, nome, protocolo, turma, email });
  res.status(201).json({ msg: "Aluno cadastrado com sucesso" });
};

export const atualizarAluno = (req, res) => {
  const { id } = req.params;
  const aluno = req.body;
  Aluno.updateAluno(Number(id), aluno);
  res.json({ msg: "Aluno atualizado com sucesso" });
};

export const removerAluno = (req, res) => {
  const { id } = req.params;
  Aluno.deleteAluno(Number(id));
  res.json({ msg: "Aluno removido com sucesso" });
};
