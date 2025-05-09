import React, {useState} from 'react';
//POST : 입력
function FetchGetExample() {
    
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[result, setResult] = useState(null);
    const[loading, setLoading] = useState(false);

    //async : 비동기
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);       //전송중...

        //버튼 눌렀을 때(전송중) 한번 더 눌러서 페치하는것을 방지하기 위해(API 콜하지마)

        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json,',
                    },
                    body: JSON.stringify({
                        title,
                        body,
                        userId:1,
                    })
                }
            );

            if (!response.ok) {
                throw new Error('서버 응답 오류');
            }

            const data = await response.json();
            setResult(data);
            console.log('data(result) 확인:', data);
        } catch(error) {
            console.error('오류 발생:', error);
            setResult({error: error.message});
        } finally {

            //다시 누를수 있게 false로 만들어줌

            setLoading(false);
        }
    };

    return(
        <div>
            <h2>새 게시물 작성</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>내용:</label>
                    <textarea 
                        value={body} 
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? '전송중...' : '게시물 작성'}
                </button>
            </form>
            {/* result이면 */}
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

export default FetchGetExample;