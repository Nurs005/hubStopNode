require('dotenv').config();
const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ accessToken: "pat-eu1-fa3646d0-4dec-49f7-85ee-a1040121a509", numberOfApiCallRetries: 3 });

class DealControler {
    async create(req, res) {
        const {
            amount,
            closedate,
        } = req.body;
        const DealObj = {
            properties: {
                amount: amount,
                closedate: closedate,
                dealname: "New deal",
                pipeline: "default",
                dealstage: "closedwon",
                hubspot_owner_id: "352849571"
            }
        }
        try {
            const response = await hubspotClient.crm.deals.basicApi.create(DealObj);
            res.json(response);
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new DealControler;