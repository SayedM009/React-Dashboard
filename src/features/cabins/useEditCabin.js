import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin as updateCabinAPI } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

function useUpdateCabin() {
  // React Query Package
  const queryClient = useQueryClient();
  // React Query useMutation to can handle the Fetching and Submitting Data to the Server
  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: updateCabinAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["cabins"]);
      toast.success("Cabin has Updated");
    },
    onError: (error) => toast.error(error.message),
  });

  return { updateCabin, isUpdating };
}

export default useUpdateCabin;
