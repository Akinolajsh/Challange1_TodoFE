
import Card from "../../components/static/Card";
import { useGetAllTasks } from "../../Hooks/Hooks";

const MyTask = () => {
  const { allTasks }: any = useGetAllTasks();
  console.log("alll", allTasks);

  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center ">
      <Card/>
    </div>
  );
};

export default MyTask;
