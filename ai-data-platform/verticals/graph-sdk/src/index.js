export class GraphSdk{constructor(o={}){this.name='graph-sdk';this.project='ai-data-platform'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default GraphSdk;
