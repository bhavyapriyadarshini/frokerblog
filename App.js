import React, { useEffect, useState } from 'react';
import './App.css';
import BlogList from './components/BlogList';
import Pagination from './components/Pagination';
import api from './services/api';

function App() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await api.get('/blogs');
            setBlogs(res.data);
        };
        fetchBlogs();
    }, []);

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <h1>Froker Blogs Clone</h1>
            <BlogList blogs={currentPosts} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={blogs.length}
                paginate={paginate}
            />
        </div>
    );
}

export default App;
