import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearAllUserErrors, login } from "@/store/slices/userSlice";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, isAuthenticated, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, error, navigateTo]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* خلفية زجاجية متدرجة */}
      <div className="absolute inset-0 bg-[url('/login.png')] bg-cover bg-center opacity-10 z-0" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-4">
        {/* الكارد */}
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">تسجيل الدخول</h1>
            <p className="text-gray-500 dark:text-gray-300">ادخل بريدك الإلكتروني وكلمة المرور للمتابعة</p>
          </div>
          <div className="space-y-6">
            <div>
              <Label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-200">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-200">كلمة المرور</Label>
                <Link to="/password/forgot" className="text-sm text-blue-600 hover:underline">نسيت كلمة المرور؟</Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:ring-2 focus:ring-pink-400"
              />
            </div>
            {loading ? (
              <SpecialLoadingButton content={"جاري تسجيل الدخول..."} />
            ) : (
              <Button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 rounded-lg shadow-md hover:from-pink-500 hover:to-blue-500 transition-all duration-300"
              >
                دخول
              </Button>
            )}
          </div>
        </div>
        {/* صورة جانبية للشاشات الكبيرة */}
        <div className="hidden md:block md:w-1/2 pl-8">
          <img src="/login.png" alt="login" className="rounded-2xl shadow-xl max-h-[400px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
