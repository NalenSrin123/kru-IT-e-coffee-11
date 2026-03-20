import { useState } from "react";

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v13M7 11l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 19h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const BankIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#2563EB" strokeWidth="1.5" />
    <polyline points="9,22 9,12 15,12 15,22" stroke="#2563EB" strokeWidth="1.5" />
  </svg>
);

const rows = [
  { label: "TRANSACTION ID", value: "#TRX-9823418", copyable: true },
  { label: "DATE", value: "October 24, 2023 • 14:32 PM" },
  { label: "PAYMENT METHOD", value: "ABA Bank", icon: <BankIcon /> },
];

export default function PaymentSuccess() {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText("#TRX-9823418");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleDownload() {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-md px-10 py-10">

          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-200">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-7">
            <h1 className="text-xl font-bold text-gray-900 mb-2">Payment Successful</h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your transaction has been completed successfully<br />and the funds are on their way.
            </p>
          </div>

          <div className="border-t border-gray-100 mb-6">
            {rows.map(({ label, value, copyable, icon }) => (
              <div
                key={label}
                className="flex items-center justify-between py-3.5 border-b border-gray-100"
              >
                <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">{label}</span>
                <div className="flex items-center gap-2">
                  {icon && <span className="text-blue-500">{icon}</span>}
                  <span className="text-sm font-medium text-gray-700">{value}</span>
                  {copyable && (
                    <button
                      onClick={handleCopy}
                      className={`transition-colors ml-0.5 ${copied ? "text-green-500" : "text-gray-300 hover:text-gray-500"}`}
                      title="Copy"
                    >
                      <CopyIcon />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-4 pb-1">
              <span className="text-sm font-bold text-gray-900">Total Amount</span>
              <span className="text-xl font-bold text-blue-600">$1,250.00</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleDownload}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all duration-150 text-white font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <DownloadIcon />
              {downloaded ? "Downloaded!" : "Download Receipt"}
            </button>
            <button className="w-full border border-gray-200 hover:bg-gray-50 active:scale-[0.99] transition-all duration-150 text-gray-700 font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2">
              <GridIcon />
              Return to Dashboard
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
            A confirmation email has been sent to your registered address.<br />
            Need help?{" "}
            <a href="#" className="text-blue-500 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>

      <footer className="py-4 text-center">
        <p className="text-xs text-gray-400 tracking-widest uppercase">© 2023 FintechApp Secure Payments</p>
      </footer>
    </div>
  );
}