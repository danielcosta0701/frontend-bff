"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

import useHtmlValidatorByInput from "@/app/modules/validators/html-validator/hooks/useHtmlValidatorByInput"

export function HtmlValidatorByInput() {
  const { form, onSubmit } = useHtmlValidatorByInput()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="htmlContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>HTML Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Lorem Ipsum"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, suscipit.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
