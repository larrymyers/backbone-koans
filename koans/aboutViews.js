describe('About Backbone.View', function() {
    var tootView;
    
    afterEach(function() {
        tootView.remove();
    });
    
    it('Should be tied to a DOM element when created, based off the property provided.', function() {
        tootView = new Tooter.TootView();
        
        // FIX ME change toBe('li') to toBe('change-me') to fail it
        expect(tootView.el.tagName.toLowerCase()).toBe('li');
    });
    
    it('Is backed by a model instance, which provides the data.', function() {
        tootView = new Tooter.TootView({ model: new Tooter.Toot() });
        
        expect(tootView.model).toBeDefined();
        expect(tootView.model.get('user')).toBe('Mario');
    });
    
    it('Can render, after which the DOM representation of the view will be visible.', function() {
        $('body').append('<ul id="tootList"></ul>');
        
        var toot = new Tooter.Toot();
        
        tootView = new Tooter.TootView({ parentElt: '#tootList', model: toot });
        tootView.render();
        
        expect($('#tootList').find('.toot').length).toBe(1);
        
        $('#tootList').remove();
    });
    
    it('Can use an events hash to wire up view methods to DOM elements.', function() {
        // TODO example using TootApp view to show how to test events hash
    });
});