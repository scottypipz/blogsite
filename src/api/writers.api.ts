import axios from 'axios';

export interface RegisterForm {
    email: string;
    password: string;
}

export const registerAPI = (registerForm: RegisterForm) => axios.post('/api/writers/register', registerForm);

export default {};
