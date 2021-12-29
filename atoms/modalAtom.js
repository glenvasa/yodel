import {atom} from 'recoil'
// recoil is a global state management tool like a redux

export const modalState = atom({
    key: 'modalState',
    default: false,
})

export const postIdState = atom({
    key: 'postIdState',
    default: '',
})



