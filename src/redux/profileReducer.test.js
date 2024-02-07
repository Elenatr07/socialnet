import { addPostActionCreator, deletePostCreator, profileReducer } from "./profileReducer";
  let state = {
        postsData: [
            {id: 1, post: 'Hi, how are you?', likesCount: 1},
            {id: 2, post: 'Hello', likesCount: 8}
          ]
       
    }
it('length of posts should be incremented', () => {
    //1. исходные данные test data
    let action = addPostActionCreator("Post text");
  
    //2. action
    let newState = profileReducer(state, action)
    //3. проверяем ожидание expectation, после добавления поста длина postsData должан стать не 2, а 3
   expect(newState.postsData.length).toBe(3)
})

it('posts should be added', () => {
    //1. исходные данные test data
    let action = addPostActionCreator("Post text");
  
    //2. action
    let newState = profileReducer(state, action)
    //3. проверяем ожидание expectation, после добавления поста длина postsData должан стать не 2, а 3
   expect(newState.postsData[2].post).toBe("Post text")
})

it('after deleting length of posts should not be decrement if id is incorrect', () => {
    //1. исходные данные test data
    let action = deletePostCreator(5);//id=1
  
    //2. action
    let newState = profileReducer(state, action)
    //3. проверяем ожидание expectation, после удаления поста длина postsData должан стать не 2, а 3
  
    expect(newState.postsData.length).toBe(2)
})

it('after deleting length of posts should be decrement', () => {
    //1. исходные данные test data
    let action = deletePostCreator(1);//id=1
  
    //2. action
    let newState = profileReducer(state, action)
    //3. проверяем ожидание expectation, после удаления поста длина postsData должан стать не 2, а 3
  
    expect(newState.postsData.length).toBe(1)
})


