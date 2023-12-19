// Icons
import { BsDiscord, BsFacebook, BsInstagram, BsTiktok, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs"

export function SocialMedia() {
  // Variables
  const list = [
    {
      icon: BsTwitter,
      link: "https://twitter.com/Halo",
      color: "hover:bg-[#199ded]"
    },
    {
      icon: BsInstagram,
      link: "http://instagram.com/halo",
      color: "hover:bg-[#e52765]"
    },
    {
      icon: BsTiktok,
      link: "https://www.tiktok.com/@halo",
      color: "hover:bg-[#65c4ca]"
    },
    {
      icon: BsYoutube,
      link: "https://www.youtube.com/halo",
      color: "hover:bg-[#f90000]"
    },
    {
      icon: BsDiscord,
      link: "https://discord.gg/halo",
      color: "hover:bg-[#6f85d3]"
    },
    {
      icon: BsFacebook,
      link: "https://www.facebook.com/Halo",
      color: "hover:bg-[#0863f8]"
    },
    {
      icon: BsTwitch,
      link: "https://www.twitch.tv/halo",
      color: "hover:bg-[#8e44f8]"
    }
  ]

  return (
    <section className="flex flex-wrap gap-3 justify-center">
      {list.map((item, key) => (
        <a key={key} href={item.link} target="_blank">
          <button className={`btn btn-ghost rounded-full px-3 text-white ${item.color}`}>
            <item.icon size={20} />
          </button>
        </a>
      ))}
    </section>
  )
}