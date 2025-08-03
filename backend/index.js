const expresss = require('express')
const cors = require('cors')
const experienceRoutes = require("./routes/experience")

const app = express()
app.use(cors())
app.use(express().json())

app.use("/api/experiencia",experienceRoutes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
})
