import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { HtmlValidator } from "@/app/modules/validators/html-validator/models/HtmlValidator.model"
import { HtmlValidatorViewModel } from "@/app/modules/validators/html-validator/viewmodels/HtmlValidator.viewmodel"
import { HtmlValidatorByInputSchema } from "@/app/modules/validators/html-validator/schemas/HtmlValidatorBySchema.schema"

export default function useHtmlValidatorByInput() {
  const htmlValidator = new HtmlValidator()
  const htmlValidatorViewModel = new HtmlValidatorViewModel(htmlValidator)

  const form = useForm<z.infer<typeof HtmlValidatorByInputSchema>>({
    resolver: zodResolver(HtmlValidatorByInputSchema),
  })

  async function onSubmit(data: z.infer<typeof HtmlValidatorByInputSchema>) {
    try {
      await htmlValidatorViewModel.validateByInput(data.htmlContent)
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
        return
      }

      console.error("Erro desconhecido", err)
    }
  }

  return {
    form,
    onSubmit
  }
}
