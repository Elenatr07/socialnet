
//служит для сокращения кода в usersReducer
export const updateObjectInArray = (items, objPropName, itemId,  newObjProps) => {
    return items.map(user => { //обход всего списка users и изменение folowed по id user из action
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps} 
        }
        return user;
})
}