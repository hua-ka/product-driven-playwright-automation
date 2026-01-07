import { expect, request} from '@playwright/test';
import userToken from '../../.auth/userToken.json'
import fs from 'fs' 

const authFile = 'apps/conduit-api/.auth/userToken.json'
const conduitAuthUrl: string = "https://conduit-api.bondaracademy.com/api/users/login"
const email: string = process.env.CONDUIT_API_USERNAME as string;
const password: string = process.env.CONDUIT_API_PASSWORD as string;

// login using api to get Token
export async function getConduitToken(): Promise<string> {
    const apiRequest = await request.newContext();
    const response = await apiRequest.post(conduitAuthUrl, {
        data: {
            "user": {
                "email": email,
                "password": password
            }
        }
    })
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toEqual(200)
    const loginResponse = await response.json()
    const accessToken = loginResponse.user.token

    //Store and update accessToken as needed 
    userToken.origins[0].localStorage[0].value = accessToken 
    fs.writeFileSync(authFile, JSON.stringify(userToken))
    process.env['CONDUIT_ACCESS_TOKEN'] = accessToken
    return accessToken
}