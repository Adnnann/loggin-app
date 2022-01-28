import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()
router.route('auth/singin').post(authCtrl.singin)
router.route('auth/singout').post(authCtrl.singout)

export default router;