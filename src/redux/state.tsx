import ProfileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import DialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";

/*export let store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'Its the first post', likesCount: 2},
                {id: 3, message: 'Like dont see you', likesCount: 2}

            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [


            ],
            newMessageBody: ''

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
    },*/
 /*   dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)

        this.callSubscriber(this._state )
*/

  /*      if (action.type === 'ADD-POST') {
            let newPost = {id: 4, message: action.postMessage, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this.callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.messagesPage.newMessageBody = action.body
            this.callSubscriber(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.messagesPage.newMessageBody
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messages.push({id: 7, message: body})
            this.callSubscriber(this._state)
        }*/
  /*  }
}
*/
export type StorePropsType = {
    _state: statePropsType
    callSubscriber: (state: statePropsType) => void
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => statePropsType
    dispatch: (action: ReturnType<typeof addPostAC> |
        ReturnType<typeof updateNewPostTextAC> |
        ReturnType<typeof updateNewMessageBodyAC> |
        ReturnType<typeof sendMessageAC>
    ) => void

}


/*

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>
*/

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

export type dialogsPagePropsType = {
    dialogs: dialogsPropsType[]
    messages: messagesPropsType[]
    newMessageBody: string
}

export type statePropsType = {
    profilePage: profilePagePropsType
    dialogsPage: dialogsPagePropsType
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



