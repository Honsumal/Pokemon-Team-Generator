import React, {useState} from 'react'
import NavTabs from './NavTabs';
import TeamBuilder from './fragments/TeamBuilder'



export default function Home() {
    const [currentApp, setCurrentApp] = useState('Team');

    const renderApp = () => {
        switch (currentApp) {
            case "Individual":
                return <TeamBuilder />;
            default:
                return <TeamBuilder />;
        }
    };

    const handleAppChange = (app) => setCurrentApp(app)

    return (
        <div>
            <NavTabs currentApp={currentApp} handleAppChange={handleAppChange} />
            <br></br>
            <div>
                {renderApp()}
                <br></br>
            </div>
        </div>
    )
}   