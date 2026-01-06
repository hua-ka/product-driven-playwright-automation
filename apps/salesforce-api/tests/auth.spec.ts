import {test, expect} from '@playwright/test';
import {getSalesforceAccessToken} from '../src/utils/auth-utils.ts';

test('retrieve Salesforce access token', async () => {
    const { access_token, instance_url } = await getSalesforceAccessToken();
    expect(access_token).toBeDefined();
    expect(instance_url).toBeDefined();
    expect(typeof access_token).toBe('string');
    expect(access_token.length).toBeGreaterThan(0);
    console.log('Salesforce authentication succeeded');
});


