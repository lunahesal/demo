const comments = [
  {
    id:1,
    text:'hello'
  },
  {
    id:2,
    text:'hi'
  }
]
export default function commentReducer(state=comments,action){
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state,{text:action.text,post:action.postId}]
      default:
      return state
  }
}
