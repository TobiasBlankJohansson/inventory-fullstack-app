import {useMutation} from "@tanstack/react-query";

export const usePost = <T>(
  mutationFn: (item: T) => Promise<T>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) => {
  return useMutation({
    mutationFn: mutationFn,
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
}