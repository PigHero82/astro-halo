export function BackToTop(props: {
  onClick: () => void
}) {
  return (
    <section className="flex flex-col gap-5 justify-center items-center cursor-pointer hover:text-white text-[#68bfd0] select-none" onClick={props.onClick}>
      <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.006l-6.5-6-6.5 6h13z" fill="#70CDDF" fillOpacity=".3" stroke="#70CDDF" strokeOpacity=".75" strokeMiterlimit="10"></path></svg>
      <div className="font-halo uppercase">Back to Top</div>
    </section>
  )
}