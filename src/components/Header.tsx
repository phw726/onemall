import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/" className="header--logo">
          ONEMALL
        </Link>

        <div className="header--menus">
          <div className="header--menus--search">
            <FaSearch className="header--menus--search--icon" />
            <input type="text" placeholder="찾으시는 상품을 입력해주세요." />
          </div>
          <div className="header--menus--wrapped">
            <Link to="/mycart" className="header--menus--wrapped--menu">
              장바구니
            </Link>
            <Link to="/myorder" className="header--menus--wrapped--menu">
              주문조회
            </Link>
            <Link to="/profile" className="header--menus--wrapped--menu">
              마이페이지
            </Link>
            <Link to="/signin" className="header--menus--wrapped--menu">
              로그인
            </Link>
            <Link to="/signup" className="header--menus--wrapped--menu">
              회원가입
            </Link>
            <Link to="/notice" className="header--menus--wrapped--menu">
              공지사항
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
