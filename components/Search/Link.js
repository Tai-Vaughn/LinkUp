import React, { Component } from 'react';

//class link
class Link extends Component{
    constructor({ distance, to }) {
        this.distance = distance;
        this.toNodeName = to;
    }
    render() {
        return ({ distance, to});
    }
};
const styles = StyleSheet.create({

});

export default Link;