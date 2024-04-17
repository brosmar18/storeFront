import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { HeroCard } from "../../components";
import { heroCards } from "../../constants";
import "./Hero.scss";

const iconMapper = {
  CloudDownloadIcon: <CloudDownloadIcon />,
  LocalPoliceIcon: <LocalPoliceIcon />,
  SupportAgentIcon: <SupportAgentIcon />,
  ReviewsIcon: <ReviewsIcon />,
};
const Hero = () => {
  return (
    <section className="hero">
      {/* Hero Text  */}
      <div className="hero__text">
        <h1>FIFA 23 Release Date Announced</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          maiores. Facere odit alias fugiat nostrum ratione obcaecati impedit ad
          minus, aliquam doloribus quia sequi autem cum temporibus ut quaerat
          reiciendis.
        </p>
      </div>
      {/* Cards  */}
      <div className="hero__cards">
        {heroCards.map((item) => (
          <HeroCard
            key={item.id}
            icon={iconMapper[item.icon]}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
