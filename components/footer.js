export default function Footer(props){
    return(
        <footer className="bg-green-500 text-black-200 p-4 ">
            
        <p>{props.newBranchs.data.length} Location World Wide</p>
    </footer>
    )
}