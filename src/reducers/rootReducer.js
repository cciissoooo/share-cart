const initState = {
  posts: [
    {id: '1', title: 'Group A', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Group B', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'Group C', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ]
}



const rootReducer = (state = initState, action) => {
  console.log("action", action);
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(p => p.id !== action.id);

    return {
      ...state, 
      posts: newPosts
    }
  }
  else if (action.type === 'ADD_POST'){
    state.posts.push({
      id: action.id,
      title: action.title,
      body: action.body
    })
  }
  return state;
}

export default rootReducer