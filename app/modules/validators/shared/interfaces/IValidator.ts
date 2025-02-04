export interface IValidator {
    validateByInput(htmlContent: string): Promise<void>
    validateByUrl(url: string): Promise<void>
}