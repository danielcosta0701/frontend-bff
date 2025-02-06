"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { HtmlValidatorByInputView } from "./HtmlValidatorByInput.view"

export default function HtmlValidatorView() {
  return (
    <>
      <Tabs defaultValue="htmlCode" className="w-[450px]">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="htmlCode">HTML Code</TabsTrigger>
        </TabsList>
        <TabsContent value="htmlCode">
          <HtmlValidatorByInputView />
        </TabsContent>
      </Tabs>
    </>
  )
}
