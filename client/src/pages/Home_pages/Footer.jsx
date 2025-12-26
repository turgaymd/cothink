import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Zəhmət olmasa email ünvanınızı daxil edin.");
    } else {
      setError('');
      alert("Email göndərildi");
      setEmail("");
    }
  };

  return (
    <footer className="from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div className="md:col-span-1 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img 
                src="/images/footer_logo.png" 
                alt="CoThink Logo" 
                className="h-10"
              />
            </a>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              CoThink — tələbələrin öyrəndiyi, paylaşdığı və birlikdə inkişaf etdiyi sosial təhsil platformasıdır. 
              Məqsədimiz öyrənmə prosesini daha aydın, əlçatan və effektiv etməkdir.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-full outline-none focus:border-blue-500 transition" 
                placeholder="E-mailinizi daxil edin" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button 
                onClick={sendEmail}
                className="bg-black text-white w-full py-3 rounded-full hover:bg-gray-800 transition font-medium"
              >
                Təsdiqlə
              </button>
            </div>
          </div>

          <div className="hidden lg:block"></div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Şirkət</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/about" 
                    className="text-blue-600 hover:text-blue-700 transition text-sm"
                  >
                    Haqqımızda
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-700 transition text-sm"
                  >
                    Kariyera
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-700 transition text-sm"
                  >
                    Yeniliklər
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Gizlilik və təhlükəsizlik</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition text-sm"
                  >
                    CoThink Giriş
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition text-sm"
                  >
                    CoThink Şərtlər
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition text-sm"
                  >
                    CoThink Məxfilik
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition text-sm"
                  >
                    CoThink Dəstək
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    className="text-gray-600 hover:text-gray-900 transition text-sm"
                  >
                    CoThink Əlaqə
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 CoThink. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;