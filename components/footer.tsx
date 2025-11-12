import linkedinIcon from "@/public/vectors/linkedin-icon.svg";
import dribbbleIcon from "@/public/vectors/dribbble-icon.svg";
import facebookIcon from "@/public/vectors/facebook-icon.svg";
import instagramIcon from "@/public/vectors/instagram-icon.svg";
import twitterIcon from "@/public/vectors/twitter-icon.svg";
import Image from "next/image";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="border-t border-t-[#484E53] py-7">
      <div className="container flex justify-between">
        <p className="text-base font-normal text-[#A9A9A9]">
          &copy; {currentYear} All rights reserved.
        </p>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/naim-abboud-0b6300188/"
              target="_blank"
            >
              <Image src={linkedinIcon} alt="Linkedin Icon" />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com" target="_blank">
              <Image src={dribbbleIcon} alt="dribbble Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/naime.aboud" target="_blank">
              <Image src={facebookIcon} alt="facebook Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/na3eem_aboud/" target="_blank">
              <Image src={instagramIcon} alt="instgram Icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <Image src={twitterIcon} alt="twitter Icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
