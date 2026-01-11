const AlertPopup = ({ alert }) => {
  return (
    <div>
      <strong>{alert.type}</strong>
      <p>{alert.description}</p>
      <small>{new Date(alert.timestamp).toLocaleString()}</small>
    </div>
  );
};

export default AlertPopup;
