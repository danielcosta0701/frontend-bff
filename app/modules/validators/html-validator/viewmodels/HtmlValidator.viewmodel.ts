import { HtmlValidator } from "@/app/modules/validators/html-validator/models/HtmlValidator.model"

export class HtmlValidatorViewModel {
    model: HtmlValidator

    constructor(model: HtmlValidator) {
        this.model = model
    }

    validateByInput(htmlContent: string) {
        return this.model.validateByInput(htmlContent)
    }

    validateByUrl(url: string) {
        return this.model.validateByUrl(url)
    }
}