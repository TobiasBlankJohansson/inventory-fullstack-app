import {useMutation} from "@tanstack/react-query";
import {postItem} from "@/api/InventoryFetch.ts";

export const usePostItem = (
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) => {
  return useMutation({
    mutationFn: postItem,
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
};
