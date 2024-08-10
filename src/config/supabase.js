import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://kqrjwgxpudpywnzcvsmh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxcmp3Z3hwdWRweXduemN2c21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMTg3NDksImV4cCI6MjAzODY5NDc0OX0.PDa7Q4FN4HYDnO518eZKI8UCu2dRJhiWgMHp2CRPLio";

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
