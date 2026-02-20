export class TabularConnectors{constructor(o={}){this.name='tabular-connectors';this.project='ai-data-platform'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default TabularConnectors;
