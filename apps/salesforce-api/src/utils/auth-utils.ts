import { request } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();    // locally loads config/env/.env.staging if present; CI env vars override

type SfTokenResponse = {
    access_token: string;
    instance_url: string;
};

export async function getSalesforceAccessToken(): Promise<SfTokenResponse> {
    const oauth2Url: string = process.env.SF_API_OAUTH2_URL as string;
    const clientId: string = process.env.SF_API_CLIENT_ID as string;
    const clientSecret: string = process.env.SF_API_CLIENT_SECRET as string;

    if (!oauth2Url || !clientId || !clientSecret) {
        throw new Error("Missing oAuth2url or Salesforce API credentials in environment variables.");
    }
    const apiRequest = await request.newContext();
    const formData = new URLSearchParams();
    formData.append("grant_type", "client_credentials");
    formData.append("client_id", clientId);
    formData.append("client_secret", clientSecret);
    const response = await apiRequest.post(oauth2Url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData.toString(),
    });

    if (!response.ok()) {
        throw new Error(`Failed to get Salesforce access token: ${response.status()}`);
    }

    const data = (await response.json()) as SfTokenResponse;
    if (!data.access_token) { throw new Error("No access token found in Salesforce response."); }
    return data;
}