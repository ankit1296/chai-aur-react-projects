import { useLoaderData } from "react-router-dom";
export default function Github() {
    const data = useLoaderData();
    //  const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/ankit1296')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        <div className="text-white-700">{data.name}</div>
        </div>
    )
}

export const githubInfoLoader = async function() {
    const data = await (await fetch('https://api.github.com/users/ankit1296')).json();
    return data;
}