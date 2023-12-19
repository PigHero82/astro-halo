// React
import { Fragment } from "react"

// Utils
import { new_list } from "./utils"

export function NewsList() {
  return (
    <section className="grid lg:grid-cols-4 gap-5">
      {new_list.map((item, key) => (
        <Fragment key={key}>
          {key === 0 ? (
            <div className="lg:col-span-3 bg-transparent flex lg:flex-row flex-col">
              <img src={item.image} alt={item.title} className="lg:min-h-[495px] lg:w-[70%] lg:object-cover" />

              <section className="grow lg:bg-black/50 lg:p-7 py-5">
                <div className="font-halo uppercase mb-2">{item.category}</div>
                <h3 className="font-halo lg:text-2xl text-xl uppercase text-white">{item.title}</h3>
                <div className="lg:my-5 mt-3">{item.time}</div>
                <p className="lg:block hidden">{item.description.substring(0, 250)}{item.description.length > 250 && "..."}</p>
              </section>
            </div>
          ) : (
            <div className="bg-transparent h-full lg:flex lg:flex-col grid md:grid-cols-2 grid-cols-3">
              <img src={item.image} alt={item.title} />

              <section className="lg:grow md:col-span-1 col-span-2 lg:bg-black/50 lg:p-5 pl-5">
                {item.category && <div className="font-halo uppercase mb-2">{item.category}</div>}
                <h3 className="font-halo lg:text-2xl text-xl uppercase text-white">{item.title}</h3>
                <div className="lg:my-5 mt-3">{item.time}</div>
                <p className="lg:block hidden">{item.description.substring(0, 85)}{item.description.length > 85 && "..."}</p>
              </section>
            </div>
          )}
        </Fragment>
      ))}
    </section>
  )
}