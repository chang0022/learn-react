import React from 'react';

import ActivityItem from './ActivityItem';

class Content extends React.Component {
  render() {
    const {activities} = this.props;

    return (
      <div className="content">
      <div className="line"></div>

      {activities.map((activity, index) => (
        <ActivityItem activity={activity} key={index}/>
      ))}
      </div>
    )
  }
}

export default Content;