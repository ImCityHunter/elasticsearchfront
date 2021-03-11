import React from 'react';
import ShowRankingArray from './ShowRankingArray';

class ShowRankingPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array : {}
        }
    }

    componentDidMount = async () => {
        this.setState({
            array:this.props.array
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render(){
        return(
            <div className={'justify-content-center text-center'}>
                <br/>
                {  Object.keys(this.state.array).length > 0 &&
                <ShowRankingArray array = {this.state.array} />}
            </div>
        )
    }
}

export default ShowRankingPageContainer;