export class GraphApi{constructor(o={}){this.name='graph-api';this.project='ai-data-platform'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default GraphApi;
