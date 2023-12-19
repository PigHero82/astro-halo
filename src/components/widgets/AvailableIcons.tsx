// Assets
import Microsoft from "../../assets/images/microsoft.svg"
import Steam from "../../assets/images/steam.svg"
import Xbox from "../../assets/images/xbox.svg"

export function AvailableIcons() {
  // Variables 
  const images = [Xbox, Microsoft, Steam]

  return (
    <section className="flex flex-wrap gap-x-10 gap-y-3">
      {images.map((item, key) => (
        <img key={key} src={item.src} alt="A rocketship in space." className="h-[24px]" />
      ))}
    </section>
  )
}