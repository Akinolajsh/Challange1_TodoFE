import axios from "axios";

const url: string = "https://challange-todo.onrender.com";


export const createNewTask = async (data : any) => {
    try {
        return await axios.post(`${url}/api/create-task` , data).then((res : any) => {
            // console.log(res.data)
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const viewTask = async () => {
    try {
        return await axios.get(`${url}/api/view-task`).then((res : any) => {
         return res.data.data
        })
    } catch (error) {
        return(error);
    }
}

export const deleteTask = async (taskID: string) => {
    try {
        return await axios.delete(`${url}/api/${taskID}/delete`).then((res : any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}