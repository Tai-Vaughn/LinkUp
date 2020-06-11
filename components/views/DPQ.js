
export default class DPQ {
    constructor({ distance, priorityQueue, vertices, list, visited }) {
        this.distance=[distance];
        this.priorityQueue=priorityQueue;
        this.vertices = vertices;// Number of vertices
        list;
        this.visited=visited;
        this.adjacent = [];
    };
    export const queueVertex(vertices) {
        this.distance.push(vertices);
        priorityQueue

    }
}



    public DPQ(int V)
    {
            this.V = V;
        dist = new int[V];
        settled = new HashSet<Integer>();
        pq = new PriorityQueue<Node>(V, new Node()); 
    } 