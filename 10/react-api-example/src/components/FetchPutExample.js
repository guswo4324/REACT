import React, {useState, useEffect} from "react";

function FetchPutExample() {
    const [post, setPost] = useState({title:'', body:''});
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [result, setResult] = useState(null);

    // 초기 데이터 로드
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => {
            setPost(data);
            setLoading(false);
        })
    }, []);
    
    //비동기
    const handleUpdate = async () => {

        setUpdating(true);

        try{
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts/1',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify ({
                        id:1,
                        // setPost({...post, title:e.target.value})
                        // 바꼇으니까 post.title, post.body
                        title: post.title,
                        body: post.body,
                        userId:1,
                    }),
                }
            );

            const data = await response.json();
            setResult(data);
        } catch(error) {
            console.error('오류 발생:', error);
            setResult({error: error.message});
        } finally{
            setUpdating(false);
        }
    }

    if (loading) return <div>로딩 중...</div>;

    return(
        // 1번 게시물 내용을 보여줘야 함(1번 게시물 가져와야함)
        <div>
            <h2>게시물 수정</h2>
            <div>
                <label>제목:</label>
                <input 
                    type="text"
                    value={post.title}
                    //post가 직접 수정되면 안되니까 ...post(복사본)
                    onChange={(e) => setPost({...post, title:e.target.value})}
                />
            </div>
            <div>
                <label>내용:</label>
                <textarea 
                    value={post.body}
                    onChange={(e) => setPost({...post, body:e.target.value})}
                />
            </div>
            <button onClick={handleUpdate} disabled={updating}>
                {updating ? '업데이트 중...' : '게시물 업데이트'}
            </button>

            {/* result이면 result값을 찍어줘라 */}
            {result && (
                <div>
                    <h3>서버 응답:</h3>
                    <pre>
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    )
}

export default FetchPutExample;