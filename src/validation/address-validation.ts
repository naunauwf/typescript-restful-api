import z from "zod";

export class AddressValidation {
  static readonly CREATE = z.object({
    contact_id: z.number().positive(),
    street: z.string().min(1).max(255).nullable().optional().default(null),
    city: z.string().min(1).max(100).nullable().optional().default(null),
    province: z.string().min(1).max(100).nullable().optional().default(null),
    country: z.string().min(1).max(100),
    postal_code: z.string().min(1).max(10),
  });

  static readonly GET = z.object({
    contact_id: z.number().positive(),
    id: z.number().positive(),
  });

  static readonly UPDATE = z.object({
    id: z.number().positive(),
    contact_id: z.number().positive(),
    street: z.string().min(1).max(255).nullable().optional().default(null),
    city: z.string().min(1).max(100).nullable().optional().default(null),
    province: z.string().min(1).max(100).nullable().optional().default(null),
    country: z.string().min(1).max(100),
    postal_code: z.string().min(1).max(10),
  });

  static readonly REMOVE = z.object({
    contact_id: z.number().positive(),
    id: z.number().positive(),
  });
}
