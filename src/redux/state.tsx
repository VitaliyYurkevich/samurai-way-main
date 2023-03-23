export let store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'Its the first post', likesCount: 2},
                {id: 3, message: 'Like dont see you', likesCount: 2}

            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'BlaBla'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'WTF'},
                {id: 5, message: 'Whats up'},
                {id: 6, message: 'Valera'},
            ]
        },

    },

    callSubscriber() {
        console.log(this._state)
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: statePropsType) => void) {
        this.callSubscriber = observer
    },

    addPost(postMessage: string) {
        let newPost = {id: 4, message: postMessage, likesCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 4, message: action.postMessage, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.callSubscriber(this._state)
        } else if(action.type === 'UPDATE-NEW-POST-TEXT')
            {
            this._state.profilePage.newPostText = action.newText
            this.callSubscriber(this._state)
        }
    }

}

export type StorePropsType = {
    _state: statePropsType
    callSubscriber: (state: statePropsType) => void
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => statePropsType
    dispatch: (action: AddPostActionType |ChangeNewTextActionType ) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
console.log('f')
type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

export type dialogsPropsType = {
    id: number
    name: string
}

export type messagesPropsType = {
    id: number
    message: string
}

export type postPropsType = {
    id: number
    message: string
    likesCount: number
}

export type profilePagePropsType = {
    posts: postPropsType[]
    newPostText: string
}

export type messagePagePropsType = {
    dialogs: dialogsPropsType[]
    messages: messagesPropsType[]
}

export type statePropsType = {
    profilePage: profilePagePropsType
    messagesPage: messagePagePropsType
}


/*
let rerenderEntireTree = (state:statePropsType) => {
    console.log(state)
}

export let state: statePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'Its the first post', likesCount: 2},
            {id: 3, message: 'Like dont see you', likesCount: 2}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'BlaBla'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'WTF'},
            {id: 5, message: 'Whats up'},
            {id: 6, message: 'Valera'},
        ]
    },

}

export const addPost= (postMessage: string) => {
    let newPost = {id: 4, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer:any) => {
rerenderEntireTree = observer
}
*/



