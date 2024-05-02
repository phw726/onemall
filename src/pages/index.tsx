import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Products from './products';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mainpage">
        <div className="mainpage-name">메인페이지</div>
        <div className="mainpage-nav">
          <Link to="/">HOME</Link>
          <Link to="/products">금융상품리스트</Link>
          <Link to="/products/:id">금융상품상세보기</Link>
          <Link to="/profile">마이페이지</Link>
          <Link to="/signin">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
        <Products />
      </div>

      <Footer />
    </>
  );
}
