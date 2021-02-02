import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


import './App.css';

const App = () =>  {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine 
        height="100vh"
        projectID="bcfb667c-62c3-4edc-9059-9a5ca46d8af0"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;