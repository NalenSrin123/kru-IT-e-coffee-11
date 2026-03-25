import Home from "../pages/Home";
import About from "../pages/About";
import PaymentMethod from "../../dashboard/pages/users/components/PaymentMethod";
import PaymentSuccess from "../../dashboard/pages/users/components/Paymentsuccess ";
import { Contact } from "lucide-react";

const webRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {path:"/contact",element: <Contact/>},
  {},
  {path: "/paymentmethod" , element: <PaymentMethod/>},
  {path: "/paymentsuccess" ,element: <PaymentSuccess/>}
];

export default webRoutes;