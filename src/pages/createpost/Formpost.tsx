
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import  {addDoc, collection} from "firebase/firestore"
import {auth,db} from "../../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {useNavigate} from "react-router-dom";

const Formpost = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    interface createFormData {
        title : string,
        description : string
    }

    const schema = yup.object().shape({
        title: yup.string().required("title is required"),
        description: yup.string().min(10).max(200).required("description is required")

    })

    const {register, handleSubmit , formState:{errors}} = useForm< createFormData>({
        resolver : yupResolver(schema)
    })
    
    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: createFormData) => {
        await addDoc(postsRef,{
            // title : data.title,
            // description : data.description,
            ...data,
            username : user?.displayName,
            userId : user?.uid

        })

        navigate("/")
    }

  return (
    <form className='form-post' onSubmit={handleSubmit(onCreatePost)}>
        <input className='input-title' placeholder="title..." {...register("title")} />
        <p className="error-message">{errors.title?.message}</p>
        <textarea  className='input-description' placeholder="description" {...register("description")} />
        <p className="error-message">{errors.description?.message}</p>

        <input className='submit-btn' type="submit" />
    </form>
  )
}

export default Formpost