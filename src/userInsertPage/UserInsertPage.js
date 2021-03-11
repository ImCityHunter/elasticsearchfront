import React from "react";
import { search } from "../services/elasticSearchFunctions";
import ShowRankingPageContainer from "./ShowRankingPageContainer";

/**
 * The is just the main page for users to insert query
 */
class UserInsertPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            queryText:"",
            show: false,
            top: 20,
            array:[]
        }
    }

    componentDidMount = async () => {

    }


    submit = () => {
        search("cfc", this.state.queryText, this.state.top).then(response=>{
            this.setState({
                array:response,
                show:true
            })
        });
    }

    delete = ()=>{
        this.setState({
            show:false,
            queryText:""
        })
    }


    render(){
        return(
            <div>
                {
                    !this.state.show &&
                    <form>
                        <div className={'form-group row'}>
                            <label className={'col-form-label col-sm-2'}> Top X Selection </label>
                            <select className={'col-sm-10'} defaultValue={'20'}
                                    onChange={(e)=>{
                                        let tmp = e.target.value;
                                        this.setState({
                                            top:tmp
                                        })
                                    }}
                            >
                                <option value='20'>20</option>
                                <option value='10'>10</option>
                                <option value='5'>5</option>
                                <option value='1'>1</option>
                            </select>
                        </div>
                        <div className={'form-group row'}>
                            <label className={'col-sm-2 col-form-label'}>QueryText</label>
                            <input
                                className={'form-control col-sm-10'}
                                placeholder = "query text"
                                onChange={(e)=>{
                                    let temp = e.target.value;
                                    this.setState({
                                        queryText:temp
                                    })
                                }} />
                        </div>
                    </form>
                }
                {
                    !this.state.show && <button
                        className={'btn btn-info'}
                        onClick={()=>this.submit()}>Search</button>
                }
                {

                    this.state.show &&
                    <button  onClick={()=>this.delete()}
                             className="fa fa-trash fa-5x" aria-hidden="true"></button>
                }
                {
                    this.state.show && <ShowRankingPageContainer
                        array = {this.state.array}
                    />
                }

            </div>
        )

    }

}

export default UserInsertPage;