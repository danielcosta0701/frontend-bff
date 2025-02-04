import type { IValidator } from "@/app/modules/validators/shared/interfaces/IValidator";

export class HtmlValidator implements IValidator {
    async validateByInput(htmlContent: string) {
        const response = await fetch("https://validator.w3.org/nu/?out=json", {
            method: "POST",
            headers: {
                'Content-Type': 'text/html',
            },
            body: htmlContent,
        });

        return response.json()
    }

    async validateByUrl(url: string) {
        const response = await fetch(`https://validator.w3.org/nu/?doc=${encodeURIComponent(url)}&out=json`, {
            method: 'GET',
        });
    
        return response.json();
    }

    validateByFile() {
        alert("By File")
    }
}