
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {


    
    const [Blogs, setBlogs] = useState([
        { title : 'My New Website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title : 'Welcome Party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title : 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    ]);

    const [name, setName] = useState('mario')

    //Const [isPending, setIsPending] = 

    const handleDelete = (id) => {
        const newBlogs  = Blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, [] );
    
    return ( 
        <div className='home'>
           {Blogs && <BlogList Blogs={Blogs} title="All Blogs!" handleDelete={handleDelete} />}
            <button onClick ={() => setName('Luigi')}>Change name</button>
    <p>{name}</p>
        </div>
     );
}
 
export default Home;