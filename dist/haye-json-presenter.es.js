function JsonPresenter(){return{nodes:[],currentNode:null,add(){this.currentNode={name:"",args:[]},this.nodes.push(this.currentNode)},appendKey(e,r){32!==r&&(this.currentNode.name+=e)},appendValue(e){this.currentNode.args[this.currentNode.args.length-1]+=e},shiftValue(){this.currentNode.args.push("")},toJSON(){return this.nodes.reduce((e,r)=>(e[r.name]=r.args,e),{})}}}export default JsonPresenter;
