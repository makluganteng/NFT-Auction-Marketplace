import { useToast, WrapItem, Wrap, Button } from "@chakra-ui/react";

// create props for status
type Status = "success" | "error" | "warning" | "info";

type toastProp = {
  title: string;
  description?: string;
  status: Status;
};
const Toast = (props: toastProp) => {
  const toast = useToast();
  return toast({
    title: props.title,
    description: props.description,
    status: props.status,
    isClosable: true,
  });
};

export default Toast;
