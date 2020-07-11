import React from "react";
import { AxiosWithAuth } from "./components/AxiosWithAuth";
import Header from "./Header";

class FriendsList extends React.Component {
  state = {
    friends: [],
    isLoading: false,
  };
//component did mount for getting given data
  componentDidMount() {
    console.log('getData mounted')
    this.getData();
  }
  getData=() => {
    this.setState({ isLoading: true});
    setTimeout(() => {
      AxiosWithAuth()
      .get('./api/friends')
      .then(response => {
        this.setState({ friends: response.data});
        this.setState({ isLoading: false});
      })
      .catch(err => console.log('Error Loading your friends list', err));
    }, 1500);

  };

  render() {
    return (
      <div>
        <Header />
        {this.state.isLoading === true ? (
          <Loading />
        ) : (
          <div className='cardBody'>
            <h1>Name</h1>
            <p>Age</p>
            <p>Email</p>
            {this.state.friends.map(friend => {
              return (
                <ul key={friend.id}>
                  <li><h1>Name:{friend.name}</h1></li>
                  <li><p>Age:{friend.age}</p></li>
                  <li><p>Email:{friend.email}</p></li>
                </ul>
                <button className='button'>Delete</button>
                <button className='button'>Edit</button>
              );
            })}
            </div>
        )}
      </div>
    )
  }

}
