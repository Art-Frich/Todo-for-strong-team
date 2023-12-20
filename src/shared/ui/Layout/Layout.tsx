import './Layout.scss';
import Footer from '../../../widgets/Footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}
