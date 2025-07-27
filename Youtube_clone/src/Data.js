export const Api_key='AIzaSyBelYfsxdhUPPfc9PJrjMvgS-8XgjPDv1U';
export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'K';
    }
    else{
        return value;
    }
}