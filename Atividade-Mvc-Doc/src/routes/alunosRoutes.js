import express from "express";
import {
  listarAlunos,
  criarAluno,
  atualizarAluno,
  removerAluno,
} from "../controllers/alunosController.js";

const router = express.Router();

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos ou filtra por nome/turma
 *     parameters:
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *       - in: query
 *         name: turma
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de alunos
 */
router.get("/", listarAlunos);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id: { type: integer }
 *               nome: { type: string }
 *               protocolo: { type: string }
 *               turma: { type: string }
 *               email: { type: string }
 *     responses:
 *       201:
 *         description: Aluno cadastrado
 */
router.post("/", criarAluno);

router.put("/:id", atualizarAluno);
router.delete("/:id", removerAluno);

export default router;
