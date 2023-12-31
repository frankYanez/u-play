import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { createSong, deleteSong, getSongs, updateSong } from "../controllers/songs.controller.js";
const router = Router()


router.get('/songs', getSongs)
router.post('/songs', createSong)
router.delete('/songs/:id', validateToken, deleteSong)
router.put('/songs/:id', validateToken, updateSong)
export default router


