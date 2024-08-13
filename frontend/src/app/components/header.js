const Header = () => {

  // Return this if logged in
  return (
  <nav class="flex items-center justify-between flex-wrap bg-dark p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a href="/">
        <img src='/corner_logo.png' width={140}/>
      </a>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full flex justify-center lg:justify-between lg:w-auto">
      <div class="text-sm lg:flex lg:flex-grow lg:justify-center">
        <div class="flex justify-end lg:block">
          <a href="/register" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-700 hover:bg-white mt-4 lg:mt-0 mr-3">Register</a>
        </div>
        <div class="flex justify-end lg:block">
          <a href="/profile" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-700 hover:bg-white mt-4 lg:mt-0">Profile</a>
        </div>
      </div>
    </div>
  </nav>

  );
};

export default Header;