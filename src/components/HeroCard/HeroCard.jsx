import "./HeroCard.scss";

const HeroCard = ({ icon, title, subTitle }) => {
  return (
    <div className="heroCard">
      <div className="icon"> {icon}</div>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default HeroCard;
