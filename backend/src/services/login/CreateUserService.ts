import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { firebase } from '../../firebase'
import { IUser } from '../../interfaces'

class CreateUserService {
  async execute({ ...user }: IUser) {
    const auth = getAuth(firebase)
    const createUser = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    )
    return createUser
  }
}
export { CreateUserService }
