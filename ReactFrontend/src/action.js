import {INC,DEC,ADDTODO,DELTODO} from './constants'
export function inc(){
    return {type:INC}
}
export function dec(){
    return {type:DEC}
}
export function addTodo(ntd){
    return {type:ADDTODO,payload:ntd}
}
export function delTodo(i){
    return {type:DELTODO,payload:i}
}