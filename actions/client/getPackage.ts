import axios from "axios";

const _apiKey = 'YOUR_API_KEY_HERE';
const _companyId = 'YOUR_COMPANY_ID_HERE';
const _baseUrl = 'https://secure.ontime360.com/sites/' + _companyId + '/api/';



export const getPackage = async (trackingNumber) => {
    // try {
    let tracking = await axios.get(
        `${_baseUrl}orders?trackingNumber=${trackingNumber}`, {
        headers: { 'Authorization': _apiKey }
    })

    let order = await axios.get(
        `${_baseUrl}orders/${tracking}`, {
        headers: { 'Authorization': _apiKey }
    })







}


