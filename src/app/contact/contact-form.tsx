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
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from 'axios';
import { toaster } from "@/components/ui/toaster";

interface ContactFormFields {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormFields>();

  if (errors.name || errors.email || errors.message) {
    console.log("Validation errors:", errors);
  }
  
  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
        //this doesn't work... need to get this hooked up to directus or something instead
        const url = "https://formspree.io/f/info@metamakers.org";
        const response = await axios.postForm(url, data, );
        console.log('Success:', response.data);
        toaster.create({
            title: "Message received!",
            description: "Thanks for contacting us. We'll get back to you soon.",
            type: "success",
            duration: 10000,
            closable: true,
        })
    } catch (error) {
        console.error('Error:', error);
        toaster.create({
            title: "An error occurred.",
            description: "Please try again later or email us instead.",
            type: "error",
            duration: 10000,
            closable: true,
        })
    }
  }

  return (
    <>
      <Text>
        Contact us to learn more. Email us at{" "}
        <Link href="mailto:info@metamakers.org" color="blue.500">
          info@metamakers.org
        </Link>{" "}
        or complete the form below.{errors.name && "Name is required."}
      </Text>

      <Center>
        <VStack asChild width={{ base: "60%", mdDown: "100%" }} paddingTop={8} spaceY={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field.Root invalid={!!errors.name}>
              <Field.Label>Your Name</Field.Label>
              <Input placeholder="Enter your name" {...register("name", { required: "Name is required." })} paddingInlineStart={2}/>
              <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.email}>
              <Field.Label>Your Email</Field.Label>
              <Input placeholder="Enter your email" {...register("email", { required: "Email is required.",pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email address.",
                } 
              })}  paddingInlineStart={2} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.message}>
              <Field.Label>Your Message</Field.Label>
              <Textarea rows={6} placeholder="Enter your message" {...register("message", { required: "Message is required." })} paddingInlineStart={2} paddingBlock={2} />
              <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
            </Field.Root>

            <Button type="submit" colorScheme="blue" width="full" mt={6}>
              Send
            </Button> 
          </form>
        </VStack>
      </Center>
    </>
  );
}
