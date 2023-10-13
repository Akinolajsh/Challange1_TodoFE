
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { createNewTask } from "../../Api/taskApi";
import Swal from "sweetalert2";

const Create = () => {

    const navigate= useNavigate()

    const model = yup.object({
        task: yup.string().required(),
        priority: yup.string().required(),
      });

      const {
        register,
        handleSubmit,
        reset
      } = useForm({
        resolver: yupResolver(model),
      });

      const onSubmit = handleSubmit(async (data) => {
        const { task, priority} = data;
        console.log("first", data);
        createNewTask({  task, priority }).then((res: any) => {
            reset()
          if (res) {
            Swal.fire({
              title: "You have craeted a task succesfully😊",
              showClass: {
                popup: "animate_animated animate_fadeInDown",
              },
              hideClass: {
                popup: "animate_animated animate_fadeOutUp",
              },
            });
            navigate("/my-task");
          } else {
            navigate("/");
            Swal.fire({
              title: "Error occured while createing a task 😢😢",
              showClass: {
                popup: "animate_animated animate_fadeInDown",
              },
              icon: "error",
              hideClass: {
                popup: "animate_animated animate_fadeOutUp",
              },
            });
            console.log("first", res);
          }
        });
      });
    

  return (
    <div className="h-[100vh] w-full flex justify-center mt-10">
      <form className="h-[170px] w-[280px] border p-2 flex flex-col justify-center items-center rounded"
      onSubmit={onSubmit}
      >
        <div className="h-[40px] w-full border rounded-[30px] flex justify-center items-center">
          <input
            type="text"
            placeholder="Create Task"
            className="w-[95%] placeholder:text-[13px] outline-none"
            {...register("task")}
            required
          />
        </div>
        <div className="h-[40px] w-full border rounded-[30px] flex justify-center items-center mt-3">
          <input
            type="text"
            placeholder="Urgent / High / Low"
            className="w-[95%] placeholder:text-[13px] outline-none"
            {...register("priority")}
            required
          />
        </div>
        <button className="mt-4 bg-[darkorange] py-2 px-3 rounded-md" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
