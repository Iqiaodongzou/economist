const outerAPI = [
    {
        name:'query',
        children:[
            {
                name:'index'
            },{
                name:'editions'
            },
            {
                name:'article'
            }
        ]
    }
]

function changeOuterAPI(list,name){
    let obj = {}
    list.map(item=>{
        if(item.children){
            obj[item.name] =  changeOuterAPI(item.children,item.name)
        }else{
            obj[item.name] = name + '/' + item.name
        }
    })
    return obj
}

module.exports = {
    api:changeOuterAPI(outerAPI)
}