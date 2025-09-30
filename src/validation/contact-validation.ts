import z from "zod";

export class ContactValidation {
  static readonly CREATE = z.object({
    first_name: z.string().min(1).max(100),
    last_name: z.string().min(1).max(100).nullable().optional().default(null),
    email: z.string().min(1).max(100).nullable().optional().default(null),
    phone: z.string().min(1).max(20).nullable().optional().default(null),
  });

  static readonly UPDATE = z.object({
    id: z.number().positive(),
    first_name: z.string().min(1).max(100),
    last_name: z.string().min(1).max(100).nullable().optional().default(null),
    email: z.string().min(1).max(100).nullable().optional().default(null),
    phone: z.string().min(1).max(20).nullable().optional().default(null),
  });

  static readonly SEARCH = z.object({
    name: z.string().min(1).nullable().optional().default(null),
    phone: z.string().min(1).nullable().optional().default(null),
    email: z.string().min(1).nullable().optional().default(null),
    page: z.number().min(1).positive(),
    size: z.number().min(1).max(100).positive(),
  });
}

