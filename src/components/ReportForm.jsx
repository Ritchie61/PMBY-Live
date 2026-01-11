import { useState } from 'react';
import { submitReport } from '../services/reportsService';

const ReportForm = ({ onSubmitted }) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitReport({ type, description, lat: parseFloat(lat), lng: parseFloat(lng), timestamp: new Date() });
    setType(''); setDescription(''); setLat(''); setLng('');
    onSubmitted(); // Refresh feed/map
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Traffic">Traffic</option>
        <option value="Power">Power/Water</option>
        <option value="Flood">Flood</option>
        <option value="Safety">Safety</option>
      </select>
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} required />
      <input type="number" placeholder="Longitude" value={lng} onChange={(e) => setLng(e.target.value)} required />
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;
