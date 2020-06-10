import React from 'react';
import {BehaviorSubject , of} from 'rxjs';
import {map, catchError} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

const tokenSubject  = new BehaviorSubject(null)
export const token$ =() => tokenSubject.asObservable()
export const login = (Authinfo) => {
    ajax({
        url:'https://linkupcapstone.herokuapp.com/users/login',
        method:'POST',
        headers: {
             Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Authinfo)
    }).pipe(
        map( (response) => tokenSubject.next(response.response.token) ),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
          })
        
        ).subscribe()
}
export const createUser = (UserInfo) => {
    return ajax({
        url: 'https://linkupcapstone.herokuapp.com/users/signup',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: UserInfo

    })
}
    // .then( (response) => response.json())
    // .then((json) => {
    //     //  this.tokenSubject.next(json.error.message)
    //     console.log(json);
    // })
    // .catch( (err) => console.log(err))