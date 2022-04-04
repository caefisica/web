import './loadenv.js';

import fetch from 'node-fetch'
const { BUTTONDOWN_API_KEY } = process.env

export async function handler(event) {

  const payload = JSON.parse(event.body).payload
  console.log(payload.email)

  const rawResponse = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'post',
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: payload.email}),
  })
    .catch(error => ({ statusCode: 422, body: String(error) }))

    const content = await rawResponse.json();
    console.log(content)

}
