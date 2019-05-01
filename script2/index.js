const kroger = require('./proxies/kroger'),
    soccer= require('./proxies/soccer'),
    walmart = require('./proxies/walmart');

walmart(8100);
kroger(8101);
soccer(8102);