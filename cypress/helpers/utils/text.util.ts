export default class TextUtil{
    static sanitizeName=(name:string):string=>{
        return name.replace(/'/g,"")
    }
}