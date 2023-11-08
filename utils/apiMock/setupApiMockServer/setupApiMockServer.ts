import { setupServer } from 'msw/node';

const PREFIX = '[setupApiMockServer]';

export const setupApiMockServer = () => {
    const server = setupServer();
    console.log(PREFIX, 'Listening to requests...');
    server.listen();

    server.events.on('request:start', ({ request }) => {
        console.log(PREFIX, 'Intercepted:', request.method, request.url);
    });
};
