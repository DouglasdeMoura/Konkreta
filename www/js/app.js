// Dom7
var $$ = Dom7;
var apiUrl = 'http://konkreta.constrinew.com.br/wp-json/';
// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'br.com.constrinew.konkreta', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo

//;
//var password = $$('#my-login-screen [name="password"]');

$$('#my-login-screen .login-button').on('click', function () {
  app.input.validateInputs('#my-login-screen');

  app.request.postJSON(
    apiUrl + 'jwt-auth/v1/token',
    app.form.convertToData('#my-login-screen'),
        function (app, data) {
          //Sucesso
          console.log(data);
          /*
          app.data = {
            token: localStorage.setItem('token', data.token),
            user_display_name: localStorage.setItem('user_display_name', data.user_display_name),
            user_email: localStorage.setItem('user_email', data.user_email),
            user_nicename: localStorage.setItem('user_nicename', data.user_nicename)
          }*/
        },
        function(data) {
          console.log(data.response);
          var message = JSON.parse(data.response).message.replace('<strong>ERRO<\/strong>:', '');
          $$('.login-message').removeClass('display-none');
          $$('.login-message').html(message);
          //message
        }
      );

  // Change error messages
//var username = $$('#my-login-screen [name="username"]').val();
  //var password = $$('#my-login-screen [name="password"]').val();*/

  //app.loginScreen.close('#my-login-screen');
  //app.dialog.alert(loginData.username);
});
