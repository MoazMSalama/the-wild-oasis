import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://shpttqcwrlxhqnwyjnpj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNocHR0cWN3cmx4aHFud3lqbnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNjAzMDgsImV4cCI6MjAxMzgzNjMwOH0.pjUigyDYkd9Gxk2X6JTDcdZrkJ0npG9IbBKrxBlg-2k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
