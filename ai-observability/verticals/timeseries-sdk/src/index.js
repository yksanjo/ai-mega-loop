export class TimeseriesSdk{constructor(o={}){this.name='timeseries-sdk';this.project='ai-observability'}async init(){return{status:'ok',service:this.name}}async exec(d){return{success:true,service:this.name,data:d}}}
export default TimeseriesSdk;
