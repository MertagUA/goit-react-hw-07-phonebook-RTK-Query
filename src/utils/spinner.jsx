import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="18"
      width="18"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '8px',
        right: '15px',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#14c617']}
    />
  );
};
