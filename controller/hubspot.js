require('dotenv').config();
const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ accessToken: "pat-eu1-fa3646d0-4dec-49f7-85ee-a1040121a509", numberOfApiCallRetries: 3 });
let counter = 1;
class ContactController {
    async create(req, res) {
        const {
            wallet_address,
            country } = req.body;
        const contactObj = {
            properties: {
                email: `examples${counter++}@gmail.com`,
                firstname: "Doggy",
                lastname: "Ai",
                hs_lead_status: "NEW",
                lifecyclestage: "lead",
                wallet_address: wallet_address,
                first_time_deposit: "0",
                country: country
            }
        }
        try {
            const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj)
            res.json(createContactResponse);
        } catch (error) {
            res.json(error);
        }
    }
    async update(req, res) {
        const { first_time_deposit } = req.body;
        const updateObj = {
            properties: {
                first_time_deposit: first_time_deposit
            }
        }
        try {
            const createContactResponse = await hubspotClient.crm.contacts.basicApi.update(updateObj)
            res.json(createContactResponse);
        } catch (e) {
            res.json(e);
        }
    }
    async
}

module.exports = new ContactController;


