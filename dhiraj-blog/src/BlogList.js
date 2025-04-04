import { Link } from "react-router-dom/cjs/react-router-dom";
const BlogList = ({blogs, title}) => {
    //const blogs = props.blogs;
    //const title = props.title;
    //console.log(props, blogs);

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        <p>Date: {blog.date}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;