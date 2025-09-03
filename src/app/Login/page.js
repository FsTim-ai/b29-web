export default function Login(){
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center font-mono">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
        {/* bagian kiri */}
        <div className="bg-gray-800 p-6 hidden md:flex flex-col text-green-400 text-sm">
          <pre>
            <code className="text-blue-400">function</code>{" "}
            <code className="text-yellow-400">login</code>() {"{"}
            <div className="pl-5">
              <code className="text-purple-400">const</code> user ={" "}
              <code className="text-pink-400">getUserInput</code>();
            </div>
            <div className="pl-5">
              <span className="text-purple-400">if</span>(user.email &&
              user.password) {"{"}
            </div>
            <div className="pl-10">
              <code className="text-green-400">return</code>{" "}
              <code className="text-blue-400">"Welcome Back!"</code>;{" "}
            </div>
            <div className="pl-5">
              <code className="text-green-400">{"} "}</code>
              <code className="text-purple-400">else</code> {"{"}
            </div>
            <div className="pl-10">
              <code className="text-red-400">throw</code>{" "}
              <code className="text-blue-400">"Invalid credentials"</code>;
            </div>
            <div className="text-green-400 pl-5">{"}"} </div>
          </pre>
        </div>

        <div className="bg-gray-900 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Sign In
          </h2>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@gmail.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none text-white"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-400 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-white shadow-md transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6 text-center">
            Don’t have an account?
            <a href="#" className="text-blue-400 hover:underline">
              {" "}
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
