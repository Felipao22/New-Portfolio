import { z } from "zod";

const envSchema = z.object({
  VITE_SERVICE_ID: z.string(),
  VITE_TEMPLATE_ID: z.string(),
  VITE_PUBLIC_KEY: z.string(),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error("Error en las variables de entorno:", parsedEnv.error.format());
  throw new Error("Variables de entorno inválidas");
}

export const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } =
  parsedEnv.data;
