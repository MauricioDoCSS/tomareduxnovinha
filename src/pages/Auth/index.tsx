import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type Schema = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const Auth = () => {
  const { handleSignIn } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    const request = await handleSignIn(data);

    if (request) {
      navigate('/');
    }
  };

  return (
    <div>
      <span>
        <label htmlFor="email-id"></label>
        <input type="email" {...register('email')} placeholder="Digite seu e-mail" />
        <p>{errors.email?.message}</p>
      </span>

      <span>
        <label htmlFor="password-id"></label>
        <input type="password" {...register('password')} placeholder="Digite sua senha" />
        <p>{errors.password?.message}</p>
      </span>

      <button onClick={handleSubmit(onSubmit)}>Fazer login</button>
    </div>
  );
};
