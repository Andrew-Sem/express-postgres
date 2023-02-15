const express = require("express")
const PORT = process.env.PORT || 8080
const userRouter = require("./routes/user.routes")

const app = express()
app.use(express.json())
app.use("/api", userRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))