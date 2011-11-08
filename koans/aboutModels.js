describe('About Backbone.Model', function() {
    var Tweet = Backbone.Model.extend({
        defaults: function() {
            return {
                user: 'Mario',
                message: 'Squishing Goombas, collecting coins.',
                created_on: new Date()
            };
        }
        
        
    });
    
    it('Can be created with default values for its attributes.', function() {
        var tweet = new Tweet();
        
        expect(tweet.get('user')).toBe('Mario');
        expect(tweet.get('message')).toBe('Squishing Goombas, collecting coins.');
        expect(tweet.get('created_on').getTime).toBeDefined();
    });
    
    it('Will set attributes on the model when created.', function() {
        
    });
});