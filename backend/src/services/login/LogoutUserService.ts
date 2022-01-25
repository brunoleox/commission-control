import { json, response } from 'express'
import { getAuth, signOut } from 'firebase/auth'
import { firebase } from '../../firebase'

class LogoutUserService {
  async execute() {
    const auth = getAuth(firebase)
    await signOut(auth)
    return
  }
}
export { LogoutUserService }
