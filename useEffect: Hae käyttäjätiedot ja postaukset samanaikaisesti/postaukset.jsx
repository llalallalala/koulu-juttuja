import * as React from 'react'

export function Postaukset(propsArray)
{
    const [posts, setPosts, id] = propsArray.props

    React.useEffect(()=>
    {
        async function fetchPosts()
        {
            try {
                const res = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                const data = await (await res).json()
                setPosts(data)
            } catch (error) {
                setPosts([])
            }
            
        }

        fetchPosts()
    },
    [id]
    )

    return (
        <>
            <br />
            <hr />
            <br />

            <h2>Posts</h2>

            <ul className='postsList'>
                {
                posts.map((post, index)=>(
                    <li key={index}>
                        <p>id: {post.id}</p>
                        <hr />
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))
                }
            </ul>
        </>
    )
}