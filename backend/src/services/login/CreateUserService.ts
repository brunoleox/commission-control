import { AppError } from '../../errors/AppError'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { IUser } from '../../interfaces'
import { firebase } from '../../firebase'

class CreateUserService {
  async execute({ ...user }: IUser) {
    const auth = getAuth(firebase)
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user
        return user
      })
      .catch(() => {
        throw new AppError('Não foi possível criar o usúario.', 500)
      })
  }
}
export { CreateUserService }
