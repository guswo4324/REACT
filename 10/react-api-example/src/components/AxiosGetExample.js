import React, { useState, useEffect } from "react";
import axios from 'axios';

function AxiosGetExample(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        }); 
    }, []);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류: {error}</div>;

    return(
        <div>
            <h2>게시물 목록(axios 사용)</h2>
            <ul>
                {data.slice(0,5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );

}

export default AxiosGetExample;

