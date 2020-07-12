## vuestacks-vue-okta-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-vue-okta-demo/master/src/assets/vue-okta-screenshot.jpg)

### Overview

The VueStacks Okta Authentication demo utilizes Vue.js and the Okta Vue SDK to create a basic authentication boilerplate. 

Check out the [tutorial for this demo](https://www.youtube.com/playlist?list=PLu0jRv1ZDe49efAC3lZUfEcd7LRLJVilN) on the official VueStacks YouTube channel.

### Setting Up Okta Authentication

**[Click here to learn more about building Vue.js CRUD apps with Okta](https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node)** 


1) Sign up for a forever-free developer account.

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-chat-mevn-okta-auth/master/src/assets/okta-1.png)


2) Once logged in, create a new application by clicking “Add Application”.

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-chat-mevn-okta-auth/master/src/assets/okta-2.png)


3) Select the “Single-Page App” platform option.

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-chat-mevn-okta-auth/master/src/assets/okta-3.png)


4) The default application settings should be the same as those pictured.

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-chat-mevn-okta-auth/master/src/assets/okta-4.png)


5) Retrieve the Client ID from the newly created project. 

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-chat-mevn-okta-auth/master/src/assets/okta-5.png)


6) Paste the Client ID in Okta initializer inside ./router/index.js, along with the OktaDomain for your project:

```
Vue.use(Auth, {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  client_id: '{clientId}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})
```

Enjoy the demo! Submit an issue if you see anything that could be improved!
