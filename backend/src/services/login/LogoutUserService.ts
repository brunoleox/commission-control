import { signOut, getAuth } from 'firebase/auth'
import { firebase } from '../../firebase'
import { IUser } from '../../interfaces'

class LogoutUserService {
  async execute(uid) {
    const auth = getAuth(firebase)
    const logoutUser = await signOut(auth)
    return logoutUser
  }
}
export { LogoutUserService }
