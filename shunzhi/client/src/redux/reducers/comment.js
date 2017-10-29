export default function commentReducer(state=[],action){
  switch(action.type){
    case 'LOAD_COMMENTS':
      return action.comments
    case 'ADD_COMMENT':
    console.log([...state,
      { text:action.text,
        url:action.url,
        userName:action.userName,
        goodsId:action.goodsId
       }
    ]);
      return [...state,
        { text:action.text,
          url:action.url,
          userName:action.userName,
          goodsId:action.goodsId,
          id:action.id
         }
      ]

      default:
      return state
  }
}
