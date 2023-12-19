// Components
import { Disclosure } from "@headlessui/react"

// Icons
import { BsChevronDown } from "react-icons/bs"
import { GiWorld } from "react-icons/gi"

export function Language() {
  // Variables
  const list = [
    ["Australia - English", "Belgique - Français", "Brasil - Português", "Canada - English", "Canada - English", "Chile - Español", "Colombia - Español", "Deutschland - Deutsch"],
    ["España - Español", "France - Français", "India - English", "Ireland - English", "Italia - Italiano", "México - Español", "Nederlands - Dutch", "New Zealand - English"],
    ["Polska - Polski", "Россия - Русский", "Schweiz - Deutsch", "Singapore - English", "South Africa - English", "Suisse - Français", "United Kingdom - English", "United States - English"],
    ["Österreich - Deutsch", "简体中文 - 中国大陆", "台灣 - 繁體中文", "日本 - 日本語", "대한민국 - 한국어"]
  ]

  return (
    <Disclosure>
      {({ open }) => (
        <section>
          <Disclosure.Button as="div" className="flex items-center gap-2 select-none cursor-pointer">
            <GiWorld size={25} /> United States - English <BsChevronDown className={open ? "transform rotate-180 " : ""} />
          </Disclosure.Button>

          <Disclosure.Panel as="div" className="mt-3 flex flex-wrap gap-3">
            {list.map((i, k) => (
              <section key={k}>
                {i.map((item, key) => (
                  <a href="#" key={key}>
                    <div className={`text-sm hover:underline ${item === "United States - English" && "underline"}`}>{item}</div>
                  </a>
                ))}
              </section>
            ))}
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  )
}