import React from 'react';

//class link
class Link {
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

export default new Link();