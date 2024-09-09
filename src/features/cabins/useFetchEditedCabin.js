import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCabin as fetchCabinAPI } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

function useFetchEditedCabin() {
  // React Query Package
  const queryClient = useQueryClient();
  // React Query useMutation to can handle the Fetching and Submitting Data to the Server
  const { mutate: fetchCabin, isLoading: isFetching } = useMutation({
    mutationFn: fetchCabinAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: (error) => toast.error(error.message),
  });

  return { fetchCabin, isFetching };
}

export default useFetchEditedCabin;
