import React from 'react';
import './List.css';

import ListItem from '../ListItem/ListItem';

class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            curr: ''
        }
    }

    selectTab = (index) => {
        console.log(index);
        this.setState({
            curr: index
        })
    };

    render() {
        const {lists} = this.props;
        return (
            <div className="page__bd">
                <ul>
                    {lists.map((item, index) => (
                        <ListItem item={item} index={index} key={index}
                                  selectTab={this.selectTab}
                                  curr={this.state.curr}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;