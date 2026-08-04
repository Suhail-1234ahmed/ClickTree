export default async function Page({ params }) {
    const { handle } = await params


 const item =   {
        "handle": "superman",
            "pic": "https://yt3.ggpht.com/wcokXT81xuu_XTMSH2104MqXoG8FmvgmGYz4dG4aqV3V1QHU7oBpkPy5FCxcoizjpz8yssOU=s108-c-k-c0x00ffffff-no-rj",
                "links": [
                    {
                        "link": "www.facebook.com/superman",
                        "linktext": "facebook"
                    },
                    {
                        "link": "www.youtube.com/superman",
                        "linktext": "youtube"
                    },
                    {
                        "link": "www.x.com/superman",
                        "linktext": "x"
                    }
                ]
    }

    return <div className="bg-pink-400 min-h-screen flex justify-center items-center">
    My Post: {handle}</div>
}