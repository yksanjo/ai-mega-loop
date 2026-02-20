export class TabularSdk{constructor(o={}){this.name='tabular-sdk';this.project='ai-ml-ops'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default TabularSdk;
