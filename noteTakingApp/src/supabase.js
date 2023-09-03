import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://llmuppsizveockpzzqth.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbXVwcHNpenZlb2NrcHp6cXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNDczMDMsImV4cCI6MjAwNjYyMzMwM30.cCfs-6Sl-NRP7pexGAI5zhhG7YphS_Ar1bDf7zY3JA4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
