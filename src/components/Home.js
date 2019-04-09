import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {newEvent: null};
  }

  handleClick = () => {
    console.log('button clicked');
    this.setState({
      newEvent: {
        id: 0,
        title: 'New Event',
      }
    });
  };

  handleSubmit(event) {
    console.log(event.target);
    console.log('An essay was submitted: ' + this.state.newEvent);
    this.props.addPost(this.newEvent.id, this.newEvent.title, this.newEvent.body);
    event.preventDefault();
  }

  newEvent() {
    if (this.state.newEvent) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
            <textarea type={this.state.newEvent.body} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  addEvent() {
    return (
    <div className= "center">
      <button className = "btn purple lighten-3" onClick={this.handleClick}>
        Add Event
      </button>
    </div>
    )
  };
  render() {
    console.log('in render', this.props, this.state);

    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          {this.newEvent()}
          {this.addEvent()}
          {/* <h4 className="center">Home</h4> */}
          {postList}
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (id, title, body) => {
      dispatch(addPost(id, title, body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)