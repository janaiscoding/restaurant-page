export default class Element {
    constructor(elementType){
        this.elementType = elementType;
        this.attributes = {};
        this.children = [];
    }
}