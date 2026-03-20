import { useDispatch, useSelector } from "react-redux"
import { dislike, like } from "./likeDislikeSlice";

function LikeDislike(){
    const {likes,dislikes}= useSelector(state=>state.likeDislikeReducer);
    const dispatch=useDispatch()
    return(
        <div className="myBox">
            <h1>LikeDislike</h1>
            <i class="bi bi-hand-thumbs-up-fill like"  onClick={()=>{
                dispatch(like())
            }}></i>{likes}
            <i class="bi bi-hand-thumbs-down-fill dislike" onClick={()=>{
                dispatch(dislike())
            }}></i>{dislikes}
        </div>
    )
}
export default LikeDislike