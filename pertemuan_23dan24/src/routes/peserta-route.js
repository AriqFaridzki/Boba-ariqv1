const router = require("express").Router();
const logicPeserta = require("../controllers/peserta.js");

router.get("/getPeserta", logicPeserta.ambilSemuaData);
router.post("/createPeserta", logicPeserta.bikinData);
router.delete("/deletePeserta/:id", logicPeserta.hapusData);
router.put("/updatePeserta/:id", logicPeserta.updateData);

module.exports = router;