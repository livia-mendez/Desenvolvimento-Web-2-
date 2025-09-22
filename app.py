from flask import Flask, request, jsonify

app = Flask(__name__)

tarefas = []
contador_id = 1

@app.route("/")
def home():
    return "Bem-vindo à API de Tarefas! Use /tarefas para visualizar ou gerenciar as tarefas."

@app.route("/tarefas", methods=["GET"])
def listar_tarefas():
    feito = request.args.get("feito")
    if feito is not None:  # Filtrar por status
        feito = feito.lower() == "true"
        filtradas = [t for t in tarefas if t["feito"] == feito]
        return jsonify(filtradas)
    return jsonify(tarefas)

@app.route("/tarefas", methods=["POST"])
def adicionar_tarefa():
    global contador_id
    dados = request.get_json()
    nova_tarefa = {
        "id": contador_id,
        "titulo": dados.get("titulo", "Sem título"),
        "feito": dados.get("feito", False)
    }
    tarefas.append(nova_tarefa)
    contador_id += 1
    return jsonify(nova_tarefa), 201

@app.route("/tarefas/<int:id>", methods=["PUT"])
def editar_tarefa(id):
    dados = request.get_json()
    for t in tarefas:
        if t["id"] == id:
            t["titulo"] = dados.get("titulo", t["titulo"])
            t["feito"] = dados.get("feito", t["feito"])
            return jsonify(t)
    return jsonify({"erro": "Tarefa não encontrada"}), 404


@app.route("/tarefas/<int:id>", methods=["DELETE"])
def deletar_tarefa(id):
    global tarefas
    tarefas = [t for t in tarefas if t["id"] != id]
    return jsonify({"mensagem": f"Tarefa {id} removida com sucesso"}), 200


if __name__ == "__main__":
    app.run(debug=True)

# Dado Ficticio
# [
#   {
#     "id": 1,
#     "titulo": "Ir para a Faculdade",
#     "feito": false
#   }
# ]

# [
#   {
#     "id": 2,
#     "titulo": "Ir para a Faculdade",
#     "feito": false
#   }
# ]
