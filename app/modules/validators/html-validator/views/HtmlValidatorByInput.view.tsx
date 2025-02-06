"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

export function HtmlValidatorByInputView() {
  const { form, onSubmit } = useHtmlValidatorByInput()

  return (
    <Card className="flex-1 flex flex-col bg-white/5 border-none shadow-none text-inherit">
      <CardHeader>
        <CardTitle>
          Your code here
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor?
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex-1 flex flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
            <FormField
              control={form.control}
              name="htmlCode"
              render={({ field }) => (
                <FormItem className="h-full flex flex-col">
                  <FormLabel>HTML Code</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Lorem Ipsum"
                      className="resize-none flex-1"
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
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          disabled={true}
          variant="html5"
          onClick={form.handleSubmit(onSubmit)}
        >
          Validate
        </Button>
      </CardFooter>
    </Card>
  )
}
