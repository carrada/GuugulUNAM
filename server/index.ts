import "dotenv/config"
import path from "node:path"
import express, { type Request, type Response } from "express"
import { handleJoin } from "./handle-join.js"

const app = express()
const port = Number(process.env.PORT ?? 8787)
const isProd = process.env.NODE_ENV === "production"

app.use(express.json({ limit: "32kb" }))

app.post("/api/join", async (req: Request, res: Response) => {
  const result = await handleJoin(req.body, req.ip ?? "unknown")
  res.status(result.status).json(result.json)
})

if (isProd) {
  const dist = path.resolve(process.cwd(), "dist")
  app.use(express.static(dist))
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(dist, "index.html"))
  })
}

app.listen(port, () => {
  console.info(`Guugul API lista en http://localhost:${port}`)
})
