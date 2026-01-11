const AlertsFeed = ({ alerts }) => {
  return (
    <div className="alerts-feed">
      {alerts.map(alert => (
        <div key={alert.id} className="alert-item">
          <span>{alert.type}</span> - {alert.description} <small>{new Date(alert.timestamp).toLocaleTimeString()}</small>
        </div>
      ))}
    </div>
  );
};

export default AlertsFeed;
