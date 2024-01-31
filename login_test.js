Feature('Login');

Scenario('test login', async ({ I, login }) => {    
    await login('admin')    
});
