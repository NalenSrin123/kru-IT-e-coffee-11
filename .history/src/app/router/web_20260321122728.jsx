import Home from "../pages/Home";
import About from "../pages/About";
import PaymentMethod from "../../dashboard/pages/users/components/PaymentMethod";
import PaymentSuccess from "../../dashboard/pages/users/components/Paymentsuccess ";
import { Contact } from "lucide-react";
import MenuPage from "../../components/public/menu/MenuPage";
import AboutPage from "../../components/public/about/Design_About_Page";
import ContactPage from "../../components/public/home/Design_Contact_Page";

const webRoutes = [
  { path: "/", element: < /> },
  { path: "/about", element: <AboutPage/> },
  {path:"/contact",element: <ContactPage/>},
  {path:"/menu",element: <MenuPage/>},
  {path: "/paymentmethod" , element: <PaymentMethod/>},
  {path: "/paymentsuccess" ,element: <PaymentSuccess/>}
];

export default webRoutes;