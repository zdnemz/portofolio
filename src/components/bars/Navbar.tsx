export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 z-20 bg-background px-6 py-4 opacity-70 backdrop-blur sm:px-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a
          href="https://github.com/zdnemz"
          className="flex items-center"
          target="_blank"
          rel="noreferrer"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Zidane
          </span>
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/zdnemz"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 transition-colors duration-300 hover:text-white"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/zdnemz"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 transition-colors duration-300 hover:text-white"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/zdnemz"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 transition-colors duration-300 hover:text-white"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
