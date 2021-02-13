import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App=()=>{
  return(
    <ChatEngine
      height="100vh"
      projectID="bd716967-24df-4b90-b908-119ce9836288"
      userName="asrafulnirob"
      userSecret="Nirob1376"
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
      
    />
  )
}


export default App;