export type JwtToken = {
  id: string;
  name: string;
  email: string;
  roles: string[];
  pessoa: null;
  tenant: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  roles: string[];
};

export type ApiSignIn = {
  accessToken: string;
};

export type ApiAuthMe = {
  user: {
    id: string;
    name: string;
    email: string;
  };
};
