'use client'

import {
  Field,
  Button,
  Input,
  Link,
  Textarea,
  VStack,
  Text,
  Center,
  BoxProps,
  Box,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from 'axios';
import { toaster } from "@/components/ui/toaster";
import { useSubmit } from "@formspree/react";
import { FieldValues } from "@formspree/core"

interface ContactFormFields extends FieldValues {
    name: string;
    email: string;
    message: string;
}

export interface ContactFormProps extends BoxProps {
}

export default function ContactForm({...props}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormFields>();

  const formspree = useSubmit<ContactFormFields>("xnjgaeoq");

  if (errors.name || errors.email || errors.message) {
    console.log("Validation errors:", errors);
  }
  
  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {

        const response = await formspree(data);
        console.log(response);
        if (response.kind == "success") {
          toaster.create({
            title: "Message received!",
            description: "Thanks for contacting us. We'll get back to you soon.",
            type: "success",
            duration: 10000,
            closable: true,
          });
        }
        else {
          toaster.create({
            title: "An error occurred.",
            description: "Please try again later or email us instead.",
            type: "error",
            duration: 10000,
            closable: true,
          });
        }
  }

  return (
    <Box {...props}>
      <Text>
        Contact us to learn more. Email us at{" "}
        <Link href="mailto:info@metamakers.org" variant={"underline"}>
          info@metamakers.org
        </Link>{" "}
        or complete the form below.{errors.name && "Name is required."}
      </Text>

      <Center>
        <VStack asChild width={{ base: "60%", mdDown: "100%" }} paddingTop={8} spaceY={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field.Root invalid={!!errors.name}>
              <Field.Label>Your Name</Field.Label>
              <Input placeholder="Enter your name" {...register("name", { required: "Name is required." })} paddingInlineStart={2} backgroundColor={"bg.panel"}/>
              <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.email}>
              <Field.Label>Your Email</Field.Label>
              <Input placeholder="Enter your email" {...register("email", { required: "Email is required.",pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email address.",
                } 
              })}  paddingInlineStart={2}  backgroundColor={"bg.panel"}/>
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.message}>
              <Field.Label>Your Message</Field.Label>
              <Textarea rows={6} placeholder="Enter your message" {...register("message", { required: "Message is required." })} paddingInlineStart={2} paddingBlock={2}  backgroundColor={"bg.panel"}/>
              <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
            </Field.Root>

            <Button type="submit" colorPalette="purple" p={4}>
              Send
            </Button> 
          </form>
        </VStack>
      </Center>
    </Box>
  );
}
