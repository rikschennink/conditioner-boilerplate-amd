define(function() {

    return function(element) {
        
        console.log('Component mounted on', element);
        
    
        // logic here
        element.textContent = 'Component mounted';
    
    
        // public component API
        element.foo = function() {
    
            console.log('foo called!');
    
            // dispatch events to notify other components
            element.dispatchEvent( new CustomEvent('bar') );
        };
    
    
        // expose destroy method
        return function() {
            
            // restore content
            element.textContent = '';
    
            // clean up methods
            element.foo = undefined;
    
        };

    };

});