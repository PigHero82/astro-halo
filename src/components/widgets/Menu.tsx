// React
import { Fragment, type PropsWithChildren } from "react"

// Components
import { Menu as HLMenu } from "@headlessui/react"

// Icons
import { LiaChevronDownSolid, LiaExternalLinkSquareAltSolid } from "react-icons/lia"

const list = [
  {
    label: "GAMES",
    children: [
      {
        label: "HALO INFINITE",
        link: "https://www.halowaypoint.com/halo-infinite"
      },
      {
        label: "HALO: THE MASTER CHIEF COLLECTION",
        link: "https://www.halowaypoint.com/halo-the-master-chief-collection"
      }
    ]
  },
  {
    label: "NEWS",
    link: "https://www.halowaypoint.com/news"
  },
  {
    label: "ESPORTS",
    link: "https://www.halowaypoint.com/esports"
  },
  {
    label: "SHOW",
    link: "https://www.halowaypoint.com/show-halo"
  },
  {
    label: "COMMUNITY",
    children: [
      {
        label: "HALO INSIDER",
        link: "https://www.halowaypoint.com/halo-insider"
      },
      {
        label: "CONTENT BROWSER",
        link: "https://www.halowaypoint.com/halo-infinite/ugc"
      },
      {
        label: "LEADERBOARDS",
        link: "https://www.halowaypoint.com/halo-infinite/leaderboards"
      }
    ]
  },
  {
    isNewTab: true,
    label: "SUPPORT",
    link: "https://support.halowaypoint.com/"
  },
  {
    isNewTab: true,
    label: "GEAR",
    link: "https://gear.xbox.com/pages/halo?utm_source=halowaypoint.com&utm_medium=referral&utm_campaign=&utm_content="
  }
]

export function Menu(props: PropsWithChildren<{}>) {
  return <Fragment>{props.children}</Fragment>
}

function Desktop() {
  return (
    <Fragment>
      {list.map((item, key) => (
        <Fragment key={key}>
          {item.children ? (
            <HLMenu as="a" href={item.link} target={item.isNewTab ? "_blank" : "_self"} className="h-full w-full relative">
              {({ open }) => (
                <Fragment>
                  <HLMenu.Button className={`h-full w-full hover:bg-white/10 px-5 font-halo text-lg text-white flex items-center gap-2 ${open && "bg-white/10"}`}>
                    {item.label} <LiaChevronDownSolid className={open && "text-[#6cc2d3] rotate-180 transform"} />
                  </HLMenu.Button>
  
                  <HLMenu.Items className="absolute left-0 min-w-[200px] origin-top-right menu bg-[#242c2f] py-2 px-0">
                    {item.children?.map((item, key) => <HLMenu.Item key={key} as="a" href={item.link} className="text-lg text-white hover:bg-gray-200/10 py-3 px-8 font-halo whitespace-nowrap">{item.label}</HLMenu.Item>)}
                  </HLMenu.Items>
                </Fragment>
              )}
            </HLMenu>
          ) : (
            <a href={item.link} target={item.isNewTab ? "_blank" : "_self"} className="h-full w-full">
              <button className="h-full w-full hover:bg-white/10 px-5 font-halo text-lg text-white flex items-center gap-2">
                {item.label} {item.isNewTab && <LiaExternalLinkSquareAltSolid className="text-[#70CDDF]" />}
              </button>
            </a>
          )}
        </Fragment>
      ))}
    </Fragment>
  )
}

function Mobile() {
  return (
    <Fragment>
      {list.map((item, key) => (
        <Fragment key={key}>
          {item.children ? (
            <HLMenu as="a" href={item.link} target={item.isNewTab ? "_blank" : "_self"} className="h-full w-full relative">
              {({ open }) => (
                <Fragment>
                  <HLMenu.Button className={`h-full w-full hover:bg-white/10 px-5 font-halo text-lg text-white flex items-center gap-2 py-2 ${open && "bg-white/10"}`}>
                    {item.label} <LiaChevronDownSolid className={open && "text-[#6cc2d3] rotate-180 transform"} />
                  </HLMenu.Button>
  
                  <HLMenu.Items className="absolute left-0 min-w-[200px] origin-top-right menu bg-[#242c2f] py-2 px-0">
                    {item.children?.map((item, key) => <HLMenu.Item key={key} as="a" href={item.link} className="text-lg text-white hover:bg-gray-200/10 py-3 px-8 font-halo whitespace-nowrap">{item.label}</HLMenu.Item>)}
                  </HLMenu.Items>
                </Fragment>
              )}
            </HLMenu>
          ) : (
            <a href={item.link} target={item.isNewTab ? "_blank" : "_self"} className="h-full w-full">
              <button className="h-full w-full hover:bg-white/10 px-5 font-halo text-lg text-white flex items-center gap-2 py-2">
                {item.label} {item.isNewTab && <LiaExternalLinkSquareAltSolid className="text-[#70CDDF]" />}
              </button>
            </a>
          )}
        </Fragment>
      ))}
    </Fragment>
  )
}

Menu.Desktop = Desktop
Menu.Mobile = Mobile