from flask import Flask, request, jsonify
from model import listar_tarefas, adicionar_tarefa, editar_tarefa, deletar_tarefa

app = Flask(__name__)

@app.route("/")
def home():
    return "Bem-vindo à API de Tarefas! Use /tarefas para visualizar ou gerenciar as tarefas."

@app.route("/tarefas", methods=["GET"])
def listar():
    feito = request.args.get("feito")
    if feito is not None:  
        feito = feito.lower() == "true"
        tarefas_filtradas = listar_tarefas(feito)
        return jsonify(tarefas_filtradas)
    return jsonify(listar_tarefas())

@app.route("/tarefas", methods=["POST"])
def adicionar():
    dados = request.get_json()
    titulo = dados.get("titulo", "Sem título")
    feito = dados.get("feito", False)
    nova_tarefa = adicionar_tarefa(titulo, feito)
    return jsonify(nova_tarefa), 201

@app.route("/tarefas/<int:id>", methods=["PUT"])
def editar(id):
    dados = request.get_json()
    titulo = dados.get("titulo")
    feito = dados.get("feito")
    tarefa_editada = editar_tarefa(id, titulo, feito)
    if tarefa_editada:
        return jsonify(tarefa_editada)
    return jsonify({"erro": "Tarefa não encontrada"}), 404

@app.route("/tarefas/<int:id>", methods=["DELETE"])
def deletar(id):
    deletar_tarefa(id)
    return jsonify({"mensagem": f"Tarefa {id} removida com sucesso"}), 200

if __name__ == "__main__":
    app.run(debug=True)
