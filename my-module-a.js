import {f3, f4} from './my-module-b'

export function f1 (){
  console.log('in ma f1')
  f3()
}

export function f2 (){
  console.log('in ma f2')
  f4()
}