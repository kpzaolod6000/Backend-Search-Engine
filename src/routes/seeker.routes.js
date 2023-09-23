import {Router} from 'express'
import {getInfo, getInfoById, createSeeker, updateInfoById, deleteInfoById, deleteSeeker} from '../controllers/seeker.controller.js'

const router = Router()

router.get('/seeker', getInfo);
router.get('/seeker/:id', getInfoById);

router.post('/seeker', createSeeker);
router.patch('/seeker/:id', updateInfoById);
router.delete('/seeker', deleteSeeker);
router.delete('/seeker/:id', deleteInfoById);

export default router;