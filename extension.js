(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          shout: "Says something in ALL CAPS."
        ]
    };

    // Register the extension
    ScratchExtensions.register('ScratchX Test', descriptor, ext);
})({});
