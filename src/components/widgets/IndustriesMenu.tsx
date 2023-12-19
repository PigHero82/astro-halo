// React
import { Fragment } from "react"

export function IndustriesMenu() {
  // Variables
  const list = [
    {
      label: "STUDIO",
      link: "https://www.343industries.com/studio"
    },
    {
      label: "FRANCHISE",
      link: "https://www.343industries.com/franchise"
    },
    {
      label: "NEWS",
      link: "https://www.343industries.com/news"
    },
    {
      label: "CAREERS",
      link: "https://www.343industries.com/careers"
    },
  ]

  return (
    <Fragment>
      {list.map((item, key) => (
        <a key={key} href={item.link} target="_blank">
          <small>{item.label}</small>
        </a>
      ))}
    </Fragment>
  )
}