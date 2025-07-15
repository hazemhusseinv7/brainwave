import Section from "./Section";
import { copyright } from "../assets";
import { socials } from "../constants/socials";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          <img
            src={copyright}
            width={17}
            height={17}
            alt="copyright"
            className="inline-block align-[-3px]"
          />{" "}
          &nbsp;
          {new Date().getFullYear()}{" "}
          <a
            href="https://hazemhussein.netlify.app/"
            className="hover:text-color-1"
            aria-label="author"
          >
            Hazem
          </a>
          {" - "}
          All Rights Reserved
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
