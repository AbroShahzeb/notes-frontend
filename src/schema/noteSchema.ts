import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Notes content is required" }),
  tags: z.string().min(1, { message: "Tag is required" }),
});

export type NoteSchema = z.infer<typeof noteSchema>;
