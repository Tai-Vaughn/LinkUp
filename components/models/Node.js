import { floatToFixedIfNeeded, getPoints } from "./utils";

export default class Node {
	constructor({ name, weight, x, y }) {
		this.name = name;
		this.weight = db.weight; //adjust based on value in database
		this.x = x;
		this.y = y;
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
        path=[] //push start on path?
        for (this.paths[i] === start; this.paths[i] === end; this.paths[i++]) {
            if (a.weight < b.weight) {
                //taking three paths and comparing the weight to choose the lesser one at each turn
              //if there is no 3td path what will happen?
                if (c.weight < a.weight) {
                    total_weight = c.weight[i] + total_weight;
                    path += c;
                }
                else {
                    total_weight = a.weight[i] + total_weight;
                    path += a;
                }
            }
            if (b.weight < a.weight) {
                
                if (c.weight < b.weight) {
                    total_weight = c.weight[i] + total_weight;
                    path += c;
                }
                else {
                    total_weight = b.weight[i] + total_weight;
                    path += b;
                }
            }

            total_weight = this.weight[i] + total_weight;
            this.paths.push(path);
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
		const x = floatToFixedIfNeeded(this.x);
		const y = floatToFixedIfNeeded(this.y);
		const weight = floatToFixedIfNeeded(this.weight);
		return `${this.name} (${x}, ${y}) ${weight} u.`;
	}
    
	toJSON() {
		return {
			name: this.name,
			weight: this.weight,
			x: this.x,
			y: this.y,
		};
	}
}
/*export const path(){

    return { path: this.paths, };
}*/