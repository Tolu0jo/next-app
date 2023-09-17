import z from "zod"

const schema = z.object({
    name:z.string().min(3),
    email:z.string().email()
})

export const updateschema = z.object({
    name:z.string().min(3).optional(),
    email:z.string().email().optional()
})

export default schema;