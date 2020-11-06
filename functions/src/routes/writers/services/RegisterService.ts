// import * as bcrypt from 'bcrypt';

interface RegisterForm {
    email: string;
    password: string
}

class RegisterService {
    register({ email, password }: RegisterForm) {
        // const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    }
}

export default RegisterService
