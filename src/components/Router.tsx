import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'src/pages';
import Products from 'src/pages/products';
import ProductDetail from 'src/pages/products/[id]';
import ProfilePage from 'src/pages/profile';
import SignInPage from 'src/pages/signin';
import SignUpPage from 'src/pages/signup';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}
