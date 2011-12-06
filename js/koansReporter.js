(function($) {    
    var SummaryView = Backbone.View.extend({
        el: '#summary',
        
        initialize: function(options) {
            options.runner.bind('finished', this.render, this);
            
            this.render();
        },
        
        render: function() {
            var runner = this.options.runner,
                results = runner.results();
            
            return this;
        }
    });
    
    var KoansReporter = function() {
        
    };
    
    _.extend(KoansReporter.prototype, {
        reportRunnerStarting: function(runner) {
            _.extend(runner, Backbone.Events);
            var summary = new SummaryView({runner: runner});
            
            var suites = runner.suites();
            var specs = runner.specs();
        },
        
        reportRunnerResults: function(runner) {
            runner.trigger('finished');
        },
        
        reportSuiteResults: function(suite) {
        },
        
        reportSpecStarting: function(spec) {
        },
        
        reportSpecResults: function(spec) {
        },
        
        log: function(str) {
            
        }
    });
    
    window.KoansReporter = KoansReporter;
}(jQuery));