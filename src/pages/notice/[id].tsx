import { useParams } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import NoticeDetail from 'src/components/NoticeDetail';

export default function NoticeDetailPage() {
  const { index } = useParams();

  return (
    <>
      <Header />
      <NoticeDetail key={index} />
      <Footer />
    </>
  );
}
