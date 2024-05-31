import { HashLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className="loader">
      <HashLoader color="#892E07" />
      <p className="text">Aguarde por favor...</p>
    </div>
  );
};
