import { Header } from './header';

// ----------------------------------------------------------------------

export function EcommerceTemplate({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
