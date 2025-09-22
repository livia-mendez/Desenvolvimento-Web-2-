class Tarefa:
    def __init__(self, id, titulo, feito=False):
        self.id = id
        self.titulo = titulo
        self.feito = feito

    def to_dict(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "feito": self.feito
        }

tarefas = []
contador_id = 1

def listar_tarefas(feito=None):
    if feito is not None:
        return [tarefa.to_dict() for tarefa in tarefas if tarefa.feito == feito]
    return [tarefa.to_dict() for tarefa in tarefas]

def adicionar_tarefa(titulo, feito=False):
    global contador_id
    nova_tarefa = Tarefa(contador_id, titulo, feito)
    tarefas.append(nova_tarefa)
    contador_id += 1
    return nova_tarefa.to_dict()

def editar_tarefa(id, titulo=None, feito=None):
    for t in tarefas:
        if t.id == id:
            if titulo is not None:
                t.titulo = titulo
            if feito is not None:
                t.feito = feito
            return t.to_dict()
    return None

def deletar_tarefa(id):
    global tarefas
    tarefas = [tarefa for tarefa in tarefas if tarefa.id != id]
    return tarefas
