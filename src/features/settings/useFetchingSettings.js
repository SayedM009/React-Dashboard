import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useFetchingSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, settings, error };
}

export default useFetchingSettings;
