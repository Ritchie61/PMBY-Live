import { useEffect, useState } from 'react';
import MapComponent from '../components/MapComponent';
import AlertsFeed from '../components/AlertsFeed';
import ReportForm from '../components/ReportForm';
import { getAlerts, subscribeAlerts } from '../services/alertsService';

const Home = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => setAlerts(await getAlerts());
    fetchAlerts();

    const subscription = subscribeAlerts((newAlert) => setAlerts(prev => [newAlert, ...prev]));
    return () => subscription.unsubscribe();
  }, []);

  const handleReportSubmitted = () => {
    // Optionally refresh alerts manually
  };

  return (
    <div>
      <MapComponent alerts={alerts} />
      <AlertsFeed alerts={alerts} />
      <ReportForm onSubmitted={handleReportSubmitted} />
    </div>
  );
};

export default Home;
