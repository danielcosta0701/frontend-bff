import { z } from "zod"

export const HtmlValidatorByInputSchema = z.object({
    htmlCode: z.string()
})