const TheirMessage =({ lastMessage, message })=>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username != message.sender.username;
    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            


            {
                (message?.attachEvents?.length > 0)
                    ?(
                            <img
                            src={message.attachEvents[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                            />
                    ):(
                            <div className="message" style={{float:"left",marginRight:"18px",color:'white',backgroundColor:'#3b2a50'}}>
                                {message.text}
                            </div>
                    )
                
            }

        </div>
        )
}



export default TheirMessage