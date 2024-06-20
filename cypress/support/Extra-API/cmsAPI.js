const identityURL = Cypress.env('api_identity_url');
const orderingURL = Cypress.env('api_ordering_url');

class adminApi {
  getOrderStatus(status) {
    cy.request({
      method: "POST",
      url: identityURL + "/connect/token",
      headers: {
        Origin: Cypress.env("cms_url"),
      },
      form: true,
      body: {
        grant_type: "password",
        scope: "identity offline_access openid email profile phone address",
        username: Cypress.env('cmsUsserName'),
        password: Cypress.env('cmsPassword'),
        client_id: "dev",
        client_secret: "secret",
      },
    })
      .then((res) => {
        const token = res.body.access_token;
        return token;
      })
      .then((token) => {
        cy.request({
          method: "GET",
          url: orderingURL + "/api/orders?page=1&pageSize=10",
          headers: {
            Authorization: "Bearer " + token,
          },
        }).then((res) => {
          expect(res.body.data[0].status).to.eq(status);
        });
      });
  }

  changeCampaignStatus(campId, status) {
    const guide = crypto.randomUUID();
    cy.request({
      method: "POST",
      url: Cypress.env('api_identity_url') + "/connect/token",
      headers: {
        Origin: Cypress.env('cms_url'),
      },
      form: true,
      body: {
        grant_type: "password",
        scope: "identity offline_access openid email profile phone address",
        username: "i.azarashvili@area.ge",
        password: "Kaloria19891101@",
        client_id: "dev",
        client_secret: "secret",
      },
    })
      .then((res) => {
        expect(res.status).to.be.eq(200);
        const accessToken = res.body.access_token;
        console.log(accessToken);
        return accessToken;
      })
      .then((accessToken) => {
        cy.request({
          method: "POST",
          url:
            Cypress.env('api_ordering_url') + "/api/campaign/changecampaignstatus?requestId=" +
            guide,
          headers: {
            Authorization: "Bearer " + accessToken,
          },
          body: {
            campaignId: campId,
            campaignStatus: status,
          },
        }).then((res) => {
          expect(res.status).to.be.eq(200);
        });
      });
  }

  changeCampaignFreedelivery(deliveryValue) {
    const guide = crypto.randomUUID();
    cy.request({
      method: "POST",
      url: Cypress.env('api_ordering_url') + "/connect/token",
      headers: {
        Origin: Cypress.env('cms_url'),
      },
      form: true,
      body: {
        grant_type: "password",
        scope: "identity offline_access openid email profile phone address",
        username: "i.azarashvili@area.ge",
        password: "Kaloria19891101@",
        client_id: "dev",
        client_secret: "secret",
      },
    })
      .then((res) => {
        expect(res.status).to.be.eq(200);
        const accessToken = res.body.access_token;
        console.log(accessToken);
        return accessToken;
      })
      .then((accessToken) => {
        cy.request({
          method: "POST",
          url:
            Cypress.env('api_ordering_url') + "/api/campaign/editcampaign?requestId=" +
            guide,
          headers: {
            Authorization: "Bearer " + accessToken,
          },
          body: {
            campaignChannel: 1,
            campaignId: 1156,
            cap: 200,
            cartLimit: null,
            description: "Cypress 20% percent cap 0 cart limit 0",
            discountLogo: "ca1bac25-4fd5-440d-ab8a-86e866f043f4.jpg",
            endDate: "2024-01-30T20:00:00.000Z",
            isFreeDelivery: deliveryValue,
            isShowCard: true,
            isUserUniqueness: false,
            priority: 2,
            useCount: null,
          },
        }).then((res) => {
          expect(res.status).to.be.eq(200);
        });
      });
  }
}
module.exports = new adminApi();
