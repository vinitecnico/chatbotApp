export interface IChat {
    id : string;
    message : string;
    isMe : boolean;
    createdAt : string;
    lang: string;
    type : 'human' | 'bot'   
}