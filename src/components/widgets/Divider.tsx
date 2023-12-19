// React
import { Fragment, type PropsWithChildren } from "react"

export function Divider(props: PropsWithChildren<{}>) {
  return <Fragment>{props.children}</Fragment>
}

function Dashed(props: {
  className?: string
}) {
  return (
    <section className={`w-full max-w-[150px] mx-auto ${props.className}`}>
      <svg width="150" height="2" viewBox="0 0 150 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" strokeDasharray="1 10" d="M0 .506h150"></path></svg>
    </section>
  )
}

function Primary(props: {
  className?: string
}) {
  return (
    <section className={`w-full flex gap-x-[2px] ${props.className}`}>
      <hr className="max-w-[20px] grow border-gray-400" />
      <hr className="grow border-gray-500" />
      <hr className="max-w-[20px] grow border-gray-400" />
    </section>
  )
}

Divider.Dashed = Dashed
Divider.Primary = Primary