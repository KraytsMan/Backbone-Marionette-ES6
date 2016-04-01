import {Injector} from 'di';
import { Boot } from './Boot'
try {
    var injector = new Injector();
    injector.get(Boot);
}
catch (e) {
    console.error(e);
}