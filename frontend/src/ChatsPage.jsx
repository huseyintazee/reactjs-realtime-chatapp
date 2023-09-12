import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '46dfd749-6edb-42f8-af2e-21b7924a7434',
        props.user.username,
        props.user.secret
        )
    return (
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage;
