import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';



const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatars={faker.image.avatar()} author="Sam" timeAgo="Today at 4:45pm" content={faker.lorem.sentences()}/>
            <CommentDetail avatars={faker.image.avatar()} author="Alex" timeAgo="Today at 2:00am" content={faker.lorem.sentences()}/>
            <CommentDetail avatars={faker.image.avatar()} author="Jane" timeAgo="Yesterday at 5:00pm" content={faker.lorem.sentences()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));