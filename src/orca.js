(function () {
    
    /** 
    * 
    * @summary Provides access to media control functions during a call
    * @constructor
    * @memberOf orca
    * @param {RTCMediaStream} rtcMediaStream the underlying WebRTC runtime MediaStream instance  
    */
    function ManagedStream(rtcMediaStream) {
        
        /**
        * @summary Gets the type of media associated with this instance
        * (Isn't 'type' at track level? Can't media streams contain both audio and video? )
        * @returns {String}
        */
        this.type = function() {
        }; 

        /**
        * @summary Restarts transmission of the media content after it has been stopped
        */
        this.resume = function () {
        };

        /**
        * @summary Halts transmission of the media content during a call
        * 
        */
        this.stop = function () {
        };

        /**
        * Gets the underlying WebRTC MediaStream
        * @returns {RTCMediaStream}
        */
        this.stream = function() {
        };
    }

    /** 
    *
    * @classdesc Session objects are obtained by calling the createSession method of the global {@Link orca} object
    * @summary Manages communications for a given user identity
    * @constructor
    * @memberOf orca
    */
    function Session() {
        /**
        * Activates the communications session with a gateway server
        * @method
        */
        this.connect = function () {
        };

        /**
        * Creates a new call instance for communication with the specified recipient
        * @param {String} to the user identifier of the call recipient
        * @param {String} mediatypes Comma separated list of media stream types to be used during the call Eg. "audio,video"
        */
        this.createCall = function (to, mediatypes) {
        };

        /**
        * Ends and active communications session with a gateway server
        *
        */
        this.disconnect = function () {
        };

        /**
        * @summary Retrieves the current status of this session. Possible statuses are:
        *   "unconnected" -
        *        The session has not attempted to connect.
        *   "connecting" - 
        *        The session is in the process of being established.
        *   "connected" 
        *        The session is connected to the server.
        *   "disconnected" 
        *        The session is ended and should no longer be used.
        * @returns String
        */
        this.getStatus = function () {
        };

        /**
        * @summary Adds a listener for a session event
        * Valid event names are:
        *   "connected" -
        *        Triggered when the session is connected successfully
        *   "disconnected" -
        *        Triggered when the session is disconnected
        *   "error" - (Arguments: {SessionError} indicates the error that caused the event)
        *        Triggered when an error condition occurs. If an error causes the session to
        *        end or fail to connect, then the "error" event will soon be followed by a
        *        "disconnected" event.
        *   "incomingCall" - (Arguments: {orca.Call} incoming call object)
        *        Triggered when an incoming communication is received during an active session
        *   "connecting" - 
        *        Triggered when a session is in the process of being established
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Session} 
        *
        */
        this.on = function (event, handler) {
        };
        
        /**
        * @summary Adds a listener for a session event that will be called once
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Session} 
        *
        */
        this.once = function (event, handler) {
        };
        
        /**
        * @summary Removes a listener for a session event
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Session} 
        * 
        */
        this.off = function (event, handler) {
        };

    }

    

    /**
    * @summary Provides access to methods for managing an outgoing or incoming call
    * @classdesc Calls objects are obtained by calling the createCall method or handling the onIncoming event of a connected {@Link orca.Session} instance
    * @Constructor
    * @memberOf orca
    */
    function Call() {

        /**
        * Gets a unique identifier for the call 
        * @type {String}
        */
        this.id = function() {
        };
        
        /**
        * Gets the identities of the remote peers attached to this call
        * @returns {PeerIdentity[]}
        */
        this.remoteIdentities = function() {
        };
        
        /**
        * Adds a local media stream to the call
        * Media stream instances are obtained from the browser's getUserMedia() method.
        * Local media streams should be added using this method before the connect method 
        * is called to either initiate a new call or answer a received call.
        * (NOTE: Possible to accept RTCMediaStream as parameter to this method and
        * create ManagedStream internally)
        * @param {(orca.ManagedStream|RTCMediaStream)} stream local media stream 
        */
        this.addStream = function (stream) {
        };

        /**
        * Attempts to reach the call recipient and establish a connection
        * For an incoming call, calling this method explicitly joins/accepts the call
        */
        this.connect = function () {
        };

        /**
        * Ends an active call
        *
        */
        this.disconnect = function () {
        };
        
        /**
        * Called when a user does not wish to accept an incoming call
        *
        */
        this.reject = function () {
        };

        /**
        * Retrieves a list of streams associated with this call.
        * The return value is an array of ManagedStream instances with undefined order
        * When no selector parameter is provided all local and remote streams are included
        * in the returned array.
        * The keywords *local* and *remote* can be specified to limit the results to local or 
        * remote streams respectively.
        * The *.* (period) symbol is used to prefix a keyword used to limit the results by the
        * stream type.  E.g. ".video" would be used to return a list of video streams only.
        * The *#* (pound) symbol is used to prefix label text used to limit the results to a 
        * to a single stream with a label matching the specified text.
        * 
        * @param {string} selector optional query to filter the result list
        * @returns {orca.ManagedStream[]}
        * @example
        * // Get list of all local streams
        * var localStreams = call.streams("local");
        *
        * // Get list of all audio streams
        * var audioStreams = call.streams(".audio");
        * 
        * // Get stream with by its label name
        * // If successful only one match should be
        * // returned
        * var stream0 = call.streams("#stream_0");
        * if (stream0 && stream0.length == 1) {
        * ...
        * }
        * 
        * // Possible to support combined selections?
        * // Get list of local audio streams
        * var localAudio = call.streams("local.audio");
        */
        this.streams = function(selector) {
        };

        /**
        * Retrieves the current status of this call. Possible statuses are:
        *   "unconnected" -
        *        The call has not attempted to connect.
        *   "connecting" -
        *        The call is attempting to connect to the remote party.
        *   "connected" -
        *        The call is connected to the remote party.
        *   "hold" -
        *        The call is placed on hold by the remote party.
        *   "disconnected" -
        *        The call is ended and should no longer be used.
        * @returns {String}
        */
        this.getStatus = function () {
        };
        
        /**
        * @summary Adds a listener for a call event
        * Valid event names are:
        *   "connected" -
        *        Triggered when a call is connected
        *   "disconnected" -
        *        Triggered when a call is disconnected
        *   "error" - (Arguments: {CallError} Indicates the error that caused the event)
        *        Triggered when an error condition occurs. If an error causes the call to
        *        end or fail to connect, then the "error" event will soon be followed by a 
        *        "disconnected" event.
        *   "stream:add" - (Arguments: {orca.ManagedStream} remote media stream)
        *        Triggered when a remote stream is added to the call
        *   "connecting" - 
        *        Triggered when a call has initiated an attempt to connect to a remote party 
        *   "hold" - 
        *        Triggered when a call is placed on hold
        *   "unhold" - 
        *        Triggered when a call is taken off hold
        *   "rejected" - 
        *        Triggered when an attempt to connect a call is explicitly rejected by the
        *        remote party. This results in the call failing to connect, but it will not
        *        be accompanied by a "disconnected" event.
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Call} 
        *
        */
        this.on = function (event, handler) {
        };
        
        /**
        * @summary Adds a listener for a call event that will be called once
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Call} 
        *
        */
        this.once = function (event, handler) {
        };
        
        /**
        * @summary Removes a listener for a call event
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Call} 
        * 
        */
        this.off = function (event, handler) {
        };

    }

    /**
    *
    * @summary Possible errors associated with a orca.Call
    * @typedef CallError
    * @type enum
    * @memberOf orca
    * @property {String} NETWORK_ERROR An error has occured
    * 
    */
    var CallError = {
        NETWORK_ERROR: 'NETWORK_ERROR'
    };
    
    /**
    *
    * @summary Provides information about an event
    * @typedef Event
    * @type object 
    * @property {String} name Gets the name/type indicator of the event
    */
    
    /**
    *
    * @summary Provides information about the identity of a communications peer
    * @typedef PeerIdentity
    * @type object 
    * @property {String} id the unique identifier or address string of the associated user
    * 
    */

    /**
    *
    * @summary Possible errors associated with a orca.Session
    * @typedef SessionError
    * @type enum
    * @memberOf orca
    * @property {String} AUTHENTICATION_FAILED User credentials are invalid
    * @property {String} NETWORK_ERROR No response recieved within maximum expected time
    * 
    */
    var SessionError = {
        AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
        NETWORK_ERROR: 'NETWORK_ERROR'
    };

    /**
    *
    * @summary Configuration properties for a orca.Session
    * @typedef SessionConfig
    * @type object 
    * @property {String} uri The address of the gateway server
    * @property {Object} provider Reference to implementation providing actual functionality
    * @property {String} mediatypes The types of media streams that the created session will support; defaults if not provided
    * 
    */

    /** 
    * @summary root namespace of the call control SDK
    * @global
    * @namespace 
    */
    var orca = {
        /**
        * allow creation of multiple sessions in a single page; 
        * possibly limit repeated registrations using the same identity
        * @param {userid} userid The user's unique identifier
        * @param {token} token An authorization token associated with the provided userid
        * @param {SessionConfig} sessionConfig session initialization parameters
        * @returns {orca.Session}
        */
        createSession: function (userid, token, sessionConfig) {
        },

        /**
        * Create a reference to a WebRTC media stream that can be attached 
        * to a call
        * @param {RTCMediaStream} rtcMediaStream Browser media stream
        * @returns {orca.ManagedStream}
        */
        createManagedStream: function(rtcMediaStream) {
        }

    };

    orca.SessionError = SessionError;
    orca.CallError = CallError

    this.orca = orca;

})();

