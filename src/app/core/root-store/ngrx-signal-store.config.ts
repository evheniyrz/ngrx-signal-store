export type NGRX_STORE_STATE = {
    isLoading: boolean;
    user: {
        nikName: string;
        avatar: string;
        uId: string;
        messages: {
            count: number;
            list: {fromId?: string; date: number; message: string;}[]
        }
    } | null,
    
};

export const INITIAL_STATE: NGRX_STORE_STATE = {
    isLoading: false,
    user: null,
}
