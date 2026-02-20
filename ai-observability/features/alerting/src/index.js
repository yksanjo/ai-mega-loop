export class Alerting{constructor(o={}){this.name='alerting';this.project='ai-observability'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default Alerting;
