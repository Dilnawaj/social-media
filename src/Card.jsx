import { useContext } from "react";
import { AiFillLike ,AiFillDislike} from "react-icons/ai";
import { PostListContext } from "./store/post-list-store";

function Card({post}) {
  
  const{deletePost}= useContext(PostListContext);

 console.log("Post",post)
  
  return (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-2 py-md-3 modal-data "
      tabIndex="-1"
      role="dialog"
      id="modalSheet"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow post-card">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-3">{post.title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={()=>deletePost(post.id)}
            ></button>
          </div>
          <div className="modal-body py-0">
            <p>
              {post.body}
            </p>
            <p>
            <p>
              {post.reactions.likes} <AiFillLike className="text-success" /> {post.reactions.dislikes} <AiFillDislike className="text-danger" />  
            </p>


            </p>
            <p>
              {post.tags !=undefined && post.tags.map((item,index)=>{

                return <span key={index} className="badge bg-secondary me-1">{item}</span>
              })}
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Card;
