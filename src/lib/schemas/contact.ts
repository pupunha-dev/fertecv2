import { z } from "zod";

export const SEGMENTOS_INDUSTRIAIS = [
  "Automotivo",
  "Alimentício",
  "Plásticos/Embalagens",
  "Metalmecânico",
  "Papel e Celulose",
  "Químico",
  "Outro",
] as const;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp", "image/gif"];

export const contactSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  empresa: z.string().min(2, "Informe o nome da empresa"),
  segmento: z.enum(SEGMENTOS_INDUSTRIAIS, {
    error: "Selecione o segmento industrial",
  }),
  telefone: z.string().min(8, "Informe um telefone válido"),
  email: z.string().email("Informe um e-mail válido"),
  descricao: z
    .string()
    .min(20, "Descreva o problema técnico com pelo menos 20 caracteres"),
  arquivo: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE,
      "O arquivo deve ter no máximo 5MB"
    )
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_FILE_TYPES.includes(files[0].type),
      "Formato não suportado. Envie imagens ou PDF"
    ),
});

export type ContactFormData = z.infer<typeof contactSchema>;
