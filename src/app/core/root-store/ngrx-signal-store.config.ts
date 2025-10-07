export type NGRX_STORE_STATE = {
    isLoading: boolean;
    user: ChatMember | null;
    interlocutor: ChatMember | null;
};

export const INITIAL_STATE: NGRX_STORE_STATE = {
    isLoading: false,
    user: {
        nikName: '',
        avatar: '',
        uId: '',
        messages: {
            count: 0,
        list: []
        }
    },
    interlocutor: {
        nikName: '',
        avatar: '',
        uId: '',
        messages: {
            count: 0,
        list: []
        }
    },
}

export interface UserMessage {authorId: string; date: number; message: string;}
export interface ChatMember {
        nikName: string;
        avatar: string;
        uId: string;
        messages: ChatMemberMessage | null;
    }
    export interface ChatMemberMessage {
        count: number;
        list: UserMessage[]
    }