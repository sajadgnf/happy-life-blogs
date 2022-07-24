import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_BLOG_INFO } from '../../graphql/queries';

const BlogPage = () => {

    const { slug } = useParams()

    const { loading, data, error } = useQuery(GET_BLOG_INFO, { variables: { slug } })

    console.log(data);
    

    return (
        <div>
            bbb
        </div>
    );
};

export default BlogPage;