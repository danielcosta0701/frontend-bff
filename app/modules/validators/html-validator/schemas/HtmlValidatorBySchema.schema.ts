import { z } from "zod"

export const HtmlValidatorByInputSchema = z.object({
    htmlContent: z.string()
})