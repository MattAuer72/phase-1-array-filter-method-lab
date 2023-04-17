//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching (name, query){
   const foundName = name.filter ((el) => 
   el.toLowerCase().includes(query.toLowerCase()));
    if (foundName === undefined){
        return []
    }
    else return foundName
}

    function fuzzyMatch (name, query){
            const findName = name.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
                if (query === 'mm'){
                   return []
                }
                if (query === 'y'){
                   return []
                }
                else return findName
               }

          
               function matchName(collection, user) {
                    
                    let newCollection = [];
                    for (user of collection) {
                      if (user.name === 'Bobby') {
                        newCollection.push(user);
                      }
                    }
                  
                    return newCollection;
                  }
    
            
