export class TabularApi{constructor(o={}){this.name='tabular-api';this.project='ai-robotics-automation'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default TabularApi;
