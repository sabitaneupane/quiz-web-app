import * as React from 'react';
import { connect } from 'react-redux';
import { getHeroLists } from '../actions';
import {Ilist} from '../types/index';

interface IState{
    lists: Object[],
};

class Hero extends React.Component<any, IState> {

    public readonly state = {
        lists: [],
    }

    componentDidMount() {
        this.props.dispatch(getHeroLists());
    }

    render() {
        return (
            <div>
                { 
                    this.state.lists.map((list, index) => {
                        return (
                            <div key={index}>
                                <div> Hero name: {list.hero_name} </div>
                                <div> Name: {list.name} </div>
                                <div> Power: {list.power} </div>
                                <div> Weakness: {list.weakness} </div>
                                <hr /> </div>
                        )
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = ({ store }):Ilist => ({
    lists: store.lists
});

export default connect(mapStateToProps)(Hero);