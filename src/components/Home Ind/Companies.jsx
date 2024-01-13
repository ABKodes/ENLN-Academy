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
  <FigmaLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <FramerLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <SketchLogoIcon width={24} height={24} className=" text-secondary w-52 h-52" />,
  <TwitterLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <GitHubLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <VercelLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <NotionLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <DiscordLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <InstagramLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
  <LinkedInLogoIcon width={24} height={24} className="text-secondary w-52 h-52" />,
];

const Companies = () => {
  return (
    <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-[''] grid grid-cols-3">
        <div className="w-full h-full bg-secondary bg-opacity-20 flex justify-center items-center mx-auto z-10 absolute">
          <p className="herotext dark:text-primary dark:font-bold">Companies we've taught</p>
        </div>
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex flex-wrap w-[125px] items-center justify-center"
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

export default Companies;
