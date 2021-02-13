const  MyMessage=({message})=>{
    if(message?.attachEvents?.length > 0){
        return(
            <img
            src={message.attachEvents[0].file}
            alt="message-attachment"
            className="message-image"
            style={{float:'right'}}
            />
        )
    }
    return(
        <div className="message" style={{float:"right",marginRight:"18px",color:'white',backgroundColor:'#3b2a50'}}>
            {message.text}
        </div>
        )
}



export default MyMessage