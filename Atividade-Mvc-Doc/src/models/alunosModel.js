let alunos = [];

export const getAllAlunos = () => alunos;
export const getAlunosByNome = (nome) =>
  alunos.filter((a) => a.nome.toLowerCase().includes(nome.toLowerCase()));
export const getAlunosByTurma = (turma) =>
  alunos.filter((a) => a.turma === turma);
export const addAluno = (aluno) => {
  alunos.push(aluno);
};
export const updateAluno = (id, novoAluno) => {
  const index = alunos.findIndex((a) => a.id === id);
  if (index !== -1) alunos[index] = novoAluno;
};
export const deleteAluno = (id) => {
  alunos = alunos.filter((a) => a.id !== id);
};
