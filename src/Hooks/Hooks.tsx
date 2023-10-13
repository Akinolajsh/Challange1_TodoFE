import { useQuery } from "@tanstack/react-query"
import { viewTask } from "../Api/taskApi";

export const useGetAllTasks =  () => {
    const { data : allTasks , isLoading} = useQuery({
        queryKey : ["allUser"],
        queryFn : viewTask,

        refetchInterval:1000
    });

    return { allTasks , isLoading}
}
