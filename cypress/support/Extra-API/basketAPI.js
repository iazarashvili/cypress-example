const basket_url = Cypress.env('api_basket_url');
const identityUrl = Cypress.env('api_identity_url');
const userName = Cypress.env('CorrectEmail')
const password = Cypress.env('CorrectPassword')

export class BasketApi {
    emptyBasket() {
        cy.request({
            method: 'POST',
            url: identityUrl + '/connect/token',
            headers: {
                'Origin': 'https://staging.extra.ge',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            form: true,
            body: {
                grant_type: 'password',
                scopes: 'identity offline_access openid email profile phone address',
                username: userName,
                password: password,
                client_id: 'dev',
                client_secret: 'secret'
            }
        }).then((response) => {
            cy.request({
                method: 'POST',
                url: basket_url + '/v1/basket/emptybasket',
                headers: {
                    authorization: `Bearer ${response.body.access_token}`,
                    'cache-control': 'no-cache',
                    'content-type': 'application/json-patch+json',
                },
                body: {
                    darkStoreId: 0
                }
            })
        })
    }

    checkTotalPrice() {
        cy.request({
            method: 'POST',
            url: identityUrl + '/connect/token',
            headers: {
                'Origin': 'https://staging.extra.ge',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            form: true,
            body: {
                grant_type: 'password',
                scopes: 'identity offline_access openid email profile phone address',
                username: userName,
                password: password,
                client_id: 'dev',
                client_secret: 'secret'
            }
        }).then((response) => {
            cy.request({
                method: 'GET',
                url: basket_url + '/v1/basket?requestId=',
                headers: {
                    authorization: `Bearer ${response.body.access_token}`,
                    'cache-control': 'no-cache',
                    'content-type': 'application/json-patch+json',
                },
                body: {
                    darkStoreId: 0
                }
            }).then((response) => {
                const discountPrice = response.body.data[0].discountedPrice;
                const price = response.body.data[0].price;
                const totalPrice = response.body.totalPrice;

                if(discountPrice != null){
                    expect(totalPrice).to.eq(discountPrice)
                } else {
                    expect(totalPrice).to.eq(price)
                }
            })
        })
    }
}

export const basketApi = new BasketApi()