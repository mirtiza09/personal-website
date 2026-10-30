import React from "react"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaTiktok, FaWordpress, FaVk } from "react-icons/fa"

import Icons from "../util/socialmedia.json"

const networks = {
  facebook: ["Facebook", RiFacebookBoxFill],
  twitter: ["Twitter", RiTwitterFill],
  linkedin: ["LinkedIn", RiLinkedinBoxFill],
  youtube: ["YouTube", RiYoutubeFill],
  instagram: ["Instagram", RiInstagramFill],
  rss: ["RSS", RiRssFill],
  github: ["GitHub", RiGithubFill],
  telegram: ["Telegram", RiTelegramFill],
  pinterest: ["Pinterest", RiPinterestFill],
  snapchat: ["Snapchat", RiSnapchatFill],
  skype: ["Skype", RiSkypeFill],
  wordpress: ["WordPress", FaWordpress],
  tiktok: ["TikTok", FaTiktok],
  dribbble: ["Dribbble", RiDribbbleFill],
  medium: ["Medium", RiMediumFill],
  behance: ["Behance", RiBehanceFill],
  vk: ["VK", FaVk],
}

const SocialIcons = ({ className = "social-icons" }) => (
  <ul className={className}>
    {Icons.socialIcons
      .filter(item => networks[item.icon])
      .map(item => {
        const [label, Icon] = networks[item.icon]
        return (
          <li key={item.icon}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"Link to " + label}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        )
      })}
  </ul>
)

export default SocialIcons
