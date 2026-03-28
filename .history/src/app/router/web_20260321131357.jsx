
import PaymentMethod from "../../dashboard/pages/users/components/PaymentMethod";
import PaymentSuccess from "../../dashboard/pages/users/components/Paymentsuccess ";
import MenuPage from "../../components/public/menu/MenuPage";
import AboutPage from "../../components/public/about/Design_About_Page";
import ContactPage from "../../components/public/home/Design_Contact_Page";
import HomePage from "../../components/public/home/HomePage";
import AddToCardPage from "../../dashboard/pages/prices/AddToCardPage";
import Design_Detail from "../../components/public/detail/Design_Detail";

const webRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage/> },
  {path:"/contact",element: <ContactPage/>},
  {path:"/menu",element: <MenuPage/>},
  {path:"/cart",element: <AddToCardPage/>},
  {path: "/paymentmethod" , element: <PaymentMethod/>},
  {path: "/paymentsuccess" ,element: <PaymentSuccess/>},

];

export default webRoutes;