
import { AiTwotoneDelete } from "react-icons/ai";
import moment from "moment";
import { useGetAllTasks } from '../../Hooks/Hooks';
import { deleteTask } from '../../Api/taskApi';

const Card = () => {

const{allTasks}:any=useGetAllTasks()
console.log("alll",allTasks)

  return (
    <div className=''>
      {allTasks?.map((el: any) => (
        <div
          key={el._id}
          className="w-[250px] min-h-[100px] border p-2 flex flex-col justify-between m-1"
        >
          <div className=" w-[80%] leading-4 text-[15px] ">{el.task}</div>
          <div className="flex justify-between">
            <div className="text-[13px] text-[#afaaaa]">{el.priority}</div>
            <div className="text-[13px] text-[#afaaaa]">
              {moment(el.createdAt).fromNow()}
            </div>
            <div >
              <AiTwotoneDelete className="text-[red]" onClick={()=>{
              deleteTask(el._id)
              // console.log("i am")
            }}
            
              />
            </div>
          </div>
        </div>
    
      ))}
    </div>
  )
}

export default Card