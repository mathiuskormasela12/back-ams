// ========== Auth Route
// import all modules
import { Router } from 'express'
import RouteModule from './Router'
import upload from 'express-fileupload'

// import all controllers
import userController from '../controllers/User'

// import all middlewares
import { isLogin, checkEditUserBody } from '../middlewares/auth'

namespace UserModule {
	export class User extends RouteModule.Route {
		constructor () {
			super()
			this.route()
		}

		public route (): void {
			this.getRouter.use(upload({
				createParentPath: true
			}))
			this.getRouter.get('/user/:id', isLogin, userController.User.getUserById)
			this.getRouter.put('/user/:id', isLogin, checkEditUserBody, userController.User.editUserById)
			this.getRouter.delete('/user/:id', isLogin, userController.User.deleteUser)
		}

		public get user (): Router {
			return this.getRouter
		}
	}
}

export default new UserModule.User()
