import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { themeChange } from "theme-change";
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, []);
  return (
    <header className="shadow bg-primary-focus text-primary-content">
      <div className="px-20 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl"><Link href="/" passHref>Hysky</Link></span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" passHref>
            <a className="btn btn-ghost btn-sm rounded-btn hover:bg-neutral-content hover:text-neutral">Home</a>
          </Link>
          <div className="dropdown dropdown-hover">
            <Link href="/project" passHref>
              <div tabIndex={0} className="btn btn-ghost btn-sm rounded-btn hover:bg-neutral-content hover:text-neutral">
                Skyblocker
              </div>
            </Link>
            <ul
              tabIndex={0}
              className="shadow menu dropdown-content bg-primary text-primary-content rounded-box"
            >
              <li className='hover:bg-neutral-content hover:text-neutral'>
                <Link href="/skyblocker/mod" passHref>
                  <a>Mod</a>
                </Link>
              </li>
              <li className='hover:bg-neutral-content hover:text-neutral'>
                <Link href="/skyblocker/bazaar" passHref>
                  <a>Bazaar</a>
                </Link>
              </li>
              <li className='hover:bg-neutral-content hover:text-neutral'>
                <Link href="/skyblocker/auction" passHref>
                  <a>Auction</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/skyblocker/team" passHref>
            <a className="btn btn-ghost btn-sm rounded-btn hover:bg-neutral-content hover:text-neutral">Skyblocker Team</a>
          </Link>
        </nav>

        <div className="dropdown dropdown-end text-primary-content">
          <div tabIndex={0} className="m-1 normal-case btn-ghost btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current md:mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span className="hidden md:inline">Change Theme</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-4 h-4 ml-1 fill-current"
              viewBox="0 0 1792 1792"
            >
              <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
            </svg>
          </div>
          <div className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-60 w-52 rounded-b-box bg-primary text-primary-content">
            <ul className="p-4 menu compact">
              <li>
                <a
                  tabIndex={0}
                  data-set-theme=""
                  data-act-classname="ACTIVECLASS"
                >
                  {" "}
                  Default
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="light"
                  data-act-classname="ACTIVECLASS"
                >
                  🌝  light
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="dark"
                  data-act-classname="ACTIVECLASS"
                >
                  🌚  dark
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="cupcake"
                  data-act-classname="ACTIVECLASS"
                >
                  🧁  cupcake{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="bumblebee"
                  data-act-classname="ACTIVECLASS"
                >
                  🐝  bumblebee{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="emerald"
                  data-act-classname="ACTIVECLASS"
                >
                  ✳️  Emerald{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="corporate"
                  data-act-classname="ACTIVECLASS"
                >
                  🏢  Corporate{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="synthwave"
                  data-act-classname="ACTIVECLASS"
                >
                  🌃  synthwave{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="retro"
                  data-act-classname="ACTIVECLASS"
                >
                  👴  retro{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="cyberpunk"
                  data-act-classname="ACTIVECLASS"
                >
                  🤖  cyberpunk{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="valentine"
                  data-act-classname="ACTIVECLASS"
                >
                  🌸  valentine{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="halloween"
                  data-act-classname="ACTIVECLASS"
                >
                  🎃  halloween{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="garden"
                  data-act-classname="ACTIVECLASS"
                >
                  🌷  garden{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="forest"
                  data-act-classname="ACTIVECLASS"
                >
                  🌲  forest{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="aqua"
                  data-act-classname="ACTIVECLASS"
                >
                  🐟  aqua{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="lofi"
                  data-act-classname="ACTIVECLASS"
                >
                  👓  lofi{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="pastel"
                  data-act-classname="ACTIVECLASS"
                >
                  🖍  pastel{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="fantasy"
                  data-act-classname="ACTIVECLASS"
                >
                  🧚‍♀️  fantasy{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="wireframe"
                  data-act-classname="ACTIVECLASS"
                >
                  📝  Wireframe{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="luxury"
                  data-act-classname="ACTIVECLASS"
                >
                  💎  luxury{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="dracula"
                  data-act-classname="ACTIVECLASS"
                >
                  🧛‍♂️  dracula{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="cmyk"
                  data-act-classname="ACTIVECLASS"
                >
                  🖨  CMYK{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="autumn"
                  data-act-classname="ACTIVECLASS"
                >
                  🍁  Autumn{" "}
                </a>
              </li>              <li>
                <a
                  tabIndex={0}
                  data-set-theme="business"
                  data-act-classname="ACTIVECLASS"
                >
                  💼  Business{" "}
                </a>
              </li>
              <li>
                <a
                  tabIndex={0}
                  data-set-theme="acid"
                  data-act-classname="ACTIVECLASS"
                >
                  💊  Acid{" "}
                </a>
              </li>              <li>
                <a
                  tabIndex={0}
                  data-set-theme="lemonade"
                  data-act-classname="ACTIVECLASS"
                >
                  🍋  Lemonade{" "}
                </a>
              </li>              <li>
                <a
                  tabIndex={0}
                  data-set-theme="night"
                  data-act-classname="ACTIVECLASS"
                >
                  🌙  Night{" "}
                </a>
              </li>              <li>
                <a
                  tabIndex={0}
                  data-set-theme="coffee"
                  data-act-classname="ACTIVECLASS"
                >
                  ☕️  Coffee{" "}
                </a>
              </li>              <li>
                <a
                  tabIndex={0}
                  data-set-theme="winter"
                  data-act-classname="ACTIVECLASS"
                >
                  ❄️  Winter{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

