const BlogList = ({Blogs, title, handleDelete}) => {
    
    return (  
    <div className="blog-list" >
        <h2> { title } </h2>

    {Blogs.map((blog) => (
        <div className='blog-preview' Key={blog.id}>
         <h2> {blog.title} </h2>
         <p>Written by {blog.author}</p>
         <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
    ))}
 </div>

    );
}
 
export default BlogList;

