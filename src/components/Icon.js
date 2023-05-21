import Icons from "../assets/menusprite.svg";

const Icon = ({ name, color = "#909090", size = "18px" }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

export default Icon;
