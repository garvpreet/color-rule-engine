export class LocationGridService {
  
    checkEquals(arrItem, ruleObj){
        let identifierName = ruleObj.identifier.toLowerCase();
        if(arrItem[identifierName].toLowerCase() === ruleObj.identifierValue.toLowerCase()){
          arrItem.color = ruleObj.color;
        }
    }
    
    checkNotEquals(arrItem, ruleObj){
        let identifierName = ruleObj.identifier.toLowerCase();
        if(arrItem[identifierName].toLowerCase() !== ruleObj.identifierValue.toLowerCase()){
          arrItem.color = ruleObj.color;
        }
     }
    
    checkContains(arrItem, ruleObj){
        let identifierName = ruleObj.identifier.toLowerCase();
        if((arrItem[identifierName].toLowerCase()).includes(ruleObj.identifierValue.toLowerCase())){
          arrItem.color = ruleObj.color;
        }
    }
    
    checkNotContains(arrItem, ruleObj){
        let identifierName = ruleObj.identifier.toLowerCase();
        if(!((arrItem[identifierName].toLowerCase()).includes(ruleObj.identifierValue.toLowerCase()))){
          arrItem.color = ruleObj.color;
        }
    }
}
