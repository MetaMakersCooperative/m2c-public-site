"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react"

export const toaster = createToaster({
  placement: "bottom",
  pauseOnPageIdle: true,
})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root width={{ base: "xl", mdDown: "full" }} p={4}>
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap={4} flex="1" maxWidth="100%">
              {toast.title && <Toast.Title fontSize={"xl"}>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description fontSize={"xl"}>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger fontSize={"2xl"} opacity={1} p={2}/>}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
