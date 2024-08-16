
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function AppNavbar() {
    return (
      <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white p-4 flex items-center w-full opacity-90 shadow-lg">
      <div className="flex items-center text-xl font-bold">
        <a href="/" className="flex items-center hover:text-yellow-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Movies
        </a>
      </div>
        <NavigationMenu.Root className="ml-8">
          <NavigationMenu.List className="flex space-x-4">
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/" className="text-white">
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    );
  }
