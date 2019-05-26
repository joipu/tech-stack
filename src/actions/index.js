/*
An object with a type property (return {...}) is an action which is how we call producers to update data they produce.
The action is wrapped by a function (selectLibrary) which we refer to as an Action Creator. 
selectLibrary is an Action Creator. Whenever we call the action creator, the returned action will be automatically 
dispatched to us and sent off to all reducers.
*/

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library', 
    payload: libraryId
  };
};