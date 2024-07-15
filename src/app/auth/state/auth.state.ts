export class User {
  constructor(private email: string, private token: string) {}
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface LoginSuccessInterface {
  user: User | null;
}

export const initialState: LoginInterface = {
  email: '',
  password: '',
};

export const initialSuccessState: LoginSuccessInterface = {
  user: null,
};
