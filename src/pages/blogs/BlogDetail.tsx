import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Paper, Button } from '@mui/material';
import NotFoundPage from '../public/NotFound';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
interface Blog {
    image: string | undefined;
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
}

const BlogDetail: React.FC = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch data from the blogs.json file
        axios.get('/blogs.json')
            .then(response => {
                // Find the specific blog by its ID
                const foundBlog = response.data.find((b: Blog) => b.id === parseInt(blogId as string));
                if (foundBlog) {
                    setBlog(foundBlog);
                }
            })
            .catch(error => {
                console.error("Error fetching blog details:", error);
            });
    }, [blogId]);

    if (!blog) {
        return <NotFoundPage />;
    }

    return (
        <React.Fragment>

            <img src={blog.image} style={{ width: "100%" }} />
            <Button style={{ color: "inherit" }} onClick={() => navigate("/blogs")}>
                <ArrowBackIosNewIcon />
            </Button>
            <Paper style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    {blog.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    By {blog.author} on {blog.date}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {blog.content}
                </Typography>
            </Paper>
        </React.Fragment>
    );
}

export default BlogDetail;
