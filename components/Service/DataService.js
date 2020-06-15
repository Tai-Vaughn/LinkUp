import React from 'react';
import {BehaviorSubject , of} from 'rxjs';
import {map, catchError} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

const tokenSubject  = new BehaviorSubject(null)
const markers = new BehaviorSubject(null)

export const markers$ = markers.asObservable()
export const token$ = tokenSubject.asObservable()

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
        map( (response) => {
            console.log(response.response.token)
            tokenSubject.next(response.response.token)
        } ),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
          })
        
        ).subscribe()
}
export const createUser = (UserInfo) => {
    ajax({
        url: 'https://linkupcapstone.herokuapp.com/users/signup',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UserInfo)

    }).pipe(
        map(res => console.log(res.response)),
        catchError( err => console.log(err))
    ).subscribe()
}
export const getMarkers = () => {
    ajax({
        url: "https://linkupcapstone.herokuapp.com/markers",
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).pipe(
        map( (response) => {
            console.log(response.response);
            markers.next(response.response)
        } ),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
          })
        ).subscribe()
 } 