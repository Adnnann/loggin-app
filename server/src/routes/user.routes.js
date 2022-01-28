import express from "express";
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users')
.get(userCtrl.list)
.post(userCtrl.create)

router.route('/api/users/:userId')
.get(authCtrl.requireSingin, userCtrl.read)
.put(authCtrl.requireSingin, authCtrl.hasAuthorization, userCtrl.update)
.delete(authCtrl.requireSingin, authCtrl.hasAuthorization,  userCtrl.remove)


 router.route('/api/users').post(userCtrl.create)
// router.route('/api/users').get(userCtrl.list)
// router.route('/api/users/:userId').get(userCtrl.read)
// router.route('/api/users/:userId').put(userCtrl.update)
// router.route('/api/users/:userId').delete(userCtrl.remove)

router.param('userId', userCtrl.userByID)
export default router;