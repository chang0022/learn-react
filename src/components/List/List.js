import React from 'react';
import './List.css';

import ListItem from '../ListItem/ListItem';

class List extends React.Component {
    render() {
        const {lists} = this.props;
        return (
            <div className="page__bd">
                <ul>
                    {lists.map((item,index) => (
                        <ListItem item={item} key={index} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;