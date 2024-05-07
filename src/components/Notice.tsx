import { Link } from 'react-router-dom';

export default function Notice() {
  return (
    <>
      <h1 className="notice">NOTICE</h1>

      <div className="notice--list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="postbox">
            <Link to={`/notice/${index}`}>
              <div className="post--profile-box">
                <div className="post--profile--detail">
                  <div className="post--profile" />
                  <div className="post--authorname">관리자</div>

                  <div className="post--date">2024.05.07. 오후 7:23:01</div>
                </div>
                <div className="post--title">공지사항 {index}</div>
              </div>

              <div className="post--text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores cupiditate quam voluptates error in
                atque ducimus hic corporis architecto expedita eum tenetur ea placeat voluptatem ratione eveniet,
                laborum quidem dolore totam deserunt nostrum nobis, molestiae modi. Incidunt debitis aliquam harum ea
                beatae ex nobis inventore, itaque, cupiditate ab veniam libero vero facere quasi sequi unde atque earum,
                officiis adipisci! Fugit possimus saepe ea architecto aliquam iure nostrum quod nemo placeat ipsam quae
                aspernatur, dolorem sed esse in assumenda, numquam blanditiis corrupti eius.
              </div>
              <div className="post--show">자세히 보기</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
