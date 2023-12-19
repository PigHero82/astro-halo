// React
import { Fragment } from "react"
import type { PropsWithChildren } from "react"

function Button(props: PropsWithChildren<{}>) {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

function Primary(props: PropsWithChildren<{}>) {
  return (
    <section className="group/item flex flex-col justify-stretch gap-[1px] cursor-pointer transition active:scale-95">
      <section>
        <div className="w-full h-[1px] bg-gray-300 group-hover/item:bg-white" />
        <div className="w-full border-gray-300 group-hover/item:border-white border-x-[1px] h-[3px]" />
      </section>
      
      <section className="flex items-stretch gap-1">
        <div className="h-full w-[1px] bg-gray-400" />

        <div className="grow x-1 btn btn-sm px-10 !py-0 btn-ghost bg-opacity-75 bg-gray-200 group-hover/item:bg-white no-animation text-black">
          {props.children}
        </div>

        <div className="h-full w-[1px] bg-gray-400" />
      </section>

      <section>
        <div className="w-full border-gray-300 group-hover/item:border-white border-x-[1px] h-[3px]" />
        <div className="w-full h-[1px] bg-gray-300 group-hover/item:bg-white" />
      </section>
    </section>
  )
}

function Secondary(props: PropsWithChildren<{
  className?: string
  color?: "orange" | "white"
}>) {
  // Variables
  const colorList = {
    orange: {
      bg: "bg-lightning-yellow-500 group-hover/item:bg-lightning-yellow-200",
      border: "border-lightning-yellow-500"
    },
    white: {
      bg: "bg-gray-300 group-hover/item:bg-gray-200 bg-opacity-25 group-hover/item:bg-opacity-50",
      border: "border-white"
    }
  }
  const color = props.color ?? "white"

  return (
    <section className={`group/item border p-1 cursor-pointer transition ${colorList[color].border}`}>
      <div className={`w-full btn btn-sm px-3 !py-0 btn-ghost no-animation ${colorList[color].bg} ${props.className}`}>
        {props.children}
      </div>
    </section>
  )
}

Button.Primary = Primary
Button.Secondary = Secondary

export { Button }