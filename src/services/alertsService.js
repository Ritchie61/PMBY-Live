import { supabase } from './supabaseClient';

// Fetch latest alerts
export const getAlerts = async () => {
  const { data, error } = await supabase
    .from('alerts')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(20);
  if (error) console.error(error);
  return data;
};

// Subscribe to realtime updates
export const subscribeAlerts = (callback) => {
  return supabase
    .from('alerts')
    .on('INSERT', payload => {
      callback(payload.new);
    })
    .subscribe();
};

// Add alert manually (admin)
export const addAlert = async (alert) => {
  const { data, error } = await supabase
    .from('alerts')
    .insert([alert]);
  if (error) console.error(error);
  return data;
};
