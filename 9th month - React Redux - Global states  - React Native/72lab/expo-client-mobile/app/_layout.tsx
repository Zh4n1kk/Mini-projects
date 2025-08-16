import Header from '@/components/Header/Header';
import '../global.css';
import Index from './index';
import CheckoutFooter from '@/components/CheckoutFooter/CheckoutFooter';

export default function RootLayout() {
  return (
    <>
  <Header/>
  <Index />
  <CheckoutFooter/>
  </>)
}
