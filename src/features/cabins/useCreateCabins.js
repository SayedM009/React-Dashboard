import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinsAPI } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

function useCreateCabins() {
  // React Query Package
  const queryClient = useQueryClient();
  // React Query useMutation to can handle the Fetching and Submitting Data to the Server
  const { mutate: createCabins, isLoading: isCreating } = useMutation({
    mutationFn: createCabinsAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["cabins"]);
      toast.success("Cabin has created");
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, createCabins };
}

export default useCreateCabins;
