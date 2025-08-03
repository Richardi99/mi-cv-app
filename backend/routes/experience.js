const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM experiencia", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { puesto, empresa, descripcion, fecha_inicio, fecha_fin } = req.body;
  db.query(
    "INSERT INTO experiencia (puesto, empresa, descripcion, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?, ?)",
    [puesto, empresa, descripcion, fecha_inicio, fecha_fin],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId });
    }
  );
});

module.exports = router;
