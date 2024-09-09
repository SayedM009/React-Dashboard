import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useUpdatingSetting() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: updatingSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      queryClient.invalidateQueries(["settings"]);
      toast.success("Setting updated successfully");
    },
    onError: () => toast.error("Could not update the setting"),
  });

  return { isLoading, updatingSetting };
}

export default useUpdatingSetting;
