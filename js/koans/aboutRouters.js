describe('About Backbone.Router', function() {
    var MyRouter = Backbone.Router.extend({
        routes: {
            'help': 'help',
            'search/:query/:page': 'search',
            'articles/*path': 'articles'
        },

        // route callback methods are just regular javascript functions.
        // we use spies for the following callback methods to make testing easier.

        help: jasmine.createSpy('help router action'),

        search: jasmine.createSpy('search router action'),

        articles: jasmine.createSpy('articles router action')
    });

    var router = new MyRouter();

    Backbone.history.start({
        root: '/specrunner.html',
        silent: true
    });

    // For the following tests refer to:
    // * the routes object just a few lines up that belongs to MyRouter
    // * http://documentcloud.github.com/backbone/#Router-navigate

    it('Routers provide a way to map urls to methods.', function() {
        router.navigate('FIX ME', true);

        expect(router.help).toHaveBeenCalled();
    });

    it('The routes object can do token matching for a given url, passing the matched tokens to the mapped method.', function() {
        router.navigate('FIX ME', true);

        expect(router.search).toHaveBeenCalled();
        expect(router.search.mostRecentCall.args).toEqual(['restaurants', '1']);
    });

    it('The routes object can also do wildcard matching for a given url, passing the entire matched path to the mapped method.', function() {
        router.navigate('FIX ME', true);

        expect(router.articles).toHaveBeenCalled();
        expect(router.articles.mostRecentCall.args).toEqual(['2011/07/01/a_blog_post']);
    });

});
