export class RetryLogic{constructor(o={}){this.name='retry-logic';this.project='ai-observability'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default RetryLogic;
