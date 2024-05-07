import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="inner">
          <Swiper
            className="awards"
            spaceBetween={8}
            navigation
            modules={[Autoplay, EffectCoverflow, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            effect={'fade'}
            breakpoints={{
              1098: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <img src="./images/awards_slide1.jpg" alt="대통령 표창" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide2.jpg" alt="대통령 표창 (3년 연속)" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide3.jpg" alt="우수사업주 인증" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide4.jpg" alt="경연대회 대상" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide5.jpg" alt="대한상의회장상" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide6.jpg" alt="기업사회공헌 활동 부문" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide7.jpg" alt="KSI 1위 (5년 연속)" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide8.jpg" alt="KS-SQI 1위 (5년 연속)" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide9.jpg" alt="커피전문점 부문 (4년 연속)" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/awards_slide10.jpg" alt="동반성장 부문 (4년 연속)" />
            </SwiperSlide>
          </Swiper>

          <div className="introduce">
            <a href="javascript:void(0)" className="introduce--btn">
              찾아오시는 길
            </a>
            <a
              href="javascript:void(0)"
              className="introduce--btn
            "
            >
              신규입점제의
            </a>
            <a href="javascript:void(0) " className="introduce--btn">
              사이트 맵
            </a>
          </div>

          <ul className="menu">
            <li>
              <a href="javascript:void(0)" className="green">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">영상정보처리기기 운영관리 방침</a>
            </li>
            <li>
              <a href="javascript:void(0)">홈페이지 이용약관</a>
            </li>
            <li>
              <a href="javascript:void(0)">위치정보 이용약관</a>
            </li>
            <li>
              <a href="javascript:void(0)">결제 이용약관</a>
            </li>
            <li>
              <a href="javascript:void(0)">윤리경영 핫라인</a>
            </li>
          </ul>
        </div>

        <div className="info">
          <span>사업자등록번호 234-81-7135</span>
          <span>(주)ONEMALL 대표이사 박혜원</span>
          <span>서울특별시 강남구 123-4</span>
          <span>TEL : 02) 1234-1234</span>
          <span>FAX : 02) 1234-1234</span>
          <span>EMAIL : phw726@naver.com</span>
          <span>개인정보보호 책임자 : 박혜원</span>
          <span>CS운영시간 09:00 - 18:00(토,일,공휴일 휴무)</span>
        </div>

        <p className="copyright">
          &copy; <span className="this-year"></span> ONEMALL Company. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
