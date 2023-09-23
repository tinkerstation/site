import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Paper, styled } from '@mui/material';
import { CustomLink } from '../../common/theme';

interface Blog {
    image: string | undefined;
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
}
const Item = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

const BlogList: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        // Fetch data from the blogs.json file
        axios.get('./blogs.json')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    return (
        <React.Fragment>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                {Array.from(blogs).map((blog, index) => (
                    <Grid item xs={2} sm={2} md={4} key={index}>
                        <Item >
                            <CustomLink to={`/blogs/${blog.id}`}>
                                <img src={blog.image} style={{ width: "100%" }} />
                            </CustomLink>
                            <CustomLink to={`/blogs/${blog.id}`}>
                                <Typography variant="h2" gutterBottom>{blog.title}</Typography>
                            </CustomLink>
                            <Typography variant="body1" gutterBottom>by {blog.author}</Typography>
                            <Typography variant="body1" gutterBottom>{blog.date}</Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}

export default BlogList;
