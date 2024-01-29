import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={24} height={24} className="h-52 w-52 text-secondary" />,
  <FramerLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
  <SketchLogoIcon
    width={24}
    height={24}
    className=" h-52 w-52 text-secondary"
  />,
  <TwitterLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
  <GitHubLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
  <VercelLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
  <NotionLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
  <DiscordLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
  <InstagramLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
  <LinkedInLogoIcon
    width={24}
    height={24}
    className="h-52 w-52 text-secondary"
  />,
];

const Partners = () => {
  return (
    <div className="relative m-auto grid w-full grid-cols-3 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="absolute z-10 mx-auto flex h-full w-full items-center justify-center bg-secondary bg-opacity-20">
        <p className="herotext dark:font-bold dark:text-primary">
          Companies we've taught
        </p>
      </div>
      <div className="flex w-[calc(250px*10)] animate-infinite-slider">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] flex-wrap items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
