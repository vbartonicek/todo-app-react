const uid = () => Math.random().toString(34).slice(2);

export function addItem(task, category) {
    return {
        type: 'ADD_ITEM',
        payload: {
            id: uid(),
            text: task,
            category: category,
            checked: false
        }
    };
}

export function toggleItem(id, checked) {
    return {
        type: 'TOGGLE_ITEM',
        payload: {
            id: id,
            checked: checked
        }
    };
}

// -----

export function addCategory(category) {
    return {
        type: 'ADD_CATEGORY',
        payload: {
            category: category,
        }
    };
}

export function setActiveCategory(category) {
    return {
        type: 'SET_ACTIVE_CATEGORY',
        payload: {
            category: category?.value || '',
        }
    };
}
