import React from 'react';
import { Stylesheet, Alert } from 'react-native';


class ActivePerson{
    constructor({ name, start, end }) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.status = '';//not automatically active
    }
    setStatus=()=> {
        const persons = []; //array of active persons
        //set status, need a condition for change
        this.status = 'active';
        this.status = 'not-active';

        if (this.status === 'active') {
            persons.push(this.name);
            //adds the name of the person if their status is active
        }
    }
    toString() {
        return `${this.name} (${start}, ${end}) ${this.status} u.`;
    }

    toJSON() {
        return {
            name: this.name,
            start: this.start,
            end: this.end,
            status: this.status,
        };
    }
    return (
        );
};
const styles = StyleSheet.create({

});

export default ActivePerson;