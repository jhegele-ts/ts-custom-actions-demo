import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_TS_HOST: z.string().url(),
    NEXT_PUBLIC_TS_LIVEBOARD_ID: z.string().uuid(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_TS_HOST: process.env.NEXT_PUBLIC_TS_HOST,
    NEXT_PUBLIC_TS_LIVEBOARD_ID: process.env.NEXT_PUBLIC_TS_LIVEBOARD_ID,
  },
})
