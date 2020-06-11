import { floatToFixedIfNeeded, getPoints } from "./utils";

export default class Node {
	constructor({ name, weight }) {
		this.name = name;
		this.weight = weight; //adjust based on value in database
		this.paths = [];
	}

	insertPath(path) {
		if (this.paths.some(p => p.toNodeName === path.toNodeName)) return;
		if (this.name === path.toNodeName) return;

		this.paths.push(path);
    }

    generatePath(path) {
        //creates path based on weight from start to end.
        let total_weight = 0;
        let i = 0;
        let start = getPoints.point1;
        let end = getPoints.point2;
        let visitied = [];
        //let unvisited = [];
        //for a graph:node, set of neighbors, cost for each neighbour, distance from a-b
        //weight: combination of safety and physical distance; generate algorithm for weight
        path = [] //push start on path?
        path.push(start);
        for (this.paths[i] === start; this.paths[i] === end; this.paths[i++]) {
            if (a.weight < b.weight) {
                total_weight = a.weight[i] + total_weight;
                path += a;
                visitied.push(path);
              //need to compare weight from neighbors in database.
              
            }
            if (b.weight < a.weight) {
                total_weight = b.weight[i] + total_weight;
                path += b;
                visitied.push(path);
            }

            total_weight = this.weight[i] + total_weight;
            path.push(path);
        }
        
    }

	removeLink(toNodeName) {
		this.paths = this.paths.filter(link => link.toNodeName !== toNodeName);
	}

	move(diffX, diffY) {
		this.x += diffX;
		this.y += diffY;
	}

	toString() {
		const weight = floatToFixedIfNeeded(this.weight);
		return `${this.name} ${weight} u.`;
	}
    
	toJSON() {
		return {
			name: this.name,
			weight: this.weight,
			
		};
	}
}
/*export const path(){

    return { path: this.paths, };
}*/