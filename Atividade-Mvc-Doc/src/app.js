import express from "express";
import alunosRoutes from "./routes/alunosRoutes.js";
import turmasRoutes from "./routes/turmasRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
app.use(express.json());

// Configuração Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Cadastro de Alunos e Turmas",
      version: "1.0.0",
      description: "API para gerenciar alunos e turmas (projeto IFSP)",
    },
  },
  apis: ["./src/routes/*.js"], // busca docs nas rotas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use("/alunos", alunosRoutes);
app.use("/turmas", turmasRoutes);

app.get("/", (req, res) => {
  res.send("📚 API de Cadastro de Alunos e Turmas - Acesse /api-docs");
});

export default app;
