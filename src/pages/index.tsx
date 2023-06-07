import { GiHamburgerMenu } from "react-icons/gi";
import { BsBell } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { SlUserFollowing } from "react-icons/sl";

const HomePage = () => {
  return (
    <div className="m-auto flex w-full max-w-screen-2xl flex-col">
      {/* Header */}
      <header className="flex h-20 w-full flex-row items-center justify-between border-b border-gray-400 p-10">
        {/* burger */}
        <div>
          <GiHamburgerMenu className="text-3xl" />
        </div>
        {/* burger */}

        {/* title */}
        <div className="text-2xl font-thin">Condensed</div>
        {/* title */}

        {/* actions */}
        <div className="flex flex-row items-center space-x-2">
          <div>
            <BsBell className="text-2xl" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600"></div>
          </div>
          <div>
            <button className="flex flex-row items-center gap-1 rounded-2xl border border-gray-400 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
              <div>
                <FaEdit className="text-2xl" />
              </div>
              <div>Write</div>
            </button>
          </div>
        </div>
        {/* actions */}
      </header>
      {/* Header */}

      <section className="grid grid-cols-12">
        {/* Side 4 cols */}
        <aside className="col-span-4 hidden space-y-4 pb-2 pl-10 pr-8 pt-5 md:flex md:flex-col">
          <div>
            <h3 className="mb-5 text-lg">Wanted dead or alive:</h3>
            <div className="flex flex-col space-y-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex w-full flex-col items-start space-y-3 lg:flex-row lg:items-center lg:space-x-2"
                >
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>

                  <div>
                    <p className="font-semibold">Mr.jonny sir</p>
                    <p className="text-sm">
                      The settler, agent, not the person.
                    </p>
                  </div>

                  <div>
                    <button className="flex flex-row items-center gap-1 rounded-2xl border border-gray-400 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
                      <div>
                        <SlUserFollowing className="text-2xl" />
                      </div>
                      <div>Follow</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-0">
            <h3 className="my-5 text-lg">Your reading list</h3>
            <div className="flex flex-col">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="mb-10 flex flex-col lg:flex-row lg:space-x-2"
                >
                  {/* Big(?) Image */}
                  <div className="lg:w-3/7 flex-shrink-1 w-full flex-grow-0 lg:h-full">
                    <div className="aspect-square rounded-xl bg-gray-200 transition duration-300 hover:scale-105 hover:shadow-sm"></div>
                  </div>
                  {/* Big(?) Image */}
                  <div className="lg:w-4/7 flex w-full flex-col space-y-1">
                    <h3 className="text-lg font-bold decoration-indigo-400 group-hover:underline">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="break-words">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat, provident.
                    </p>
                    {/* Author info */}
                    <div className="group relative flex w-full items-center space-x-3">
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="tooltip invisible bottom-6 left-7 rounded-xl bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                          <p className="text-sx px-1 py-1 text-start">
                            Mr.jonny sir
                          </p>

                          <p className="px-1 py-1 text-start">9 Sept 2001</p>
                        </div>
                      </div>
                    </div>
                    {/* Author info */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
        {/* Side */}

        {/* Main 8 cols */}
        <main className="col-span-12 h-full w-full border-l border-gray-300 md:col-span-8">
          {/* ============Upper Section============= */}
          <section className="flex w-full flex-col space-y-4 border-b border-gray-300 px-10 pb-2 pt-5">
            <div className="flex w-full flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              {/* Search bar 50% */}
              <label
                htmlFor="search"
                className="relative h-full w-full rounded-lg border border-gray-400 md:w-1/2"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch className="w-max" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full rounded-lg px-4 py-1 pl-7 text-sm outline-none  placeholder:text-xs placeholder:text-gray-400"
                  placeholder="Search..."
                />
              </label>
              {/* Search Bar */}

              {/* Tags 50% */}
              {/* Dropdown */}
              <div className="group relative inline-block">
                {/* Dropdown Toggle */}
                <div className="flex cursor-pointer items-center space-x-2">
                  <h3 className="mb-5 text-lg">All Categories:</h3>
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {/* Dropdown Menu */}
                <div className="invisible absolute top-2 mt-2 w-48 rounded-lg border border-gray-300 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="py-1">
                    {/* Dropdown Items */}
                    {
                      /* mock tags: */ Array.from({ length: 20 }).map(
                        (_, i) => (
                          <div
                            key={i}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                          >
                            tag
                          </div>
                        )
                      )
                    }
                  </div>
                </div>
              </div>
              {/* Tags */}
            </div>
            <div className="flex w-full items-center justify-between">
              {/* Content */}
              <h3 className="text-lg">Content - Articles?</h3>
              {/* Content */}

              {/* "following??" */}
              <div>
                <button className="flex flex-row items-center gap-1 rounded-2xl border border-gray-400 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
                  <div className="font-sem">Following</div>
                  <div>
                    <HiChevronDown className="text-xl" />
                  </div>
                </button>
              </div>
              {/* "following??" */}
            </div>
          </section>

          {/* ============Lower Section============= */}
          {/* Posts / Articles */}
          <section className="flex w-full flex-col justify-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <article
                key={i}
                className="group flex flex-col border-b border-gray-300 p-10"
              >
                <div className="flex w-full flex-col justify-between space-y-5">
                  {/* Author info */}
                  <div className="flex w-full items-center space-x-3">
                    {/* Author picture / avatar */}
                    <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    {/* Author picture / avatar */}

                    {/* Bio */}
                    <div>
                      <p className="font-semibold">
                        Mr.jonny sir &#x2022; <span>9 Sept 2001</span>
                      </p>
                      <p className="text-sm">
                        The settler, agent, not the person.
                      </p>
                    </div>
                    {/* Bio */}
                  </div>
                  {/* Author info */}
                  <div className="grid h-full w-full grid-cols-12 gap-4">
                    {/* Content Part */}
                    <div className="col-span-8">
                      <h3 className="mb-5 text-xl font-bold decoration-indigo-400 group-hover:underline">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, laboriosam?
                      </h3>
                      <p className="break-words">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Enim officia omnis sapiente commodi deleniti vel
                        ullam aperiam, sint quam assumenda itaque quod possimus
                        pariatur? Non in dolore similique doloremque numquam
                        recusandae minima sit, pariatur maxime, placeat quo
                        illum consequatur tempora. Alias assumenda impedit,
                        explicabo libero debitis, iure minus et tempore
                        quibusdam soluta cupiditate quod ratione, accusamus
                        eveniet optio eum in.
                      </p>
                    </div>
                    {/* Content Part */}

                    {/* Big(?) Image 4 cols */}
                    <div className="col-span-4">
                      <div className="h-full w-full rounded-xl bg-gray-200 transition duration-300 hover:scale-105 hover:shadow-sm"></div>
                    </div>
                    {/* Big(?) Image */}
                  </div>
                  {/* tags */}
                  <div className="grid w-full grid-cols-3 gap-1 md:grid-cols-6">
                    {
                      /* mock tags: */ Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-3xl bg-gray-200/50 px-4 py-1 text-center"
                        >
                          tag
                        </div>
                      ))
                    }
                  </div>
                  {/* tags */}
                </div>
              </article>
            ))}
          </section>
          {/* Posts / Articles */}
        </main>
        {/* Main */}
      </section>
    </div>
  );
};

export default HomePage;
