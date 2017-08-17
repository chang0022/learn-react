import React from 'react';

import ActivityItem from './components/Timeline/GithhubActivityItem';

const data = require('./data/data.json').slice(0, 4);

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            activities: []
        }
    }

    componentDidMount() {
        this.updateData();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState({loading: true}, this.updateData)
        }
    }

    updateData() {
        this.setState({
            loading: false,
            activities: data
                .sort(() => 0.5 - Math.random()).slice(0, 4)
        }, this.props.onComponentRefresh);
    }

    render() {
        const {loading, activities} = this.state;

        return (
            <div className="content">
                <div className="line"></div>
                {loading && <div>Loading</div>}
                {activities.map((activity) => (
                    <ActivityItem activity={activity} key={activity.id}/>
                ))}
            </div>
        )
    }
}

export default Content;