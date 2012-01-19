describe('About Backbone.Router', function() {
    var MyRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'help': 'help',
            'search/:query/:page': 'search',
            'articles/*path': 'articles'
        },
        
        index: function() {},
        
        // route callback methods are just regular javascript functions.
        // we use spies for the following callback methods to make testing easier.
        
        help: jasmine.createSpy(),
        
        search: jasmine.createSpy(),
        
        articles: jasmine.createSpy()
    });
    
    var router = new MyRouter();
    
    Backbone.history.start({
        root: '/specrunner.html',
        silent: true
    });
    
    it('Routers provide a way to map urls to methods.', function() {
        router.navigate('help', true);
        
        expect(router.help).toHaveBeenCalled();
    });
    
    it('The routes object can do token matching, passing the matched tokens to the mapped method.', function() {
        router.navigate('search/restaurants/1', true);
        
        expect(router.search).toHaveBeenCalled();
        expect(router.search.mostRecentCall.args).toEqual(['restaurants', '1']);
    });
    
    it('The routes object can also do wildcard matching, passing the entire matched path to the mapped method.', function() {
        router.navigate('articles/2011/07/01/a_blog_post', true);
        
        expect(router.articles).toHaveBeenCalled();
        expect(router.articles.mostRecentCall.args).toEqual(['2011/07/01/a_blog_post']);
    });
    
});