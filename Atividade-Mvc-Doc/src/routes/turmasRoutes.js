import express from "express";
import {
  listarTurmas,
  criarTurma,
  removerTurma,
} from "../controllers/turmasController.js";

const router = express.Router();

/**
 * @swagger
 * /turmas:
 *   get:
 *     summary: Lista todas as turmas
 *     responses:
 *       200:
 *         description: Lista de turmas
 */
router.get("/", listarTurmas);

router.post("/", criarTurma);
router.delete("/:id", removerTurma);

export default router;
