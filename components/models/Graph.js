import React, { Component } from 'react';
import _ from "lodash";
import Link from "./Link";
import DijkstraSearch from "./DijkstraSearch";
import Node from "./Node";

export default class Graph extends React.Component{
    render() {
        return (
            <View>
            graph;
            </View>    
                )
    }
    //original start
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
						start: node,
                        distance: link.distance,
						end,
					},
				];
			}, []);
			return [...links, ...nodeLinks];
		}, []);
	}

	get nodeArray() {
		return Object.values(this.nodes);
	}
    
	search(start, end) {
		const path = DijkstraSearch.search(start, end, this);
		return {
			start,
			end,
			path,
		};
	}

	copy() {
		return _.cloneDeep(this);
	}

	insertNode(node) {
		this.nodes = {
			...this.nodes,
			[node.name]: node,
		};
	}

	removeNode(node) {
		const nodes = this.nodeArray;
		for (let i = 0; i < nodes.length; i += 1) {
			const nd = nodes[i];
			nd.paths = nd.paths.filter(path => path.toNodeName !== node.name);
		}

		delete this.nodes[node.name];
	}

    createPath(from, distance, to) {
		if (!this.nodes[from.name] || !this.nodes[to.name]) {
			console.error("Nodes are not part of the graph!");
			return;
		}

        const path = new Link({ distance, to: to.name });
		this.nodes[from.name].insertPath(path);
	}

    createTwoWayPath(from, distance, to) {
        this.createPath(from, distance, to);
        this.createPath(to, distance, from);
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

	static fromJSON({ nodes, links }) {
		const graph = new Graph();

		nodes.forEach(nd => {
			const { name } = nd;

			const weight = Number(nd.weight);//adjust weight
		

			if (!name || isNaN(weight)) {
				console.warn("Invalid node, skipped.", nd);
				return;
			}
			const node = new Node({
				name,
				weight,
			});
			graph.insertNode(node);
		});

		links.forEach(link => {
			const { start, end } = link;
            const distance = Number(link.distance);

            if (!start || !end || isNaN(distance)) {
				console.warn("Invalid link, skipped.", link);
				return;
			}

			const from = graph.nodes[start];
			const to = graph.nodes[end];
			if (!from || !to) {
				console.warn("Invalid link, skipped.", link);
				return;
			}

            graph.createPath(from, distance, to);
		});

		return graph;
	}
}