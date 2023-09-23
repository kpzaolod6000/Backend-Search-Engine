import {Router} from 'express'
import {getInfo, createSeeker, updateSeeker, deleteSeeker} from '../controllers/seeker.controller.js'

const router = Router()

router.get('/seeker', getInfo);
router.post('/seeker', createSeeker);
router.put('/seeker', updateSeeker);
router.delete('/seeker', deleteSeeker);

export default router;