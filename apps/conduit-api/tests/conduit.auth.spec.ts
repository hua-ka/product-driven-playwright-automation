import {test, expect} from '@playwright/test';
import {getConduitToken} from '../src/utils/conduit-auth.utils.ts';

test('retrieve Conduit API token', async () => {
    const token = await getConduitToken();
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
    console.log('Conduit authentication succeeded');
});


