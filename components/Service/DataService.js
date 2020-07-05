import React from 'react';
import {Subject , of} from 'rxjs';
import {catchError, tap, shareReplay} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import * as Graph from './GraphService';

var jwtDecode = require('jwt-decode');

const tokenSubject  = new Subject
const markersSubject = new Subject
const groupsSubject = new Subject
const graphSubject = new Subject

export const markers$ = markersSubject.asObservable().pipe(shareReplay(1))
export const token$ = tokenSubject.asObservable().pipe(shareReplay(1))
export const groups$ = groupsSubject.asObservable().pipe(shareReplay(1))
export const graph$ = graphSubject.asObservable().pipe(shareReplay(1))

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
        tap( (response) => {
            tokenSubject.next(response.response.token)
            //console.log(jwtDecode(response.response.token))
        } ),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
          })
        
        ).subscribe()
}
export const LogOut=()=>{
    tokenSubject.next(null)
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
        tap(res => console.log(res.response)),
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
        tap( (response) => {
            markersSubject.next(response.response)
            graphSubject.next(new Graph.GraphClass(response.response))
        } ),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
          })
        ).subscribe()
 }
 export const getGroups = () => {
    ajax({
        url: "https://linkupcapstone.herokuapp.com/groups",
        method: "GET",
        headers: { 
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).pipe(
        tap((response) => groupsSubject.next(response.response) ),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
          })
        ).subscribe()
 }