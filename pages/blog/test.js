
export default function Test(){

    async function sendRequest(){
        const response=await fetch('/api/token')
        const location=response.headers.get('location')
        console.log(location)
        console.log(response)
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">

            <button onClick={sendRequest} className="btn-color w-48 h-12">Send</button>
        </div>
    )
}