// app/server/token.ts (or a dedicated server folder)
import "server-only";  // This will now only be used in server-side context
export const token = process.env.SANITY_API_READ_TOKEN;
