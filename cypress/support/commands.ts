import {testTearDown} from "./util.commands";
import {setText} from "./component.command";
import {verifyCurrentUrlEqual} from "./validation.commands";
import {logout} from "./login.command";

// validation
Cypress.Commands.add('verifyCurrentUrlEqual',verifyCurrentUrlEqual);

//utils
Cypress.Commands.add('testTearDown',testTearDown);

// component
Cypress.Commands.add('setText',setText);

//login
Cypress.Commands.add('logout',logout);