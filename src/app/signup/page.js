import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <header className="px-24 flex justify-between items-center py-5">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="The Eagle Logo of Website"
            width={50}
            height={50}
          />
          <h2 className="text-xl font-bold italic font-serif">
            Eagle's <br /> Daily News
          </h2>
        </Link>
      </header>

      <form className="max-w-sm mx-auto p-10 rounded-lg bg-blue-50">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <div className="flex justify-between items-center mt-10">
          <p className="text-lg">Already have an account?</p>
          <Link
            href="/profile"
            className="p-3 text-lg text-blue-900 font-semibold hover:border-b-2 hover:border-orange-400  hover:scale-3d"
          >
            Log In
          </Link>
        </div>
      </form>
    </>
  );
};

export default Page;
