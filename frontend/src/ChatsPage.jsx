import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow 
            projectId='46dfd749-6edb-42f8-af2e-21b7924a7434' 
            username={props.user.username} 
            secret={props.user.secret} 
            style={{height:'100%'}}
        />
    </div>
    )
}

export default ChatsPage;
