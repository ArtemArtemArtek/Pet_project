export const resetTestProfileData = (profileId: number) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'authorization'},
        body: {
            id: "4",
            firstname: "Ponchik",
            lastname: "Mikro",
            age: "28",
            currency: "USD",
            country: "Russia",
            city: "Moscow",
            username: "mamamia",
            avatar: "https://grizly.club/uploads/posts/2023-08/1693294873_grizly-club-p-kartinki-avatarki-dlya-ds-bez-fona-22.jpg"
        }
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            resetTestProfileData(profileId: string): Chainable<void>
        }
    }
}