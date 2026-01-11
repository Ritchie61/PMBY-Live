import { supabase } from './supabaseClient';

// Submit a user report
export const submitReport = async (report) => {
  const { data, error } = await supabase
    .from('reports')
    .insert([report]);
  if (error) console.error(error);
  return data;
};
