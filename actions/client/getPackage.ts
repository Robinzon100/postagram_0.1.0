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









    //         $.ajax({
    //             type: 'GET',
    //             url: _baseUrl + 'orders?trackingNumber=4787',
    //             headers: {
    //                 'Authorization': _apiKey
    //             },
    //             success: function (response) {
    //                 $.ajax({
    //                     type: 'GET',
    //                     url: _baseUrl + 'orders/' + response,
    //                     headers: {
    //                         'Authorization': _apiKey
    //                     },
    //                     success: function (response) {
    //                         console.log(response)
    //                         response['Description'] += 'Customer Reference# 614852';
    //                         $.ajax({
    //                             type: 'POST',
    //                             url: _baseUrl + 'order/post',
    //                             contentType: 'application/json',
    //                             data: JSON.stringify(response),
    //                             dataType: 'json',
    //                             headers: {
    //                                 'Authorization': _apiKey
    //                             },
    //                             success: function (response) {
    //                                 $('#lblStatus').html('Successfully updated the order!');
    //                             }
    //                         });
    //                     },
    //                     error: function (response) {
    //                         $('#lblStatus').html('An error has occurred: No order with tracking number 4787.');
    //                     }
    //                 });
    //             },
    //             error: function (response) {
    //                 $('#lblStatus').html('An error has occurred: No order with tracking number 4787.');
    //             }
    //         });
    //     } catch (error) {
    //         $('#lblStatus').html('An error has occurred: ' + error.message);
    //     }
    // });
}


