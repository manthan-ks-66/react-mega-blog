import { Link } from "react-router-dom";
import storageService from "../appwrite/storage";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <>
      <Link to={`post/${$id}`}>
        {/* image preview goes here */}
        <div>
          <img
            src={storageService.getFilePreview(featuredImage)}
            alt="error loading image"
          />
        </div>
        {/* title and content preview */}
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
          <button>Continue Reading</button>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
