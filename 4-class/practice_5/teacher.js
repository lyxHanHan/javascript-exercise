// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = value;
    }
    introduce() {
        if( this.klass === undefined) {
        return `${super.introduce()} I am a Teacher. I teacher No Class`;
        }
        return `${super.introduce()} I am a Teacher. I teacher ${this.klass}`;
    }
}