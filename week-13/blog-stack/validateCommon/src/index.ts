import z from "zod";

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string(),
    name: z.string().optional(),
});


export const signinInput = z.object({
    username: z.string().email(),
    password: z.string(),
});

export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});


export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});


export type CreatePostType = z.infer<typeof createPostInput>;
export type SigninType = z.infer<typeof signinInput>;
export type SignupType = z.infer<typeof signupInput>;
export type UpdatePostType = z.infer<typeof updatePostInput>;