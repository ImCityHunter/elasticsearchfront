import React from 'react';
import UserInsertPage from "../userInsertPage/UserInsertPage";
class HomePage extends React.Component {

    componentDidMount() {
    }

    render(){
        return(
            <div>
                <UserInsertPage/>
            </div>
        )
    }
}

export default HomePage;