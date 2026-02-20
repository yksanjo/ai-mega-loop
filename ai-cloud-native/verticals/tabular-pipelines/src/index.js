export class TabularPipelines{constructor(o={}){this.name='tabular-pipelines';this.project='ai-cloud-native'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default TabularPipelines;
