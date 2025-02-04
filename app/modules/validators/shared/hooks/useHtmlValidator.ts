import { HtmlValidator } from "@/app/modules/validators/html-validator/models/HtmlValidator.model"
import { HtmlValidatorViewModel } from "@/app/modules/validators/html-validator/viewmodels/HtmlValidator.viewmodel"
import { useState } from "react"

export default function useHtmlValidator() {
    const [results, setResults] = useState(null)

    const htmlValidator = new HtmlValidator()
    const htmlValidatorViewModel = new HtmlValidatorViewModel(htmlValidator)

    const handleValidateByInput = async (htmlContent: string) => {
        try {
            const res = await htmlValidatorViewModel.validateByInput(htmlContent)

            setResults(res)
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message)
                return
            }

            console.error("Erro desconhecido", err)
        }
    }

    const handleValidateByUrl = async (url: string) => { 
        htmlValidatorViewModel.validateByUrl(url)

        try {
            const res = await htmlValidatorViewModel.validateByUrl(url)

            setResults(res)
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message)
                return
            }

            console.error("Erro desconhecido", err)
        }
    }

    return {
        results,
        handleValidateByInput,
        handleValidateByUrl,
    }
}