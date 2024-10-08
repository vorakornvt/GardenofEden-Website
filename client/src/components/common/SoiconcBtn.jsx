import { SoiconcBtnPrimary, SoiconcBtnSecondary } from "./SoiconcBtn.css";

const SoiconcBtn = ({ children, variant = "primary" }) => {
  const getButtonClass = () => {
    switch (variant) {
      case "secondary":
        return SoiconcBtnSecondary;
      case "primary":
      default:
        return SoiconcBtnPrimary;
    }
  };

  return <button className={getButtonClass()}>{children}</button>;
};

export default SoiconcBtn;
