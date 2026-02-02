import * as commonComands from "./commands/getByTestId"
import * as loginComands from "./commands/login"
import * as profileComands from "./commands/profile"
import * as articleCommands from "./commands/article_detail"

Cypress.Commands.addAll(commonComands)
Cypress.Commands.addAll(profileComands)
Cypress.Commands.addAll(loginComands)
Cypress.Commands.addAll(articleCommands)
