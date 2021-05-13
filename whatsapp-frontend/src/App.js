import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import Pusher from "pusher-js";
import axios from "./axios.js"

function App() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('/messages/sync')
            .then( (response) => {
                setMessages(response.data);
            });

    }, []);


    //when the app component loads run this peace of code once
    useEffect(() => {
        const pusher = new Pusher('9cd0af59095745fa3b33', {
            cluster: 'eu',
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newMessage) => {
            setMessages([...messages, newMessage])
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    console.log(messages);

  return (
    <div className="App">
        <div className="app__body">
            <Sidebar/>
            <Chat messages={messages}/>
        </div>
    </div>
  );
}

export default App;
