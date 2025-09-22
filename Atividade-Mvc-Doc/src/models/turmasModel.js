let turmas = [];

export const getAllTurmas = () => turmas;
export const addTurma = (turma) => {
  turmas.push(turma);
};
export const deleteTurma = (id) => {
  turmas = turmas.filter((t) => t.id !== id);
};
