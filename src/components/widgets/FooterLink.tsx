// React
import { Fragment } from "react"

export function FooterLink() {
  // Variables
  const list = [
    {
      label: "Privacy & Cookies",
      link: "https://go.microsoft.com/fwlink/?LinkId=521839"
    },
    {
      label: "Trademarks",
      link: "http://www.microsoft.com/trademarks"
    },
    {
      label: "Terms Of Use",
      link: "https://www.microsoft.com/servicesagreement"
    },
    {
      label: "Microsoft 2013",
      link: "https://www.microsoft.com/"
    }
  ]

  return (
    <Fragment>
      {list.map((item, key) => <a key={key} href={item.link} target="_blank">{item.label}</a>)}
    </Fragment>
  )
}