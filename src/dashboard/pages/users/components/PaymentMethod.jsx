import { useState } from "react";
import { Link } from "react-router-dom";

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z" fill="#2563EB" fillOpacity="0.15" stroke="#2563EB" strokeWidth="1.5" />
    <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BankIcon = ({ color = "currentColor" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke={color} strokeWidth="1.5" />
    <polyline points="9,22 9,12 15,12 15,22" stroke={color} strokeWidth="1.5" />
  </svg>
);

const CardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LockIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ShieldSmall = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const savedMethods = [
  {
    id: "aba",
    name: "ABA Bank",
    detail: "Account ending in 6899",
    icon: <BankIcon color="#2563EB" />,
    iconBg: "bg-blue-100",
  },
];

const otherMethods = [
  {
    id: "acleda",
    name: "ACLEDA Bank",
    icon: <CardIcon />,
    iconBg: "bg-gray-100",
  },
  {
    id: "applepay",
    name: "Apple Pay",
    icon: <AppleIcon />,
    iconBg: "bg-gray-100",
  },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState("aba");
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldIcon />
            <span className="text-sm font-medium text-gray-800">Secure Checkout</span>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Help</button>
            <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Security</button>
            <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-xs font-medium">U</div>
          </div>
        </div>

        <div className="px-6 pt-7 pb-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-1">Select payment method</h1>
          <p className="text-sm text-gray-400 mb-6">Choose your preferred way to pay securely for your order.</p>

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Saved Methods</p>

          {savedMethods.map((method) => {
            const isSelected = selected === method.id;
            return (
              <button
                key={method.id}
                onClick={() => setSelected(method.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all duration-150 mb-2 text-left ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${method.iconBg} flex items-center justify-center`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isSelected ? "text-blue-700" : "text-gray-800"}`}>{method.name}</p>
                    {method.detail && (
                      <p className={`text-xs ${isSelected ? "text-blue-400" : "text-gray-400"}`}>{method.detail}</p>
                    )}
                  </div>
                </div>
                <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected ? "border-blue-500 bg-blue-500" : "border-gray-300"
                }`}>
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}

      
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-5 mb-3">Other Payment Methods</p>

          {otherMethods.map((method) => {
            const isSelected = selected === method.id;
            return (
              <button
                key={method.id}
                onClick={() => setSelected(method.id)}
                onMouseEnter={() => setHovered(method.id)}
                onMouseLeave={() => setHovered(null)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all duration-150 mb-2 text-left ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${isSelected ? "bg-blue-100" : method.iconBg} flex items-center justify-center ${isSelected ? "text-blue-600" : "text-gray-500"}`}>
                    {method.icon}
                  </div>
                  <p className={`text-sm font-medium ${isSelected ? "text-blue-700" : "text-gray-800"}`}>{method.name}</p>
                </div>
                <span className={`transition-colors ${isSelected ? "text-blue-400" : "text-gray-300"}`}>
                  <ChevronRight />
                </span>
              </button>
            );
          })}

         
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Order Total</span>
            <span className="text-lg font-semibold text-gray-900">$124.50</span>
          </div>

       
          <Link to={"/paymentsuccess"}><button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all duration-150 text-white font-medium text-sm py-3.5 rounded-xl flex items-center justify-center gap-2">
            Continue to Review
            <ArrowRight />
          </button></Link>

          <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5">
            <LockIcon />
            Encrypted and secure payment processing
          </p>
        </div>

      
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-center gap-5 flex-wrap">
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <ShieldSmall />
            PCI DSS Compliant
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <LockIcon />
            SSL Encrypted
          </span>
          <span className="text-xs text-gray-400">© 2024 SecurePay Inc. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}