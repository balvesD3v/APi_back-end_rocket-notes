const { Router } = require("express");
const NotesController = require("../controllers/NotesController");
const notesRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesController.create);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/:id", notesController.show);
notesRoutes.get("/", notesController.index);

module.exports = notesRoutes;
