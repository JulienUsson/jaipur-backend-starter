import express from "express"

import healthRouter from "./healthRouter"
// Don't forget to import new routers above

const router = express.Router()

router.use("/health", healthRouter)
// Add new routers above
//test commit mdr
export default router
