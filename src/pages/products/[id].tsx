import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <>
      <div>{id}번 상품 상세 페이지</div>
    </>
  );
}
