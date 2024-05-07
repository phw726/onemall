import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function NoticeDetail() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="utils--prev" onClick={handleBack}>
        <IoMdArrowBack />
        <span>뒤로가기</span>
      </div>
      <div className="notice--detail">
        <div className="notice--post--detail">
          <div className="post--title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita iste ut dignissimos est autem
            necessitatibus quaerat quidem harum sunt?
          </div>
          <div className="post--profile-box">
            <div className="post--profile--detail">
              <div className="post--profile" />
              <div className="post--authorname">관리자</div>
            </div>

            <div className="post--date">2024.05.07. 오후 7:23:01</div>
          </div>

          <div className="post--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, illo veniam. Neque eum ab quo sint
            praesentium commodi error doloremque dolore quos qui, doloribus rem repellat est! Magni nesciunt, expedita
            autem commodi perferendis obcaecati deleniti amet repellendus adipisci rem sapiente, officia voluptate
            repellat eligendi, illo assumenda nobis corrupti necessitatibus perspiciatis ratione eos incidunt. Eligendi
            nesciunt reiciendis praesentium culpa explicabo veritatis, laboriosam id. Porro inventore ut nihil.
            Perspiciatis porro tenetur, non blanditiis sunt atque cum expedita dicta. Quasi, reprehenderit natus dolore
            maxime ad accusamus in! Maiores sunt iure ipsum reiciendis unde odit quisquam quidem facere nesciunt
            sapiente veniam ab deleniti voluptate vel perspiciatis sed doloremque, explicabo quae earum distinctio. Odit
            nesciunt neque impedit, corporis distinctio laborum id illum voluptate, aperiam minima dolores molestiae
            cumque eos cum suscipit doloribus odio accusamus? Cupiditate consectetur praesentium porro non sit doloribus
            placeat, quos ipsa ducimus voluptatibus maiores deserunt voluptatem voluptate dolores voluptas obcaecati
            veniam, illum voluptatum tempore voluptates provident mollitia. Tempora ipsum unde dicta fugit voluptate
            culpa inventore, reprehenderit quia fugiat architecto sit doloribus veniam cumque cum rerum iure impedit
            commodi ut! Optio doloremque, eos impedit quas eaque doloribus, ipsam accusamus eius explicabo voluptates
            vitae earum delectus veritatis ratione maxime! Culpa error quis cupiditate quaerat velit voluptatum officia
            consectetur pariatur aspernatur! Labore porro suscipit nulla vero deleniti asperiores doloremque quis
            doloribus cumque nemo ab quod, veritatis nobis! Et ipsa neque, voluptatum, dolorem, eos quas ab a distinctio
            libero accusantium voluptatibus dignissimos perferendis assumenda sit repudiandae? Ea, ab? Numquam ea
            praesentium et consequuntur pariatur. Corrupti nostrum quidem incidunt possimus eaque quaerat harum quam
            nulla! Necessitatibus nulla voluptates beatae, odit iusto praesentium laboriosam deserunt. Libero sed
            doloremque vitae architecto iusto dolorum in quas beatae magni minus, qui quidem nisi corrupti assumenda,
            distinctio culpa natus nihil officiis ut voluptatibus vel explicabo quae eum! Voluptates veniam, eius
            incidunt doloribus unde odio quod, aliquam ipsum perferendis est praesentium ex corporis sequi corrupti.
            Quibusdam aperiam perspiciatis dolores commodi unde modi. Corporis nam quidem sint, sed illo porro? Cum,
            ducimus labore fugit quis qui temporibus natus commodi cupiditate voluptatem rem facere! Aspernatur rem,
            atque rerum dolores ipsa asperiores laboriosam explicabo consequatur? Soluta amet molestiae excepturi error
            rem repellendus suscipit voluptatum, ea nulla quas numquam quaerat velit sit perferendis, illum dignissimos
            sed, modi ut earum nemo corrupti itaque! Ut vitae repudiandae magnam odio perferendis autem quam molestiae
            enim quas provident quibusdam ducimus porro, reiciendis optio facere ex iure? Ex consequuntur itaque nihil
            unde.
          </div>
        </div>
      </div>
    </>
  );
}
