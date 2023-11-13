import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // as onSuccess recieves the data (user) from the function
      // setQueriesData enables you to set a query manually to cash and we use this here to prevent initial spinner as the data is refetched, when the query function work in useUser hook it will get the data immediately from the cashe, but it will not work :)
      queryClient.setQueryData(["user"], user.user); // here is a bug fixed go back to the video
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
