import icon from "../../assets/images/notification-icon.svg";
import "./styles.css";

export const NotificationButton = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
};
