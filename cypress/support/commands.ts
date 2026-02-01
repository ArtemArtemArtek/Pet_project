import * as commonComands from "./commands/getByTestId"
import * as loginComands from "./commands/login"
import * as profileComands from "./commands/profile"

Cypress.Commands.addAll(commonComands)
Cypress.Commands.addAll(profileComands)
Cypress.Commands.addAll(loginComands)
