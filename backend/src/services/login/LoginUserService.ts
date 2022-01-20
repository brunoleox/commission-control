import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { firebase } from '../../firebase'
import { IUser } from '../../interfaces'

class LoginUserService {
  async execute({ ...user }: IUser) {
    const auth = getAuth(firebase)
    const loginUser = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    )
    return loginUser
  }
}
export { LoginUserService }
