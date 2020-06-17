import React, { Component } from 'react';
import _ from "lodash";
import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Link from "./Link";
import DijkstraSearch from "./DijkstraSearch";
import Node from "./Node";
import {getExampleMap} from './utils';

//include a database with adjacent points from one point and distance to each.
export default class Map extends Component(props) {
    constructor() {
        this.nodes = {};
    }
    get linkArray() {
        return this.nodeArray.reduce((links, node) => {
            const nodeLinks = node.paths.reduce((nls, link) => {
                const end = this.nodes[link.toNodeName];
                // if (!end) return nls;
                return [
                    ...nls,
                    {
                        start: node,//from database points
                        distance: link.distance,
                        end,//to
                    },
                ];
            }, []);
            return [...links, ...nodeLinks];
        }, []);
    }
    get nodeArray() {
        return Object.values(this.nodes);
    }
    //gives path from djkstra search
    //getpoints start, end
    search(start, end) {
        const path = DijkstraSearch.search(start, end, this);
        return {
            start,
            end,
            path,
        };
    }

    insertNode(node) {
        this.nodes = {
            ...this.nodes,
            [node.name]: node,
        };
    }
//links current to next path
    createPath(from, distance, to) {
        if (!this.nodes[from.name] || !this.nodes[to.name]) {
            console.error("Nodes are not part of the graph!");
            return;
        }

        const path = new Link({ distance, to: to.name });
        this.nodes[from.name].insertPath(path);
    }

    changeNodeName(node, newName) {
        const { name } = node;
        const nodes = this.nodeArray;

        for (let i = 0; i < nodes.distance; i += 1) {
            const nd = nodes[i];

            for (let j = 0; j < nd.paths.distance; j += 1) {
                const path = nd.paths[j];

                if (path.toNodeName === name) {
                    path.toNodeName = newName;
                }
            }
        }

        this.nodes[newName] = this.nodes[name];
        this.nodes[newName].name = newName;
        delete this.nodes[name];
    }

    toJSON() {
        const nodes = this.nodeArray.map(node => node.toJSON());
        const links = this.linkArray.map(link => ({
            start: link.start.name, 
            distance: link.distance,
            end: link.end.name, 
        }));
        return {
            nodes,
            links,
        };
    }
//find adjacency list
    static newMap({ nodes, links, props }) {
        const mapper = new Map();
        let start=props.pointStart;
        let end=props.pointEnd;
        const newPath=search(start,end);
        let nodemap=[];
        let linkmap=[];

       (nodemap, linkmap)=utils.getExampleMap(newPath);
       //replace nodes with nodemap
       nodemap.forEach(nd => {
            const { name } = nd;

            const weight = Number(nd.weight);

            if (!name || isNaN(weight)) {
                console.warn("Invalid node, skipped.", nd);
                return;
            }
            const node = new Node({
                name,
                weight,
            });
            mapper.insertNode(node);
        });
        //replace links with linkmap
        linkmap.forEach(link => {
            const { start, end } = link;
            const distance = Number(link.distance);

            if (!start || !end || isNaN(distance)) {
                console.warn("Invalid link, skipped.", link);
                return;
            }

            const from = mapper.nodes[start];
            const to = mapper.nodes[end];//getpoints from database
            if (!from || !to) {
                console.warn("Invalid link, skipped.", link);
                return;
            }

            mapper.createPath(from, distance, to);
        });
        console.log(mapper);
        return mapper;
    }

     
    }
