"use client"
import useHtmlValidator from "@/app/modules/validators/shared/hooks/useHtmlValidator"
import { useState } from "react"

export default function HtmlValidatorView() {
    const [htmlContent, setHtmlContent] = useState("")
    const [url, setUrl] = useState("")

    const { results, handleValidateByInput, handleValidateByUrl } = useHtmlValidator()

    return (
        <>
            <div className="m-4">
                <h1 className="mb-4 font-bold text-3xl">Validadores de HTML</h1>

                <div className="flex flex-col gap-4">
                    <div className="bg-purple-300 p-4 rounded-2xl flex flex-col gap-2">
                        <h2>Validador por HTML</h2>
                        <p>Resultados: { JSON.stringify(results) }</p>
                        <textarea onChange={(e) => setHtmlContent(e.target.value)}></textarea>
                        <button type="button" onClick={() => handleValidateByInput(htmlContent)}>Enviar</button>
                    </div>

                    <div className="bg-purple-300 p-4 rounded-2xl flex flex-col gap-2">
                        <h2>Validador por URL</h2>
                        <p>Resultados: { JSON.stringify(results) }</p>
                        <input type="text" onChange={(e) => setUrl(e.target.value)} />
                        <button type="button" onClick={() => handleValidateByUrl(url)}>Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}