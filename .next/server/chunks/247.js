exports.id = 247;
exports.ids = [247];
exports.modules = {

/***/ 5908:
/***/ ((__unused_webpack_module, exports) => {


/**
 * Expose `Emitter`.
 */

exports.Q = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 4432:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _asyncToGenerator;
    }
}));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


/***/ }),

/***/ 7688:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _extends;
    }
}));
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 1644:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireWildcard;
    }
}));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}


/***/ }),

/***/ 2495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 7753:
/***/ ((module) => {

"use strict";


/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */
const mask = (source, mask, output, offset, length) => {
  for (var i = 0; i < length; i++) {
    output[offset + i] = source[i] ^ mask[i & 3];
  }
};

/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */
const unmask = (buffer, mask) => {
  // Required until https://github.com/nodejs/node/issues/9006 is resolved.
  const length = buffer.length;
  for (var i = 0; i < length; i++) {
    buffer[i] ^= mask[i & 3];
  }
};

module.exports = { mask, unmask };


/***/ }),

/***/ 5659:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


try {
  module.exports = __webpack_require__(4734)(__dirname);
} catch (e) {
  module.exports = __webpack_require__(7753);
}


/***/ }),

/***/ 2610:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(554)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(6338);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 7564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || false === true || process.__nwjs) {
	module.exports = __webpack_require__(2610);
} else {
	module.exports = __webpack_require__(6704);
}


/***/ }),

/***/ 6704:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(6224);
const util = __webpack_require__(3837);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(2195);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(554)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 635:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 6338:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 8700:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__JetBrains_Mono_ead53c', '__JetBrains_Mono_Fallback_ead53c'","fontWeight":500,"fontStyle":"normal"},
	"className": "__className_ead53c"
};


/***/ }),

/***/ 1399:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createProxy = createProxy;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Modified from https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackNodeRegister.js
const CLIENT_REFERENCE = Symbol.for("react.client.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const deepProxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            case "displayName":
                return undefined;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw new Error(`Cannot render a Client Context Provider on the Server. ` + `Instead, you can export a Client Component wrapper ` + `that itself renders a Client Context Provider.`);
            default:
                break;
        }
        const expression = String(target.name) + "." + String(name);
        throw new Error(`Cannot access ${expression} on the server. ` + "You cannot dot into a client module from a server component. " + "You can only pass the imported name through.");
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                // Something is conditionally checking which export to use. We'll pretend to be
                // an ESM compat module but then we'll check again on the client.
                const moduleId = target.$$id;
                target.default = Object.defineProperties(function() {
                    throw new Error(`Attempted to call the default export of ${moduleId} from the server ` + `but it's on the client. It's not possible to invoke a client function from ` + `the server, it can only be rendered as a Component or passed to props of a ` + `Client Component.`);
                }, {
                    $$typeof: {
                        value: CLIENT_REFERENCE
                    },
                    // This a placeholder value that tells the client to conditionally use the
                    // whole object or just the default export.
                    $$id: {
                        value: target.$$id + "#"
                    },
                    $$async: {
                        value: target.$$async
                    }
                });
                return true;
            case "then":
                if (target.then) {
                    // Use a cached value
                    return target.then;
                }
                if (!target.$$async) {
                    // If this module is expected to return a Promise (such as an AsyncModule) then
                    // we should resolve that with a client reference that unwraps the Promise on
                    // the client.
                    const clientReference = Object.defineProperties({}, {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: true
                        }
                    });
                    const proxy = new Proxy(clientReference, proxyHandlers);
                    // Treat this as a resolved Promise for React's use()
                    target.status = "fulfilled";
                    target.value = proxy;
                    const then = target.then = Object.defineProperties(function then(resolve, _reject) {
                        // Expose to React.
                        return Promise.resolve(resolve(proxy));
                    }, // export then we should treat it as a reference to that name.
                    {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: false
                        }
                    });
                    return then;
                } else {
                    // Since typeof .then === 'function' is a feature test we'd continue recursing
                    // indefinitely if we return a function. Instead, we return an object reference
                    // if we check further.
                    return undefined;
                }
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            const reference = Object.defineProperties(function() {
                throw new Error(`Attempted to call ${String(name)}() from the server but ${String(name)} is on the client. ` + `It's not possible to invoke a client function from the server, it can ` + `only be rendered as a Component or passed to props of a Client Component.`);
            }, {
                $$typeof: {
                    value: CLIENT_REFERENCE
                },
                $$id: {
                    value: target.$$id + "#" + name
                },
                $$async: {
                    value: target.$$async
                }
            });
            cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        // Pretend to be a Promise in case anyone asks.
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const clientReference = Object.defineProperties({}, {
        $$typeof: {
            value: CLIENT_REFERENCE
        },
        // Represents the whole Module object instead of a particular import.
        $$id: {
            value: moduleId
        },
        $$async: {
            value: false
        }
    });
    return new Proxy(clientReference, proxyHandlers);
} //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 2286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/home/runner/drawr/node_modules/next/dist/client/components/app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 2384:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 7340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/home/runner/drawr/node_modules/next/dist/client/components/error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 4065:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DYNAMIC_ERROR_CODE = void 0;
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
exports.DYNAMIC_ERROR_CODE = DYNAMIC_ERROR_CODE;
class DynamicServerError extends Error {
    constructor(type){
        super(`Dynamic server usage: ${type}`);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
exports.DynamicServerError = DynamicServerError;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 5717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/home/runner/drawr/node_modules/next/dist/client/components/layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 8353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/home/runner/drawr/node_modules/next/dist/client/components/render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 2458:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.requestAsyncStorage = void 0;
var _asyncLocalStorage = __webpack_require__(2384);
const requestAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.requestAsyncStorage = requestAsyncStorage;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.js.map


/***/ }),

/***/ 200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(1094), f = "function" === typeof AsyncLocalStorage, ba = f ? new AsyncLocalStorage : null, m = null, n = 0;
function p(a, b) {
    if (0 !== b.length) if (512 < b.length) 0 < n && (a.enqueue(new Uint8Array(m.buffer, 0, n)), m = new Uint8Array(512), n = 0), a.enqueue(b);
    else {
        var c = m.length - n;
        c < b.length && (0 === c ? a.enqueue(m) : (m.set(b.subarray(0, c), n), a.enqueue(m), b = b.subarray(c)), m = new Uint8Array(512), n = 0);
        m.set(b, n);
        n += b.length;
    }
    return !0;
}
var q = new TextEncoder;
function r(a) {
    return q.encode(a);
}
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var t = JSON.stringify;
function da(a, b, c) {
    a = t(c, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return q.encode(b);
}
function u(a, b, c) {
    a = t(c);
    b = b.toString(16) + ":" + a + "\n";
    return q.encode(b);
}
var w = Symbol.for("react.client.reference"), ea = Symbol.for("react.server.reference"), y = Symbol.for("react.element"), fa = Symbol.for("react.fragment"), ja = Symbol.for("react.provider"), ka = Symbol.for("react.server_context"), la = Symbol.for("react.forward_ref"), ma = Symbol.for("react.suspense"), na = Symbol.for("react.suspense_list"), oa = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), pa = Symbol.for("react.default_value"), qa = Symbol.for("react.memo_cache_sentinel"), ra = Symbol.iterator;
function A(a, b, c, d, e, g, h) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = g;
    this.removeEmptyString = h;
}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    new A(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    new A(a[0], 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    new A(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    new A(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    new A(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    new A(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    new A(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    new A(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    new A(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var B = /[\-:]([a-z])/g;
function C(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering transform-origin underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    new A(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    new A(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
var D = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    scale: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, sa = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(D).forEach(function(a) {
    sa.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        D[b] = D[a];
    });
});
var E = Array.isArray;
r('"></template>');
r("<script>");
r("</script>");
r('<script src="');
r('<script type="module" src="');
r('" integrity="');
r('" async=""></script>');
r("<!-- -->");
r(' style="');
r(":");
r(";");
r(" ");
r('="');
r('"');
r('=""');
r(">");
r("/>");
r(' selected=""');
r("\n");
r("<!DOCTYPE html>");
r("</");
r(">");
r('<template id="');
r('"></template>');
r("<!--$-->");
r('<!--$?--><template id="');
r('"></template>');
r("<!--$!-->");
r("<!--/$-->");
r("<template");
r('"');
r(' data-dgst="');
r(' data-msg="');
r(' data-stck="');
r("></template>");
r('<div hidden id="');
r('">');
r("</div>");
r('<svg aria-hidden="true" style="display:none" id="');
r('">');
r("</svg>");
r('<math aria-hidden="true" style="display:none" id="');
r('">');
r("</math>");
r('<table hidden id="');
r('">');
r("</table>");
r('<table hidden><tbody id="');
r('">');
r("</tbody></table>");
r('<table hidden><tr id="');
r('">');
r("</tr></table>");
r('<table hidden><colgroup id="');
r('">');
r("</colgroup></table>");
r('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};;$RS("');
r('$RS("');
r('","');
r('")</script>');
r('<template data-rsi="" data-sid="');
r('" data-pid="');
r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("');
r('$RC("');
r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this.s=n}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=y[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var e=f[m++];if(a=p.get(e)){var d=a._p;c=!0}else{a=r.createElement("link");a.href=e;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];d=f[m++];)a.setAttribute(d,f[m++]);d=a._p=new Promise(function(n,z){a.onload=n;a.onerror=z});d.then(v.bind(d,"l"),v.bind(d,"e"));p.set(e,a)}e=a.getAttribute("media");!d||"l"===d.s||e&&!matchMedia(e).matches||h.push(d);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
r('$RM=new Map;\n$RR=function(t,u,y){function v(n){this.s=n}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=y[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var e=f[m++];if(a=p.get(e)){var d=a._p;c=!0}else{a=r.createElement("link");a.href=e;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];d=f[m++];)a.setAttribute(d,f[m++]);d=a._p=new Promise(function(n,z){a.onload=n;a.onerror=z});d.then(v.bind(d,"l"),v.bind(d,"e"));p.set(e,a)}e=a.getAttribute("media");!d||"l"===d.s||e&&!matchMedia(e).matches||h.push(d);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
r('$RR("');
r('","');
r('",');
r('"');
r(")</script>");
r('<template data-rci="" data-bid="');
r('<template data-rri="" data-bid="');
r('" data-sid="');
r('" data-sty="');
r('$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("');
r('$RX("');
r('"');
r(",");
r(")</script>");
r('<template data-rxi="" data-bid="');
r('" data-dgst="');
r('" data-msg="');
r('" data-stck="');
r('<style media="not all" data-precedence="');
r('" data-href="');
r('">');
r("</style>");
r('<style data-precedence="');
r('" data-href="');
r(" ");
r('">');
r("</style>");
r("[");
r(",[");
r(",");
r("]");
var G = null;
function H(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
            if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            H(a, c);
            b.context._currentValue = b.value;
        }
    }
}
function ta(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && ta(a);
}
function ua(a) {
    var b = a.parent;
    null !== b && ua(b);
    a.context._currentValue = a.value;
}
function va(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? H(a, b) : va(a, b);
}
function wa(a, b) {
    var c = b.parent;
    if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === c.depth ? H(a, c) : wa(a, c);
    b.context._currentValue = b.value;
}
function I(a) {
    var b = G;
    b !== a && (null === b ? ua(a) : null === a ? ta(b) : b.depth === a.depth ? H(b, a) : b.depth > a.depth ? va(b, a) : wa(b, a), G = a);
}
function xa(a, b) {
    var c = a._currentValue;
    a._currentValue = b;
    var d = G;
    return G = a = {
        parent: d,
        depth: null === d ? 0 : d.depth + 1,
        context: a,
        parentValue: c,
        value: b
    };
}
var J = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function ya() {}
function za(a, b, c) {
    c = a[c];
    void 0 === c ? a.push(b) : c !== b && (b.then(ya, ya), b = c);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(d) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = d;
                }
            }, function(d) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = d;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            K = b;
            throw J;
    }
}
var K = null;
function Aa() {
    if (null === K) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = K;
    K = null;
    return a;
}
var L = null, N = 0, O = null;
function Ba() {
    var a = O;
    O = null;
    return a;
}
function Ca(a) {
    return a._currentValue;
}
var Ga = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: P,
    useTransition: P,
    readContext: Ca,
    useContext: Ca,
    useReducer: P,
    useRef: P,
    useState: P,
    useInsertionEffect: P,
    useLayoutEffect: P,
    useImperativeHandle: P,
    useEffect: P,
    useId: Da,
    useMutableSource: P,
    useSyncExternalStore: P,
    useCacheRefresh: function() {
        return Ea;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), c = 0; c < a; c++)b[c] = qa;
        return b;
    },
    use: Fa
};
function P() {
    throw Error("This Hook is not supported in Server Components.");
}
function Ea() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Da() {
    if (null === L) throw Error("useId can only be used while React is rendering");
    var a = L.identifierCount++;
    return ":" + L.identifierPrefix + "S" + a.toString(32) + ":";
}
function Fa(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = N;
            N += 1;
            null === O && (O = []);
            return za(O, a, b);
        }
        if (a.$$typeof === ka) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function Q() {
    return (new AbortController).signal;
}
function Ha() {
    if (R) return R;
    if (f) {
        var a = ba.getStore();
        if (a) return a;
    }
    return new Map;
}
var Ia = {
    getCacheSignal: function() {
        var a = Ha(), b = a.get(Q);
        void 0 === b && (b = Q(), a.set(Q, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ha(), c = b.get(a);
        void 0 === c && (c = a(), b.set(a, c));
        return c;
    }
}, R = null, S = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = S.ContextRegistry, Ja = S.ReactCurrentDispatcher, Ka = S.ReactCurrentCache;
function La(a) {
    console.error(a);
}
function Ma(a, b, c, d, e) {
    if (null !== Ka.current && Ka.current !== Ia) throw Error("Currently React only supports one RSC renderer at a time.");
    Ka.current = Ia;
    var g = new Set, h = [], k = {
        status: 0,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        abortableTasks: g,
        pingedTasks: h,
        completedImportChunks: [],
        completedJSONChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === c ? La : c,
        toJSON: function(l, v) {
            return Na(k, this, l, v);
        }
    };
    k.pendingChunks++;
    b = Oa(d);
    a = Pa(k, a, b, g);
    h.push(a);
    return k;
}
var Qa = {};
function Ra(a, b) {
    a.pendingChunks++;
    var c = Pa(a, null, G, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return c.model = b.value, Sa(a, c), c.id;
        case "rejected":
            var d = U(a, b.reason);
            V(a, c.id, d);
            return c.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        c.model = e;
        Sa(a, c);
    }, function(e) {
        c.status = 4;
        e = U(a, e);
        V(a, c.id, e);
        null !== a.destination && W(a, a.destination);
    });
    return c.id;
}
function Ta(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function Ua(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: z,
        _payload: a,
        _init: Ta
    };
}
function X(a, b, c, d, e, g) {
    if (null !== d && void 0 !== d) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === w) return [
            y,
            b,
            c,
            e
        ];
        N = 0;
        O = g;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : Ua(e) : e;
    }
    if ("string" === typeof b) return [
        y,
        b,
        c,
        e
    ];
    if ("symbol" === typeof b) return b === fa ? e.children : [
        y,
        b,
        c,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === w) return [
            y,
            b,
            c,
            e
        ];
        switch(b.$$typeof){
            case z:
                var h = b._init;
                b = h(b._payload);
                return X(a, b, c, d, e, g);
            case la:
                return a = b.render, N = 0, O = g, a(e, void 0);
            case oa:
                return X(a, b.type, c, d, e, g);
            case ja:
                return xa(b._context, e.value), [
                    y,
                    b,
                    c,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: Qa
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Va(b));
}
function Sa(a, b) {
    var c = a.pingedTasks;
    c.push(b);
    1 === c.length && setTimeout(function() {
        return Wa(a);
    }, 0);
}
function Pa(a, b, c, d) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: c,
        ping: function() {
            return Sa(a, e);
        },
        thenableState: null
    };
    d.add(e);
    return e;
}
function Xa(a, b, c, d) {
    var e = d.$$async ? d.$$id + "#async" : d.$$id, g = a.writtenClientReferences, h = g.get(e);
    if (void 0 !== h) return b[0] === y && "1" === c ? "$L" + h.toString(16) : "$" + h.toString(16);
    try {
        var k = a.bundlerConfig[d.$$id];
        var l = d.$$async ? {
            id: k.id,
            chunks: k.chunks,
            name: k.name,
            async: !0
        } : k;
        a.pendingChunks++;
        var v = a.nextChunkId++, ha = t(l), x = v.toString(16) + ":I" + ha + "\n";
        var M = q.encode(x);
        a.completedImportChunks.push(M);
        g.set(e, v);
        return b[0] === y && "1" === c ? "$L" + v.toString(16) : "$" + v.toString(16);
    } catch (ia) {
        return a.pendingChunks++, b = a.nextChunkId++, c = U(a, ia), V(a, b, c), "$" + b.toString(16);
    }
}
function Ya(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, c) {
        return c;
    });
}
function Va(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.substr(0, 10) + "...");
        case "object":
            if (E(a)) return "[...]";
            a = Ya(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function Y(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case ma:
            return "Suspense";
        case na:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case la:
            return Y(a.render);
        case oa:
            return Y(a.type);
        case z:
            var b = a._payload;
            a = a._init;
            try {
                return Y(a(b));
            } catch (c) {}
    }
    return "";
}
function Z(a, b) {
    var c = Ya(a);
    if ("Object" !== c && "Array" !== c) return c;
    c = -1;
    var d = 0;
    if (E(a)) {
        var e = "[";
        for(var g = 0; g < a.length; g++){
            0 < g && (e += ", ");
            var h = a[g];
            h = "object" === typeof h && null !== h ? Z(h) : Va(h);
            "" + g === b ? (c = e.length, d = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === y) e = "<" + Y(a.type) + "/>";
    else {
        e = "{";
        g = Object.keys(a);
        for(h = 0; h < g.length; h++){
            0 < h && (e += ", ");
            var k = g[h], l = JSON.stringify(k);
            e += ('"' + k + '"' === l ? k : l) + ": ";
            l = a[k];
            l = "object" === typeof l && null !== l ? Z(l) : Va(l);
            k === b ? (c = e.length, d = l.length, e += l) : e = 10 > l.length && 40 > e.length + l.length ? e + l : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < c && 0 < d ? (a = " ".repeat(c) + "^".repeat(d), "\n  " + e + "\n  " + a) : "\n  " + e;
}
function Na(a, b, c, d) {
    switch(d){
        case y:
            return "$";
    }
    for(; "object" === typeof d && null !== d && (d.$$typeof === y || d.$$typeof === z);)try {
        switch(d.$$typeof){
            case y:
                var e = d;
                d = X(a, e.type, e.key, e.ref, e.props, null);
                break;
            case z:
                var g = d._init;
                d = g(d._payload);
        }
    } catch (h) {
        c = h === J ? Aa() : h;
        if ("object" === typeof c && null !== c && "function" === typeof c.then) return a.pendingChunks++, a = Pa(a, d, G, a.abortableTasks), d = a.ping, c.then(d, d), a.thenableState = Ba(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        d = a.nextChunkId++;
        c = U(a, c);
        V(a, d, c);
        return "$L" + d.toString(16);
    }
    if (null === d) return null;
    if ("object" === typeof d) {
        if (d.$$typeof === w) return Xa(a, b, c, d);
        if ("function" === typeof d.then) return "$@" + Ra(a, d).toString(16);
        if (d.$$typeof === ja) return d = d._context._globalName, b = a.writtenProviders, c = b.get(c), void 0 === c && (a.pendingChunks++, c = a.nextChunkId++, b.set(d, c), d = u(a, c, "$P" + d), a.completedJSONChunks.push(d)), "$" + c.toString(16);
        if (d === Qa) {
            a = G;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === pa ? a.context._defaultValue : d;
            G = a.parent;
            return;
        }
        return !E(d) && (null === d || "object" !== typeof d ? a = null : (a = ra && d[ra] || d["@@iterator"], a = "function" === typeof a ? a : null), a) ? Array.from(d) : d;
    }
    if ("string" === typeof d) return a = "$" === d[0] ? "$" + d : d, a;
    if ("boolean" === typeof d || "number" === typeof d || "undefined" === typeof d) return d;
    if ("function" === typeof d) {
        if (d.$$typeof === w) return Xa(a, b, c, d);
        if (d.$$typeof === ea) return c = a.writtenServerReferences, b = c.get(d), void 0 !== b ? a = "$F" + b.toString(16) : (b = d.$$bound, e = {
            id: d.$$id,
            bound: b ? Promise.resolve(b) : null
        }, a.pendingChunks++, b = a.nextChunkId++, e = da(a, b, e), a.completedJSONChunks.push(e), c.set(d, b), a = "$F" + b.toString(16)), a;
        if (/^on[A-Z]/.test(c)) throw Error("Event handlers cannot be passed to Client Component props." + Z(b, c) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + Z(b, c));
    }
    if ("symbol" === typeof d) {
        e = a.writtenSymbols;
        g = e.get(d);
        if (void 0 !== g) return "$" + g.toString(16);
        g = d.description;
        if (Symbol.for(g) !== d) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (d.description + ") cannot be found among global symbols.") + Z(b, c));
        a.pendingChunks++;
        c = a.nextChunkId++;
        b = u(a, c, "$S" + g);
        a.completedImportChunks.push(b);
        e.set(d, c);
        return "$" + c.toString(16);
    }
    if ("bigint" === typeof d) throw Error("BigInt (" + d + ") is not yet supported in Client Component props." + Z(b, c));
    throw Error("Type " + typeof d + " is not supported in Client Component props." + Z(b, c));
}
function U(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function Za(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function V(a, b, c) {
    c = {
        digest: c
    };
    b = b.toString(16) + ":E" + t(c) + "\n";
    b = q.encode(b);
    a.completedErrorChunks.push(b);
}
function Wa(a) {
    var b = Ja.current, c = R;
    Ja.current = Ga;
    R = a.cache;
    L = a;
    try {
        var d = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < d.length; e++){
            var g = d[e];
            var h = a;
            if (0 === g.status) {
                I(g.context);
                try {
                    var k = g.model;
                    if ("object" === typeof k && null !== k && k.$$typeof === y) {
                        var l = k, v = g.thenableState;
                        g.model = k;
                        k = X(h, l.type, l.key, l.ref, l.props, v);
                        for(g.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === y;)l = k, g.model = k, k = X(h, l.type, l.key, l.ref, l.props, null);
                    }
                    var ha = da(h, g.id, k);
                    h.completedJSONChunks.push(ha);
                    h.abortableTasks.delete(g);
                    g.status = 1;
                } catch (F) {
                    var x = F === J ? Aa() : F;
                    if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                        var M = g.ping;
                        x.then(M, M);
                        g.thenableState = Ba();
                    } else {
                        h.abortableTasks.delete(g);
                        g.status = 4;
                        var ia = U(h, x);
                        V(h, g.id, ia);
                    }
                }
            }
        }
        null !== a.destination && W(a, a.destination);
    } catch (F) {
        U(a, F), Za(a, F);
    } finally{
        Ja.current = b, R = c, L = null;
    }
}
function W(a, b) {
    m = new Uint8Array(512);
    n = 0;
    try {
        for(var c = a.completedImportChunks, d = 0; d < c.length; d++)a.pendingChunks--, p(b, c[d]);
        c.splice(0, d);
        var e = a.completedJSONChunks;
        for(d = 0; d < e.length; d++)a.pendingChunks--, p(b, e[d]);
        e.splice(0, d);
        var g = a.completedErrorChunks;
        for(d = 0; d < g.length; d++)a.pendingChunks--, p(b, g[d]);
        g.splice(0, d);
    } finally{
        m && 0 < n && (b.enqueue(new Uint8Array(m.buffer, 0, n)), m = null, n = 0);
    }
    0 === a.pendingChunks && b.close();
}
function $a(a) {
    f ? setTimeout(function() {
        return ba.run(a.cache, Wa, a);
    }, 0) : setTimeout(function() {
        return Wa(a);
    }, 0);
}
function ab(a, b) {
    try {
        var c = a.abortableTasks;
        if (0 < c.size) {
            var d = U(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            V(a, e, d);
            c.forEach(function(g) {
                g.status = 3;
                var h = "$" + e.toString(16);
                g = u(a, g.id, h);
                a.completedErrorChunks.push(g);
            });
            c.clear();
        }
        null !== a.destination && W(a, a.destination);
    } catch (g) {
        U(a, g), Za(a, g);
    }
}
function Oa(a) {
    if (a) {
        var b = G;
        I(null);
        for(var c = 0; c < a.length; c++){
            var d = a[c], e = d[0];
            d = d[1];
            T[e] || (T[e] = aa.createServerContext(e, pa));
            xa(T[e], d);
        }
        a = G;
        I(b);
        return a;
    }
    return null;
}
exports.renderToReadableStream = function(a, b, c) {
    var d = Ma(a, b, c ? c.onError : void 0, c ? c.context : void 0, c ? c.identifierPrefix : void 0);
    if (c && c.signal) {
        var e = c.signal;
        if (e.aborted) ab(d, e.reason);
        else {
            var g = function() {
                ab(d, e.reason);
                e.removeEventListener("abort", g);
            };
            e.addEventListener("abort", g);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            $a(d);
        },
        pull: function(h) {
            if (1 === d.status) d.status = 2, ca(h, d.fatalError);
            else if (2 !== d.status && null === d.destination) {
                d.destination = h;
                try {
                    W(d, h);
                } catch (k) {
                    U(d, k), Za(d, k);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 8378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(200);
} else {}


/***/ }),

/***/ 8193:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var f = __webpack_require__(1094), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
__webpack_unused_export__ = l;
exports.jsx = q;
__webpack_unused_export__ = q;


/***/ }),

/***/ 5044:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = new Request(a, b);
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-next-3706edb81-20230308";


/***/ }),

/***/ 4458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(8193);
} else {}


/***/ }),

/***/ 1094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(5044);
} else {}


/***/ }),

/***/ 6281:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(3056);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 6667:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FLIGHT_PARAMETERS = exports.RSC_VARY_HEADER = exports.RSC_CONTENT_TYPE_HEADER = exports.FETCH_CACHE_HEADER = exports.NEXT_ROUTER_PREFETCH = exports.NEXT_ROUTER_STATE_TREE = exports.ACTION = exports.RSC = void 0;
const RSC = "RSC";
exports.RSC = RSC;
const ACTION = "Next-Action";
exports.ACTION = ACTION;
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
exports.NEXT_ROUTER_STATE_TREE = NEXT_ROUTER_STATE_TREE;
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
exports.NEXT_ROUTER_PREFETCH = NEXT_ROUTER_PREFETCH;
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
exports.FETCH_CACHE_HEADER = FETCH_CACHE_HEADER;
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
exports.RSC_CONTENT_TYPE_HEADER = RSC_CONTENT_TYPE_HEADER;
const RSC_VARY_HEADER = `${RSC}, ${NEXT_ROUTER_STATE_TREE}, ${NEXT_ROUTER_PREFETCH}`;
exports.RSC_VARY_HEADER = RSC_VARY_HEADER;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
exports.FLIGHT_PARAMETERS = FLIGHT_PARAMETERS;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 5958:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = AppRouter;
exports.urlToUrlWithoutFlightMarker = urlToUrlWithoutFlightMarker;
var _async_to_generator = (__webpack_require__(4432)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _appRouterContext = __webpack_require__(3280);
var _routerReducer = __webpack_require__(8331);
var _routerReducerTypes = __webpack_require__(7389);
var _createHrefFromUrl = __webpack_require__(6082);
var _hooksClientContext = __webpack_require__(9274);
var _useReducerWithDevtools = __webpack_require__(5002);
var _errorBoundary = __webpack_require__(1551);
var _createInitialRouterState = __webpack_require__(84);
var _fetchServerResponse = __webpack_require__(4883);
var _isBot = __webpack_require__(1897);
var _addBasePath = __webpack_require__(6281);
function AppRouter(props) {
    const { globalErrorComponent  } = props, rest = _object_without_properties_loose(props, [
        "globalErrorComponent"
    ]);
    return /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, Object.assign({}, rest)));
}
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    // TODO-APP: handle .rsc for static export case
    return urlWithoutFlightParameters;
}
const HotReloader =  true ? null : 0;
const prefetched = new Set();
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
/**
 * The global router that wraps the application components.
 */ function Router({ initialHead , initialTree , initialCanonicalUrl , children , assetPrefix  }) {
    const initialState = (0, _react).useMemo(()=>(0, _createInitialRouterState).createInitialRouterState({
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree , cache , prefetchCache , pushRef , focusAndScrollRef , canonicalUrl  }, dispatch, sync] = (0, _useReducerWithDevtools).useReducerWithReduxDevtools(_routerReducer.reducer, initialState);
    (0, _react).useEffect(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams , pathname  } = (0, _react).useMemo(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    /**
   * Server response that only patches the cache and tree.
   */ const changeByServerResponse = (0, _react).useCallback((previousTree, flightData, overrideCanonicalUrl)=>{
        dispatch({
            type: _routerReducerTypes.ACTION_SERVER_PATCH,
            flightData,
            previousTree,
            overrideCanonicalUrl,
            cache: {
                status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                data: null,
                subTreeData: null,
                parallelRoutes: new Map()
            },
            mutable: {}
        });
    }, [
        dispatch
    ]);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react).useMemo(()=>{
        const navigate = (href, navigateType, forceOptimisticNavigation)=>{
            const url = new URL((0, _addBasePath).addBasePath(href), location.origin);
            return dispatch({
                type: _routerReducerTypes.ACTION_NAVIGATE,
                url,
                isExternalUrl: isExternalURL(url),
                locationSearch: location.search,
                forceOptimisticNavigation,
                navigateType,
                cache: {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                },
                mutable: {}
            });
        };
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: _async_to_generator(function*(href) {
                const hrefWithBasePath = (0, _addBasePath).addBasePath(href);
                // If prefetch has already been triggered, don't trigger it again.
                if (prefetched.has(hrefWithBasePath) ||  false && 0) {
                    return;
                }
                prefetched.add(hrefWithBasePath);
                const url = new URL(hrefWithBasePath, location.origin);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                try {
                    var ref;
                    const routerTree = ((ref = window.history.state) == null ? void 0 : ref.tree) || initialTree;
                    const serverResponse = yield (0, _fetchServerResponse).fetchServerResponse(url, routerTree, true);
                    // @ts-ignore startTransition exists
                    _react.default.startTransition(()=>{
                        dispatch({
                            type: _routerReducerTypes.ACTION_PREFETCH,
                            url,
                            tree: routerTree,
                            serverResponse
                        });
                    });
                } catch (err) {
                    console.error("PREFETCH ERROR", err);
                }
            }),
            replace: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation));
                });
            },
            push: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation));
                });
            },
            refresh: ()=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    dispatch({
                        type: _routerReducerTypes.ACTION_REFRESH,
                        cache: {
                            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                            data: null,
                            subTreeData: null,
                            parallelRoutes: new Map()
                        },
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            }
        };
        return routerInstance;
    }, [
        dispatch,
        initialTree
    ]);
    (0, _react).useEffect(()=>{
        // When mpaNavigation flag is set do a hard navigation to the new url.
        if (pushRef.mpaNavigation) {
            const location1 = window.location;
            if (pushRef.pendingPush) {
                location1.assign(canonicalUrl);
            } else {
                location1.replace(canonicalUrl);
            }
            return;
        }
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createHrefFromUrl).createHrefFromUrl(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    // Add `window.nd` for debugging purposes.
    // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
    if (false) {}
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react).useCallback(({ state  })=>{
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        _react.default.startTransition(()=>{
            dispatch({
                type: _routerReducerTypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react).useEffect(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const content = /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, cache.subTreeData);
    return /*#__PURE__*/ _react.default.createElement(_hooksClientContext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksClientContext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.GlobalLayoutRouterContext.Provider, {
        value: {
            changeByServerResponse,
            tree,
            focusAndScrollRef
        }
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl,
            headRenderedAboveThisLevel: false
        }
    }, HotReloader ? /*#__PURE__*/ _react.default.createElement(HotReloader, {
        assetPrefix: assetPrefix
    }, content) : content)))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 6184:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 1646:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __webpack_require__(7704);
var _staticGenerationAsyncStorage = __webpack_require__(9029);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 8105:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.clientHookInServerComponentError = clientHookInServerComponentError;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 1551:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = GlobalError;
exports.ErrorBoundary = ErrorBoundary;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
function GlobalError({ error  }) {
    return /*#__PURE__*/ _react.default.createElement("html", null, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a client-side exception has occurred (see the browser console for more information)."), (error == null ? void 0 : error.digest) && /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, `Digest: ${error.digest}`)))));
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        textAlign: "left"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "3em",
        margin: 0
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null
        };
    }
}
exports.ErrorBoundaryHandler = ErrorBoundaryHandler;
function ErrorBoundary({ errorComponent , errorStyles , children  }) {
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 9830:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInfinitePromise = createInfinitePromise;
/**
 * Used to cache in createInfinitePromise
 */ let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 8950:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = OuterLayoutRouter;
exports.InnerLayoutRouter = InnerLayoutRouter;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _reactDom = _interop_require_default(__webpack_require__(8704));
var _appRouterContext = __webpack_require__(3280);
var _fetchServerResponse = __webpack_require__(4883);
var _infinitePromise = __webpack_require__(9830);
var _errorBoundary = __webpack_require__(1551);
var _matchSegments = __webpack_require__(7587);
var _navigation = __webpack_require__(616);
var _handleSmoothScroll = __webpack_require__(1668);
var _redirect = __webpack_require__(9053);
var _findHeadInCache = __webpack_require__(9718);
function OuterLayoutRouter({ parallelRouterKey , segmentPath , childProp , error , errorStyles , templateStyles , loading , loadingStyles , hasLoading , template , notFound , notFoundStyles  }) {
    const context = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes , tree , url , headRenderedAboveThisLevel  } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodes.set(parallelRouterKey, new Map());
        childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = Array.isArray(childProp.segment) ? childProp.segment[1] : childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegment = Array.isArray(treeSegment) ? treeSegment[1] : treeSegment;
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        currentChildSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, preservedSegments.map((preservedSegment)=>{
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_appRouterContext.TemplateContext.Provider, {
            key: preservedSegment,
            value: /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: childPropSegment === preservedSegment ? childProp : null,
                segmentPath: segmentPath,
                path: preservedSegment,
                isActive: currentChildSegment === preservedSegment,
                headRenderedAboveThisLevel: headRenderedAboveThisLevel
            })))))
        }, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, templateStyles, template)));
    }));
}
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchSegments).matchSegment(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        _extends({}, treeToRecreate[1], {
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        })
                    ];
                }
                return [
                    treeToRecreate[0],
                    _extends({}, treeToRecreate[1], {
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    })
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (false) {}
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactDom.default.findDOMNode(instance);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
class ScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
        const { focusAndScrollRef  } = this.props;
        // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
        // This already caused a bug where the first child was a <link/> in head.
        const domNode = findDOMNode(this);
        if (focusAndScrollRef.apply && domNode instanceof HTMLElement) {
            // State is mutated to ensure that the focus and scroll is applied only once.
            focusAndScrollRef.apply = false;
            (0, _handleSmoothScroll).handleSmoothScroll(()=>{
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                // If the element's top edge is already in the viewport, exit early.
                if (topOfElementInViewport(domNode, viewportHeight)) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (!topOfElementInViewport(domNode, viewportHeight)) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true
            });
            // Set focus on the element
            domNode.focus();
        }
    }
    render() {
        return this.props.children;
    }
}
function InnerLayoutRouter({ parallelRouterKey , url , childNodes , childProp , segmentPath , tree , // isActive,
path , headRenderedAboveThisLevel  }) {
    const context = (0, _react).useContext(_appRouterContext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { changeByServerResponse , tree: fullTree , focusAndScrollRef  } = context;
    const head = (0, _react).useMemo(()=>{
        if (headRenderedAboveThisLevel) {
            return null;
        }
        return (0, _findHeadInCache).findHeadInCache(childNodes, tree[1]);
    }, [
        childNodes,
        tree,
        headRenderedAboveThisLevel
    ]);
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(path);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.status = _appRouterContext.CacheStates.READY;
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.subTreeData = childProp.current;
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
        } else {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNodes.set(path, {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            });
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
            // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
            childNode = childNodes.get(path);
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(path, {
            status: _appRouterContext.CacheStates.DATA_FETCH,
            data: (0, _fetchServerResponse).fetchServerResponse(new URL(url, location.origin), refetchTree),
            subTreeData: null,
            head: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        });
        // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
        childNode = childNodes.get(path);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react).use(childNode.data);
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            window.location.href = url;
            return null;
        }
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            // @ts-ignore startTransition exists
            _react.default.startTransition(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            headRenderedAboveThisLevel: true
        }
    }, head, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
        focusAndScrollRef: focusAndScrollRef
    }, subtree);
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ children , loading , loadingStyles , hasLoading  }) {
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function HandleRedirect({ redirect  }) {
    const router = (0, _navigation).useRouter();
    (0, _react).useEffect(()=>{
        router.replace(redirect, {});
    }, [
        redirect,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect).isRedirectError(error)) {
            const url = (0, _redirect).getURLFromRedirectError(error);
            return {
                redirect: url
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const redirect = this.state.redirect;
        if (redirect !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        };
    }
}
function RedirectBoundary({ children  }) {
    const router = (0, _navigation).useRouter();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: false
        };
    }
}
function NotFoundBoundary({ notFound , notFoundStyles , children  }) {
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        notFound: notFound,
        notFoundStyles: notFoundStyles
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 7587:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.matchSegment = void 0;
const matchSegment = (existingSegment, segment)=>{
    // Common case: segment is just a string
    if (typeof existingSegment === "string" && typeof segment === "string") {
        return existingSegment === segment;
    }
    // Dynamic parameter case: segment is an array with param/value. Both param and value are compared.
    if (Array.isArray(existingSegment) && Array.isArray(segment)) {
        return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
    }
    return false;
};
exports.matchSegment = matchSegment;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 616:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(8038);
var _appRouterContext = __webpack_require__(3280);
var _hooksClientContext = __webpack_require__(9274);
var _clientHookInServerComponentError = __webpack_require__(8105);
var _serverInsertedHtml = __webpack_require__(3349);
var _redirect = __webpack_require__(9053);
var _notFound = __webpack_require__(8721);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
exports.ReadonlyURLSearchParams = ReadonlyURLSearchParams;
function useSearchParams() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSearchParams");
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react).useMemo(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering  } = __webpack_require__(1646);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useRouter");
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegments");
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 8721:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.isNotFoundError = isNotFoundError;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 9053:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.isRedirectError = isRedirectError;
exports.getURLFromRedirectError = getURLFromRedirectError;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = `${REDIRECT_ERROR_CODE};${url}`;
    throw error;
}
function isRedirectError(error) {
    return typeof (error == null ? void 0 : error.digest) === "string" && error.digest.startsWith(REDIRECT_ERROR_CODE + ";") && error.digest.length > REDIRECT_ERROR_CODE.length + 1;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.slice(REDIRECT_ERROR_CODE.length + 1);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 2513:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = RenderFromTemplateContext;
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _appRouterContext = __webpack_require__(3280);
function RenderFromTemplateContext() {
    const children = (0, _react).useContext(_appRouterContext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 9748:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.applyRouterStatePatchToTree = applyRouterStatePatchToTree;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _matchSegments = __webpack_require__(7587);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [segment, parallelRoutes] = initialTree;
    if ((0, _matchSegments).matchSegment(segment, patchTree[0])) {
        const newParallelRoutes = {};
        for(const key in parallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchTree[1][key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(parallelRoutes[key], patchTree[1][key]);
            } else {
                newParallelRoutes[key] = parallelRoutes[key];
            }
        }
        for(const key1 in patchTree[1]){
            if (newParallelRoutes[key1]) {
                continue;
            }
            newParallelRoutes[key1] = patchTree[1][key1];
        }
        const tree = [
            segment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = treePatch;
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        _extends({}, parallelRoutes, {
            [parallelRouteKey]: parallelRoutePatch
        })
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 6082:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createHrefFromUrl = createHrefFromUrl;
function createHrefFromUrl(url) {
    return url.pathname + url.search + url.hash;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 84:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInitialRouterState = createInitialRouterState;
var _appRouterContext = __webpack_require__(3280);
var _createHrefFromUrl = __webpack_require__(6082);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(2800);
function createInitialRouterState({ initialTree , children , initialCanonicalUrl , initialParallelRoutes , isServer , location , initialHead  }) {
    const cache = {
        status: _appRouterContext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(cache, undefined, initialTree, initialHead);
    }
    return {
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createHrefFromUrl).createHrefFromUrl(location) : initialCanonicalUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 4401:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createOptimisticTree = createOptimisticTree;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _matchSegments = __webpack_require__(7587);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchSegments).matchSegment(existingSegment, segment);
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    if (!isLastSegment) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        _extends({}, parallelRoutes, childTree ? {
            children: childTree
        } : {})
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 8855:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createRecordFromThenable = createRecordFromThenable;
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 4883:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fetchServerResponse = fetchServerResponse;
var _async_to_generator = (__webpack_require__(4432)/* ["default"] */ .Z);
var _client = __webpack_require__(7897);
var _appRouterHeaders = __webpack_require__(6667);
var _appRouter = __webpack_require__(5958);
function fetchServerResponse(url, flightRouterState, prefetch) {
    return _fetchServerResponse.apply(this, arguments);
}
function _fetchServerResponse() {
    _fetchServerResponse = _async_to_generator(function*(url, flightRouterState, prefetch) {
        const headers = {
            // Enable flight response
            [_appRouterHeaders.RSC]: "1",
            // Provide the current router state
            [_appRouterHeaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(flightRouterState)
        };
        if (prefetch) {
            // Enable prefetch response
            headers[_appRouterHeaders.NEXT_ROUTER_PREFETCH] = "1";
        }
        try {
            const res = yield fetch(url.toString(), {
                // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
                credentials: "same-origin",
                headers
            });
            const canonicalUrl = res.redirected ? (0, _appRouter).urlToUrlWithoutFlightMarker(res.url) : undefined;
            const isFlightResponse = res.headers.get("content-type") === _appRouterHeaders.RSC_CONTENT_TYPE_HEADER;
            // If fetch returns something different than flight response handle it like a mpa navigation
            if (!isFlightResponse) {
                return [
                    res.url,
                    undefined
                ];
            }
            // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
            const flightData = yield (0, _client).createFromFetch(Promise.resolve(res));
            return [
                flightData,
                canonicalUrl
            ];
        } catch (err) {
            console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
            // If fetch fails handle it like a mpa navigation
            // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
            // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
            return [
                url.toString(),
                undefined
            ];
        }
    });
    return _fetchServerResponse.apply(this, arguments);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 540:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillCacheWithDataProperty = fillCacheWithDataProperty;
var _appRouterContext = __webpack_require__(3280);
function fillCacheWithDataProperty(newCache, existingCache, segments, fetchResponse) {
    const isLastEntry = segments.length === 1;
    const parallelRouteKey = "children";
    const [segment] = segments;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segment);
    let childCacheNode = childSegmentMap.get(segment);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segment, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, segments.slice(1), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 2674:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillCacheWithNewSubTreeData = fillCacheWithNewSubTreeData;
var _appRouterContext = __webpack_require__(3280);
var _invalidateCacheByRouterState = __webpack_require__(5756);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(2800);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidateCacheByRouterState).invalidateCacheByRouterState(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4]);
            childSegmentMap.set(segmentForCache, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 2800:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillLazyItemsTillLeafWithHead = fillLazyItemsTillLeafWithHead;
var _appRouterContext = __webpack_require__(3280);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                parallelRouteCacheNode.delete(cacheKey);
                const newCacheNode = {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 8460:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.invalidateCacheBelowFlightSegmentPath = invalidateCacheBelowFlightSegmentPath;
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(segmentForCache);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 5756:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.invalidateCacheByRouterState = invalidateCacheByRouterState;
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 2545:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isNavigatingToNewRootLayout = isNavigatingToNewRootLayout;
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 4860:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.readRecordValue = readRecordValue;
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 9718:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.findHeadInCache = findHeadInCache;
function findHeadInCache(childSegmentMap, parallelRoutes) {
    if (!childSegmentMap) {
        return undefined;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const isLastItem = Object.keys(childParallelRoutes).length === 0;
        const cacheKey = Array.isArray(segment) ? segment[1] : segment;
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        if (isLastItem && cacheNode.head) return cacheNode.head;
        const segmentMap = cacheNode.parallelRoutes.get(key);
        if (segmentMap) {
            const item = findHeadInCache(segmentMap, childParallelRoutes);
            if (item) {
                return item;
            }
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 8131:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleMutable = handleMutable;
exports.applyFlightData = applyFlightData;
exports.handleExternalUrl = handleExternalUrl;
exports.navigateReducer = navigateReducer;
var _appRouterContext = __webpack_require__(3280);
var _fetchServerResponse = __webpack_require__(4883);
var _createRecordFromThenable = __webpack_require__(8855);
var _readRecordValue = __webpack_require__(4860);
var _createHrefFromUrl = __webpack_require__(6082);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(2800);
var _fillCacheWithNewSubtreeData = __webpack_require__(2674);
var _invalidateCacheBelowFlightSegmentpath = __webpack_require__(8460);
var _fillCacheWithDataProperty = __webpack_require__(540);
var _createOptimisticTree = __webpack_require__(4401);
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _shouldHardNavigate = __webpack_require__(1206);
var _isNavigatingToNewRootLayout = __webpack_require__(2545);
function handleMutable(state, mutable) {
    return {
        // Set href.
        canonicalUrl: typeof mutable.canonicalUrl !== "undefined" ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: typeof mutable.pendingPush !== "undefined" ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: typeof mutable.mpaNavigation !== "undefined" ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: typeof mutable.applyFocusAndScroll !== "undefined" ? mutable.applyFocusAndScroll : state.focusAndScrollRef.apply
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: state.prefetchCache,
        // Apply patched router state.
        tree: typeof mutable.patchedTree !== "undefined" ? mutable.patchedTree : state.tree
    };
}
function applyFlightData(state, cache, flightDataPath) {
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = state.cache.subTreeData;
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillCacheWithNewSubtreeData).fillCacheWithNewSubTreeData(cache, state.cache, flightDataPath);
    }
    return true;
}
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.applyFocusAndScroll = false;
    return handleMutable(state, mutable);
}
function navigateReducer(state, action) {
    const { url , isExternalUrl , locationSearch , navigateType , cache , mutable , forceOptimisticNavigation  } = action;
    const { pathname , search  } = url;
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    const pendingPush = navigateType === "push";
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return handleMutable(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    const prefetchValues = state.prefetchCache.get(href);
    if (prefetchValues) {
        // The one before last item is the router state tree patch
        const { flightData , tree: newTree , canonicalUrlOverride  } = prefetchValues;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        if (newTree !== null) {
            if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
            const flightDataPath = flightData[0];
            const flightSegmentPath = flightDataPath.slice(0, -3);
            const applied = applyFlightData(state, cache, flightDataPath);
            const hardNavigate = search !== locationSearch || (0, _shouldHardNavigate).shouldHardNavigate([
                "",
                ...flightSegmentPath
            ], state.tree);
            if (hardNavigate) {
                cache.status = _appRouterContext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = state.cache.subTreeData;
                (0, _invalidateCacheBelowFlightSegmentpath).invalidateCacheBelowFlightSegmentPath(cache, state.cache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            mutable.previousTree = state.tree;
            mutable.patchedTree = newTree;
            mutable.applyFocusAndScroll = true;
            mutable.canonicalUrl = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : href;
            mutable.pendingPush = pendingPush;
            return handleMutable(state, mutable);
        }
    }
    // When doing a hard push there can be two cases: with optimistic tree and without
    // The with optimistic tree case only happens when the layouts have a loading state (loading.js)
    // The without optimistic tree case happens when there is no loading state, in that case we suspend in this reducer
    // forceOptimisticNavigation is used for links that have `prefetch={false}`.
    if (forceOptimisticNavigation) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createOptimisticTree).createOptimisticTree(segments, state.tree, false);
        // Copy subTreeData for the root node of the cache.
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = state.cache.subTreeData;
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillCacheWithDataProperty).fillCacheWithDataProperty(cache, state.cache, segments.slice(1), ()=>(0, _fetchServerResponse).fetchServerResponse(url, optimisticTree));
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.applyFocusAndScroll = true;
            mutable.cache = cache;
            mutable.canonicalUrl = href;
            return handleMutable(state, mutable);
        }
    }
    // Below is the not-optimistic case. Data is fetched at the root and suspended there without a suspense boundary.
    // If no in-flight fetch at the top, start it.
    if (!cache.data) {
        cache.data = (0, _createRecordFromThenable).createRecordFromThenable((0, _fetchServerResponse).fetchServerResponse(url, state.tree));
    }
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readRecordValue).readRecordValue(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // The one before last item is the router state tree patch
    const [treePatch] = flightDataPath.slice(-3, -2);
    // Path without the last segment, router state, and the subTreeData
    const flightSegmentPath = flightDataPath.slice(0, -4);
    // Create new tree based on the flightSegmentPath and router state patch
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return handleExternalUrl(state, mutable, href, pendingPush);
    }
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : href;
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.applyFocusAndScroll = true;
    mutable.pendingPush = pendingPush;
    const applied = applyFlightData(state, cache, flightDataPath);
    if (applied) {
        mutable.cache = cache;
    }
    return handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 7131:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prefetchReducer = prefetchReducer;
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _createHrefFromUrl = __webpack_require__(6082);
function prefetchReducer(state, action) {
    const { url , serverResponse  } = action;
    const [flightData, canonicalUrlOverride] = serverResponse;
    if (typeof flightData === "string") {
        return state;
    }
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // The one before last item is the router state tree patch
    const [treePatch] = flightDataPath.slice(-3);
    const flightSegmentPath = flightDataPath.slice(0, -3);
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    // Patch did not apply correctly
    if (newTree === null) {
        return state;
    }
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        flightData,
        // Create new tree based on the flightSegmentPath and router state patch
        tree: newTree,
        canonicalUrlOverride
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 9034:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.refreshReducer = refreshReducer;
var _fetchServerResponse = __webpack_require__(4883);
var _createRecordFromThenable = __webpack_require__(8855);
var _readRecordValue = __webpack_require__(4860);
var _createHrefFromUrl = __webpack_require__(6082);
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _isNavigatingToNewRootLayout = __webpack_require__(2545);
var _navigateReducer = __webpack_require__(8131);
function refreshReducer(state, action) {
    const { cache , mutable , origin  } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _navigateReducer).handleMutable(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createRecordFromThenable).createRecordFromThenable((0, _fetchServerResponse).fetchServerResponse(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ]));
    }
    const [flightData, canonicalUrlOverride] = (0, _readRecordValue).readRecordValue(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // FlightDataPath with more than two items means unexpected Flight data was returned
    if (flightDataPath.length !== 3) {
        // TODO-APP: handle this case better
        console.log("REFRESH FAILED");
        return state;
    }
    // Given the path can only have two items the items are only the router state and subTreeData for the root.
    const [treePatch] = flightDataPath;
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        ""
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, href, state.pushRef.pendingPush);
    }
    const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : undefined;
    if (canonicalUrlOverride) {
        mutable.canonicalUrl = canonicalUrlOverrideHref;
    }
    const applied = (0, _navigateReducer).applyFlightData(state, cache, flightDataPath);
    if (applied) {
        mutable.cache = cache;
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.canonicalUrl = href;
    return (0, _navigateReducer).handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 1838:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.restoreReducer = restoreReducer;
var _createHrefFromUrl = __webpack_require__(6082);
function restoreReducer(state, action) {
    const { url , tree  } = action;
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    return {
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 524:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.serverPatchReducer = serverPatchReducer;
var _createHrefFromUrl = __webpack_require__(6082);
var _applyRouterStatePatchToTree = __webpack_require__(9748);
var _isNavigatingToNewRootLayout = __webpack_require__(2545);
var _navigateReducer = __webpack_require__(8131);
function serverPatchReducer(state, action) {
    const { flightData , previousTree , overrideCanonicalUrl , cache , mutable  } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _navigateReducer).handleMutable(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
    const flightSegmentPath = flightDataPath.slice(0, -4);
    const [treePatch] = flightDataPath.slice(-3, -2);
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
    }
    const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createHrefFromUrl).createHrefFromUrl(overrideCanonicalUrl) : undefined;
    if (canonicalUrlOverrideHref) {
        mutable.canonicalUrl = canonicalUrlOverrideHref;
    }
    (0, _navigateReducer).applyFlightData(state, cache, flightDataPath);
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.cache = cache;
    return (0, _navigateReducer).handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 7389:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ACTION_PREFETCH = exports.ACTION_SERVER_PATCH = exports.ACTION_RESTORE = exports.ACTION_NAVIGATE = exports.ACTION_REFRESH = void 0;
const ACTION_REFRESH = "refresh";
exports.ACTION_REFRESH = ACTION_REFRESH;
const ACTION_NAVIGATE = "navigate";
exports.ACTION_NAVIGATE = ACTION_NAVIGATE;
const ACTION_RESTORE = "restore";
exports.ACTION_RESTORE = ACTION_RESTORE;
const ACTION_SERVER_PATCH = "server-patch";
exports.ACTION_SERVER_PATCH = ACTION_SERVER_PATCH;
const ACTION_PREFETCH = "prefetch";
exports.ACTION_PREFETCH = ACTION_PREFETCH;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 8331:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reducer = void 0;
var _routerReducerTypes = __webpack_require__(7389);
var _navigateReducer = __webpack_require__(8131);
var _serverPatchReducer = __webpack_require__(524);
var _restoreReducer = __webpack_require__(1838);
var _refreshReducer = __webpack_require__(9034);
var _prefetchReducer = __webpack_require__(7131);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerReducerTypes.ACTION_NAVIGATE:
            {
                return (0, _navigateReducer).navigateReducer(state, action);
            }
        case _routerReducerTypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverPatchReducer).serverPatchReducer(state, action);
            }
        case _routerReducerTypes.ACTION_RESTORE:
            {
                return (0, _restoreReducer).restoreReducer(state, action);
            }
        case _routerReducerTypes.ACTION_REFRESH:
            {
                return (0, _refreshReducer).refreshReducer(state, action);
            }
        case _routerReducerTypes.ACTION_PREFETCH:
            {
                return (0, _prefetchReducer).prefetchReducer(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
exports.reducer = reducer;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 1206:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.shouldHardNavigate = shouldHardNavigate;
var _matchSegments = __webpack_require__(7587);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 9029:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationAsyncStorage = void 0;
var _asyncLocalStorage = __webpack_require__(6184);
const staticGenerationAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.js.map


/***/ }),

/***/ 5002:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useReducerWithReduxDevtools = void 0;
var _react = __webpack_require__(8038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react).useReducer(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react).useRef();
    const enabledRef = (0, _react).useRef();
    (0, _react).useEffect(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react).useReducer(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react).useCallback(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
exports.useReducerWithReduxDevtools = useReducerWithReduxDevtools;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 3056:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 7704:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.suspense = suspense;
exports.NoSSR = NoSSR;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
var _noSsrError = __webpack_require__(1409);
function suspense() {
    const error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR({ children  }) {
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 1409:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NEXT_DYNAMIC_NO_SSR_CODE = void 0;
const NEXT_DYNAMIC_NO_SSR_CODE = "DYNAMIC_SERVER_USAGE";
exports.NEXT_DYNAMIC_NO_SSR_CODE = NEXT_DYNAMIC_NO_SSR_CODE; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 4734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (typeof process.addon === 'function') { // if the platform supports native resolving prefer that
  module.exports = process.addon.bind(process)
} else { // else use the runtime version here
  module.exports = __webpack_require__(9525)
}


/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fs = __webpack_require__(7147)
var path = __webpack_require__(1017)
var os = __webpack_require__(2037)

// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
var runtimeRequire =  true ? require : 0 // eslint-disable-line

var vars = (process.config && process.config.variables) || {}
var prebuildsOnly = !!process.env.PREBUILDS_ONLY
var abi = process.versions.modules // TODO: support old node where this is undef
var runtime = isElectron() ? 'electron' : (isNwjs() ? 'node-webkit' : 'node')

var arch = process.env.npm_config_arch || os.arch()
var platform = process.env.npm_config_platform || os.platform()
var libc = process.env.LIBC || (isAlpine(platform) ? 'musl' : 'glibc')
var armv = process.env.ARM_VERSION || (arch === 'arm64' ? '8' : vars.arm_version) || ''
var uv = (process.versions.uv || '').split('.')[0]

module.exports = load

function load (dir) {
  return runtimeRequire(load.resolve(dir))
}

load.resolve = load.path = function (dir) {
  dir = path.resolve(dir || '.')

  try {
    var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_')
    if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD']
  } catch (err) {}

  if (!prebuildsOnly) {
    var release = getFirst(path.join(dir, 'build/Release'), matchBuild)
    if (release) return release

    var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild)
    if (debug) return debug
  }

  var prebuild = resolve(dir)
  if (prebuild) return prebuild

  var nearby = resolve(path.dirname(process.execPath))
  if (nearby) return nearby

  var target = [
    'platform=' + platform,
    'arch=' + arch,
    'runtime=' + runtime,
    'abi=' + abi,
    'uv=' + uv,
    armv ? 'armv=' + armv : '',
    'libc=' + libc,
    'node=' + process.versions.node,
    process.versions.electron ? 'electron=' + process.versions.electron : '',
     true ? 'webpack=true' : 0 // eslint-disable-line
  ].filter(Boolean).join(' ')

  throw new Error('No native build was found for ' + target + '\n    loaded from: ' + dir + '\n')

  function resolve (dir) {
    // Find matching "prebuilds/<platform>-<arch>" directory
    var tuples = readdirSync(path.join(dir, 'prebuilds')).map(parseTuple)
    var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0]
    if (!tuple) return

    // Find most specific flavor first
    var prebuilds = path.join(dir, 'prebuilds', tuple.name)
    var parsed = readdirSync(prebuilds).map(parseTags)
    var candidates = parsed.filter(matchTags(runtime, abi))
    var winner = candidates.sort(compareTags(runtime))[0]
    if (winner) return path.join(prebuilds, winner.file)
  }
}

function readdirSync (dir) {
  try {
    return fs.readdirSync(dir)
  } catch (err) {
    return []
  }
}

function getFirst (dir, filter) {
  var files = readdirSync(dir).filter(filter)
  return files[0] && path.join(dir, files[0])
}

function matchBuild (name) {
  return /\.node$/.test(name)
}

function parseTuple (name) {
  // Example: darwin-x64+arm64
  var arr = name.split('-')
  if (arr.length !== 2) return

  var platform = arr[0]
  var architectures = arr[1].split('+')

  if (!platform) return
  if (!architectures.length) return
  if (!architectures.every(Boolean)) return

  return { name, platform, architectures }
}

function matchTuple (platform, arch) {
  return function (tuple) {
    if (tuple == null) return false
    if (tuple.platform !== platform) return false
    return tuple.architectures.includes(arch)
  }
}

function compareTuples (a, b) {
  // Prefer single-arch prebuilds over multi-arch
  return a.architectures.length - b.architectures.length
}

function parseTags (file) {
  var arr = file.split('.')
  var extension = arr.pop()
  var tags = { file: file, specificity: 0 }

  if (extension !== 'node') return

  for (var i = 0; i < arr.length; i++) {
    var tag = arr[i]

    if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {
      tags.runtime = tag
    } else if (tag === 'napi') {
      tags.napi = true
    } else if (tag.slice(0, 3) === 'abi') {
      tags.abi = tag.slice(3)
    } else if (tag.slice(0, 2) === 'uv') {
      tags.uv = tag.slice(2)
    } else if (tag.slice(0, 4) === 'armv') {
      tags.armv = tag.slice(4)
    } else if (tag === 'glibc' || tag === 'musl') {
      tags.libc = tag
    } else {
      continue
    }

    tags.specificity++
  }

  return tags
}

function matchTags (runtime, abi) {
  return function (tags) {
    if (tags == null) return false
    if (tags.runtime !== runtime && !runtimeAgnostic(tags)) return false
    if (tags.abi !== abi && !tags.napi) return false
    if (tags.uv && tags.uv !== uv) return false
    if (tags.armv && tags.armv !== armv) return false
    if (tags.libc && tags.libc !== libc) return false

    return true
  }
}

function runtimeAgnostic (tags) {
  return tags.runtime === 'node' && tags.napi
}

function compareTags (runtime) {
  // Precedence: non-agnostic runtime, abi over napi, then by specificity.
  return function (a, b) {
    if (a.runtime !== b.runtime) {
      return a.runtime === runtime ? -1 : 1
    } else if (a.abi !== b.abi) {
      return a.abi ? -1 : 1
    } else if (a.specificity !== b.specificity) {
      return a.specificity > b.specificity ? -1 : 1
    } else {
      return 0
    }
  }
}

function isNwjs () {
  return !!(process.versions && process.versions.nw)
}

function isElectron () {
  if (process.versions && process.versions.electron) return true
  if (process.env.ELECTRON_RUN_AS_NODE) return true
  return typeof window !== 'undefined' && window.process && window.process.type === 'renderer'
}

function isAlpine (platform) {
  return platform === 'linux' && fs.existsSync('/etc/alpine-release')
}

// Exposed for unit tests
// TODO: move to lib
load.parseTags = parseTags
load.matchTags = matchTags
load.compareTags = compareTags
load.parseTuple = parseTuple
load.matchTuple = matchTuple
load.compareTuples = compareTuples


/***/ }),

/***/ 4357:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(8038);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Rounds number to given decimal
 * eg. roundNumber(2.34343, 1) => 2.3
 */
var roundNumber = function (num, decimal) {
    return Number(num.toFixed(decimal));
};
/**
 * Checks if value is number, if not it returns default value
 * 1# eg. checkIsNumber(2, 30) => 2
 * 2# eg. checkIsNumber(null, 30) => 30
 */
var checkIsNumber = function (num, defaultValue) {
    return typeof num === "number" ? num : defaultValue;
};

var handleCallback = function (context, event, callback) {
    if (callback && typeof callback === "function") {
        callback(context, event);
    }
};

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * Functions should return denominator of the target value, which is the next animation step.
 * t is a value from 0 to 1, reflecting the percentage of animation status.
 */
var easeOut = function (t) {
    return -Math.cos(t * Math.PI) / 2 + 0.5;
};
// linear
var linear = function (t) {
    return t;
};
// accelerating from zero velocity
var easeInQuad = function (t) {
    return t * t;
};
// decelerating to zero velocity
var easeOutQuad = function (t) {
    return t * (2 - t);
};
// acceleration until halfway, then deceleration
var easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
// accelerating from zero velocity
var easeInCubic = function (t) {
    return t * t * t;
};
// decelerating to zero velocity
var easeOutCubic = function (t) {
    return --t * t * t + 1;
};
// acceleration until halfway, then deceleration
var easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
// accelerating from zero velocity
var easeInQuart = function (t) {
    return t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuart = function (t) {
    return 1 - --t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuart = function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
// accelerating from zero velocity
var easeInQuint = function (t) {
    return t * t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuint = function (t) {
    return 1 + --t * t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuint = function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};
var animations = {
    easeOut: easeOut,
    linear: linear,
    easeInQuad: easeInQuad,
    easeOutQuad: easeOutQuad,
    easeInOutQuad: easeInOutQuad,
    easeInCubic: easeInCubic,
    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint,
};

/* eslint-disable no-param-reassign */
var handleCancelAnimationFrame = function (animation) {
    if (typeof animation === "number") {
        cancelAnimationFrame(animation);
    }
};
var handleCancelAnimation = function (contextInstance) {
    if (!contextInstance.mounted)
        return;
    handleCancelAnimationFrame(contextInstance.animation);
    // Clear animation state
    contextInstance.animate = false;
    contextInstance.animation = null;
    contextInstance.velocity = null;
};
function handleSetupAnimation(contextInstance, animationName, animationTime, callback) {
    if (!contextInstance.mounted)
        return;
    var startTime = new Date().getTime();
    var lastStep = 1;
    // if another animation is active
    handleCancelAnimation(contextInstance);
    // new animation
    contextInstance.animation = function () {
        if (!contextInstance.mounted) {
            return handleCancelAnimationFrame(contextInstance.animation);
        }
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / animationTime;
        var animationType = animations[animationName];
        var step = animationType(animationProgress);
        if (frameTime >= animationTime) {
            callback(lastStep);
            contextInstance.animation = null;
        }
        else if (contextInstance.animation) {
            callback(step);
            requestAnimationFrame(contextInstance.animation);
        }
    };
    requestAnimationFrame(contextInstance.animation);
}
function isValidTargetState(targetState) {
    var scale = targetState.scale, positionX = targetState.positionX, positionY = targetState.positionY;
    if (Number.isNaN(scale) ||
        Number.isNaN(positionX) ||
        Number.isNaN(positionY)) {
        return false;
    }
    return true;
}
function animate(contextInstance, targetState, animationTime, animationName) {
    var isValid = isValidTargetState(targetState);
    if (!contextInstance.mounted || !isValid)
        return;
    var setTransformState = contextInstance.setTransformState;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    var scaleDiff = targetState.scale - scale;
    var positionXDiff = targetState.positionX - positionX;
    var positionYDiff = targetState.positionY - positionY;
    if (animationTime === 0) {
        setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
    }
    else {
        // animation start timestamp
        handleSetupAnimation(contextInstance, animationName, animationTime, function (step) {
            var newScale = scale + scaleDiff * step;
            var newPositionX = positionX + positionXDiff * step;
            var newPositionY = positionY + positionYDiff * step;
            setTransformState(newScale, newPositionX, newPositionY);
        });
    }
}

/* eslint-disable no-param-reassign */
function getComponentsSizes(wrapperComponent, contentComponent, newScale) {
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var contentWidth = contentComponent.offsetWidth;
    var contentHeight = contentComponent.offsetHeight;
    var newContentWidth = contentWidth * newScale;
    var newContentHeight = contentHeight * newScale;
    var newDiffWidth = wrapperWidth - newContentWidth;
    var newDiffHeight = wrapperHeight - newContentHeight;
    return {
        wrapperWidth: wrapperWidth,
        wrapperHeight: wrapperHeight,
        newContentWidth: newContentWidth,
        newDiffWidth: newDiffWidth,
        newContentHeight: newContentHeight,
        newDiffHeight: newDiffHeight,
    };
}
var getBounds = function (wrapperWidth, newContentWidth, diffWidth, wrapperHeight, newContentHeight, diffHeight, centerZoomedOut) {
    var scaleWidthFactor = wrapperWidth > newContentWidth
        ? diffWidth * (centerZoomedOut ? 1 : 0.5)
        : 0;
    var scaleHeightFactor = wrapperHeight > newContentHeight
        ? diffHeight * (centerZoomedOut ? 1 : 0.5)
        : 0;
    var minPositionX = wrapperWidth - newContentWidth - scaleWidthFactor;
    var maxPositionX = scaleWidthFactor;
    var minPositionY = wrapperHeight - newContentHeight - scaleHeightFactor;
    var maxPositionY = scaleHeightFactor;
    return { minPositionX: minPositionX, maxPositionX: maxPositionX, minPositionY: minPositionY, maxPositionY: maxPositionY };
};
var calculateBounds = function (contextInstance, newScale) {
    var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
    var centerZoomedOut = contextInstance.setup.centerZoomedOut;
    if (!wrapperComponent || !contentComponent) {
        throw new Error("Components are not mounted");
    }
    var _a = getComponentsSizes(wrapperComponent, contentComponent, newScale), wrapperWidth = _a.wrapperWidth, wrapperHeight = _a.wrapperHeight, newContentWidth = _a.newContentWidth, newDiffWidth = _a.newDiffWidth, newContentHeight = _a.newContentHeight, newDiffHeight = _a.newDiffHeight;
    var bounds = getBounds(wrapperWidth, newContentWidth, newDiffWidth, wrapperHeight, newContentHeight, newDiffHeight, Boolean(centerZoomedOut));
    return bounds;
};
/**
 * Keeps value between given bounds, used for limiting view to given boundaries
 * 1# eg. boundLimiter(2, 0, 3, true) => 2
 * 2# eg. boundLimiter(4, 0, 3, true) => 3
 * 3# eg. boundLimiter(-2, 0, 3, true) => 0
 * 4# eg. boundLimiter(10, 0, 3, false) => 10
 */
var boundLimiter = function (value, minBound, maxBound, isActive) {
    if (!isActive)
        return roundNumber(value, 2);
    if (value < minBound)
        return roundNumber(minBound, 2);
    if (value > maxBound)
        return roundNumber(maxBound, 2);
    return roundNumber(value, 2);
};
var handleCalculateBounds = function (contextInstance, newScale) {
    var bounds = calculateBounds(contextInstance, newScale);
    // Save bounds
    contextInstance.bounds = bounds;
    return bounds;
};
function getMouseBoundedPosition(positionX, positionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent) {
    var minPositionX = bounds.minPositionX, minPositionY = bounds.minPositionY, maxPositionX = bounds.maxPositionX, maxPositionY = bounds.maxPositionY;
    var paddingX = 0;
    var paddingY = 0;
    if (wrapperComponent) {
        paddingX = paddingValueX;
        paddingY = paddingValueY;
    }
    var x = boundLimiter(positionX, minPositionX - paddingX, maxPositionX + paddingX, limitToBounds);
    var y = boundLimiter(positionY, minPositionY - paddingY, maxPositionY + paddingY, limitToBounds);
    return { x: x, y: y };
}

function handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds) {
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    var scaleDifference = newScale - scale;
    if (typeof mouseX !== "number" || typeof mouseY !== "number") {
        console.error("Mouse X and Y position were not provided!");
        return { x: positionX, y: positionY };
    }
    var calculatedPositionX = positionX - mouseX * scaleDifference;
    var calculatedPositionY = positionY - mouseY * scaleDifference;
    // do not limit to bounds when there is padding animation,
    // it causes animation strange behaviour
    var newPositions = getMouseBoundedPosition(calculatedPositionX, calculatedPositionY, bounds, limitToBounds, 0, 0, null);
    return newPositions;
}
function checkZoomBounds(zoom, minScale, maxScale, zoomPadding, enablePadding) {
    var scalePadding = enablePadding ? zoomPadding : 0;
    var minScaleWithPadding = minScale - scalePadding;
    if (!Number.isNaN(maxScale) && zoom >= maxScale)
        return maxScale;
    if (!Number.isNaN(minScale) && zoom <= minScaleWithPadding)
        return minScaleWithPadding;
    return zoom;
}

var isPanningStartAllowed = function (contextInstance, event) {
    var excluded = contextInstance.setup.panning.excluded;
    var isInitialized = contextInstance.isInitialized, wrapperComponent = contextInstance.wrapperComponent;
    var target = event.target;
    var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
    var isAllowed = isInitialized && target && isWrapperChild;
    if (!isAllowed)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};
var isPanningAllowed = function (contextInstance) {
    var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning, setup = contextInstance.setup;
    var disabled = setup.panning.disabled;
    var isAllowed = isInitialized && isPanning && !disabled;
    if (!isAllowed)
        return false;
    return true;
};
var handlePanningSetup = function (contextInstance, event) {
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY;
    contextInstance.isPanning = true;
    // Panning with mouse
    var x = event.clientX;
    var y = event.clientY;
    contextInstance.startCoords = { x: x - positionX, y: y - positionY };
};
var handleTouchPanningSetup = function (contextInstance, event) {
    var touches = event.touches;
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY;
    contextInstance.isPanning = true;
    // Panning with touch
    var oneFingerTouch = touches.length === 1;
    if (oneFingerTouch) {
        var x = touches[0].clientX;
        var y = touches[0].clientY;
        contextInstance.startCoords = { x: x - positionX, y: y - positionY };
    }
};
function handlePanToBounds(contextInstance) {
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
    var _b = contextInstance.setup, disabled = _b.disabled, limitToBounds = _b.limitToBounds, centerZoomedOut = _b.centerZoomedOut;
    var wrapperComponent = contextInstance.wrapperComponent;
    if (disabled || !wrapperComponent || !contextInstance.bounds)
        return;
    var _c = contextInstance.bounds, maxPositionX = _c.maxPositionX, minPositionX = _c.minPositionX, maxPositionY = _c.maxPositionY, minPositionY = _c.minPositionY;
    var xChanged = positionX > maxPositionX || positionX < minPositionX;
    var yChanged = positionY > maxPositionY || positionY < minPositionY;
    var mousePosX = positionX > maxPositionX
        ? wrapperComponent.offsetWidth
        : contextInstance.setup.minPositionX || 0;
    var mousePosY = positionY > maxPositionY
        ? wrapperComponent.offsetHeight
        : contextInstance.setup.minPositionY || 0;
    var _d = handleCalculateZoomPositions(contextInstance, mousePosX, mousePosY, scale, contextInstance.bounds, limitToBounds || centerZoomedOut), x = _d.x, y = _d.y;
    return {
        scale: scale,
        positionX: xChanged ? x : positionX,
        positionY: yChanged ? y : positionY,
    };
}
function handleNewPosition(contextInstance, newPositionX, newPositionY, paddingValueX, paddingValueY) {
    var limitToBounds = contextInstance.setup.limitToBounds;
    var wrapperComponent = contextInstance.wrapperComponent, bounds = contextInstance.bounds;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (wrapperComponent === null ||
        bounds === null ||
        (newPositionX === positionX && newPositionY === positionY)) {
        return;
    }
    var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent), x = _b.x, y = _b.y;
    contextInstance.setTransformState(scale, x, y);
}
var getPanningClientPosition = function (contextInstance, clientX, clientY) {
    var startCoords = contextInstance.startCoords, transformState = contextInstance.transformState;
    var panning = contextInstance.setup.panning;
    var lockAxisX = panning.lockAxisX, lockAxisY = panning.lockAxisY;
    var positionX = transformState.positionX, positionY = transformState.positionY;
    if (!startCoords) {
        return { x: positionX, y: positionY };
    }
    var mouseX = clientX - startCoords.x;
    var mouseY = clientY - startCoords.y;
    var newPositionX = lockAxisX ? positionX : mouseX;
    var newPositionY = lockAxisY ? positionY : mouseY;
    return { x: newPositionX, y: newPositionY };
};
var getPaddingValue = function (contextInstance, size) {
    var setup = contextInstance.setup, transformState = contextInstance.transformState;
    var scale = transformState.scale;
    var minScale = setup.minScale, disablePadding = setup.disablePadding;
    if (size > 0 && scale >= minScale && !disablePadding) {
        return size;
    }
    return 0;
};

var isVelocityCalculationAllowed = function (contextInstance) {
    var mounted = contextInstance.mounted;
    var _a = contextInstance.setup, disabled = _a.disabled, velocityAnimation = _a.velocityAnimation;
    var scale = contextInstance.transformState.scale;
    var disabledVelocity = velocityAnimation.disabled;
    var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
    if (!isAllowed)
        return false;
    return true;
};
var isVelocityAllowed = function (contextInstance) {
    var mounted = contextInstance.mounted, velocity = contextInstance.velocity, bounds = contextInstance.bounds;
    var _a = contextInstance.setup, disabled = _a.disabled, velocityAnimation = _a.velocityAnimation;
    var scale = contextInstance.transformState.scale;
    var disabledVelocity = velocityAnimation.disabled;
    var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
    if (!isAllowed)
        return false;
    if (!velocity || !bounds)
        return false;
    return true;
};
function getVelocityMoveTime(contextInstance, velocity) {
    var velocityAnimation = contextInstance.setup.velocityAnimation;
    var equalToMove = velocityAnimation.equalToMove, animationTime = velocityAnimation.animationTime, sensitivity = velocityAnimation.sensitivity;
    if (equalToMove) {
        return animationTime * velocity * sensitivity;
    }
    return animationTime;
}
function getVelocityPosition(newPosition, startPosition, currentPosition, isLocked, limitToBounds, minPosition, maxPosition, minTarget, maxTarget, step) {
    if (limitToBounds) {
        if (startPosition > maxPosition && currentPosition > maxPosition) {
            var calculatedPosition = maxPosition + (newPosition - maxPosition) * step;
            if (calculatedPosition > maxTarget)
                return maxTarget;
            if (calculatedPosition < maxPosition)
                return maxPosition;
            return calculatedPosition;
        }
        if (startPosition < minPosition && currentPosition < minPosition) {
            var calculatedPosition = minPosition + (newPosition - minPosition) * step;
            if (calculatedPosition < minTarget)
                return minTarget;
            if (calculatedPosition > minPosition)
                return minPosition;
            return calculatedPosition;
        }
    }
    if (isLocked)
        return startPosition;
    return boundLimiter(newPosition, minPosition, maxPosition, limitToBounds);
}

function getSizeMultiplier(wrapperComponent, equalToMove) {
    var defaultMultiplier = 1;
    if (equalToMove) {
        return Math.min(defaultMultiplier, wrapperComponent.offsetWidth / window.innerWidth);
    }
    return defaultMultiplier;
}
function handleCalculateVelocity(contextInstance, position) {
    var isAllowed = isVelocityCalculationAllowed(contextInstance);
    if (!isAllowed) {
        return;
    }
    var lastMousePosition = contextInstance.lastMousePosition, velocityTime = contextInstance.velocityTime, setup = contextInstance.setup;
    var wrapperComponent = contextInstance.wrapperComponent;
    var equalToMove = setup.velocityAnimation.equalToMove;
    var now = Date.now();
    if (lastMousePosition && velocityTime && wrapperComponent) {
        var sizeMultiplier = getSizeMultiplier(wrapperComponent, equalToMove);
        var distanceX = position.x - lastMousePosition.x;
        var distanceY = position.y - lastMousePosition.y;
        var velocityX = distanceX / sizeMultiplier;
        var velocityY = distanceY / sizeMultiplier;
        var interval = now - velocityTime;
        var speed = distanceX * distanceX + distanceY * distanceY;
        var velocity = Math.sqrt(speed) / interval;
        contextInstance.velocity = { velocityX: velocityX, velocityY: velocityY, total: velocity };
    }
    contextInstance.lastMousePosition = position;
    contextInstance.velocityTime = now;
}
function handleVelocityPanning(contextInstance) {
    var velocity = contextInstance.velocity, bounds = contextInstance.bounds, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var isAllowed = isVelocityAllowed(contextInstance);
    if (!isAllowed || !velocity || !bounds || !wrapperComponent) {
        return;
    }
    var velocityX = velocity.velocityX, velocityY = velocity.velocityY, total = velocity.total;
    var maxPositionX = bounds.maxPositionX, minPositionX = bounds.minPositionX, maxPositionY = bounds.maxPositionY, minPositionY = bounds.minPositionY;
    var limitToBounds = setup.limitToBounds, alignmentAnimation = setup.alignmentAnimation;
    var zoomAnimation = setup.zoomAnimation, panning = setup.panning;
    var lockAxisY = panning.lockAxisY, lockAxisX = panning.lockAxisX;
    var animationType = zoomAnimation.animationType;
    var sizeX = alignmentAnimation.sizeX, sizeY = alignmentAnimation.sizeY, velocityAlignmentTime = alignmentAnimation.velocityAlignmentTime;
    var alignAnimationTime = velocityAlignmentTime;
    var moveAnimationTime = getVelocityMoveTime(contextInstance, total);
    var finalAnimationTime = Math.max(moveAnimationTime, alignAnimationTime);
    var paddingValueX = getPaddingValue(contextInstance, sizeX);
    var paddingValueY = getPaddingValue(contextInstance, sizeY);
    var paddingX = (paddingValueX * wrapperComponent.offsetWidth) / 100;
    var paddingY = (paddingValueY * wrapperComponent.offsetHeight) / 100;
    var maxTargetX = maxPositionX + paddingX;
    var minTargetX = minPositionX - paddingX;
    var maxTargetY = maxPositionY + paddingY;
    var minTargetY = minPositionY - paddingY;
    var startState = contextInstance.transformState;
    var startTime = new Date().getTime();
    handleSetupAnimation(contextInstance, animationType, finalAnimationTime, function (step) {
        var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / alignAnimationTime;
        var alignAnimation = animations[alignmentAnimation.animationType];
        var alignStep = 1 - alignAnimation(Math.min(1, animationProgress));
        var customStep = 1 - step;
        var newPositionX = positionX + velocityX * customStep;
        var newPositionY = positionY + velocityY * customStep;
        var currentPositionX = getVelocityPosition(newPositionX, startState.positionX, positionX, lockAxisX, limitToBounds, minPositionX, maxPositionX, minTargetX, maxTargetX, alignStep);
        var currentPositionY = getVelocityPosition(newPositionY, startState.positionY, positionY, lockAxisY, limitToBounds, minPositionY, maxPositionY, minTargetY, maxTargetY, alignStep);
        if (positionX !== newPositionX || positionY !== newPositionY) {
            contextInstance.setTransformState(scale, currentPositionX, currentPositionY);
        }
    });
}

function handlePanningStart(contextInstance, event) {
    var scale = contextInstance.transformState.scale;
    handleCancelAnimation(contextInstance);
    handleCalculateBounds(contextInstance, scale);
    if (window.TouchEvent !== undefined && event instanceof TouchEvent) {
        handleTouchPanningSetup(contextInstance, event);
    }
    else {
        handlePanningSetup(contextInstance, event);
    }
}
function handleAlignToBounds(contextInstance) {
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, minScale = _a.minScale, alignmentAnimation = _a.alignmentAnimation;
    var disabled = alignmentAnimation.disabled, sizeX = alignmentAnimation.sizeX, sizeY = alignmentAnimation.sizeY, animationTime = alignmentAnimation.animationTime, animationType = alignmentAnimation.animationType;
    var isDisabled = disabled || scale < minScale || (!sizeX && !sizeY);
    if (isDisabled)
        return;
    var targetState = handlePanToBounds(contextInstance);
    if (targetState) {
        animate(contextInstance, targetState, animationTime, animationType);
    }
}
function handlePanning(contextInstance, clientX, clientY) {
    var startCoords = contextInstance.startCoords, setup = contextInstance.setup;
    var _a = setup.alignmentAnimation, sizeX = _a.sizeX, sizeY = _a.sizeY;
    if (!startCoords)
        return;
    var _b = getPanningClientPosition(contextInstance, clientX, clientY), x = _b.x, y = _b.y;
    var paddingValueX = getPaddingValue(contextInstance, sizeX);
    var paddingValueY = getPaddingValue(contextInstance, sizeY);
    handleCalculateVelocity(contextInstance, { x: x, y: y });
    handleNewPosition(contextInstance, x, y, paddingValueX, paddingValueY);
}
function handlePanningEnd(contextInstance) {
    if (contextInstance.isPanning) {
        var velocityDisabled = contextInstance.setup.panning.velocityDisabled;
        var velocity = contextInstance.velocity, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        contextInstance.isPanning = false;
        contextInstance.animate = false;
        contextInstance.animation = null;
        var wrapperRect = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.getBoundingClientRect();
        var contentRect = contentComponent === null || contentComponent === void 0 ? void 0 : contentComponent.getBoundingClientRect();
        var wrapperWidth = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.width) || 0;
        var wrapperHeight = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.height) || 0;
        var contentWidth = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.width) || 0;
        var contentHeight = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.height) || 0;
        var isZoomed = wrapperWidth < contentWidth || wrapperHeight < contentHeight;
        var shouldAnimate = !velocityDisabled && velocity && (velocity === null || velocity === void 0 ? void 0 : velocity.total) > 0.1 && isZoomed;
        if (shouldAnimate) {
            handleVelocityPanning(contextInstance);
        }
        else {
            handleAlignToBounds(contextInstance);
        }
    }
}

function handleZoomToPoint(contextInstance, scale, mouseX, mouseY) {
    var _a = contextInstance.setup, minScale = _a.minScale, maxScale = _a.maxScale, limitToBounds = _a.limitToBounds;
    var newScale = checkZoomBounds(roundNumber(scale, 2), minScale, maxScale, 0, false);
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var _b = handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds), x = _b.x, y = _b.y;
    return { scale: newScale, positionX: x, positionY: y };
}
function handleAlignToScaleBounds(contextInstance, mousePositionX, mousePositionY) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent;
    var _a = contextInstance.setup, minScale = _a.minScale, limitToBounds = _a.limitToBounds, zoomAnimation = _a.zoomAnimation;
    var disabled = zoomAnimation.disabled, animationTime = zoomAnimation.animationTime, animationType = zoomAnimation.animationType;
    var isDisabled = disabled || scale >= minScale;
    if (scale >= 1 || limitToBounds) {
        // fire fit to bounds animation
        handleAlignToBounds(contextInstance);
    }
    if (isDisabled || !wrapperComponent || !contextInstance.mounted)
        return;
    var mouseX = mousePositionX || wrapperComponent.offsetWidth / 2;
    var mouseY = mousePositionY || wrapperComponent.offsetHeight / 2;
    var targetState = handleZoomToPoint(contextInstance, minScale, mouseX, mouseY);
    if (targetState) {
        animate(contextInstance, targetState, animationTime, animationType);
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var initialState = {
    previousScale: 1,
    scale: 1,
    positionX: 0,
    positionY: 0,
};
var initialSetup = {
    disabled: false,
    minPositionX: null,
    maxPositionX: null,
    minPositionY: null,
    maxPositionY: null,
    minScale: 1,
    maxScale: 8,
    limitToBounds: true,
    centerZoomedOut: false,
    centerOnInit: false,
    disablePadding: false,
    wheel: {
        step: 0.2,
        disabled: false,
        wheelDisabled: false,
        touchPadDisabled: false,
        activationKeys: [],
        excluded: [],
    },
    panning: {
        disabled: false,
        velocityDisabled: false,
        lockAxisX: false,
        lockAxisY: false,
        activationKeys: [],
        excluded: [],
    },
    pinch: {
        step: 5,
        disabled: false,
        excluded: [],
    },
    doubleClick: {
        disabled: false,
        step: 0.7,
        mode: "zoomIn",
        animationType: "easeOut",
        animationTime: 200,
        excluded: [],
    },
    zoomAnimation: {
        disabled: false,
        size: 0.4,
        animationTime: 200,
        animationType: "easeOut",
    },
    alignmentAnimation: {
        disabled: false,
        sizeX: 100,
        sizeY: 100,
        animationTime: 200,
        velocityAlignmentTime: 400,
        animationType: "easeOut",
    },
    velocityAnimation: {
        disabled: false,
        sensitivity: 1,
        animationTime: 400,
        animationType: "easeOut",
        equalToMove: true,
    },
};

var createState = function (props) {
    var _a, _b, _c, _d;
    return {
        previousScale: (_a = props.initialScale) !== null && _a !== void 0 ? _a : initialState.scale,
        scale: (_b = props.initialScale) !== null && _b !== void 0 ? _b : initialState.scale,
        positionX: (_c = props.initialPositionX) !== null && _c !== void 0 ? _c : initialState.positionX,
        positionY: (_d = props.initialPositionY) !== null && _d !== void 0 ? _d : initialState.positionY,
    };
};
var createSetup = function (props) {
    var newSetup = __assign({}, initialSetup);
    Object.keys(props).forEach(function (key) {
        var validValue = typeof props[key] !== "undefined";
        var validParameter = typeof initialSetup[key] !== "undefined";
        if (validParameter && validValue) {
            var dataType = Object.prototype.toString.call(initialSetup[key]);
            var isObject = dataType === "[object Object]";
            var isArray = dataType === "[object Array]";
            if (isObject) {
                newSetup[key] = __assign(__assign({}, initialSetup[key]), props[key]);
            }
            else if (isArray) {
                newSetup[key] = __spreadArray(__spreadArray([], initialSetup[key], true), props[key], true);
            }
            else {
                newSetup[key] = props[key];
            }
        }
    });
    return newSetup;
};

var handleCalculateButtonZoom = function (contextInstance, delta, step) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation;
    var size = zoomAnimation.size;
    if (!wrapperComponent) {
        throw new Error("Wrapper is not mounted");
    }
    var targetScale = scale * Math.exp(delta * step);
    var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, false);
    return newScale;
};
function handleZoomToViewCenter(contextInstance, delta, step, animationTime, animationType) {
    var wrapperComponent = contextInstance.wrapperComponent;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (!wrapperComponent)
        return console.error("No WrapperComponent found");
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var mouseX = (wrapperWidth / 2 - positionX) / scale;
    var mouseY = (wrapperHeight / 2 - positionY) / scale;
    var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
    var targetState = handleZoomToPoint(contextInstance, newScale, mouseX, mouseY);
    if (!targetState) {
        return console.error("Error during zoom event. New transformation state was not calculated.");
    }
    animate(contextInstance, targetState, animationTime, animationType);
}
function resetTransformations(contextInstance, animationTime, animationType, onResetTransformation) {
    var setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var limitToBounds = setup.limitToBounds;
    var initialTransformation = createState(contextInstance.props);
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (!wrapperComponent)
        return;
    var newBounds = calculateBounds(contextInstance, initialTransformation.scale);
    var boundedPositions = getMouseBoundedPosition(initialTransformation.positionX, initialTransformation.positionY, newBounds, limitToBounds, 0, 0, wrapperComponent);
    var newState = {
        scale: initialTransformation.scale,
        positionX: boundedPositions.x,
        positionY: boundedPositions.y,
    };
    if (scale === initialTransformation.scale &&
        positionX === initialTransformation.positionX &&
        positionY === initialTransformation.positionY) {
        return;
    }
    onResetTransformation === null || onResetTransformation === void 0 ? void 0 : onResetTransformation();
    animate(contextInstance, newState, animationTime, animationType);
}
function getOffset(element, wrapper, content, state) {
    var offset = element.getBoundingClientRect();
    var wrapperOffset = wrapper.getBoundingClientRect();
    var contentOffset = content.getBoundingClientRect();
    var xOff = wrapperOffset.x * state.scale;
    var yOff = wrapperOffset.y * state.scale;
    return {
        x: (offset.x - contentOffset.x + xOff) / state.scale,
        y: (offset.y - contentOffset.y + yOff) / state.scale,
    };
}
function calculateZoomToNode(contextInstance, node, customZoom) {
    var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent, transformState = contextInstance.transformState;
    var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, minScale = _a.minScale, maxScale = _a.maxScale;
    if (!wrapperComponent || !contentComponent)
        return transformState;
    var wrapperRect = wrapperComponent.getBoundingClientRect();
    var nodeRect = node.getBoundingClientRect();
    var nodeOffset = getOffset(node, wrapperComponent, contentComponent, transformState);
    var nodeLeft = nodeOffset.x;
    var nodeTop = nodeOffset.y;
    var nodeWidth = nodeRect.width / transformState.scale;
    var nodeHeight = nodeRect.height / transformState.scale;
    var scaleX = wrapperComponent.offsetWidth / nodeWidth;
    var scaleY = wrapperComponent.offsetHeight / nodeHeight;
    var newScale = checkZoomBounds(customZoom || Math.min(scaleX, scaleY), minScale, maxScale, 0, false);
    var offsetX = (wrapperRect.width - nodeWidth * newScale) / 2;
    var offsetY = (wrapperRect.height - nodeHeight * newScale) / 2;
    var newPositionX = (wrapperRect.left - nodeLeft) * newScale + offsetX;
    var newPositionY = (wrapperRect.top - nodeTop) * newScale + offsetY;
    var bounds = calculateBounds(contextInstance, newScale);
    var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, 0, 0, wrapperComponent), x = _b.x, y = _b.y;
    return { positionX: x, positionY: y, scale: newScale };
}

var zoomIn = function (contextInstance) {
    return function (step, animationTime, animationType) {
        if (step === void 0) { step = 0.5; }
        if (animationTime === void 0) { animationTime = 300; }
        if (animationType === void 0) { animationType = "easeOut"; }
        handleZoomToViewCenter(contextInstance, 1, step, animationTime, animationType);
    };
};
var zoomOut = function (contextInstance) {
    return function (step, animationTime, animationType) {
        if (step === void 0) { step = 0.5; }
        if (animationTime === void 0) { animationTime = 300; }
        if (animationType === void 0) { animationType = "easeOut"; }
        handleZoomToViewCenter(contextInstance, -1, step, animationTime, animationType);
    };
};
var setTransform = function (contextInstance) {
    return function (newPositionX, newPositionY, newScale, animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 300; }
        if (animationType === void 0) { animationType = "easeOut"; }
        var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
        var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        var disabled = contextInstance.setup.disabled;
        if (disabled || !wrapperComponent || !contentComponent)
            return;
        var targetState = {
            positionX: Number.isNaN(newPositionX) ? positionX : newPositionX,
            positionY: Number.isNaN(newPositionY) ? positionY : newPositionY,
            scale: Number.isNaN(newScale) ? scale : newScale,
        };
        animate(contextInstance, targetState, animationTime, animationType);
    };
};
var resetTransform = function (contextInstance) {
    return function (animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 200; }
        if (animationType === void 0) { animationType = "easeOut"; }
        resetTransformations(contextInstance, animationTime, animationType);
    };
};
var centerView = function (contextInstance) {
    return function (scale, animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 200; }
        if (animationType === void 0) { animationType = "easeOut"; }
        var transformState = contextInstance.transformState, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        if (wrapperComponent && contentComponent) {
            var targetState = getCenterPosition(scale || transformState.scale, wrapperComponent, contentComponent);
            animate(contextInstance, targetState, animationTime, animationType);
        }
    };
};
var zoomToElement = function (contextInstance) {
    return function (node, scale, animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 600; }
        if (animationType === void 0) { animationType = "easeOut"; }
        handleCancelAnimation(contextInstance);
        var wrapperComponent = contextInstance.wrapperComponent;
        var target = typeof node === "string" ? document.getElementById(node) : node;
        if (wrapperComponent && target && wrapperComponent.contains(target)) {
            var targetState = calculateZoomToNode(contextInstance, target, scale);
            animate(contextInstance, targetState, animationTime, animationType);
        }
    };
};

var getControls = function (contextInstance) {
    return {
        instance: contextInstance,
        zoomIn: zoomIn(contextInstance),
        zoomOut: zoomOut(contextInstance),
        setTransform: setTransform(contextInstance),
        resetTransform: resetTransform(contextInstance),
        centerView: centerView(contextInstance),
        zoomToElement: zoomToElement(contextInstance),
    };
};
var getState = function (contextInstance) {
    return {
        instance: contextInstance,
        state: contextInstance.transformState,
    };
};
var getContext = function (contextInstance) {
    var ref = {};
    Object.assign(ref, getState(contextInstance));
    Object.assign(ref, getControls(contextInstance));
    return ref;
};

// We want to make event listeners non-passive, and to do so have to check
// that browsers support EventListenerOptions in the first place.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
var passiveSupported = false;
function makePassiveEventOption() {
    try {
        var options = {
            get passive() {
                // This function will be called when the browser
                //   attempts to access the passive property.
                passiveSupported = true;
                return false;
            },
        };
        return options;
    }
    catch (err) {
        passiveSupported = false;
        return passiveSupported;
    }
}

var isExcludedNode = function (node, excluded) {
    var targetTagName = node.tagName.toUpperCase();
    var isExcludedTag = excluded.find(function (tag) { return tag.toUpperCase() === targetTagName; });
    if (isExcludedTag)
        return true;
    var isExcludedClassName = excluded.find(function (className) {
        return node.classList.contains(className);
    });
    if (isExcludedClassName)
        return true;
    return false;
};
var cancelTimeout = function (timeout) {
    if (timeout) {
        clearTimeout(timeout);
    }
};

var getTransformStyles = function (x, y, scale) {
    // Standard translate prevents blurry svg on the safari
    return "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(scale, ")");
};
var getMatrixTransformStyles = function (x, y, scale) {
    // The shorthand for matrix does not work for Safari hence the need to explicitly use matrix3d
    // Refer to https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
    var a = scale;
    var b = 0;
    var c = 0;
    var d = scale;
    var tx = x;
    var ty = y;
    return "matrix3d(".concat(a, ", ").concat(b, ", 0, 0, ").concat(c, ", ").concat(d, ", 0, 0, 0, 0, 1, 0, ").concat(tx, ", ").concat(ty, ", 0, 1)");
};
var getCenterPosition = function (scale, wrapperComponent, contentComponent) {
    var contentWidth = contentComponent.offsetWidth * scale;
    var contentHeight = contentComponent.offsetHeight * scale;
    var centerPositionX = (wrapperComponent.offsetWidth - contentWidth) / 2;
    var centerPositionY = (wrapperComponent.offsetHeight - contentHeight) / 2;
    return {
        scale: scale,
        positionX: centerPositionX,
        positionY: centerPositionY,
    };
};

function mergeRefs(refs) {
    return function (value) {
        refs.forEach(function (ref) {
            if (typeof ref === "function") {
                ref(value);
            }
            else if (ref != null) {
                ref.current = value;
            }
        });
    };
}

var isWheelAllowed = function (contextInstance, event) {
    var _a = contextInstance.setup.wheel, disabled = _a.disabled, wheelDisabled = _a.wheelDisabled, touchPadDisabled = _a.touchPadDisabled, excluded = _a.excluded;
    var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning;
    var target = event.target;
    var isAllowed = isInitialized && !isPanning && !disabled && target;
    if (!isAllowed)
        return false;
    // Event ctrlKey detects if touchpad action is executing wheel or pinch gesture
    if (wheelDisabled && !event.ctrlKey)
        return false;
    if (touchPadDisabled && event.ctrlKey)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};
var getDeltaY = function (event) {
    if (event) {
        return event.deltaY < 0 ? 1 : -1;
    }
    return 0;
};
function getDelta(event, customDelta) {
    var deltaY = getDeltaY(event);
    var delta = checkIsNumber(customDelta, deltaY);
    return delta;
}
function getMousePosition(event, contentComponent, scale) {
    var contentRect = contentComponent.getBoundingClientRect();
    var mouseX = 0;
    var mouseY = 0;
    if ("clientX" in event) {
        // mouse position x, y over wrapper component
        mouseX = (event.clientX - contentRect.left) / scale;
        mouseY = (event.clientY - contentRect.top) / scale;
    }
    else {
        var touch = event.touches[0];
        mouseX = (touch.clientX - contentRect.left) / scale;
        mouseY = (touch.clientY - contentRect.top) / scale;
    }
    if (Number.isNaN(mouseX) || Number.isNaN(mouseY))
        console.error("No mouse or touch offset found");
    return {
        x: mouseX,
        y: mouseY,
    };
}
var handleCalculateWheelZoom = function (contextInstance, delta, step, disable, getTarget) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    if (!wrapperComponent) {
        throw new Error("Wrapper is not mounted");
    }
    var targetScale = scale + delta * (scale - scale * step) * step;
    if (getTarget)
        return targetScale;
    var paddingEnabled = disable ? false : !disabled;
    var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, paddingEnabled && !disablePadding);
    return newScale;
};
var handleWheelZoomStop = function (contextInstance, event) {
    var previousWheelEvent = contextInstance.previousWheelEvent;
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, maxScale = _a.maxScale, minScale = _a.minScale;
    if (!previousWheelEvent)
        return false;
    if (scale < maxScale || scale > minScale)
        return true;
    if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY))
        return true;
    if (previousWheelEvent.deltaY > 0 && previousWheelEvent.deltaY < event.deltaY)
        return true;
    if (previousWheelEvent.deltaY < 0 && previousWheelEvent.deltaY > event.deltaY)
        return true;
    if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY))
        return true;
    return false;
};

var isPinchStartAllowed = function (contextInstance, event) {
    var _a = contextInstance.setup.pinch, disabled = _a.disabled, excluded = _a.excluded;
    var isInitialized = contextInstance.isInitialized;
    var target = event.target;
    var isAllowed = isInitialized && !disabled && target;
    if (!isAllowed)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};
var isPinchAllowed = function (contextInstance) {
    var disabled = contextInstance.setup.pinch.disabled;
    var isInitialized = contextInstance.isInitialized, pinchStartDistance = contextInstance.pinchStartDistance;
    var isAllowed = isInitialized && !disabled && pinchStartDistance;
    if (!isAllowed)
        return false;
    return true;
};
var calculateTouchMidPoint = function (event, scale, contentComponent) {
    var contentRect = contentComponent.getBoundingClientRect();
    var touches = event.touches;
    var firstPointX = roundNumber(touches[0].clientX - contentRect.left, 5);
    var firstPointY = roundNumber(touches[0].clientY - contentRect.top, 5);
    var secondPointX = roundNumber(touches[1].clientX - contentRect.left, 5);
    var secondPointY = roundNumber(touches[1].clientY - contentRect.top, 5);
    return {
        x: (firstPointX + secondPointX) / 2 / scale,
        y: (firstPointY + secondPointY) / 2 / scale,
    };
};
var getTouchDistance = function (event) {
    return Math.sqrt(Math.pow((event.touches[0].pageX - event.touches[1].pageX), 2) +
        Math.pow((event.touches[0].pageY - event.touches[1].pageY), 2));
};
var calculatePinchZoom = function (contextInstance, currentDistance) {
    var pinchStartScale = contextInstance.pinchStartScale, pinchStartDistance = contextInstance.pinchStartDistance, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    if (!pinchStartScale || pinchStartDistance === null || !currentDistance) {
        throw new Error("Pinch touches distance was not provided");
    }
    if (currentDistance < 0) {
        return contextInstance.transformState.scale;
    }
    var touchProportion = currentDistance / pinchStartDistance;
    var scaleDifference = touchProportion * pinchStartScale;
    return checkZoomBounds(roundNumber(scaleDifference, 2), minScale, maxScale, size, !disabled && !disablePadding);
};

var wheelStopEventTime = 160;
var wheelAnimationTime = 100;
var handleWheelStart = function (contextInstance, event) {
    var _a = contextInstance.props, onWheelStart = _a.onWheelStart, onZoomStart = _a.onZoomStart;
    if (!contextInstance.wheelStopEventTimer) {
        handleCancelAnimation(contextInstance);
        handleCallback(getContext(contextInstance), event, onWheelStart);
        handleCallback(getContext(contextInstance), event, onZoomStart);
    }
};
var handleWheelZoom = function (contextInstance, event) {
    var _a = contextInstance.props, onWheel = _a.onWheel, onZoom = _a.onZoom;
    var contentComponent = contextInstance.contentComponent, setup = contextInstance.setup, transformState = contextInstance.transformState;
    var scale = transformState.scale;
    var limitToBounds = setup.limitToBounds, centerZoomedOut = setup.centerZoomedOut, zoomAnimation = setup.zoomAnimation, wheel = setup.wheel, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    var step = wheel.step;
    if (!contentComponent) {
        throw new Error("Component not mounted");
    }
    event.preventDefault();
    event.stopPropagation();
    var delta = getDelta(event, null);
    var newScale = handleCalculateWheelZoom(contextInstance, delta, step, !event.ctrlKey);
    // if scale not change
    if (scale === newScale)
        return;
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var mousePosition = getMousePosition(event, contentComponent, scale);
    var isPaddingDisabled = disabled || size === 0 || centerZoomedOut || disablePadding;
    var isLimitedToBounds = limitToBounds && isPaddingDisabled;
    var _b = handleCalculateZoomPositions(contextInstance, mousePosition.x, mousePosition.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
    contextInstance.previousWheelEvent = event;
    contextInstance.setTransformState(newScale, x, y);
    handleCallback(getContext(contextInstance), event, onWheel);
    handleCallback(getContext(contextInstance), event, onZoom);
};
var handleWheelStop = function (contextInstance, event) {
    var _a = contextInstance.props, onWheelStop = _a.onWheelStop, onZoomStop = _a.onZoomStop;
    // fire animation
    cancelTimeout(contextInstance.wheelAnimationTimer);
    contextInstance.wheelAnimationTimer = setTimeout(function () {
        if (!contextInstance.mounted)
            return;
        handleAlignToScaleBounds(contextInstance, event.x, event.y);
        contextInstance.wheelAnimationTimer = null;
    }, wheelAnimationTime);
    // Wheel stop event
    var hasStoppedZooming = handleWheelZoomStop(contextInstance, event);
    if (hasStoppedZooming) {
        cancelTimeout(contextInstance.wheelStopEventTimer);
        contextInstance.wheelStopEventTimer = setTimeout(function () {
            if (!contextInstance.mounted)
                return;
            contextInstance.wheelStopEventTimer = null;
            handleCallback(getContext(contextInstance), event, onWheelStop);
            handleCallback(getContext(contextInstance), event, onZoomStop);
        }, wheelStopEventTime);
    }
};

var handlePinchStart = function (contextInstance, event) {
    var distance = getTouchDistance(event);
    contextInstance.pinchStartDistance = distance;
    contextInstance.lastDistance = distance;
    contextInstance.pinchStartScale = contextInstance.transformState.scale;
    contextInstance.isPanning = false;
    handleCancelAnimation(contextInstance);
};
var handlePinchZoom = function (contextInstance, event) {
    var contentComponent = contextInstance.contentComponent, pinchStartDistance = contextInstance.pinchStartDistance;
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, centerZoomedOut = _a.centerZoomedOut, zoomAnimation = _a.zoomAnimation;
    var disabled = zoomAnimation.disabled, size = zoomAnimation.size;
    // if one finger starts from outside of wrapper
    if (pinchStartDistance === null || !contentComponent)
        return;
    var midPoint = calculateTouchMidPoint(event, scale, contentComponent);
    // if touches goes off of the wrapper element
    if (!Number.isFinite(midPoint.x) || !Number.isFinite(midPoint.y))
        return;
    var currentDistance = getTouchDistance(event);
    var newScale = calculatePinchZoom(contextInstance, currentDistance);
    if (newScale === scale)
        return;
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var isPaddingDisabled = disabled || size === 0 || centerZoomedOut;
    var isLimitedToBounds = limitToBounds && isPaddingDisabled;
    var _b = handleCalculateZoomPositions(contextInstance, midPoint.x, midPoint.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
    contextInstance.pinchMidpoint = midPoint;
    contextInstance.lastDistance = currentDistance;
    contextInstance.setTransformState(newScale, x, y);
};
var handlePinchStop = function (contextInstance) {
    var pinchMidpoint = contextInstance.pinchMidpoint;
    contextInstance.velocity = null;
    contextInstance.lastDistance = null;
    contextInstance.pinchMidpoint = null;
    contextInstance.pinchStartScale = null;
    contextInstance.pinchStartDistance = null;
    handleAlignToScaleBounds(contextInstance, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.x, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.y);
};

var handleDoubleClickStop = function (contextInstance, event) {
    var onZoomStop = contextInstance.props.onZoomStop;
    var animationTime = contextInstance.setup.doubleClick.animationTime;
    cancelTimeout(contextInstance.doubleClickStopEventTimer);
    contextInstance.doubleClickStopEventTimer = setTimeout(function () {
        contextInstance.doubleClickStopEventTimer = null;
        handleCallback(getContext(contextInstance), event, onZoomStop);
    }, animationTime);
};
var handleDoubleClickResetMode = function (contextInstance, event) {
    var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
    var _b = contextInstance.setup.doubleClick, animationTime = _b.animationTime, animationType = _b.animationType;
    handleCallback(getContext(contextInstance), event, onZoomStart);
    resetTransformations(contextInstance, animationTime, animationType, function () {
        return handleCallback(getContext(contextInstance), event, onZoom);
    });
    handleDoubleClickStop(contextInstance, event);
};
function handleDoubleClick(contextInstance, event) {
    var setup = contextInstance.setup, doubleClickStopEventTimer = contextInstance.doubleClickStopEventTimer, transformState = contextInstance.transformState, contentComponent = contextInstance.contentComponent;
    var scale = transformState.scale;
    var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
    var _b = setup.doubleClick, disabled = _b.disabled, mode = _b.mode, step = _b.step, animationTime = _b.animationTime, animationType = _b.animationType;
    if (disabled)
        return;
    if (doubleClickStopEventTimer)
        return;
    if (mode === "reset") {
        return handleDoubleClickResetMode(contextInstance, event);
    }
    if (!contentComponent)
        return console.error("No ContentComponent found");
    var delta = mode === "zoomOut" ? -1 : 1;
    var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
    // stop execution when scale didn't change
    if (scale === newScale)
        return;
    handleCallback(getContext(contextInstance), event, onZoomStart);
    var mousePosition = getMousePosition(event, contentComponent, scale);
    var targetState = handleZoomToPoint(contextInstance, newScale, mousePosition.x, mousePosition.y);
    if (!targetState) {
        return console.error("Error during zoom event. New transformation state was not calculated.");
    }
    handleCallback(getContext(contextInstance), event, onZoom);
    animate(contextInstance, targetState, animationTime, animationType);
    handleDoubleClickStop(contextInstance, event);
}
var isDoubleClickAllowed = function (contextInstance, event) {
    var isInitialized = contextInstance.isInitialized, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var _a = setup.doubleClick, disabled = _a.disabled, excluded = _a.excluded;
    var target = event.target;
    var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
    var isAllowed = isInitialized && target && isWrapperChild && !disabled;
    if (!isAllowed)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};

var ZoomPanPinch = /** @class */ (function () {
    function ZoomPanPinch(props) {
        var _this = this;
        this.mounted = true;
        this.onChangeCallbacks = new Set();
        this.onInitCallbacks = new Set();
        // Components
        this.wrapperComponent = null;
        this.contentComponent = null;
        // Initialization
        this.isInitialized = false;
        this.bounds = null;
        // wheel helpers
        this.previousWheelEvent = null;
        this.wheelStopEventTimer = null;
        this.wheelAnimationTimer = null;
        // panning helpers
        this.isPanning = false;
        this.startCoords = null;
        this.lastTouch = null;
        // pinch helpers
        this.distance = null;
        this.lastDistance = null;
        this.pinchStartDistance = null;
        this.pinchStartScale = null;
        this.pinchMidpoint = null;
        // double click helpers
        this.doubleClickStopEventTimer = null;
        // velocity helpers
        this.velocity = null;
        this.velocityTime = null;
        this.lastMousePosition = null;
        // animations helpers
        this.animate = false;
        this.animation = null;
        this.maxBounds = null;
        // key press
        this.pressedKeys = {};
        this.mount = function () {
            _this.initializeWindowEvents();
        };
        this.unmount = function () {
            _this.cleanupWindowEvents();
        };
        this.update = function (newProps) {
            handleCalculateBounds(_this, _this.transformState.scale);
            _this.setup = createSetup(newProps);
        };
        this.initializeWindowEvents = function () {
            var _a;
            var passive = makePassiveEventOption();
            var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
            var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
            // Panning on window to allow panning when mouse is out of component wrapper
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mousedown", _this.onPanningStart, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mousemove", _this.onPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mouseup", _this.onPanningStop, passive);
            currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.addEventListener("mouseleave", _this.clearPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("keyup", _this.setKeyUnPressed, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("keydown", _this.setKeyPressed, passive);
        };
        this.cleanupWindowEvents = function () {
            var _a, _b;
            var passive = makePassiveEventOption();
            var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
            var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mousedown", _this.onPanningStart, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mousemove", _this.onPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mouseup", _this.onPanningStop, passive);
            currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.removeEventListener("mouseleave", _this.clearPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("keyup", _this.setKeyUnPressed, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("keydown", _this.setKeyPressed, passive);
            document.removeEventListener("mouseleave", _this.clearPanning, passive);
            handleCancelAnimation(_this);
            (_b = _this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
        };
        this.handleInitializeWrapperEvents = function (wrapper) {
            // Zooming events on wrapper
            var passive = makePassiveEventOption();
            wrapper.addEventListener("wheel", _this.onWheelZoom, passive);
            wrapper.addEventListener("dblclick", _this.onDoubleClick, passive);
            wrapper.addEventListener("touchstart", _this.onTouchPanningStart, passive);
            wrapper.addEventListener("touchmove", _this.onTouchPanning, passive);
            wrapper.addEventListener("touchend", _this.onTouchPanningStop, passive);
        };
        this.handleInitialize = function (contentComponent) {
            var centerOnInit = _this.setup.centerOnInit;
            _this.applyTransformation();
            _this.onInitCallbacks.forEach(function (callback) { return callback(getContext(_this)); });
            if (centerOnInit) {
                _this.setCenter();
                _this.observer = new ResizeObserver(function () {
                    var _a;
                    _this.onInitCallbacks.forEach(function (callback) { return callback(getContext(_this)); });
                    _this.setCenter();
                    (_a = _this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
                });
                // Start observing the target node for configured mutations
                _this.observer.observe(contentComponent);
            }
        };
        /// ///////
        // Zoom
        /// ///////
        this.onWheelZoom = function (event) {
            var disabled = _this.setup.disabled;
            if (disabled)
                return;
            var isAllowed = isWheelAllowed(_this, event);
            if (!isAllowed)
                return;
            var keysPressed = _this.isPressingKeys(_this.setup.wheel.activationKeys);
            if (!keysPressed)
                return;
            handleWheelStart(_this, event);
            handleWheelZoom(_this, event);
            handleWheelStop(_this, event);
        };
        /// ///////
        // Pan
        /// ///////
        this.onPanningStart = function (event) {
            var disabled = _this.setup.disabled;
            var onPanningStart = _this.props.onPanningStart;
            if (disabled)
                return;
            var isAllowed = isPanningStartAllowed(_this, event);
            if (!isAllowed)
                return;
            var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
            if (!keysPressed)
                return;
            event.preventDefault();
            event.stopPropagation();
            handleCancelAnimation(_this);
            handlePanningStart(_this, event);
            handleCallback(getContext(_this), event, onPanningStart);
        };
        this.onPanning = function (event) {
            var disabled = _this.setup.disabled;
            var onPanning = _this.props.onPanning;
            if (disabled)
                return;
            var isAllowed = isPanningAllowed(_this);
            if (!isAllowed)
                return;
            var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
            if (!keysPressed)
                return;
            event.preventDefault();
            event.stopPropagation();
            handlePanning(_this, event.clientX, event.clientY);
            handleCallback(getContext(_this), event, onPanning);
        };
        this.onPanningStop = function (event) {
            var onPanningStop = _this.props.onPanningStop;
            if (_this.isPanning) {
                handlePanningEnd(_this);
                handleCallback(getContext(_this), event, onPanningStop);
            }
        };
        /// ///////
        // Pinch
        /// ///////
        this.onPinchStart = function (event) {
            var disabled = _this.setup.disabled;
            var _a = _this.props, onPinchingStart = _a.onPinchingStart, onZoomStart = _a.onZoomStart;
            if (disabled)
                return;
            var isAllowed = isPinchStartAllowed(_this, event);
            if (!isAllowed)
                return;
            handlePinchStart(_this, event);
            handleCancelAnimation(_this);
            handleCallback(getContext(_this), event, onPinchingStart);
            handleCallback(getContext(_this), event, onZoomStart);
        };
        this.onPinch = function (event) {
            var disabled = _this.setup.disabled;
            var _a = _this.props, onPinching = _a.onPinching, onZoom = _a.onZoom;
            if (disabled)
                return;
            var isAllowed = isPinchAllowed(_this);
            if (!isAllowed)
                return;
            event.preventDefault();
            event.stopPropagation();
            handlePinchZoom(_this, event);
            handleCallback(getContext(_this), event, onPinching);
            handleCallback(getContext(_this), event, onZoom);
        };
        this.onPinchStop = function (event) {
            var _a = _this.props, onPinchingStop = _a.onPinchingStop, onZoomStop = _a.onZoomStop;
            if (_this.pinchStartScale) {
                handlePinchStop(_this);
                handleCallback(getContext(_this), event, onPinchingStop);
                handleCallback(getContext(_this), event, onZoomStop);
            }
        };
        /// ///////
        // Touch
        /// ///////
        this.onTouchPanningStart = function (event) {
            var disabled = _this.setup.disabled;
            var onPanningStart = _this.props.onPanningStart;
            if (disabled)
                return;
            var isAllowed = isPanningStartAllowed(_this, event);
            if (!isAllowed)
                return;
            var isDoubleTap = _this.lastTouch && +new Date() - _this.lastTouch < 200;
            if (isDoubleTap && event.touches.length === 1) {
                _this.onDoubleClick(event);
            }
            else {
                _this.lastTouch = +new Date();
                handleCancelAnimation(_this);
                var touches = event.touches;
                var isPanningAction = touches.length === 1;
                var isPinchAction = touches.length === 2;
                if (isPanningAction) {
                    handleCancelAnimation(_this);
                    handlePanningStart(_this, event);
                    handleCallback(getContext(_this), event, onPanningStart);
                }
                if (isPinchAction) {
                    _this.onPinchStart(event);
                }
            }
        };
        this.onTouchPanning = function (event) {
            var disabled = _this.setup.disabled;
            var onPanning = _this.props.onPanning;
            if (_this.isPanning && event.touches.length === 1) {
                if (disabled)
                    return;
                var isAllowed = isPanningAllowed(_this);
                if (!isAllowed)
                    return;
                event.preventDefault();
                event.stopPropagation();
                var touch = event.touches[0];
                handlePanning(_this, touch.clientX, touch.clientY);
                handleCallback(getContext(_this), event, onPanning);
            }
            else if (event.touches.length > 1) {
                _this.onPinch(event);
            }
        };
        this.onTouchPanningStop = function (event) {
            _this.onPanningStop(event);
            _this.onPinchStop(event);
        };
        /// ///////
        // Double Click
        /// ///////
        this.onDoubleClick = function (event) {
            var disabled = _this.setup.disabled;
            if (disabled)
                return;
            var isAllowed = isDoubleClickAllowed(_this, event);
            if (!isAllowed)
                return;
            handleDoubleClick(_this, event);
        };
        /// ///////
        // Helpers
        /// ///////
        this.clearPanning = function (event) {
            if (_this.isPanning) {
                _this.onPanningStop(event);
            }
        };
        this.setKeyPressed = function (e) {
            _this.pressedKeys[e.key] = true;
        };
        this.setKeyUnPressed = function (e) {
            _this.pressedKeys[e.key] = false;
        };
        this.isPressingKeys = function (keys) {
            if (!keys.length) {
                return true;
            }
            return Boolean(keys.find(function (key) { return _this.pressedKeys[key]; }));
        };
        this.setTransformState = function (scale, positionX, positionY) {
            var onTransformed = _this.props.onTransformed;
            if (!Number.isNaN(scale) &&
                !Number.isNaN(positionX) &&
                !Number.isNaN(positionY)) {
                if (scale !== _this.transformState.scale) {
                    _this.transformState.previousScale = _this.transformState.scale;
                    _this.transformState.scale = scale;
                }
                _this.transformState.positionX = positionX;
                _this.transformState.positionY = positionY;
                _this.applyTransformation();
                var ctx_1 = getContext(_this);
                _this.onChangeCallbacks.forEach(function (callback) { return callback(ctx_1); });
                handleCallback(ctx_1, { scale: scale, positionX: positionX, positionY: positionY }, onTransformed);
            }
            else {
                console.error("Detected NaN set state values");
            }
        };
        this.setCenter = function () {
            if (_this.wrapperComponent && _this.contentComponent) {
                var targetState = getCenterPosition(_this.transformState.scale, _this.wrapperComponent, _this.contentComponent);
                _this.setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
            }
        };
        this.handleTransformStyles = function (x, y, scale) {
            if (_this.props.customTransform) {
                return _this.props.customTransform(x, y, scale);
            }
            return getTransformStyles(x, y, scale);
        };
        this.applyTransformation = function () {
            if (!_this.mounted || !_this.contentComponent)
                return;
            var _a = _this.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
            var transform = _this.handleTransformStyles(positionX, positionY, scale);
            _this.contentComponent.style.transform = transform;
        };
        this.getContext = function () {
            return getContext(_this);
        };
        /**
         * Hooks
         */
        this.onChange = function (callback) {
            if (!_this.onChangeCallbacks.has(callback)) {
                _this.onChangeCallbacks.add(callback);
            }
            return function () {
                _this.onChangeCallbacks.delete(callback);
            };
        };
        this.onInit = function (callback) {
            if (!_this.onInitCallbacks.has(callback)) {
                _this.onInitCallbacks.add(callback);
            }
            return function () {
                _this.onInitCallbacks.delete(callback);
            };
        };
        /**
         * Initialization
         */
        this.init = function (wrapperComponent, contentComponent) {
            _this.cleanupWindowEvents();
            _this.wrapperComponent = wrapperComponent;
            _this.contentComponent = contentComponent;
            handleCalculateBounds(_this, _this.transformState.scale);
            _this.handleInitializeWrapperEvents(wrapperComponent);
            _this.handleInitialize(contentComponent);
            _this.initializeWindowEvents();
            _this.isInitialized = true;
            var ctx = getContext(_this);
            handleCallback(ctx, undefined, _this.props.onInit);
        };
        this.props = props;
        this.setup = createSetup(this.props);
        this.transformState = createState(this.props);
    }
    return ZoomPanPinch;
}());

var Context = React__default["default"].createContext(null);
var getContent = function (children, ctx) {
    if (typeof children === "function") {
        return children(ctx);
    }
    return children;
};
var TransformWrapper = React__default["default"].forwardRef(function (props, ref) {
    var instance = React.useRef(new ZoomPanPinch(props)).current;
    var content = getContent(props.children, getControls(instance));
    React.useImperativeHandle(ref, function () { return getControls(instance); }, [instance]);
    React.useEffect(function () {
        instance.update(props);
    }, [instance, props]);
    return React__default["default"].createElement(Context.Provider, { value: instance }, content);
});

var KeepScale = React__default["default"].forwardRef(function (props, ref) {
    var localRef = React.useRef(null);
    var instance = React.useContext(Context);
    React.useEffect(function () {
        return instance.onChange(function (ctx) {
            if (localRef.current) {
                var positionX = 0;
                var positionY = 0;
                localRef.current.style.transform = instance.handleTransformStyles(positionX, positionY, 1 / ctx.instance.transformState.scale);
            }
        });
    }, [instance]);
    return React__default["default"].createElement("div", __assign({}, props, { ref: mergeRefs([localRef, ref]) }));
});

var initialElementRect = {
    width: 0,
    height: 0,
    y: 0,
    x: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
};
var useResize = function (ref, onResize, dependencies) {
    var resizeObserverRef = React.useRef();
    var rectRef = React.useRef(initialElementRect);
    var didUnmount = React.useRef(false);
    React.useLayoutEffect(function () {
        var _a;
        didUnmount.current = false;
        if (ref) {
            resizeObserverRef.current = new ResizeObserver(function (entries) {
                var newSize = ref.getBoundingClientRect();
                if (!Array.isArray(entries) ||
                    !entries.length ||
                    didUnmount.current ||
                    (newSize.width === rectRef.current.width &&
                        newSize.height === rectRef.current.height))
                    return;
                onResize(newSize, ref);
                rectRef.current = newSize;
            });
            (_a = resizeObserverRef.current) === null || _a === void 0 ? void 0 : _a.observe(ref);
        }
        return function () {
            var _a;
            didUnmount.current = true;
            if (ref) {
                (_a = resizeObserverRef.current) === null || _a === void 0 ? void 0 : _a.unobserve(ref);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, __spreadArray([onResize, ref], dependencies, true));
};

var previewStyles = {
    position: "absolute",
    zIndex: 2,
    top: "0px",
    left: "0px",
    boxSizing: "border-box",
    border: "3px solid red",
    transformOrigin: "0% 0%",
    boxShadow: "rgba(0,0,0,0.2) 0 0 0 10000000px",
};
var MiniMap = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 200 : _b, _c = _a.height, height = _c === void 0 ? 200 : _c, children = _a.children, rest = __rest(_a, ["width", "height", "children"]);
    var _d = React.useState(false), initialized = _d[0], setInitialized = _d[1];
    var instance = useTransformContext();
    var miniMapInstance = React.useRef(null);
    var mainRef = React.useRef(null);
    var wrapperRef = React.useRef(null);
    var previewRef = React.useRef(null);
    var getContentSize = React.useCallback(function () {
        if (instance.contentComponent) {
            var rect = instance.contentComponent.getBoundingClientRect();
            return {
                width: rect.width / instance.transformState.scale,
                height: rect.height / instance.transformState.scale,
            };
        }
        return {
            width: 0,
            height: 0,
        };
    }, [instance.contentComponent, instance.transformState.scale]);
    var computeMiniMapScale = React.useCallback(function () {
        var contentSize = getContentSize();
        var scaleX = width / contentSize.width;
        var scaleY = height / contentSize.height;
        var scale = scaleY > scaleX ? scaleX : scaleY;
        return scale;
    }, [getContentSize, height, width]);
    var computeMiniMapSize = function () {
        var contentSize = getContentSize();
        var scaleX = width / contentSize.width;
        var scaleY = height / contentSize.height;
        if (scaleY > scaleX) {
            return { width: width, height: contentSize.height * scaleX };
        }
        return { width: contentSize.width * scaleY, height: height };
    };
    var computeMiniMapStyle = function () {
        var scale = computeMiniMapScale();
        var style = {
            transform: "scale(".concat(scale || 1, ")"),
            transformOrigin: "0% 0%",
            position: "absolute",
            boxSizing: "border-box",
            zIndex: 1,
            overflow: "hidden",
        };
        Object.keys(style).forEach(function (key) {
            if (wrapperRef.current) {
                wrapperRef.current.style[key] = style[key];
            }
        });
    };
    var transformMiniMap = function () {
        computeMiniMapStyle();
        var miniSize = computeMiniMapSize();
        var wrapSize = getContentSize();
        if (wrapperRef.current) {
            wrapperRef.current.style.width = "".concat(wrapSize.width, "px");
            wrapperRef.current.style.height = "".concat(wrapSize.height, "px");
        }
        if (mainRef.current) {
            mainRef.current.style.width = "".concat(miniSize.width, "px");
            mainRef.current.style.height = "".concat(miniSize.height, "px");
        }
        if (previewRef.current) {
            var size = getContentSize();
            var scale = computeMiniMapScale();
            var previewScale = scale * (1 / instance.transformState.scale);
            var transform = instance.handleTransformStyles(-instance.transformState.positionX * previewScale, -instance.transformState.positionY * previewScale, 1);
            previewRef.current.style.transform = transform;
            previewRef.current.style.width = "".concat(size.width * previewScale, "px");
            previewRef.current.style.height = "".concat(size.height * previewScale, "px");
        }
    };
    var initialize = function () {
        transformMiniMap();
    };
    useTransformEffect(function () {
        transformMiniMap();
    });
    useTransformInit(function () {
        initialize();
        setInitialized(true);
    });
    useResize(instance.contentComponent, initialize, [initialized]);
    React.useEffect(function () {
        return instance.onChange(function (zpp) {
            var scale = computeMiniMapScale();
            if (miniMapInstance.current) {
                miniMapInstance.current.instance.transformState.scale =
                    zpp.instance.transformState.scale;
                miniMapInstance.current.instance.transformState.positionX =
                    zpp.instance.transformState.positionX * scale;
                miniMapInstance.current.instance.transformState.positionY =
                    zpp.instance.transformState.positionY * scale;
            }
        });
    }, [computeMiniMapScale, instance, miniMapInstance]);
    var wrapperStyle = React.useMemo(function () {
        return {
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
        };
    }, []);
    return (React__default["default"].createElement("div", __assign({}, rest, { ref: mainRef, style: wrapperStyle, className: "rzpp-mini-map ".concat(rest.className || "") }),
        React__default["default"].createElement("div", __assign({}, rest, { ref: wrapperRef, className: "rzpp-wrapper" }), children),
        React__default["default"].createElement("div", { className: "rzpp-preview", ref: previewRef, style: previewStyles })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n";
var styles = {"wrapper":"transform-component-module_wrapper__SPB86","content":"transform-component-module_content__FBWxo"};
styleInject(css_248z);

var TransformComponent = function (_a) {
    var children = _a.children, _b = _a.wrapperClass, wrapperClass = _b === void 0 ? "" : _b, _c = _a.contentClass, contentClass = _c === void 0 ? "" : _c, wrapperStyle = _a.wrapperStyle, contentStyle = _a.contentStyle, _d = _a.wrapperProps, wrapperProps = _d === void 0 ? {} : _d, _e = _a.contentProps, contentProps = _e === void 0 ? {} : _e;
    var init = React.useContext(Context).init;
    var wrapperRef = React.useRef(null);
    var contentRef = React.useRef(null);
    React.useEffect(function () {
        var wrapper = wrapperRef.current;
        var content = contentRef.current;
        if (wrapper !== null && content !== null && init) {
            init(wrapper, content);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React__default["default"].createElement("div", __assign({}, wrapperProps, { ref: wrapperRef, className: "react-transform-wrapper ".concat(styles.wrapper, " ").concat(wrapperClass), style: wrapperStyle }),
        React__default["default"].createElement("div", __assign({}, contentProps, { ref: contentRef, className: "react-transform-component ".concat(styles.content, " ").concat(contentClass), style: contentStyle }), children)));
};

var useTransformContext = function () {
    var libraryContext = React.useContext(Context);
    if (!libraryContext) {
        throw new Error("Transform context must be placed inside TransformWrapper");
    }
    return libraryContext;
};

var useControls = function () {
    var libraryContext = useTransformContext();
    return getControls(libraryContext);
};

var useTransformInit = function (callback) {
    var libraryContext = useTransformContext();
    React.useEffect(function () {
        var unmountCallback;
        var unmount;
        if (libraryContext.contentComponent && libraryContext.wrapperComponent) {
            unmountCallback = callback(getState(libraryContext));
        }
        else {
            unmount = libraryContext.onInit(function (ref) {
                unmountCallback = callback(getState(ref.instance));
            });
        }
        return function () {
            unmount === null || unmount === void 0 ? void 0 : unmount();
            unmountCallback === null || unmountCallback === void 0 ? void 0 : unmountCallback();
        };
    }, []);
};

var useTransformEffect = function (callback) {
    var libraryContext = useTransformContext();
    React.useEffect(function () {
        var unmountCallback;
        var unmount = libraryContext.onChange(function (ref) {
            unmountCallback = callback(getState(ref.instance));
        });
        return function () {
            unmount();
            unmountCallback === null || unmountCallback === void 0 ? void 0 : unmountCallback();
        };
    }, [callback, libraryContext]);
};

__webpack_unused_export__ = Context;
__webpack_unused_export__ = KeepScale;
__webpack_unused_export__ = MiniMap;
exports.Uv = TransformComponent;
exports.d$ = TransformWrapper;
__webpack_unused_export__ = getCenterPosition;
__webpack_unused_export__ = getMatrixTransformStyles;
__webpack_unused_export__ = getTransformStyles;
__webpack_unused_export__ = useControls;
__webpack_unused_export__ = useTransformContext;
__webpack_unused_export__ = useTransformEffect;
__webpack_unused_export__ = useTransformInit;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ 2195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(2037);
const tty = __webpack_require__(6224);
const hasFlag = __webpack_require__(635);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 2032:
/***/ ((module) => {

"use strict";


/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */
function isValidUTF8(buf) {
  const len = buf.length;
  let i = 0;

  while (i < len) {
    if ((buf[i] & 0x80) === 0x00) {  // 0xxxxxxx
      i++;
    } else if ((buf[i] & 0xe0) === 0xc0) {  // 110xxxxx 10xxxxxx
      if (
        i + 1 === len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i] & 0xfe) === 0xc0  // overlong
      ) {
        return false;
      }

      i += 2;
    } else if ((buf[i] & 0xf0) === 0xe0) {  // 1110xxxx 10xxxxxx 10xxxxxx
      if (
        i + 2 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 ||  // overlong
        buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0  // surrogate (U+D800 - U+DFFF)
      ) {
        return false;
      }

      i += 3;
    } else if ((buf[i] & 0xf8) === 0xf0) {  // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      if (
        i + 3 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i + 3] & 0xc0) !== 0x80 ||
        buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 ||  // overlong
        buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4  // > U+10FFFF
      ) {
        return false;
      }

      i += 4;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isValidUTF8;


/***/ }),

/***/ 7505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


try {
  module.exports = __webpack_require__(4734)(__dirname);
} catch (e) {
  module.exports = __webpack_require__(2032);
}


/***/ }),

/***/ 7734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { EMPTY_BUFFER } = __webpack_require__(5540);

/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */
function concat(list, totalLength) {
  if (list.length === 0) return EMPTY_BUFFER;
  if (list.length === 1) return list[0];

  const target = Buffer.allocUnsafe(totalLength);
  let offset = 0;

  for (let i = 0; i < list.length; i++) {
    const buf = list[i];
    target.set(buf, offset);
    offset += buf.length;
  }

  if (offset < totalLength) return target.slice(0, offset);

  return target;
}

/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */
function _mask(source, mask, output, offset, length) {
  for (let i = 0; i < length; i++) {
    output[offset + i] = source[i] ^ mask[i & 3];
  }
}

/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */
function _unmask(buffer, mask) {
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] ^= mask[i & 3];
  }
}

/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */
function toArrayBuffer(buf) {
  if (buf.byteLength === buf.buffer.byteLength) {
    return buf.buffer;
  }

  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */
function toBuffer(data) {
  toBuffer.readOnly = true;

  if (Buffer.isBuffer(data)) return data;

  let buf;

  if (data instanceof ArrayBuffer) {
    buf = Buffer.from(data);
  } else if (ArrayBuffer.isView(data)) {
    buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
  } else {
    buf = Buffer.from(data);
    toBuffer.readOnly = false;
  }

  return buf;
}

module.exports = {
  concat,
  mask: _mask,
  toArrayBuffer,
  toBuffer,
  unmask: _unmask
};

/* istanbul ignore else  */
if (!process.env.WS_NO_BUFFER_UTIL) {
  try {
    const bufferUtil = __webpack_require__(5659);

    module.exports.mask = function (source, mask, output, offset, length) {
      if (length < 48) _mask(source, mask, output, offset, length);
      else bufferUtil.mask(source, mask, output, offset, length);
    };

    module.exports.unmask = function (buffer, mask) {
      if (buffer.length < 32) _unmask(buffer, mask);
      else bufferUtil.unmask(buffer, mask);
    };
  } catch (e) {
    // Continue regardless of the error.
  }
}


/***/ }),

/***/ 5540:
/***/ ((module) => {

"use strict";


module.exports = {
  BINARY_TYPES: ['nodebuffer', 'arraybuffer', 'fragments'],
  EMPTY_BUFFER: Buffer.alloc(0),
  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
  kListener: Symbol('kListener'),
  kStatusCode: Symbol('status-code'),
  kWebSocket: Symbol('websocket'),
  NOOP: () => {}
};


/***/ }),

/***/ 4682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { kForOnEventAttribute, kListener } = __webpack_require__(5540);

const kCode = Symbol('kCode');
const kData = Symbol('kData');
const kError = Symbol('kError');
const kMessage = Symbol('kMessage');
const kReason = Symbol('kReason');
const kTarget = Symbol('kTarget');
const kType = Symbol('kType');
const kWasClean = Symbol('kWasClean');

/**
 * Class representing an event.
 */
class Event {
  /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */
  constructor(type) {
    this[kTarget] = null;
    this[kType] = type;
  }

  /**
   * @type {*}
   */
  get target() {
    return this[kTarget];
  }

  /**
   * @type {String}
   */
  get type() {
    return this[kType];
  }
}

Object.defineProperty(Event.prototype, 'target', { enumerable: true });
Object.defineProperty(Event.prototype, 'type', { enumerable: true });

/**
 * Class representing a close event.
 *
 * @extends Event
 */
class CloseEvent extends Event {
  /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */
  constructor(type, options = {}) {
    super(type);

    this[kCode] = options.code === undefined ? 0 : options.code;
    this[kReason] = options.reason === undefined ? '' : options.reason;
    this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
  }

  /**
   * @type {Number}
   */
  get code() {
    return this[kCode];
  }

  /**
   * @type {String}
   */
  get reason() {
    return this[kReason];
  }

  /**
   * @type {Boolean}
   */
  get wasClean() {
    return this[kWasClean];
  }
}

Object.defineProperty(CloseEvent.prototype, 'code', { enumerable: true });
Object.defineProperty(CloseEvent.prototype, 'reason', { enumerable: true });
Object.defineProperty(CloseEvent.prototype, 'wasClean', { enumerable: true });

/**
 * Class representing an error event.
 *
 * @extends Event
 */
class ErrorEvent extends Event {
  /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */
  constructor(type, options = {}) {
    super(type);

    this[kError] = options.error === undefined ? null : options.error;
    this[kMessage] = options.message === undefined ? '' : options.message;
  }

  /**
   * @type {*}
   */
  get error() {
    return this[kError];
  }

  /**
   * @type {String}
   */
  get message() {
    return this[kMessage];
  }
}

Object.defineProperty(ErrorEvent.prototype, 'error', { enumerable: true });
Object.defineProperty(ErrorEvent.prototype, 'message', { enumerable: true });

/**
 * Class representing a message event.
 *
 * @extends Event
 */
class MessageEvent extends Event {
  /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */
  constructor(type, options = {}) {
    super(type);

    this[kData] = options.data === undefined ? null : options.data;
  }

  /**
   * @type {*}
   */
  get data() {
    return this[kData];
  }
}

Object.defineProperty(MessageEvent.prototype, 'data', { enumerable: true });

/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */
const EventTarget = {
  /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {(Function|Object)} handler The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */
  addEventListener(type, handler, options = {}) {
    for (const listener of this.listeners(type)) {
      if (
        !options[kForOnEventAttribute] &&
        listener[kListener] === handler &&
        !listener[kForOnEventAttribute]
      ) {
        return;
      }
    }

    let wrapper;

    if (type === 'message') {
      wrapper = function onMessage(data, isBinary) {
        const event = new MessageEvent('message', {
          data: isBinary ? data : data.toString()
        });

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === 'close') {
      wrapper = function onClose(code, message) {
        const event = new CloseEvent('close', {
          code,
          reason: message.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === 'error') {
      wrapper = function onError(error) {
        const event = new ErrorEvent('error', {
          error,
          message: error.message
        });

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === 'open') {
      wrapper = function onOpen() {
        const event = new Event('open');

        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else {
      return;
    }

    wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
    wrapper[kListener] = handler;

    if (options.once) {
      this.once(type, wrapper);
    } else {
      this.on(type, wrapper);
    }
  },

  /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {(Function|Object)} handler The listener to remove
   * @public
   */
  removeEventListener(type, handler) {
    for (const listener of this.listeners(type)) {
      if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
        this.removeListener(type, listener);
        break;
      }
    }
  }
};

module.exports = {
  CloseEvent,
  ErrorEvent,
  Event,
  EventTarget,
  MessageEvent
};

/**
 * Call an event listener
 *
 * @param {(Function|Object)} listener The listener to call
 * @param {*} thisArg The value to use as `this`` when calling the listener
 * @param {Event} event The event to pass to the listener
 * @private
 */
function callListener(listener, thisArg, event) {
  if (typeof listener === 'object' && listener.handleEvent) {
    listener.handleEvent.call(listener, event);
  } else {
    listener.call(thisArg, event);
  }
}


/***/ }),

/***/ 6608:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { tokenChars } = __webpack_require__(7950);

/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */
function push(dest, name, elem) {
  if (dest[name] === undefined) dest[name] = [elem];
  else dest[name].push(elem);
}

/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */
function parse(header) {
  const offers = Object.create(null);
  let params = Object.create(null);
  let mustUnescape = false;
  let isEscaping = false;
  let inQuotes = false;
  let extensionName;
  let paramName;
  let start = -1;
  let code = -1;
  let end = -1;
  let i = 0;

  for (; i < header.length; i++) {
    code = header.charCodeAt(i);

    if (extensionName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (
        i !== 0 &&
        (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
      ) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        const name = header.slice(start, end);
        if (code === 0x2c) {
          push(offers, name, params);
          params = Object.create(null);
        } else {
          extensionName = name;
        }

        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else if (paramName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (code === 0x20 || code === 0x09) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        push(params, header.slice(start, end), true);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        start = end = -1;
      } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
        paramName = header.slice(start, i);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else {
      //
      // The value of a quoted-string after unescaping must conform to the
      // token ABNF, so only token characters are valid.
      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
      //
      if (isEscaping) {
        if (tokenChars[code] !== 1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (start === -1) start = i;
        else if (!mustUnescape) mustUnescape = true;
        isEscaping = false;
      } else if (inQuotes) {
        if (tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 0x22 /* '"' */ && start !== -1) {
          inQuotes = false;
          end = i;
        } else if (code === 0x5c /* '\' */) {
          isEscaping = true;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
        inQuotes = true;
      } else if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
        if (end === -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        let value = header.slice(start, end);
        if (mustUnescape) {
          value = value.replace(/\\/g, '');
          mustUnescape = false;
        }
        push(params, paramName, value);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        paramName = undefined;
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
  }

  if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
    throw new SyntaxError('Unexpected end of input');
  }

  if (end === -1) end = i;
  const token = header.slice(start, end);
  if (extensionName === undefined) {
    push(offers, token, params);
  } else {
    if (paramName === undefined) {
      push(params, token, true);
    } else if (mustUnescape) {
      push(params, paramName, token.replace(/\\/g, ''));
    } else {
      push(params, paramName, token);
    }
    push(offers, extensionName, params);
  }

  return offers;
}

/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */
function format(extensions) {
  return Object.keys(extensions)
    .map((extension) => {
      let configurations = extensions[extension];
      if (!Array.isArray(configurations)) configurations = [configurations];
      return configurations
        .map((params) => {
          return [extension]
            .concat(
              Object.keys(params).map((k) => {
                let values = params[k];
                if (!Array.isArray(values)) values = [values];
                return values
                  .map((v) => (v === true ? k : `${k}=${v}`))
                  .join('; ');
              })
            )
            .join('; ');
        })
        .join(', ');
    })
    .join(', ');
}

module.exports = { format, parse };


/***/ }),

/***/ 1404:
/***/ ((module) => {

"use strict";


const kDone = Symbol('kDone');
const kRun = Symbol('kRun');

/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */
class Limiter {
  /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */
  constructor(concurrency) {
    this[kDone] = () => {
      this.pending--;
      this[kRun]();
    };
    this.concurrency = concurrency || Infinity;
    this.jobs = [];
    this.pending = 0;
  }

  /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */
  add(job) {
    this.jobs.push(job);
    this[kRun]();
  }

  /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */
  [kRun]() {
    if (this.pending === this.concurrency) return;

    if (this.jobs.length) {
      const job = this.jobs.shift();

      this.pending++;
      job(this[kDone]);
    }
  }
}

module.exports = Limiter;


/***/ }),

/***/ 6231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const zlib = __webpack_require__(9796);

const bufferUtil = __webpack_require__(7734);
const Limiter = __webpack_require__(1404);
const { kStatusCode } = __webpack_require__(5540);

const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError = Symbol('error');

//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;

/**
 * permessage-deflate implementation.
 */
class PerMessageDeflate {
  /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  constructor(options, isServer, maxPayload) {
    this._maxPayload = maxPayload | 0;
    this._options = options || {};
    this._threshold =
      this._options.threshold !== undefined ? this._options.threshold : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;

    this.params = null;

    if (!zlibLimiter) {
      const concurrency =
        this._options.concurrencyLimit !== undefined
          ? this._options.concurrencyLimit
          : 10;
      zlibLimiter = new Limiter(concurrency);
    }
  }

  /**
   * @type {String}
   */
  static get extensionName() {
    return 'permessage-deflate';
  }

  /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */
  offer() {
    const params = {};

    if (this._options.serverNoContextTakeover) {
      params.server_no_context_takeover = true;
    }
    if (this._options.clientNoContextTakeover) {
      params.client_no_context_takeover = true;
    }
    if (this._options.serverMaxWindowBits) {
      params.server_max_window_bits = this._options.serverMaxWindowBits;
    }
    if (this._options.clientMaxWindowBits) {
      params.client_max_window_bits = this._options.clientMaxWindowBits;
    } else if (this._options.clientMaxWindowBits == null) {
      params.client_max_window_bits = true;
    }

    return params;
  }

  /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */
  accept(configurations) {
    configurations = this.normalizeParams(configurations);

    this.params = this._isServer
      ? this.acceptAsServer(configurations)
      : this.acceptAsClient(configurations);

    return this.params;
  }

  /**
   * Releases all resources used by the extension.
   *
   * @public
   */
  cleanup() {
    if (this._inflate) {
      this._inflate.close();
      this._inflate = null;
    }

    if (this._deflate) {
      const callback = this._deflate[kCallback];

      this._deflate.close();
      this._deflate = null;

      if (callback) {
        callback(
          new Error(
            'The deflate stream was closed while data was being processed'
          )
        );
      }
    }
  }

  /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsServer(offers) {
    const opts = this._options;
    const accepted = offers.find((params) => {
      if (
        (opts.serverNoContextTakeover === false &&
          params.server_no_context_takeover) ||
        (params.server_max_window_bits &&
          (opts.serverMaxWindowBits === false ||
            (typeof opts.serverMaxWindowBits === 'number' &&
              opts.serverMaxWindowBits > params.server_max_window_bits))) ||
        (typeof opts.clientMaxWindowBits === 'number' &&
          !params.client_max_window_bits)
      ) {
        return false;
      }

      return true;
    });

    if (!accepted) {
      throw new Error('None of the extension offers can be accepted');
    }

    if (opts.serverNoContextTakeover) {
      accepted.server_no_context_takeover = true;
    }
    if (opts.clientNoContextTakeover) {
      accepted.client_no_context_takeover = true;
    }
    if (typeof opts.serverMaxWindowBits === 'number') {
      accepted.server_max_window_bits = opts.serverMaxWindowBits;
    }
    if (typeof opts.clientMaxWindowBits === 'number') {
      accepted.client_max_window_bits = opts.clientMaxWindowBits;
    } else if (
      accepted.client_max_window_bits === true ||
      opts.clientMaxWindowBits === false
    ) {
      delete accepted.client_max_window_bits;
    }

    return accepted;
  }

  /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsClient(response) {
    const params = response[0];

    if (
      this._options.clientNoContextTakeover === false &&
      params.client_no_context_takeover
    ) {
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    }

    if (!params.client_max_window_bits) {
      if (typeof this._options.clientMaxWindowBits === 'number') {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      }
    } else if (
      this._options.clientMaxWindowBits === false ||
      (typeof this._options.clientMaxWindowBits === 'number' &&
        params.client_max_window_bits > this._options.clientMaxWindowBits)
    ) {
      throw new Error(
        'Unexpected or invalid parameter "client_max_window_bits"'
      );
    }

    return params;
  }

  /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */
  normalizeParams(configurations) {
    configurations.forEach((params) => {
      Object.keys(params).forEach((key) => {
        let value = params[key];

        if (value.length > 1) {
          throw new Error(`Parameter "${key}" must have only a single value`);
        }

        value = value[0];

        if (key === 'client_max_window_bits') {
          if (value !== true) {
            const num = +value;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value}`
              );
            }
            value = num;
          } else if (!this._isServer) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else if (key === 'server_max_window_bits') {
          const num = +value;
          if (!Number.isInteger(num) || num < 8 || num > 15) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
          value = num;
        } else if (
          key === 'client_no_context_takeover' ||
          key === 'server_no_context_takeover'
        ) {
          if (value !== true) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else {
          throw new Error(`Unknown parameter "${key}"`);
        }

        params[key] = value;
      });
    });

    return configurations;
  }

  /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  decompress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._decompress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  compress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._compress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _decompress(data, fin, callback) {
    const endpoint = this._isServer ? 'client' : 'server';

    if (!this._inflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._inflate = zlib.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits
      });
      this._inflate[kPerMessageDeflate] = this;
      this._inflate[kTotalLength] = 0;
      this._inflate[kBuffers] = [];
      this._inflate.on('error', inflateOnError);
      this._inflate.on('data', inflateOnData);
    }

    this._inflate[kCallback] = callback;

    this._inflate.write(data);
    if (fin) this._inflate.write(TRAILER);

    this._inflate.flush(() => {
      const err = this._inflate[kError];

      if (err) {
        this._inflate.close();
        this._inflate = null;
        callback(err);
        return;
      }

      const data = bufferUtil.concat(
        this._inflate[kBuffers],
        this._inflate[kTotalLength]
      );

      if (this._inflate._readableState.endEmitted) {
        this._inflate.close();
        this._inflate = null;
      } else {
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];

        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._inflate.reset();
        }
      }

      callback(null, data);
    });
  }

  /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _compress(data, fin, callback) {
    const endpoint = this._isServer ? 'server' : 'client';

    if (!this._deflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._deflate = zlib.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits
      });

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      this._deflate.on('data', deflateOnData);
    }

    this._deflate[kCallback] = callback;

    this._deflate.write(data);
    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
      if (!this._deflate) {
        //
        // The deflate stream was closed while data was being processed.
        //
        return;
      }

      let data = bufferUtil.concat(
        this._deflate[kBuffers],
        this._deflate[kTotalLength]
      );

      if (fin) data = data.slice(0, data.length - 4);

      //
      // Ensure that the callback will not be called again in
      // `PerMessageDeflate#cleanup()`.
      //
      this._deflate[kCallback] = null;

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
        this._deflate.reset();
      }

      callback(null, data);
    });
  }
}

module.exports = PerMessageDeflate;

/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function deflateOnData(chunk) {
  this[kBuffers].push(chunk);
  this[kTotalLength] += chunk.length;
}

/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function inflateOnData(chunk) {
  this[kTotalLength] += chunk.length;

  if (
    this[kPerMessageDeflate]._maxPayload < 1 ||
    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
  ) {
    this[kBuffers].push(chunk);
    return;
  }

  this[kError] = new RangeError('Max payload size exceeded');
  this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
  this[kError][kStatusCode] = 1009;
  this.removeListener('data', inflateOnData);
  this.reset();
}

/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */
function inflateOnError(err) {
  //
  // There is no need to call `Zlib#close()` as the handle is automatically
  // closed when an error is emitted.
  //
  this[kPerMessageDeflate]._inflate = null;
  err[kStatusCode] = 1007;
  this[kCallback](err);
}


/***/ }),

/***/ 8443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Writable } = __webpack_require__(2781);

const PerMessageDeflate = __webpack_require__(6231);
const {
  BINARY_TYPES,
  EMPTY_BUFFER,
  kStatusCode,
  kWebSocket
} = __webpack_require__(5540);
const { concat, toArrayBuffer, unmask } = __webpack_require__(7734);
const { isValidStatusCode, isValidUTF8 } = __webpack_require__(7950);

const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;

/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */
class Receiver extends Writable {
  /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */
  constructor(options = {}) {
    super();

    this._binaryType = options.binaryType || BINARY_TYPES[0];
    this._extensions = options.extensions || {};
    this._isServer = !!options.isServer;
    this._maxPayload = options.maxPayload | 0;
    this._skipUTF8Validation = !!options.skipUTF8Validation;
    this[kWebSocket] = undefined;

    this._bufferedBytes = 0;
    this._buffers = [];

    this._compressed = false;
    this._payloadLength = 0;
    this._mask = undefined;
    this._fragmented = 0;
    this._masked = false;
    this._fin = false;
    this._opcode = 0;

    this._totalPayloadLength = 0;
    this._messageLength = 0;
    this._fragments = [];

    this._state = GET_INFO;
    this._loop = false;
  }

  /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */
  _write(chunk, encoding, cb) {
    if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

    this._bufferedBytes += chunk.length;
    this._buffers.push(chunk);
    this.startLoop(cb);
  }

  /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */
  consume(n) {
    this._bufferedBytes -= n;

    if (n === this._buffers[0].length) return this._buffers.shift();

    if (n < this._buffers[0].length) {
      const buf = this._buffers[0];
      this._buffers[0] = buf.slice(n);
      return buf.slice(0, n);
    }

    const dst = Buffer.allocUnsafe(n);

    do {
      const buf = this._buffers[0];
      const offset = dst.length - n;

      if (n >= buf.length) {
        dst.set(this._buffers.shift(), offset);
      } else {
        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
        this._buffers[0] = buf.slice(n);
      }

      n -= buf.length;
    } while (n > 0);

    return dst;
  }

  /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */
  startLoop(cb) {
    let err;
    this._loop = true;

    do {
      switch (this._state) {
        case GET_INFO:
          err = this.getInfo();
          break;
        case GET_PAYLOAD_LENGTH_16:
          err = this.getPayloadLength16();
          break;
        case GET_PAYLOAD_LENGTH_64:
          err = this.getPayloadLength64();
          break;
        case GET_MASK:
          this.getMask();
          break;
        case GET_DATA:
          err = this.getData(cb);
          break;
        default:
          // `INFLATING`
          this._loop = false;
          return;
      }
    } while (this._loop);

    cb(err);
  }

  /**
   * Reads the first two bytes of a frame.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getInfo() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    const buf = this.consume(2);

    if ((buf[0] & 0x30) !== 0x00) {
      this._loop = false;
      return error(
        RangeError,
        'RSV2 and RSV3 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_2_3'
      );
    }

    const compressed = (buf[0] & 0x40) === 0x40;

    if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
      this._loop = false;
      return error(
        RangeError,
        'RSV1 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_1'
      );
    }

    this._fin = (buf[0] & 0x80) === 0x80;
    this._opcode = buf[0] & 0x0f;
    this._payloadLength = buf[1] & 0x7f;

    if (this._opcode === 0x00) {
      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (!this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          'invalid opcode 0',
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._opcode = this._fragmented;
    } else if (this._opcode === 0x01 || this._opcode === 0x02) {
      if (this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          `invalid opcode ${this._opcode}`,
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._compressed = compressed;
    } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
      if (!this._fin) {
        this._loop = false;
        return error(
          RangeError,
          'FIN must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_FIN'
        );
      }

      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (this._payloadLength > 0x7d) {
        this._loop = false;
        return error(
          RangeError,
          `invalid payload length ${this._payloadLength}`,
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      }
    } else {
      this._loop = false;
      return error(
        RangeError,
        `invalid opcode ${this._opcode}`,
        true,
        1002,
        'WS_ERR_INVALID_OPCODE'
      );
    }

    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
    this._masked = (buf[1] & 0x80) === 0x80;

    if (this._isServer) {
      if (!this._masked) {
        this._loop = false;
        return error(
          RangeError,
          'MASK must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_MASK'
        );
      }
    } else if (this._masked) {
      this._loop = false;
      return error(
        RangeError,
        'MASK must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_MASK'
      );
    }

    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
    else return this.haveLength();
  }

  /**
   * Gets extended payload length (7+16).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength16() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    this._payloadLength = this.consume(2).readUInt16BE(0);
    return this.haveLength();
  }

  /**
   * Gets extended payload length (7+64).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength64() {
    if (this._bufferedBytes < 8) {
      this._loop = false;
      return;
    }

    const buf = this.consume(8);
    const num = buf.readUInt32BE(0);

    //
    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
    // if payload length is greater than this number.
    //
    if (num > Math.pow(2, 53 - 32) - 1) {
      this._loop = false;
      return error(
        RangeError,
        'Unsupported WebSocket frame: payload length > 2^53 - 1',
        false,
        1009,
        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
      );
    }

    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
    return this.haveLength();
  }

  /**
   * Payload length has been read.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  haveLength() {
    if (this._payloadLength && this._opcode < 0x08) {
      this._totalPayloadLength += this._payloadLength;
      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
        this._loop = false;
        return error(
          RangeError,
          'Max payload size exceeded',
          false,
          1009,
          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
        );
      }
    }

    if (this._masked) this._state = GET_MASK;
    else this._state = GET_DATA;
  }

  /**
   * Reads mask bytes.
   *
   * @private
   */
  getMask() {
    if (this._bufferedBytes < 4) {
      this._loop = false;
      return;
    }

    this._mask = this.consume(4);
    this._state = GET_DATA;
  }

  /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  getData(cb) {
    let data = EMPTY_BUFFER;

    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength) {
        this._loop = false;
        return;
      }

      data = this.consume(this._payloadLength);

      if (
        this._masked &&
        (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0
      ) {
        unmask(data, this._mask);
      }
    }

    if (this._opcode > 0x07) return this.controlMessage(data);

    if (this._compressed) {
      this._state = INFLATING;
      this.decompress(data, cb);
      return;
    }

    if (data.length) {
      //
      // This message is not compressed so its length is the sum of the payload
      // length of all fragments.
      //
      this._messageLength = this._totalPayloadLength;
      this._fragments.push(data);
    }

    return this.dataMessage();
  }

  /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */
  decompress(data, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
      if (err) return cb(err);

      if (buf.length) {
        this._messageLength += buf.length;
        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
          return cb(
            error(
              RangeError,
              'Max payload size exceeded',
              false,
              1009,
              'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
            )
          );
        }

        this._fragments.push(buf);
      }

      const er = this.dataMessage();
      if (er) return cb(er);

      this.startLoop(cb);
    });
  }

  /**
   * Handles a data message.
   *
   * @return {(Error|undefined)} A possible error
   * @private
   */
  dataMessage() {
    if (this._fin) {
      const messageLength = this._messageLength;
      const fragments = this._fragments;

      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragmented = 0;
      this._fragments = [];

      if (this._opcode === 2) {
        let data;

        if (this._binaryType === 'nodebuffer') {
          data = concat(fragments, messageLength);
        } else if (this._binaryType === 'arraybuffer') {
          data = toArrayBuffer(concat(fragments, messageLength));
        } else {
          data = fragments;
        }

        this.emit('message', data, true);
      } else {
        const buf = concat(fragments, messageLength);

        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          this._loop = false;
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('message', buf, false);
      }
    }

    this._state = GET_INFO;
  }

  /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  controlMessage(data) {
    if (this._opcode === 0x08) {
      this._loop = false;

      if (data.length === 0) {
        this.emit('conclude', 1005, EMPTY_BUFFER);
        this.end();
      } else if (data.length === 1) {
        return error(
          RangeError,
          'invalid payload length 1',
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      } else {
        const code = data.readUInt16BE(0);

        if (!isValidStatusCode(code)) {
          return error(
            RangeError,
            `invalid status code ${code}`,
            true,
            1002,
            'WS_ERR_INVALID_CLOSE_CODE'
          );
        }

        const buf = data.slice(2);

        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('conclude', code, buf);
        this.end();
      }
    } else if (this._opcode === 0x09) {
      this.emit('ping', data);
    } else {
      this.emit('pong', data);
    }

    this._state = GET_INFO;
  }
}

module.exports = Receiver;

/**
 * Builds an error object.
 *
 * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
 * @param {String} message The error message
 * @param {Boolean} prefix Specifies whether or not to add a default prefix to
 *     `message`
 * @param {Number} statusCode The status code
 * @param {String} errorCode The exposed error code
 * @return {(Error|RangeError)} The error
 * @private
 */
function error(ErrorCtor, message, prefix, statusCode, errorCode) {
  const err = new ErrorCtor(
    prefix ? `Invalid WebSocket frame: ${message}` : message
  );

  Error.captureStackTrace(err, error);
  err.code = errorCode;
  err[kStatusCode] = statusCode;
  return err;
}


/***/ }),

/***/ 5762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */



const net = __webpack_require__(1808);
const tls = __webpack_require__(4404);
const { randomFillSync } = __webpack_require__(6113);

const PerMessageDeflate = __webpack_require__(6231);
const { EMPTY_BUFFER } = __webpack_require__(5540);
const { isValidStatusCode } = __webpack_require__(7950);
const { mask: applyMask, toBuffer } = __webpack_require__(7734);

const kByteLength = Symbol('kByteLength');
const maskBuffer = Buffer.alloc(4);

/**
 * HyBi Sender implementation.
 */
class Sender {
  /**
   * Creates a Sender instance.
   *
   * @param {(net.Socket|tls.Socket)} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */
  constructor(socket, extensions, generateMask) {
    this._extensions = extensions || {};

    if (generateMask) {
      this._generateMask = generateMask;
      this._maskBuffer = Buffer.alloc(4);
    }

    this._socket = socket;

    this._firstFragment = true;
    this._compress = false;

    this._bufferedBytes = 0;
    this._deflating = false;
    this._queue = [];
  }

  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */
  static frame(data, options) {
    let mask;
    let merge = false;
    let offset = 2;
    let skipMasking = false;

    if (options.mask) {
      mask = options.maskBuffer || maskBuffer;

      if (options.generateMask) {
        options.generateMask(mask);
      } else {
        randomFillSync(mask, 0, 4);
      }

      skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
      offset = 6;
    }

    let dataLength;

    if (typeof data === 'string') {
      if (
        (!options.mask || skipMasking) &&
        options[kByteLength] !== undefined
      ) {
        dataLength = options[kByteLength];
      } else {
        data = Buffer.from(data);
        dataLength = data.length;
      }
    } else {
      dataLength = data.length;
      merge = options.mask && options.readOnly && !skipMasking;
    }

    let payloadLength = dataLength;

    if (dataLength >= 65536) {
      offset += 8;
      payloadLength = 127;
    } else if (dataLength > 125) {
      offset += 2;
      payloadLength = 126;
    }

    const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);

    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
    if (options.rsv1) target[0] |= 0x40;

    target[1] = payloadLength;

    if (payloadLength === 126) {
      target.writeUInt16BE(dataLength, 2);
    } else if (payloadLength === 127) {
      target[2] = target[3] = 0;
      target.writeUIntBE(dataLength, 4, 6);
    }

    if (!options.mask) return [target, data];

    target[1] |= 0x80;
    target[offset - 4] = mask[0];
    target[offset - 3] = mask[1];
    target[offset - 2] = mask[2];
    target[offset - 1] = mask[3];

    if (skipMasking) return [target, data];

    if (merge) {
      applyMask(data, mask, target, offset, dataLength);
      return [target];
    }

    applyMask(data, mask, data, 0, dataLength);
    return [target, data];
  }

  /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */
  close(code, data, mask, cb) {
    let buf;

    if (code === undefined) {
      buf = EMPTY_BUFFER;
    } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
      throw new TypeError('First argument must be a valid error code number');
    } else if (data === undefined || !data.length) {
      buf = Buffer.allocUnsafe(2);
      buf.writeUInt16BE(code, 0);
    } else {
      const length = Buffer.byteLength(data);

      if (length > 123) {
        throw new RangeError('The message must not be greater than 123 bytes');
      }

      buf = Buffer.allocUnsafe(2 + length);
      buf.writeUInt16BE(code, 0);

      if (typeof data === 'string') {
        buf.write(data, 2);
      } else {
        buf.set(data, 2);
      }
    }

    const options = {
      [kByteLength]: buf.length,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x08,
      readOnly: false,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, buf, false, options, cb]);
    } else {
      this.sendFrame(Sender.frame(buf, options), cb);
    }
  }

  /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  ping(data, mask, cb) {
    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer(data);
      byteLength = data.length;
      readOnly = toBuffer.readOnly;
    }

    if (byteLength > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    const options = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x09,
      readOnly,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, data, false, options, cb]);
    } else {
      this.sendFrame(Sender.frame(data, options), cb);
    }
  }

  /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  pong(data, mask, cb) {
    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer(data);
      byteLength = data.length;
      readOnly = toBuffer.readOnly;
    }

    if (byteLength > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    const options = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 0x0a,
      readOnly,
      rsv1: false
    };

    if (this._deflating) {
      this.enqueue([this.dispatch, data, false, options, cb]);
    } else {
      this.sendFrame(Sender.frame(data, options), cb);
    }
  }

  /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */
  send(data, options, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
    let opcode = options.binary ? 2 : 1;
    let rsv1 = options.compress;

    let byteLength;
    let readOnly;

    if (typeof data === 'string') {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else {
      data = toBuffer(data);
      byteLength = data.length;
      readOnly = toBuffer.readOnly;
    }

    if (this._firstFragment) {
      this._firstFragment = false;
      if (
        rsv1 &&
        perMessageDeflate &&
        perMessageDeflate.params[
          perMessageDeflate._isServer
            ? 'server_no_context_takeover'
            : 'client_no_context_takeover'
        ]
      ) {
        rsv1 = byteLength >= perMessageDeflate._threshold;
      }
      this._compress = rsv1;
    } else {
      rsv1 = false;
      opcode = 0;
    }

    if (options.fin) this._firstFragment = true;

    if (perMessageDeflate) {
      const opts = {
        [kByteLength]: byteLength,
        fin: options.fin,
        generateMask: this._generateMask,
        mask: options.mask,
        maskBuffer: this._maskBuffer,
        opcode,
        readOnly,
        rsv1
      };

      if (this._deflating) {
        this.enqueue([this.dispatch, data, this._compress, opts, cb]);
      } else {
        this.dispatch(data, this._compress, opts, cb);
      }
    } else {
      this.sendFrame(
        Sender.frame(data, {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1: false
        }),
        cb
      );
    }
  }

  /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  dispatch(data, compress, options, cb) {
    if (!compress) {
      this.sendFrame(Sender.frame(data, options), cb);
      return;
    }

    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

    this._bufferedBytes += options[kByteLength];
    this._deflating = true;
    perMessageDeflate.compress(data, options.fin, (_, buf) => {
      if (this._socket.destroyed) {
        const err = new Error(
          'The socket was closed while data was being compressed'
        );

        if (typeof cb === 'function') cb(err);

        for (let i = 0; i < this._queue.length; i++) {
          const params = this._queue[i];
          const callback = params[params.length - 1];

          if (typeof callback === 'function') callback(err);
        }

        return;
      }

      this._bufferedBytes -= options[kByteLength];
      this._deflating = false;
      options.readOnly = false;
      this.sendFrame(Sender.frame(buf, options), cb);
      this.dequeue();
    });
  }

  /**
   * Executes queued send operations.
   *
   * @private
   */
  dequeue() {
    while (!this._deflating && this._queue.length) {
      const params = this._queue.shift();

      this._bufferedBytes -= params[3][kByteLength];
      Reflect.apply(params[0], this, params.slice(1));
    }
  }

  /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */
  enqueue(params) {
    this._bufferedBytes += params[3][kByteLength];
    this._queue.push(params);
  }

  /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */
  sendFrame(list, cb) {
    if (list.length === 2) {
      this._socket.cork();
      this._socket.write(list[0]);
      this._socket.write(list[1], cb);
      this._socket.uncork();
    } else {
      this._socket.write(list[0], cb);
    }
  }
}

module.exports = Sender;


/***/ }),

/***/ 6258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Duplex } = __webpack_require__(2781);

/**
 * Emits the `'close'` event on a stream.
 *
 * @param {Duplex} stream The stream.
 * @private
 */
function emitClose(stream) {
  stream.emit('close');
}

/**
 * The listener of the `'end'` event.
 *
 * @private
 */
function duplexOnEnd() {
  if (!this.destroyed && this._writableState.finished) {
    this.destroy();
  }
}

/**
 * The listener of the `'error'` event.
 *
 * @param {Error} err The error
 * @private
 */
function duplexOnError(err) {
  this.removeListener('error', duplexOnError);
  this.destroy();
  if (this.listenerCount('error') === 0) {
    // Do not suppress the throwing behavior.
    this.emit('error', err);
  }
}

/**
 * Wraps a `WebSocket` in a duplex stream.
 *
 * @param {WebSocket} ws The `WebSocket` to wrap
 * @param {Object} [options] The options for the `Duplex` constructor
 * @return {Duplex} The duplex stream
 * @public
 */
function createWebSocketStream(ws, options) {
  let terminateOnDestroy = true;

  const duplex = new Duplex({
    ...options,
    autoDestroy: false,
    emitClose: false,
    objectMode: false,
    writableObjectMode: false
  });

  ws.on('message', function message(msg, isBinary) {
    const data =
      !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;

    if (!duplex.push(data)) ws.pause();
  });

  ws.once('error', function error(err) {
    if (duplex.destroyed) return;

    // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
    //
    // - If the `'error'` event is emitted before the `'open'` event, then
    //   `ws.terminate()` is a noop as no socket is assigned.
    // - Otherwise, the error is re-emitted by the listener of the `'error'`
    //   event of the `Receiver` object. The listener already closes the
    //   connection by calling `ws.close()`. This allows a close frame to be
    //   sent to the other peer. If `ws.terminate()` is called right after this,
    //   then the close frame might not be sent.
    terminateOnDestroy = false;
    duplex.destroy(err);
  });

  ws.once('close', function close() {
    if (duplex.destroyed) return;

    duplex.push(null);
  });

  duplex._destroy = function (err, callback) {
    if (ws.readyState === ws.CLOSED) {
      callback(err);
      process.nextTick(emitClose, duplex);
      return;
    }

    let called = false;

    ws.once('error', function error(err) {
      called = true;
      callback(err);
    });

    ws.once('close', function close() {
      if (!called) callback(err);
      process.nextTick(emitClose, duplex);
    });

    if (terminateOnDestroy) ws.terminate();
  };

  duplex._final = function (callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._final(callback);
      });
      return;
    }

    // If the value of the `_socket` property is `null` it means that `ws` is a
    // client websocket and the handshake failed. In fact, when this happens, a
    // socket is never assigned to the websocket. Wait for the `'error'` event
    // that will be emitted by the websocket.
    if (ws._socket === null) return;

    if (ws._socket._writableState.finished) {
      callback();
      if (duplex._readableState.endEmitted) duplex.destroy();
    } else {
      ws._socket.once('finish', function finish() {
        // `duplex` is not destroyed here because the `'end'` event will be
        // emitted on `duplex` after this `'finish'` event. The EOF signaling
        // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
        callback();
      });
      ws.close();
    }
  };

  duplex._read = function () {
    if (ws.isPaused) ws.resume();
  };

  duplex._write = function (chunk, encoding, callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._write(chunk, encoding, callback);
      });
      return;
    }

    ws.send(chunk, callback);
  };

  duplex.on('end', duplexOnEnd);
  duplex.on('error', duplexOnError);
  return duplex;
}

module.exports = createWebSocketStream;


/***/ }),

/***/ 7795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { tokenChars } = __webpack_require__(7950);

/**
 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
 *
 * @param {String} header The field value of the header
 * @return {Set} The subprotocol names
 * @public
 */
function parse(header) {
  const protocols = new Set();
  let start = -1;
  let end = -1;
  let i = 0;

  for (i; i < header.length; i++) {
    const code = header.charCodeAt(i);

    if (end === -1 && tokenChars[code] === 1) {
      if (start === -1) start = i;
    } else if (
      i !== 0 &&
      (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
    ) {
      if (end === -1 && start !== -1) end = i;
    } else if (code === 0x2c /* ',' */) {
      if (start === -1) {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }

      if (end === -1) end = i;

      const protocol = header.slice(start, end);

      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }

      protocols.add(protocol);
      start = end = -1;
    } else {
      throw new SyntaxError(`Unexpected character at index ${i}`);
    }
  }

  if (start === -1 || end !== -1) {
    throw new SyntaxError('Unexpected end of input');
  }

  const protocol = header.slice(start, i);

  if (protocols.has(protocol)) {
    throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
  }

  protocols.add(protocol);
  return protocols;
}

module.exports = { parse };


/***/ }),

/***/ 7950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
];

/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */
function isValidStatusCode(code) {
  return (
    (code >= 1000 &&
      code <= 1014 &&
      code !== 1004 &&
      code !== 1005 &&
      code !== 1006) ||
    (code >= 3000 && code <= 4999)
  );
}

/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */
function _isValidUTF8(buf) {
  const len = buf.length;
  let i = 0;

  while (i < len) {
    if ((buf[i] & 0x80) === 0) {
      // 0xxxxxxx
      i++;
    } else if ((buf[i] & 0xe0) === 0xc0) {
      // 110xxxxx 10xxxxxx
      if (
        i + 1 === len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i] & 0xfe) === 0xc0 // Overlong
      ) {
        return false;
      }

      i += 2;
    } else if ((buf[i] & 0xf0) === 0xe0) {
      // 1110xxxx 10xxxxxx 10xxxxxx
      if (
        i + 2 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
        (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
      ) {
        return false;
      }

      i += 3;
    } else if ((buf[i] & 0xf8) === 0xf0) {
      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      if (
        i + 3 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i + 3] & 0xc0) !== 0x80 ||
        (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
        (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
        buf[i] > 0xf4 // > U+10FFFF
      ) {
        return false;
      }

      i += 4;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = {
  isValidStatusCode,
  isValidUTF8: _isValidUTF8,
  tokenChars
};

/* istanbul ignore else  */
if (!process.env.WS_NO_UTF_8_VALIDATE) {
  try {
    const isValidUTF8 = __webpack_require__(7505);

    module.exports.isValidUTF8 = function (buf) {
      return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
    };
  } catch (e) {
    // Continue regardless of the error.
  }
}


/***/ }),

/***/ 2143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls|https$" }] */



const EventEmitter = __webpack_require__(2361);
const http = __webpack_require__(3685);
const https = __webpack_require__(5687);
const net = __webpack_require__(1808);
const tls = __webpack_require__(4404);
const { createHash } = __webpack_require__(6113);

const extension = __webpack_require__(6608);
const PerMessageDeflate = __webpack_require__(6231);
const subprotocol = __webpack_require__(7795);
const WebSocket = __webpack_require__(6016);
const { GUID, kWebSocket } = __webpack_require__(5540);

const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

const RUNNING = 0;
const CLOSING = 1;
const CLOSED = 2;

/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */
class WebSocketServer extends EventEmitter {
  /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
   *     class to use. It must be the `WebSocket` class or class that extends it
   * @param {Function} [callback] A listener for the `listening` event
   */
  constructor(options, callback) {
    super();

    options = {
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: false,
      handleProtocols: null,
      clientTracking: true,
      verifyClient: null,
      noServer: false,
      backlog: null, // use default (511 as implemented in net.js)
      server: null,
      host: null,
      path: null,
      port: null,
      WebSocket,
      ...options
    };

    if (
      (options.port == null && !options.server && !options.noServer) ||
      (options.port != null && (options.server || options.noServer)) ||
      (options.server && options.noServer)
    ) {
      throw new TypeError(
        'One and only one of the "port", "server", or "noServer" options ' +
          'must be specified'
      );
    }

    if (options.port != null) {
      this._server = http.createServer((req, res) => {
        const body = http.STATUS_CODES[426];

        res.writeHead(426, {
          'Content-Length': body.length,
          'Content-Type': 'text/plain'
        });
        res.end(body);
      });
      this._server.listen(
        options.port,
        options.host,
        options.backlog,
        callback
      );
    } else if (options.server) {
      this._server = options.server;
    }

    if (this._server) {
      const emitConnection = this.emit.bind(this, 'connection');

      this._removeListeners = addListeners(this._server, {
        listening: this.emit.bind(this, 'listening'),
        error: this.emit.bind(this, 'error'),
        upgrade: (req, socket, head) => {
          this.handleUpgrade(req, socket, head, emitConnection);
        }
      });
    }

    if (options.perMessageDeflate === true) options.perMessageDeflate = {};
    if (options.clientTracking) {
      this.clients = new Set();
      this._shouldEmitClose = false;
    }

    this.options = options;
    this._state = RUNNING;
  }

  /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */
  address() {
    if (this.options.noServer) {
      throw new Error('The server is operating in "noServer" mode');
    }

    if (!this._server) return null;
    return this._server.address();
  }

  /**
   * Stop the server from accepting new connections and emit the `'close'` event
   * when all existing connections are closed.
   *
   * @param {Function} [cb] A one-time listener for the `'close'` event
   * @public
   */
  close(cb) {
    if (this._state === CLOSED) {
      if (cb) {
        this.once('close', () => {
          cb(new Error('The server is not running'));
        });
      }

      process.nextTick(emitClose, this);
      return;
    }

    if (cb) this.once('close', cb);

    if (this._state === CLOSING) return;
    this._state = CLOSING;

    if (this.options.noServer || this.options.server) {
      if (this._server) {
        this._removeListeners();
        this._removeListeners = this._server = null;
      }

      if (this.clients) {
        if (!this.clients.size) {
          process.nextTick(emitClose, this);
        } else {
          this._shouldEmitClose = true;
        }
      } else {
        process.nextTick(emitClose, this);
      }
    } else {
      const server = this._server;

      this._removeListeners();
      this._removeListeners = this._server = null;

      //
      // The HTTP/S server was created internally. Close it, and rely on its
      // `'close'` event.
      //
      server.close(() => {
        emitClose(this);
      });
    }
  }

  /**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */
  shouldHandle(req) {
    if (this.options.path) {
      const index = req.url.indexOf('?');
      const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

      if (pathname !== this.options.path) return false;
    }

    return true;
  }

  /**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */
  handleUpgrade(req, socket, head, cb) {
    socket.on('error', socketOnError);

    const key = req.headers['sec-websocket-key'];
    const version = +req.headers['sec-websocket-version'];

    if (req.method !== 'GET') {
      const message = 'Invalid HTTP method';
      abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
      return;
    }

    if (req.headers.upgrade.toLowerCase() !== 'websocket') {
      const message = 'Invalid Upgrade header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (!key || !keyRegex.test(key)) {
      const message = 'Missing or invalid Sec-WebSocket-Key header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (version !== 8 && version !== 13) {
      const message = 'Missing or invalid Sec-WebSocket-Version header';
      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
      return;
    }

    if (!this.shouldHandle(req)) {
      abortHandshake(socket, 400);
      return;
    }

    const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
    let protocols = new Set();

    if (secWebSocketProtocol !== undefined) {
      try {
        protocols = subprotocol.parse(secWebSocketProtocol);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Protocol header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
    }

    const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
    const extensions = {};

    if (
      this.options.perMessageDeflate &&
      secWebSocketExtensions !== undefined
    ) {
      const perMessageDeflate = new PerMessageDeflate(
        this.options.perMessageDeflate,
        true,
        this.options.maxPayload
      );

      try {
        const offers = extension.parse(secWebSocketExtensions);

        if (offers[PerMessageDeflate.extensionName]) {
          perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
          extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
      } catch (err) {
        const message =
          'Invalid or unacceptable Sec-WebSocket-Extensions header';
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
    }

    //
    // Optionally call external client verification handler.
    //
    if (this.options.verifyClient) {
      const info = {
        origin:
          req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
        secure: !!(req.socket.authorized || req.socket.encrypted),
        req
      };

      if (this.options.verifyClient.length === 2) {
        this.options.verifyClient(info, (verified, code, message, headers) => {
          if (!verified) {
            return abortHandshake(socket, code || 401, message, headers);
          }

          this.completeUpgrade(
            extensions,
            key,
            protocols,
            req,
            socket,
            head,
            cb
          );
        });
        return;
      }

      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
    }

    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
  }

  /**
   * Upgrade the connection to WebSocket.
   *
   * @param {Object} extensions The accepted extensions
   * @param {String} key The value of the `Sec-WebSocket-Key` header
   * @param {Set} protocols The subprotocols
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @throws {Error} If called more than once with the same socket
   * @private
   */
  completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
    //
    // Destroy the socket if the client has already sent a FIN packet.
    //
    if (!socket.readable || !socket.writable) return socket.destroy();

    if (socket[kWebSocket]) {
      throw new Error(
        'server.handleUpgrade() was called more than once with the same ' +
          'socket, possibly due to a misconfiguration'
      );
    }

    if (this._state > RUNNING) return abortHandshake(socket, 503);

    const digest = createHash('sha1')
      .update(key + GUID)
      .digest('base64');

    const headers = [
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Accept: ${digest}`
    ];

    const ws = new this.options.WebSocket(null);

    if (protocols.size) {
      //
      // Optionally call external protocol selection handler.
      //
      const protocol = this.options.handleProtocols
        ? this.options.handleProtocols(protocols, req)
        : protocols.values().next().value;

      if (protocol) {
        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
        ws._protocol = protocol;
      }
    }

    if (extensions[PerMessageDeflate.extensionName]) {
      const params = extensions[PerMessageDeflate.extensionName].params;
      const value = extension.format({
        [PerMessageDeflate.extensionName]: [params]
      });
      headers.push(`Sec-WebSocket-Extensions: ${value}`);
      ws._extensions = extensions;
    }

    //
    // Allow external modification/inspection of handshake headers.
    //
    this.emit('headers', headers, req);

    socket.write(headers.concat('\r\n').join('\r\n'));
    socket.removeListener('error', socketOnError);

    ws.setSocket(socket, head, {
      maxPayload: this.options.maxPayload,
      skipUTF8Validation: this.options.skipUTF8Validation
    });

    if (this.clients) {
      this.clients.add(ws);
      ws.on('close', () => {
        this.clients.delete(ws);

        if (this._shouldEmitClose && !this.clients.size) {
          process.nextTick(emitClose, this);
        }
      });
    }

    cb(ws, req);
  }
}

module.exports = WebSocketServer;

/**
 * Add event listeners on an `EventEmitter` using a map of <event, listener>
 * pairs.
 *
 * @param {EventEmitter} server The event emitter
 * @param {Object.<String, Function>} map The listeners to add
 * @return {Function} A function that will remove the added listeners when
 *     called
 * @private
 */
function addListeners(server, map) {
  for (const event of Object.keys(map)) server.on(event, map[event]);

  return function removeListeners() {
    for (const event of Object.keys(map)) {
      server.removeListener(event, map[event]);
    }
  };
}

/**
 * Emit a `'close'` event on an `EventEmitter`.
 *
 * @param {EventEmitter} server The event emitter
 * @private
 */
function emitClose(server) {
  server._state = CLOSED;
  server.emit('close');
}

/**
 * Handle socket errors.
 *
 * @private
 */
function socketOnError() {
  this.destroy();
}

/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @param {Object} [headers] Additional HTTP response headers
 * @private
 */
function abortHandshake(socket, code, message, headers) {
  //
  // The socket is writable unless the user destroyed or ended it before calling
  // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
  // error. Handling this does not make much sense as the worst that can happen
  // is that some of the data written by the user might be discarded due to the
  // call to `socket.end()` below, which triggers an `'error'` event that in
  // turn causes the socket to be destroyed.
  //
  message = message || http.STATUS_CODES[code];
  headers = {
    Connection: 'close',
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(message),
    ...headers
  };

  socket.once('finish', socket.destroy);

  socket.end(
    `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` +
      Object.keys(headers)
        .map((h) => `${h}: ${headers[h]}`)
        .join('\r\n') +
      '\r\n\r\n' +
      message
  );
}

/**
 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
 * one listener for it, otherwise call `abortHandshake()`.
 *
 * @param {WebSocketServer} server The WebSocket server
 * @param {http.IncomingMessage} req The request object
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} message The HTTP response body
 * @private
 */
function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
  if (server.listenerCount('wsClientError')) {
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);

    server.emit('wsClientError', err, socket, req);
  } else {
    abortHandshake(socket, code, message);
  }
}


/***/ }),

/***/ 6016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Readable$" }] */



const EventEmitter = __webpack_require__(2361);
const https = __webpack_require__(5687);
const http = __webpack_require__(3685);
const net = __webpack_require__(1808);
const tls = __webpack_require__(4404);
const { randomBytes, createHash } = __webpack_require__(6113);
const { Readable } = __webpack_require__(2781);
const { URL } = __webpack_require__(7310);

const PerMessageDeflate = __webpack_require__(6231);
const Receiver = __webpack_require__(8443);
const Sender = __webpack_require__(5762);
const {
  BINARY_TYPES,
  EMPTY_BUFFER,
  GUID,
  kForOnEventAttribute,
  kListener,
  kStatusCode,
  kWebSocket,
  NOOP
} = __webpack_require__(5540);
const {
  EventTarget: { addEventListener, removeEventListener }
} = __webpack_require__(4682);
const { format, parse } = __webpack_require__(6608);
const { toBuffer } = __webpack_require__(7734);

const closeTimeout = 30 * 1000;
const kAborted = Symbol('kAborted');
const protocolVersions = [8, 13];
const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */
class WebSocket extends EventEmitter {
  /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */
  constructor(address, protocols, options) {
    super();

    this._binaryType = BINARY_TYPES[0];
    this._closeCode = 1006;
    this._closeFrameReceived = false;
    this._closeFrameSent = false;
    this._closeMessage = EMPTY_BUFFER;
    this._closeTimer = null;
    this._extensions = {};
    this._paused = false;
    this._protocol = '';
    this._readyState = WebSocket.CONNECTING;
    this._receiver = null;
    this._sender = null;
    this._socket = null;

    if (address !== null) {
      this._bufferedAmount = 0;
      this._isServer = false;
      this._redirects = 0;

      if (protocols === undefined) {
        protocols = [];
      } else if (!Array.isArray(protocols)) {
        if (typeof protocols === 'object' && protocols !== null) {
          options = protocols;
          protocols = [];
        } else {
          protocols = [protocols];
        }
      }

      initAsClient(this, address, protocols, options);
    } else {
      this._isServer = true;
    }
  }

  /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */
  get binaryType() {
    return this._binaryType;
  }

  set binaryType(type) {
    if (!BINARY_TYPES.includes(type)) return;

    this._binaryType = type;

    //
    // Allow to change `binaryType` on the fly.
    //
    if (this._receiver) this._receiver._binaryType = type;
  }

  /**
   * @type {Number}
   */
  get bufferedAmount() {
    if (!this._socket) return this._bufferedAmount;

    return this._socket._writableState.length + this._sender._bufferedBytes;
  }

  /**
   * @type {String}
   */
  get extensions() {
    return Object.keys(this._extensions).join();
  }

  /**
   * @type {Boolean}
   */
  get isPaused() {
    return this._paused;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onclose() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onerror() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onopen() {
    return null;
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onmessage() {
    return null;
  }

  /**
   * @type {String}
   */
  get protocol() {
    return this._protocol;
  }

  /**
   * @type {Number}
   */
  get readyState() {
    return this._readyState;
  }

  /**
   * @type {String}
   */
  get url() {
    return this._url;
  }

  /**
   * Set up the socket and the internal resources.
   *
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */
  setSocket(socket, head, options) {
    const receiver = new Receiver({
      binaryType: this.binaryType,
      extensions: this._extensions,
      isServer: this._isServer,
      maxPayload: options.maxPayload,
      skipUTF8Validation: options.skipUTF8Validation
    });

    this._sender = new Sender(socket, this._extensions, options.generateMask);
    this._receiver = receiver;
    this._socket = socket;

    receiver[kWebSocket] = this;
    socket[kWebSocket] = this;

    receiver.on('conclude', receiverOnConclude);
    receiver.on('drain', receiverOnDrain);
    receiver.on('error', receiverOnError);
    receiver.on('message', receiverOnMessage);
    receiver.on('ping', receiverOnPing);
    receiver.on('pong', receiverOnPong);

    socket.setTimeout(0);
    socket.setNoDelay();

    if (head.length > 0) socket.unshift(head);

    socket.on('close', socketOnClose);
    socket.on('data', socketOnData);
    socket.on('end', socketOnEnd);
    socket.on('error', socketOnError);

    this._readyState = WebSocket.OPEN;
    this.emit('open');
  }

  /**
   * Emit the `'close'` event.
   *
   * @private
   */
  emitClose() {
    if (!this._socket) {
      this._readyState = WebSocket.CLOSED;
      this.emit('close', this._closeCode, this._closeMessage);
      return;
    }

    if (this._extensions[PerMessageDeflate.extensionName]) {
      this._extensions[PerMessageDeflate.extensionName].cleanup();
    }

    this._receiver.removeAllListeners();
    this._readyState = WebSocket.CLOSED;
    this.emit('close', this._closeCode, this._closeMessage);
  }

  /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */
  close(code, data) {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake(this, this._req, msg);
    }

    if (this.readyState === WebSocket.CLOSING) {
      if (
        this._closeFrameSent &&
        (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
      ) {
        this._socket.end();
      }

      return;
    }

    this._readyState = WebSocket.CLOSING;
    this._sender.close(code, data, !this._isServer, (err) => {
      //
      // This error is handled by the `'error'` listener on the socket. We only
      // want to know if the close frame has been sent here.
      //
      if (err) return;

      this._closeFrameSent = true;

      if (
        this._closeFrameReceived ||
        this._receiver._writableState.errorEmitted
      ) {
        this._socket.end();
      }
    });

    //
    // Specify a timeout for the closing handshake to complete.
    //
    this._closeTimer = setTimeout(
      this._socket.destroy.bind(this._socket),
      closeTimeout
    );
  }

  /**
   * Pause the socket.
   *
   * @public
   */
  pause() {
    if (
      this.readyState === WebSocket.CONNECTING ||
      this.readyState === WebSocket.CLOSED
    ) {
      return;
    }

    this._paused = true;
    this._socket.pause();
  }

  /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */
  ping(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */
  pong(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Resume the socket.
   *
   * @public
   */
  resume() {
    if (
      this.readyState === WebSocket.CONNECTING ||
      this.readyState === WebSocket.CLOSED
    ) {
      return;
    }

    this._paused = false;
    if (!this._receiver._writableState.needDrain) this._socket.resume();
  }

  /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */
  send(data, options, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    const opts = {
      binary: typeof data !== 'string',
      mask: !this._isServer,
      compress: true,
      fin: true,
      ...options
    };

    if (!this._extensions[PerMessageDeflate.extensionName]) {
      opts.compress = false;
    }

    this._sender.send(data || EMPTY_BUFFER, opts, cb);
  }

  /**
   * Forcibly close the connection.
   *
   * @public
   */
  terminate() {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake(this, this._req, msg);
    }

    if (this._socket) {
      this._readyState = WebSocket.CLOSING;
      this._socket.destroy();
    }
  }
}

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

[
  'binaryType',
  'bufferedAmount',
  'extensions',
  'isPaused',
  'protocol',
  'readyState',
  'url'
].forEach((property) => {
  Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
});

//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
['open', 'error', 'close', 'message'].forEach((method) => {
  Object.defineProperty(WebSocket.prototype, `on${method}`, {
    enumerable: true,
    get() {
      for (const listener of this.listeners(method)) {
        if (listener[kForOnEventAttribute]) return listener[kListener];
      }

      return null;
    },
    set(handler) {
      for (const listener of this.listeners(method)) {
        if (listener[kForOnEventAttribute]) {
          this.removeListener(method, listener);
          break;
        }
      }

      if (typeof handler !== 'function') return;

      this.addEventListener(method, handler, {
        [kForOnEventAttribute]: true
      });
    }
  });
});

WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;

module.exports = WebSocket;

/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */
function initAsClient(websocket, address, protocols, options) {
  const opts = {
    protocolVersion: protocolVersions[1],
    maxPayload: 100 * 1024 * 1024,
    skipUTF8Validation: false,
    perMessageDeflate: true,
    followRedirects: false,
    maxRedirects: 10,
    ...options,
    createConnection: undefined,
    socketPath: undefined,
    hostname: undefined,
    protocol: undefined,
    timeout: undefined,
    method: 'GET',
    host: undefined,
    path: undefined,
    port: undefined
  };

  if (!protocolVersions.includes(opts.protocolVersion)) {
    throw new RangeError(
      `Unsupported protocol version: ${opts.protocolVersion} ` +
        `(supported versions: ${protocolVersions.join(', ')})`
    );
  }

  let parsedUrl;

  if (address instanceof URL) {
    parsedUrl = address;
    websocket._url = address.href;
  } else {
    try {
      parsedUrl = new URL(address);
    } catch (e) {
      throw new SyntaxError(`Invalid URL: ${address}`);
    }

    websocket._url = address;
  }

  const isSecure = parsedUrl.protocol === 'wss:';
  const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
  let invalidUrlMessage;

  if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
    invalidUrlMessage =
      'The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"';
  } else if (isIpcUrl && !parsedUrl.pathname) {
    invalidUrlMessage = "The URL's pathname is empty";
  } else if (parsedUrl.hash) {
    invalidUrlMessage = 'The URL contains a fragment identifier';
  }

  if (invalidUrlMessage) {
    const err = new SyntaxError(invalidUrlMessage);

    if (websocket._redirects === 0) {
      throw err;
    } else {
      emitErrorAndClose(websocket, err);
      return;
    }
  }

  const defaultPort = isSecure ? 443 : 80;
  const key = randomBytes(16).toString('base64');
  const request = isSecure ? https.request : http.request;
  const protocolSet = new Set();
  let perMessageDeflate;

  opts.createConnection = isSecure ? tlsConnect : netConnect;
  opts.defaultPort = opts.defaultPort || defaultPort;
  opts.port = parsedUrl.port || defaultPort;
  opts.host = parsedUrl.hostname.startsWith('[')
    ? parsedUrl.hostname.slice(1, -1)
    : parsedUrl.hostname;
  opts.headers = {
    ...opts.headers,
    'Sec-WebSocket-Version': opts.protocolVersion,
    'Sec-WebSocket-Key': key,
    Connection: 'Upgrade',
    Upgrade: 'websocket'
  };
  opts.path = parsedUrl.pathname + parsedUrl.search;
  opts.timeout = opts.handshakeTimeout;

  if (opts.perMessageDeflate) {
    perMessageDeflate = new PerMessageDeflate(
      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
      false,
      opts.maxPayload
    );
    opts.headers['Sec-WebSocket-Extensions'] = format({
      [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
    });
  }
  if (protocols.length) {
    for (const protocol of protocols) {
      if (
        typeof protocol !== 'string' ||
        !subprotocolRegex.test(protocol) ||
        protocolSet.has(protocol)
      ) {
        throw new SyntaxError(
          'An invalid or duplicated subprotocol was specified'
        );
      }

      protocolSet.add(protocol);
    }

    opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
  }
  if (opts.origin) {
    if (opts.protocolVersion < 13) {
      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
    } else {
      opts.headers.Origin = opts.origin;
    }
  }
  if (parsedUrl.username || parsedUrl.password) {
    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
  }

  if (isIpcUrl) {
    const parts = opts.path.split(':');

    opts.socketPath = parts[0];
    opts.path = parts[1];
  }

  let req;

  if (opts.followRedirects) {
    if (websocket._redirects === 0) {
      websocket._originalIpc = isIpcUrl;
      websocket._originalSecure = isSecure;
      websocket._originalHostOrSocketPath = isIpcUrl
        ? opts.socketPath
        : parsedUrl.host;

      const headers = options && options.headers;

      //
      // Shallow copy the user provided options so that headers can be changed
      // without mutating the original object.
      //
      options = { ...options, headers: {} };

      if (headers) {
        for (const [key, value] of Object.entries(headers)) {
          options.headers[key.toLowerCase()] = value;
        }
      }
    } else if (websocket.listenerCount('redirect') === 0) {
      const isSameHost = isIpcUrl
        ? websocket._originalIpc
          ? opts.socketPath === websocket._originalHostOrSocketPath
          : false
        : websocket._originalIpc
        ? false
        : parsedUrl.host === websocket._originalHostOrSocketPath;

      if (!isSameHost || (websocket._originalSecure && !isSecure)) {
        //
        // Match curl 7.77.0 behavior and drop the following headers. These
        // headers are also dropped when following a redirect to a subdomain.
        //
        delete opts.headers.authorization;
        delete opts.headers.cookie;

        if (!isSameHost) delete opts.headers.host;

        opts.auth = undefined;
      }
    }

    //
    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
    // If the `Authorization` header is set, then there is nothing to do as it
    // will take precedence.
    //
    if (opts.auth && !options.headers.authorization) {
      options.headers.authorization =
        'Basic ' + Buffer.from(opts.auth).toString('base64');
    }

    req = websocket._req = request(opts);

    if (websocket._redirects) {
      //
      // Unlike what is done for the `'upgrade'` event, no early exit is
      // triggered here if the user calls `websocket.close()` or
      // `websocket.terminate()` from a listener of the `'redirect'` event. This
      // is because the user can also call `request.destroy()` with an error
      // before calling `websocket.close()` or `websocket.terminate()` and this
      // would result in an error being emitted on the `request` object with no
      // `'error'` event listeners attached.
      //
      websocket.emit('redirect', websocket.url, req);
    }
  } else {
    req = websocket._req = request(opts);
  }

  if (opts.timeout) {
    req.on('timeout', () => {
      abortHandshake(websocket, req, 'Opening handshake has timed out');
    });
  }

  req.on('error', (err) => {
    if (req === null || req[kAborted]) return;

    req = websocket._req = null;
    emitErrorAndClose(websocket, err);
  });

  req.on('response', (res) => {
    const location = res.headers.location;
    const statusCode = res.statusCode;

    if (
      location &&
      opts.followRedirects &&
      statusCode >= 300 &&
      statusCode < 400
    ) {
      if (++websocket._redirects > opts.maxRedirects) {
        abortHandshake(websocket, req, 'Maximum redirects exceeded');
        return;
      }

      req.abort();

      let addr;

      try {
        addr = new URL(location, address);
      } catch (e) {
        const err = new SyntaxError(`Invalid URL: ${location}`);
        emitErrorAndClose(websocket, err);
        return;
      }

      initAsClient(websocket, addr, protocols, options);
    } else if (!websocket.emit('unexpected-response', req, res)) {
      abortHandshake(
        websocket,
        req,
        `Unexpected server response: ${res.statusCode}`
      );
    }
  });

  req.on('upgrade', (res, socket, head) => {
    websocket.emit('upgrade', res);

    //
    // The user may have closed the connection from a listener of the
    // `'upgrade'` event.
    //
    if (websocket.readyState !== WebSocket.CONNECTING) return;

    req = websocket._req = null;

    if (res.headers.upgrade.toLowerCase() !== 'websocket') {
      abortHandshake(websocket, socket, 'Invalid Upgrade header');
      return;
    }

    const digest = createHash('sha1')
      .update(key + GUID)
      .digest('base64');

    if (res.headers['sec-websocket-accept'] !== digest) {
      abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
      return;
    }

    const serverProt = res.headers['sec-websocket-protocol'];
    let protError;

    if (serverProt !== undefined) {
      if (!protocolSet.size) {
        protError = 'Server sent a subprotocol but none was requested';
      } else if (!protocolSet.has(serverProt)) {
        protError = 'Server sent an invalid subprotocol';
      }
    } else if (protocolSet.size) {
      protError = 'Server sent no subprotocol';
    }

    if (protError) {
      abortHandshake(websocket, socket, protError);
      return;
    }

    if (serverProt) websocket._protocol = serverProt;

    const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

    if (secWebSocketExtensions !== undefined) {
      if (!perMessageDeflate) {
        const message =
          'Server sent a Sec-WebSocket-Extensions header but no extension ' +
          'was requested';
        abortHandshake(websocket, socket, message);
        return;
      }

      let extensions;

      try {
        extensions = parse(secWebSocketExtensions);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake(websocket, socket, message);
        return;
      }

      const extensionNames = Object.keys(extensions);

      if (
        extensionNames.length !== 1 ||
        extensionNames[0] !== PerMessageDeflate.extensionName
      ) {
        const message = 'Server indicated an extension that was not requested';
        abortHandshake(websocket, socket, message);
        return;
      }

      try {
        perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake(websocket, socket, message);
        return;
      }

      websocket._extensions[PerMessageDeflate.extensionName] =
        perMessageDeflate;
    }

    websocket.setSocket(socket, head, {
      generateMask: opts.generateMask,
      maxPayload: opts.maxPayload,
      skipUTF8Validation: opts.skipUTF8Validation
    });
  });

  req.end();
}

/**
 * Emit the `'error'` and `'close'` events.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */
function emitErrorAndClose(websocket, err) {
  websocket._readyState = WebSocket.CLOSING;
  websocket.emit('error', err);
  websocket.emitClose();
}

/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */
function netConnect(options) {
  options.path = options.socketPath;
  return net.connect(options);
}

/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */
function tlsConnect(options) {
  options.path = undefined;

  if (!options.servername && options.servername !== '') {
    options.servername = net.isIP(options.host) ? '' : options.host;
  }

  return tls.connect(options);
}

/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */
function abortHandshake(websocket, stream, message) {
  websocket._readyState = WebSocket.CLOSING;

  const err = new Error(message);
  Error.captureStackTrace(err, abortHandshake);

  if (stream.setHeader) {
    stream[kAborted] = true;
    stream.abort();

    if (stream.socket && !stream.socket.destroyed) {
      //
      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
      // called after the request completed. See
      // https://github.com/websockets/ws/issues/1869.
      //
      stream.socket.destroy();
    }

    process.nextTick(emitErrorAndClose, websocket, err);
  } else {
    stream.destroy(err);
    stream.once('error', websocket.emit.bind(websocket, 'error'));
    stream.once('close', websocket.emitClose.bind(websocket));
  }
}

/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */
function sendAfterClose(websocket, data, cb) {
  if (data) {
    const length = toBuffer(data).length;

    //
    // The `_bufferedAmount` property is used only when the peer is a client and
    // the opening handshake fails. Under these circumstances, in fact, the
    // `setSocket()` method is not called, so the `_socket` and `_sender`
    // properties are set to `null`.
    //
    if (websocket._socket) websocket._sender._bufferedBytes += length;
    else websocket._bufferedAmount += length;
  }

  if (cb) {
    const err = new Error(
      `WebSocket is not open: readyState ${websocket.readyState} ` +
        `(${readyStates[websocket.readyState]})`
    );
    cb(err);
  }
}

/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */
function receiverOnConclude(code, reason) {
  const websocket = this[kWebSocket];

  websocket._closeFrameReceived = true;
  websocket._closeMessage = reason;
  websocket._closeCode = code;

  if (websocket._socket[kWebSocket] === undefined) return;

  websocket._socket.removeListener('data', socketOnData);
  process.nextTick(resume, websocket._socket);

  if (code === 1005) websocket.close();
  else websocket.close(code, reason);
}

/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */
function receiverOnDrain() {
  const websocket = this[kWebSocket];

  if (!websocket.isPaused) websocket._socket.resume();
}

/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */
function receiverOnError(err) {
  const websocket = this[kWebSocket];

  if (websocket._socket[kWebSocket] !== undefined) {
    websocket._socket.removeListener('data', socketOnData);

    //
    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
    // https://github.com/websockets/ws/issues/1940.
    //
    process.nextTick(resume, websocket._socket);

    websocket.close(err[kStatusCode]);
  }

  websocket.emit('error', err);
}

/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */
function receiverOnFinish() {
  this[kWebSocket].emitClose();
}

/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */
function receiverOnMessage(data, isBinary) {
  this[kWebSocket].emit('message', data, isBinary);
}

/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */
function receiverOnPing(data) {
  const websocket = this[kWebSocket];

  websocket.pong(data, !websocket._isServer, NOOP);
  websocket.emit('ping', data);
}

/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */
function receiverOnPong(data) {
  this[kWebSocket].emit('pong', data);
}

/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */
function resume(stream) {
  stream.resume();
}

/**
 * The listener of the `net.Socket` `'close'` event.
 *
 * @private
 */
function socketOnClose() {
  const websocket = this[kWebSocket];

  this.removeListener('close', socketOnClose);
  this.removeListener('data', socketOnData);
  this.removeListener('end', socketOnEnd);

  websocket._readyState = WebSocket.CLOSING;

  let chunk;

  //
  // The close frame might not have been received or the `'end'` event emitted,
  // for example, if the socket was destroyed due to an error. Ensure that the
  // `receiver` stream is closed after writing any remaining buffered data to
  // it. If the readable side of the socket is in flowing mode then there is no
  // buffered data as everything has been already written and `readable.read()`
  // will return `null`. If instead, the socket is paused, any possible buffered
  // data will be read as a single chunk.
  //
  if (
    !this._readableState.endEmitted &&
    !websocket._closeFrameReceived &&
    !websocket._receiver._writableState.errorEmitted &&
    (chunk = websocket._socket.read()) !== null
  ) {
    websocket._receiver.write(chunk);
  }

  websocket._receiver.end();

  this[kWebSocket] = undefined;

  clearTimeout(websocket._closeTimer);

  if (
    websocket._receiver._writableState.finished ||
    websocket._receiver._writableState.errorEmitted
  ) {
    websocket.emitClose();
  } else {
    websocket._receiver.on('error', receiverOnFinish);
    websocket._receiver.on('finish', receiverOnFinish);
  }
}

/**
 * The listener of the `net.Socket` `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function socketOnData(chunk) {
  if (!this[kWebSocket]._receiver.write(chunk)) {
    this.pause();
  }
}

/**
 * The listener of the `net.Socket` `'end'` event.
 *
 * @private
 */
function socketOnEnd() {
  const websocket = this[kWebSocket];

  websocket._readyState = WebSocket.CLOSING;
  websocket._receiver.end();
  this.end();
}

/**
 * The listener of the `net.Socket` `'error'` event.
 *
 * @private
 */
function socketOnError() {
  const websocket = this[kWebSocket];

  this.removeListener('error', socketOnError);
  this.on('error', NOOP);

  if (websocket) {
    websocket._readyState = WebSocket.CLOSING;
    this.destroy();
  }
}


/***/ }),

/***/ 6097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */

var fs = __webpack_require__(7147);
var Url = __webpack_require__(7310);
var spawn = (__webpack_require__(2081).spawn);

/**
 * Module exports.
 */

module.exports = XMLHttpRequest;

// backwards-compat
XMLHttpRequest.XMLHttpRequest = XMLHttpRequest;

/**
 * `XMLHttpRequest` constructor.
 *
 * Supported options for the `opts` object are:
 *
 *  - `agent`: An http.Agent instance; http.globalAgent may be used; if 'undefined', agent usage is disabled
 *
 * @param {Object} opts optional "options" object
 */

function XMLHttpRequest(opts) {
  "use strict";

  opts = opts || {};

  /**
   * Private variables
   */
  var self = this;
  var http = __webpack_require__(3685);
  var https = __webpack_require__(5687);

  // Holds http.js objects
  var request;
  var response;

  // Request settings
  var settings = {};

  // Disable header blacklist.
  // Not part of XHR specs.
  var disableHeaderCheck = false;

  // Set some default headers
  var defaultHeaders = {
    "User-Agent": "node-XMLHttpRequest",
    "Accept": "*/*"
  };

  var headers = Object.assign({}, defaultHeaders);

  // These headers are not user setable.
  // The following are allowed but banned in the spec:
  // * user-agent
  var forbiddenRequestHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "content-transfer-encoding",
    "cookie",
    "cookie2",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via"
  ];

  // These request methods are not allowed
  var forbiddenRequestMethods = [
    "TRACE",
    "TRACK",
    "CONNECT"
  ];

  // Send flag
  var sendFlag = false;
  // Error flag, used when errors occur or abort is called
  var errorFlag = false;
  var abortedFlag = false;

  // Event listeners
  var listeners = {};

  /**
   * Constants
   */

  this.UNSENT = 0;
  this.OPENED = 1;
  this.HEADERS_RECEIVED = 2;
  this.LOADING = 3;
  this.DONE = 4;

  /**
   * Public vars
   */

  // Current state
  this.readyState = this.UNSENT;

  // default ready state change handler in case one is not set or is set late
  this.onreadystatechange = null;

  // Result & response
  this.responseText = "";
  this.responseXML = "";
  this.status = null;
  this.statusText = null;

  /**
   * Private methods
   */

  /**
   * Check if the specified header is allowed.
   *
   * @param string header Header to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpHeader = function(header) {
    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
  };

  /**
   * Check if the specified method is allowed.
   *
   * @param string method Request method to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpMethod = function(method) {
    return (method && forbiddenRequestMethods.indexOf(method) === -1);
  };

  /**
   * Public methods
   */

  /**
   * Open the connection. Currently supports local server requests.
   *
   * @param string method Connection method (eg GET, POST)
   * @param string url URL for the connection.
   * @param boolean async Asynchronous connection. Default is true.
   * @param string user Username for basic authentication (optional)
   * @param string password Password for basic authentication (optional)
   */
  this.open = function(method, url, async, user, password) {
    this.abort();
    errorFlag = false;
    abortedFlag = false;

    // Check for valid request method
    if (!isAllowedHttpMethod(method)) {
      throw new Error("SecurityError: Request method not allowed");
    }

    settings = {
      "method": method,
      "url": url.toString(),
      "async": (typeof async !== "boolean" ? true : async),
      "user": user || null,
      "password": password || null
    };

    setState(this.OPENED);
  };

  /**
   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
   * This does not conform to the W3C spec.
   *
   * @param boolean state Enable or disable header checking.
   */
  this.setDisableHeaderCheck = function(state) {
    disableHeaderCheck = state;
  };

  /**
   * Sets a header for the request.
   *
   * @param string header Header name
   * @param string value Header value
   * @return boolean Header added
   */
  this.setRequestHeader = function(header, value) {
    if (this.readyState != this.OPENED) {
      throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
    }
    if (!isAllowedHttpHeader(header)) {
      console.warn('Refused to set unsafe header "' + header + '"');
      return false;
    }
    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send flag is true");
    }
    headers[header] = value;
    return true;
  };

  /**
   * Gets a header from the server response.
   *
   * @param string header Name of header to get.
   * @return string Text of the header or null if it doesn't exist.
   */
  this.getResponseHeader = function(header) {
    if (typeof header === "string"
      && this.readyState > this.OPENED
      && response.headers[header.toLowerCase()]
      && !errorFlag
    ) {
      return response.headers[header.toLowerCase()];
    }

    return null;
  };

  /**
   * Gets all the response headers.
   *
   * @return string A string with all response headers separated by CR+LF
   */
  this.getAllResponseHeaders = function() {
    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
      return "";
    }
    var result = "";

    for (var i in response.headers) {
      // Cookie headers are excluded
      if (i !== "set-cookie" && i !== "set-cookie2") {
        result += i + ": " + response.headers[i] + "\r\n";
      }
    }
    return result.substr(0, result.length - 2);
  };

  /**
   * Gets a request header
   *
   * @param string name Name of header to get
   * @return string Returns the request header or empty string if not set
   */
  this.getRequestHeader = function(name) {
    // @TODO Make this case insensitive
    if (typeof name === "string" && headers[name]) {
      return headers[name];
    }

    return "";
  };

  /**
   * Sends the request to the server.
   *
   * @param string data Optional data to send as request body.
   */
  this.send = function(data) {
    if (this.readyState != this.OPENED) {
      throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
    }

    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send has already been called");
    }

    var ssl = false, local = false;
    var url = Url.parse(settings.url);
    var host;
    // Determine the server
    switch (url.protocol) {
      case 'https:':
        ssl = true;
        // SSL & non-SSL both need host, no break here.
      case 'http:':
        host = url.hostname;
        break;

      case 'file:':
        local = true;
        break;

      case undefined:
      case '':
        host = "localhost";
        break;

      default:
        throw new Error("Protocol not supported.");
    }

    // Load files off the local filesystem (file://)
    if (local) {
      if (settings.method !== "GET") {
        throw new Error("XMLHttpRequest: Only GET method is supported");
      }

      if (settings.async) {
        fs.readFile(unescape(url.pathname), 'utf8', function(error, data) {
          if (error) {
            self.handleError(error, error.errno || -1);
          } else {
            self.status = 200;
            self.responseText = data;
            setState(self.DONE);
          }
        });
      } else {
        try {
          this.responseText = fs.readFileSync(unescape(url.pathname), 'utf8');
          this.status = 200;
          setState(self.DONE);
        } catch(e) {
          this.handleError(e, e.errno || -1);
        }
      }

      return;
    }

    // Default to port 80. If accessing localhost on another port be sure
    // to use http://localhost:port/path
    var port = url.port || (ssl ? 443 : 80);
    // Add query string if one is used
    var uri = url.pathname + (url.search ? url.search : '');

    // Set the Host header or the server may reject the request
    headers["Host"] = host;
    if (!((ssl && port === 443) || port === 80)) {
      headers["Host"] += ':' + url.port;
    }

    // Set Basic Auth if necessary
    if (settings.user) {
      if (typeof settings.password == "undefined") {
        settings.password = "";
      }
      var authBuf = new Buffer(settings.user + ":" + settings.password);
      headers["Authorization"] = "Basic " + authBuf.toString("base64");
    }

    // Set content length header
    if (settings.method === "GET" || settings.method === "HEAD") {
      data = null;
    } else if (data) {
      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    } else if (settings.method === "POST") {
      // For a post with no data set Content-Length: 0.
      // This is required by buggy servers that don't meet the specs.
      headers["Content-Length"] = 0;
    }

    var agent = opts.agent || false;
    var options = {
      host: host,
      port: port,
      path: uri,
      method: settings.method,
      headers: headers,
      agent: agent
    };

    if (ssl) {
      options.pfx = opts.pfx;
      options.key = opts.key;
      options.passphrase = opts.passphrase;
      options.cert = opts.cert;
      options.ca = opts.ca;
      options.ciphers = opts.ciphers;
      options.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
    }

    // Reset error flag
    errorFlag = false;
    // Handle async requests
    if (settings.async) {
      // Use the proper protocol
      var doRequest = ssl ? https.request : http.request;

      // Request is being sent, set send flag
      sendFlag = true;

      // As per spec, this is called here for historical reasons.
      self.dispatchEvent("readystatechange");

      // Handler for the response
      var responseHandler = function(resp) {
        // Set response var to the response we got back
        // This is so it remains accessable outside this scope
        response = resp;
        // Check for redirect
        // @TODO Prevent looped redirects
        if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
          // Change URL to the redirect location
          settings.url = response.headers.location;
          var url = Url.parse(settings.url);
          // Set host var in case it's used later
          host = url.hostname;
          // Options for the new request
          var newOptions = {
            hostname: url.hostname,
            port: url.port,
            path: url.path,
            method: response.statusCode === 303 ? 'GET' : settings.method,
            headers: headers
          };

          if (ssl) {
            newOptions.pfx = opts.pfx;
            newOptions.key = opts.key;
            newOptions.passphrase = opts.passphrase;
            newOptions.cert = opts.cert;
            newOptions.ca = opts.ca;
            newOptions.ciphers = opts.ciphers;
            newOptions.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
          }

          // Issue the new request
          request = doRequest(newOptions, responseHandler).on('error', errorHandler);
          request.end();
          // @TODO Check if an XHR event needs to be fired here
          return;
        }

        if (response && response.setEncoding) {
          response.setEncoding("utf8");
        }

        setState(self.HEADERS_RECEIVED);
        self.status = response.statusCode;

        response.on('data', function(chunk) {
          // Make sure there's some data
          if (chunk) {
            self.responseText += chunk;
          }
          // Don't emit state changes if the connection has been aborted.
          if (sendFlag) {
            setState(self.LOADING);
          }
        });

        response.on('end', function() {
          if (sendFlag) {
            // The sendFlag needs to be set before setState is called.  Otherwise if we are chaining callbacks
            // there can be a timing issue (the callback is called and a new call is made before the flag is reset).
            sendFlag = false;
            // Discard the 'end' event if the connection has been aborted
            setState(self.DONE);
          }
        });

        response.on('error', function(error) {
          self.handleError(error);
        });
      }

      // Error handler for the request
      var errorHandler = function(error) {
        self.handleError(error);
      }

      // Create the request
      request = doRequest(options, responseHandler).on('error', errorHandler);

      if (opts.autoUnref) {
        request.on('socket', (socket) => {
          socket.unref();
        });
      }

      // Node 0.4 and later won't accept empty data. Make sure it's needed.
      if (data) {
        request.write(data);
      }

      request.end();

      self.dispatchEvent("loadstart");
    } else { // Synchronous
      // Create a temporary file for communication with the other Node process
      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
      fs.writeFileSync(syncFile, "", "utf8");
      // The async request the other Node process executes
      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
        + "var options = " + JSON.stringify(options) + ";"
        + "var responseText = '';"
        + "var req = doRequest(options, function(response) {"
        + "response.setEncoding('utf8');"
        + "response.on('data', function(chunk) {"
        + "  responseText += chunk;"
        + "});"
        + "response.on('end', function() {"
        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "response.on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "}).on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + (data ? "req.write('" + JSON.stringify(data).slice(1,-1).replace(/'/g, "\\'") + "');":"")
        + "req.end();";
      // Start the other Node Process, executing this string
      var syncProc = spawn(process.argv[0], ["-e", execString]);
      var statusText;
      while(fs.existsSync(syncFile)) {
        // Wait while the sync file is empty
      }
      self.responseText = fs.readFileSync(contentFile, 'utf8');
      // Kill the child process once the file has data
      syncProc.stdin.end();
      // Remove the temporary file
      fs.unlinkSync(contentFile);
      if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
        // If the file returned an error, handle it
        var errorObj = self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, "");
        self.handleError(errorObj, 503);
      } else {
        // If the file returned okay, parse its data and move to the DONE state
        self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
        self.responseText = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1");
        setState(self.DONE);
      }
    }
  };

  /**
   * Called when an error is encountered to deal with it.
   * @param  status  {number}    HTTP status code to use rather than the default (0) for XHR errors.
   */
  this.handleError = function(error, status) {
    this.status = status || 0;
    this.statusText = error;
    this.responseText = error.stack;
    errorFlag = true;
    setState(this.DONE);
  };

  /**
   * Aborts a request.
   */
  this.abort = function() {
    if (request) {
      request.abort();
      request = null;
    }

    headers = Object.assign({}, defaultHeaders);
    this.responseText = "";
    this.responseXML = "";

    errorFlag = abortedFlag = true
    if (this.readyState !== this.UNSENT
        && (this.readyState !== this.OPENED || sendFlag)
        && this.readyState !== this.DONE) {
      sendFlag = false;
      setState(this.DONE);
    }
    this.readyState = this.UNSENT;
  };

  /**
   * Adds an event listener. Preferred method of binding to events.
   */
  this.addEventListener = function(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = [];
    }
    // Currently allows duplicate callbacks. Should it?
    listeners[event].push(callback);
  };

  /**
   * Remove an event callback that has already been bound.
   * Only works on the matching funciton, cannot be a copy.
   */
  this.removeEventListener = function(event, callback) {
    if (event in listeners) {
      // Filter will return a new array with the callback removed
      listeners[event] = listeners[event].filter(function(ev) {
        return ev !== callback;
      });
    }
  };

  /**
   * Dispatch any events, including both "on" methods and events attached using addEventListener.
   */
  this.dispatchEvent = function(event) {
    if (typeof self["on" + event] === "function") {
      if (this.readyState === this.DONE)
        setImmediate(function() { self["on" + event]() })
      else
        self["on" + event]()
    }
    if (event in listeners) {
      for (let i = 0, len = listeners[event].length; i < len; i++) {
        if (this.readyState === this.DONE)
          setImmediate(function() { listeners[event][i].call(self) })
        else
          listeners[event][i].call(self)
      }
    }
  };

  /**
   * Changes readyState and calls onreadystatechange.
   *
   * @param int state New state
   */
  var setState = function(state) {
    if ((self.readyState === state) || (self.readyState === self.UNSENT && abortedFlag))
      return

    self.readyState = state;

    if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
      self.dispatchEvent("readystatechange");
    }

    if (self.readyState === self.DONE) {
      let fire

      if (abortedFlag)
        fire = "abort"
      else if (errorFlag)
        fire = "error"
      else
        fire = "load"

      self.dispatchEvent(fire)

      // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
      self.dispatchEvent("loadend");
    }
  };
};


/***/ }),

/***/ 777:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ St)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react_, 2);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(8118);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(1147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(1464);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard_o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(keyboard_o||{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(3652);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var use_server_handoff_complete = __webpack_require__(5650);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var env = __webpack_require__(3957);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var o;let I=(o=react_.useId)!=null?o:function(){let n=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)(),[e,u]=react_.useState(n?()=>env/* env.nextId */.O.nextId():null);return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{e===null&&u(env/* env.nextId */.O.nextId())},[e]),e!=null?""+e:void 0};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
let a="div";var hidden_p=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(hidden_p||{});function s(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return (0,render/* render */.sY)({ourProps:d,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}let hidden_c=(0,render/* forwardRefWithAs */.yV)(s);

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
function owner_e(r){return env/* env.isServer */.O.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L=(r=>(r[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r))(L||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),T=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(T||{});function E(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(F||{});function h(e,t=0){var n;return e===((n=owner_e(e))==null?void 0:n.body)?!1:(0,match/* match */.E)(t,{[0](){return e.matches(f)},[1](){let l=e;for(;l!==null;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function g(e){let t=m(e);b().nextFrame(()=>{t&&!h(t.activeElement,0)&&S(e)})}function S(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function w(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?n:!1}function A(e,t=n=>n){return e.slice().sort((n,l)=>{let o=t(n),i=t(l);if(o===null||i===null)return 0;let r=o.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function v(e,t){return focus_management_I(E(),t,{relativeTo:e})}function focus_management_I(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,r=Array.isArray(e)?n?A(e):e:E(e);o.length>0&&r.length>1&&(r=r.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(l))-1;if(t&4)return Math.max(0,r.indexOf(l))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},c=0,a=r.length,u;do{if(c>=a||c+a<=0)return 0;let s=x+c;if(t&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=r[s],u==null||u.focus(p),c+=d}while(u!==i.activeElement);return t&6&&w(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(2264);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(4612);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-window-event.js
function use_window_event_s(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var use_tab_direction_s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_s||{});function use_tab_direction_n(){let e=(0,react_.useRef)(0);return use_window_event_s("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var use_is_mounted = __webpack_require__(3984);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-owner.js
function use_owner_n(...e){return (0,react_.useMemo)(()=>owner_e(...e),[...e])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js
function use_event_listener_E(n,e,a,t){let i=(0,use_latest_value/* useLatestValue */.E)(a);(0,react_.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/micro-task.js
var micro_task = __webpack_require__(8571);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-watch.js
function use_watch_m(u,t){let e=(0,react_.useRef)([]),r=(0,use_event/* useEvent */.z)(u);(0,react_.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(8060);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let n=new Set;for(let e of t.current)e.current instanceof HTMLElement&&n.add(e.current);return n}let J="div";var focus_trap_h=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(focus_trap_h||{});function X(t,n){let e=(0,react_.useRef)(null),o=(0,use_sync_refs/* useSyncRefs */.T)(e,n),{initialFocus:u,containers:i,features:r=30,...l}=t;(0,use_server_handoff_complete/* useServerHandoffComplete */.H)()||(r=1);let m=use_owner_n(e);Q({ownerDocument:m},Boolean(r&16));let c=Y({ownerDocument:m,container:e,initialFocus:u},Boolean(r&2));Z({ownerDocument:m,container:e,containers:i,previousActiveElement:c},Boolean(r&8));let v=use_tab_direction_n(),R=(0,use_event/* useEvent */.z)(s=>{let T=e.current;if(!T)return;(B=>B())(()=>{(0,match/* match */.E)(v.current,{[use_tab_direction_s.Forwards]:()=>{focus_management_I(T,L.First,{skipElements:[s.relatedTarget]})},[use_tab_direction_s.Backwards]:()=>{focus_management_I(T,L.Last,{skipElements:[s.relatedTarget]})}})})}),_=(0,use_disposables/* useDisposables */.G)(),H=(0,react_.useRef)(!1),j={ref:o,onKeyDown(s){s.key=="Tab"&&(H.current=!0,_.requestAnimationFrame(()=>{H.current=!1}))},onBlur(s){let T=P(i);e.current instanceof HTMLElement&&T.add(e.current);let E=s.relatedTarget;E instanceof HTMLElement&&E.dataset.headlessuiFocusGuard!=="true"&&(focus_trap_S(T,E)||(H.current?focus_management_I(e.current,(0,match/* match */.E)(v.current,{[use_tab_direction_s.Forwards]:()=>L.Next,[use_tab_direction_s.Backwards]:()=>L.Previous})|L.WrapAround,{relativeTo:s.target}):s.target instanceof HTMLElement&&S(s.target)))}};return react_.createElement(react_.Fragment,null,Boolean(r&4)&&react_.createElement(hidden_c,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:hidden_p.Focusable}),(0,render/* render */.sY)({ourProps:j,theirProps:l,defaultTag:J,name:"FocusTrap"}),Boolean(r&4)&&react_.createElement(hidden_c,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:hidden_p.Focusable}))}let z=(0,render/* forwardRefWithAs */.yV)(X),ye=Object.assign(z,{features:focus_trap_h}),focus_trap_a=[];if(typeof window!="undefined"&&typeof document!="undefined"){let t=function(n){n.target instanceof HTMLElement&&n.target!==document.body&&focus_trap_a[0]!==n.target&&(focus_trap_a.unshift(n.target),focus_trap_a=focus_trap_a.filter(e=>e!=null&&e.isConnected),focus_trap_a.splice(10))};var handle=t;window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})}function D(t=!0){let n=(0,react_.useRef)(focus_trap_a.slice());return use_watch_m(([e],[o])=>{o===!0&&e===!1&&(0,micro_task/* microTask */.Y)(()=>{n.current.splice(0)}),o===!1&&e===!0&&(n.current=focus_trap_a.slice())},[t,focus_trap_a,n]),(0,use_event/* useEvent */.z)(()=>{var e;return(e=n.current.find(o=>o!=null&&o.isConnected))!=null?e:null})}function Q({ownerDocument:t},n){let e=D(n);use_watch_m(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&S(e())},[n]);let o=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>(o.current=!1,()=>{o.current=!0,(0,micro_task/* microTask */.Y)(()=>{o.current&&S(e())})}),[])}function Y({ownerDocument:t,container:n,initialFocus:e},o){let u=(0,react_.useRef)(null),i=(0,use_is_mounted/* useIsMounted */.t)();return use_watch_m(()=>{if(!o)return;let r=n.current;r&&(0,micro_task/* microTask */.Y)(()=>{if(!i.current)return;let l=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===l){u.current=l;return}}else if(r.contains(l)){u.current=l;return}e!=null&&e.current?S(e.current):focus_management_I(r,L.First)===N.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=t==null?void 0:t.activeElement})},[o]),u}function Z({ownerDocument:t,container:n,containers:e,previousActiveElement:o},u){let i=(0,use_is_mounted/* useIsMounted */.t)();use_event_listener_E(t==null?void 0:t.defaultView,"focus",r=>{if(!u||!i.current)return;let l=P(e);n.current instanceof HTMLElement&&l.add(n.current);let m=o.current;if(!m)return;let c=r.target;c&&c instanceof HTMLElement?focus_trap_S(l,c)?(o.current=c,S(c)):(r.preventDefault(),r.stopPropagation(),S(m)):S(o.current)},!0)}function focus_trap_S(t,n){for(let e of t)if(e.contains(n))return!0;return!1}

// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(8704);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/portal-force-root.js
let e=(0,react_.createContext)(!1);function portal_force_root_l(){return (0,react_.useContext)(e)}function portal_force_root_P(o){return react_.createElement(e.Provider,{value:o.force},o.children)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/portal/portal.js
function portal_H(u){let a=portal_force_root_l(),o=(0,react_.useContext)(c),e=use_owner_n(u),[l,n]=(0,react_.useState)(()=>{if(!a&&o!==null||env/* env.isServer */.O.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return (0,react_.useEffect)(()=>{l!==null&&(e!=null&&e.body.contains(l)||e==null||e.body.appendChild(l))},[l,e]),(0,react_.useEffect)(()=>{a||o!==null&&n(o.current)},[o,n,a]),l}let O=react_.Fragment;function _(u,a){let o=u,e=(0,react_.useRef)(null),l=(0,use_sync_refs/* useSyncRefs */.T)((0,use_sync_refs/* optionalRef */.h)(p=>{e.current=p}),a),n=use_owner_n(e),t=portal_H(e),[r]=(0,react_.useState)(()=>{var p;return env/* env.isServer */.O.isServer?null:(p=n==null?void 0:n.createElement("div"))!=null?p:null}),y=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)(),f=(0,react_.useRef)(!1);return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(f.current=!1,!(!t||!r))return t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r)),()=>{f.current=!0,(0,micro_task/* microTask */.Y)(()=>{var p;f.current&&(!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((p=t.parentElement)==null||p.removeChild(t))))})}},[t,r]),y?!t||!r?null:(0,server_rendering_stub_.createPortal)((0,render/* render */.sY)({ourProps:{ref:l},theirProps:o,defaultTag:O,name:"Portal"}),r):null}let portal_F=react_.Fragment,c=(0,react_.createContext)(null);function U(u,a){let{target:o,...e}=u,n={ref:(0,use_sync_refs/* useSyncRefs */.T)(a)};return react_.createElement(c.Provider,{value:o},(0,render/* render */.sY)({ourProps:n,theirProps:e,defaultTag:portal_F,name:"Popover.Group"}))}let portal_S=(0,render/* forwardRefWithAs */.yV)(_),j=(0,render/* forwardRefWithAs */.yV)(U),portal_te=Object.assign(portal_S,{Group:j});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/description/description.js
let d=(0,react_.createContext)(null);function description_f(){let r=(0,react_.useContext)(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,description_f),t}return r}function M(){let[r,t]=(0,react_.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react_.useMemo)(()=>function(e){let i=(0,use_event/* useEvent */.z)(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=(0,react_.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react_.createElement(d.Provider,{value:n},e.children)},[t])]}let description_S="p";function description_h(r,t){let a=I(),{id:e=`headlessui-description-${a}`,...i}=r,n=description_f(),s=(0,use_sync_refs/* useSyncRefs */.T)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return (0,render/* render */.sY)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:description_S,name:n.name||"Description"})}let y=(0,render/* forwardRefWithAs */.yV)(description_h),description_b=Object.assign(y,{});

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(7844);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/stack-context.js
let stack_context_a=(0,react_.createContext)(()=>{});stack_context_a.displayName="StackContext";var stack_context_s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(stack_context_s||{});function x(){return (0,react_.useContext)(stack_context_a)}function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=(0,use_event/* useEvent */.z)((...t)=>{r==null||r(...t),l(...t)});return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react_.createElement(stack_context_a.Provider,{value:o},i)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-document-event.js
function use_document_event_d(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function use_outside_click_L(m,E,c=!0){let i=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>{requestAnimationFrame(()=>{i.current=c})},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(n!==null&&n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!h(n,F.Loose)&&n.tabIndex!==-1&&e.preventDefault(),E(e,n)}}let u=(0,react_.useRef)(null);use_document_event_d("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target)},!0),use_document_event_d("click",e=>{u.current&&(f(e,()=>u.current),u.current=null)},!0),use_document_event_d("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
function useSyncExternalStoreShimClient_i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const useSyncExternalStoreShimClient_d=typeof Object.is=="function"?Object.is:useSyncExternalStoreShimClient_i,{useState:u,useEffect:useSyncExternalStoreShimClient_h,useLayoutEffect:useSyncExternalStoreShimClient_f,useDebugValue:p}=react_namespaceObject;let useSyncExternalStoreShimClient_S=(/* unused pure expression or super */ null && (!1)),useSyncExternalStoreShimClient_=(/* unused pure expression or super */ null && (!1));function useSyncExternalStoreShimClient_y(e,t,c){const a=t(),[{inst:n},o]=u({inst:{value:a,getSnapshot:t}});return useSyncExternalStoreShimClient_f(()=>{n.value=a,n.getSnapshot=t,useSyncExternalStoreShimClient_r(n)&&o({inst:n})},[e,a,t]),useSyncExternalStoreShimClient_h(()=>(useSyncExternalStoreShimClient_r(n)&&o({inst:n}),e(()=>{useSyncExternalStoreShimClient_r(n)&&o({inst:n})})),[e]),p(a),a}function useSyncExternalStoreShimClient_r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!useSyncExternalStoreShimClient_d(c,a)}catch{return!0}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t(r,e,n){return e()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
const use_sync_external_store_shim_r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",use_sync_external_store_shim_s=!use_sync_external_store_shim_r,use_sync_external_store_shim_c=use_sync_external_store_shim_s?t:useSyncExternalStoreShimClient_y,use_sync_external_store_shim_a="useSyncExternalStore" in react_namespaceObject?(n=>n.useSyncExternalStore)(react_namespaceObject):use_sync_external_store_shim_c;

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-store.js
function use_store_S(t){return use_sync_external_store_shim_a(t.subscribe,t.getSnapshot,t.getSnapshot)}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(2698);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/store.js
function store_a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function adjust_scrollbar_padding_c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/platform.js
function platform_t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function platform_i(){return/Android/gi.test(window.navigator.userAgent)}function n(){return platform_t()||platform_i()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function handle_ios_locking_p(){if(!platform_t())return{};let o;return{before(){o=window.pageYOffset},after({doc:r,d:l,meta:s}){function i(e){return s.containers.flatMap(t=>t()).some(t=>t.contains(e))}l.style(r.body,"marginTop",`-${o}px`),window.scrollTo(0,0);let n=null;l.addEventListener(r,"click",e=>{if(e.target instanceof HTMLElement)try{let t=e.target.closest("a");if(!t)return;let{hash:c}=new URL(t.href),a=r.querySelector(c);a&&!i(a)&&(n=a)}catch{}},!0),l.addEventListener(r,"touchmove",e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+o),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function overflow_store_m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let overflow_store_a=store_a(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,disposables/* disposables */.k)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:overflow_store_m(t)},c=[handle_ios_locking_p(),adjust_scrollbar_padding_c(),l()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});overflow_store_a.subscribe(()=>{let e=overflow_store_a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&overflow_store_a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&overflow_store_a.dispatch("TEARDOWN",t)}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function use_document_overflow_p(e,r,n){let f=use_store_S(overflow_store_a),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(!(!e||!r))return overflow_store_a.dispatch("PUSH",e,n),()=>overflow_store_a.dispatch("POP",e,n)},[r,e]),i}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-inert.js
let use_inert_u=new Map,use_inert_t=new Map;function use_inert_h(r,l=!0){(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{var o;if(!l)return;let e=typeof r=="function"?r():r.current;if(!e)return;function a(){var d;if(!e)return;let i=(d=use_inert_t.get(e))!=null?d:1;if(i===1?use_inert_t.delete(e):use_inert_t.set(e,i-1),i!==1)return;let n=use_inert_u.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,use_inert_u.delete(e))}let f=(o=use_inert_t.get(e))!=null?o:0;return use_inert_t.set(e,f+1),f!==0||(use_inert_u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),a},[r,l])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Se=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Se||{}),Fe=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Fe||{});let ke={[0](t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},dialog_M=(0,react_.createContext)(null);dialog_M.displayName="DialogContext";function dialog_S(t){let e=(0,react_.useContext)(dialog_M);if(e===null){let o=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,dialog_S),o}return e}function xe(t,e,o=()=>[document.body]){use_document_overflow_p(t,e,s=>{var n;return{containers:[...(n=s.containers)!=null?n:[],o]}})}function _e(t,e){return (0,match/* match */.E)(e.type,ke,t,e)}let Me="div",He=render/* Features.RenderStrategy */.AN.RenderStrategy|render/* Features.Static */.AN.Static;function Ie(t,e){let o=I(),{id:s=`headlessui-dialog-${o}`,open:n,onClose:l,initialFocus:d,__demoMode:c=!1,...D}=t,[P,F]=(0,react_.useState)(0),i=(0,open_closed/* useOpenClosed */.oJ)();n===void 0&&i!==null&&(n=(i&open_closed/* State.Open */.ZM.Open)===open_closed/* State.Open */.ZM.Open);let m=(0,react_.useRef)(null),Q=(0,use_sync_refs/* useSyncRefs */.T)(m,e),y=(0,react_.useRef)(null),p=use_owner_n(m),U=t.hasOwnProperty("open")||i!==null,N=t.hasOwnProperty("onClose");if(!U&&!N)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!U)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!N)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let u=n?0:1,[E,Z]=(0,react_.useReducer)(_e,{titleId:null,descriptionId:null,panelRef:(0,react_.createRef)()}),A=(0,use_event/* useEvent */.z)(()=>l(!1)),Y=(0,use_event/* useEvent */.z)(r=>Z({type:0,id:r})),k=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)()?c?!1:u===0:!1,x=P>1,$=(0,react_.useContext)(dialog_M)!==null,ee=x?"parent":"leaf",W=i!==null?(i&open_closed/* State.Closing */.ZM.Closing)===open_closed/* State.Closing */.ZM.Closing:!1,te=(()=>$||W?!1:k)(),oe=(0,react_.useCallback)(()=>{var r,f;return(f=Array.from((r=p==null?void 0:p.querySelectorAll("body > *"))!=null?r:[]).find(a=>a.id==="headlessui-portal-root"?!1:a.contains(y.current)&&a instanceof HTMLElement))!=null?f:null},[y]);use_inert_h(oe,te);let re=(()=>x?!0:k)(),ne=(0,react_.useCallback)(()=>{var r,f;return(f=Array.from((r=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?r:[]).find(a=>a.contains(y.current)&&a instanceof HTMLElement))!=null?f:null},[y]);use_inert_h(ne,re);let H=(0,use_event/* useEvent */.z)(()=>{var f,a;return[...Array.from((f=p==null?void 0:p.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?f:[]).filter(T=>!(T===document.body||T===document.head||!(T instanceof HTMLElement)||T.contains(y.current)||E.panelRef.current&&T.contains(E.panelRef.current))),(a=E.panelRef.current)!=null?a:m.current]}),le=(()=>!(!k||x))();use_outside_click_L(()=>H(),A,le);let ae=(()=>!(x||u!==0))();use_event_listener_E(p==null?void 0:p.defaultView,"keydown",r=>{ae&&(r.defaultPrevented||r.key===keyboard_o.Escape&&(r.preventDefault(),r.stopPropagation(),A()))});let ie=(()=>!(W||u!==0||$))();xe(p,ie,H),(0,react_.useEffect)(()=>{if(u!==0||!m.current)return;let r=new ResizeObserver(f=>{for(let a of f){let T=a.target.getBoundingClientRect();T.x===0&&T.y===0&&T.width===0&&T.height===0&&A()}});return r.observe(m.current),()=>r.disconnect()},[u,m,A]);let[se,pe]=M(),de=(0,react_.useMemo)(()=>[{dialogState:u,close:A,setTitleId:Y},E],[u,E,A,Y]),J=(0,react_.useMemo)(()=>({open:u===0}),[u]),ue={ref:Q,id:s,role:"dialog","aria-modal":u===0?!0:void 0,"aria-labelledby":E.titleId,"aria-describedby":se};return react_.createElement(stack_context_M,{type:"Dialog",enabled:u===0,element:m,onUpdate:(0,use_event/* useEvent */.z)((r,f)=>{f==="Dialog"&&(0,match/* match */.E)(r,{[stack_context_s.Add]:()=>F(a=>a+1),[stack_context_s.Remove]:()=>F(a=>a-1)})})},react_.createElement(portal_force_root_P,{force:!0},react_.createElement(portal_te,null,react_.createElement(dialog_M.Provider,{value:de},react_.createElement(portal_te.Group,{target:m},react_.createElement(portal_force_root_P,{force:!1},react_.createElement(pe,{slot:J,name:"Dialog.Description"},react_.createElement(ye,{initialFocus:d,containers:H,features:k?(0,match/* match */.E)(ee,{parent:ye.features.RestoreFocus,leaf:ye.features.All&~ye.features.FocusLock}):ye.features.None},(0,render/* render */.sY)({ourProps:ue,theirProps:D,slot:J,defaultTag:Me,features:He,visible:u===0,name:"Dialog"})))))))),react_.createElement(hidden_c,{features:hidden_p.Hidden,ref:y}))}let we="div";function Be(t,e){let o=I(),{id:s=`headlessui-dialog-overlay-${o}`,...n}=t,[{dialogState:l,close:d}]=dialog_S("Dialog.Overlay"),c=(0,use_sync_refs/* useSyncRefs */.T)(e),D=(0,use_event/* useEvent */.z)(i=>{if(i.target===i.currentTarget){if(r(i.currentTarget))return i.preventDefault();i.preventDefault(),i.stopPropagation(),d()}}),P=(0,react_.useMemo)(()=>({open:l===0}),[l]);return (0,render/* render */.sY)({ourProps:{ref:c,id:s,"aria-hidden":!0,onClick:D},theirProps:n,slot:P,defaultTag:we,name:"Dialog.Overlay"})}let Ge="div";function Ue(t,e){let o=I(),{id:s=`headlessui-dialog-backdrop-${o}`,...n}=t,[{dialogState:l},d]=dialog_S("Dialog.Backdrop"),c=(0,use_sync_refs/* useSyncRefs */.T)(e);(0,react_.useEffect)(()=>{if(d.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[d.panelRef]);let D=(0,react_.useMemo)(()=>({open:l===0}),[l]);return react_.createElement(portal_force_root_P,{force:!0},react_.createElement(portal_te,null,(0,render/* render */.sY)({ourProps:{ref:c,id:s,"aria-hidden":!0},theirProps:n,slot:D,defaultTag:Ge,name:"Dialog.Backdrop"})))}let Ne="div";function Ye(t,e){let o=I(),{id:s=`headlessui-dialog-panel-${o}`,...n}=t,[{dialogState:l},d]=dialog_S("Dialog.Panel"),c=(0,use_sync_refs/* useSyncRefs */.T)(e,d.panelRef),D=(0,react_.useMemo)(()=>({open:l===0}),[l]),P=(0,use_event/* useEvent */.z)(i=>{i.stopPropagation()});return (0,render/* render */.sY)({ourProps:{ref:c,id:s,onClick:P},theirProps:n,slot:D,defaultTag:Ne,name:"Dialog.Panel"})}let $e="h2";function We(t,e){let o=I(),{id:s=`headlessui-dialog-title-${o}`,...n}=t,[{dialogState:l,setTitleId:d}]=dialog_S("Dialog.Title"),c=(0,use_sync_refs/* useSyncRefs */.T)(e);(0,react_.useEffect)(()=>(d(s),()=>d(null)),[s,d]);let D=(0,react_.useMemo)(()=>({open:l===0}),[l]);return (0,render/* render */.sY)({ourProps:{ref:c,id:s},theirProps:n,slot:D,defaultTag:$e,name:"Dialog.Title"})}let Je=(0,render/* forwardRefWithAs */.yV)(Ie),Xe=(0,render/* forwardRefWithAs */.yV)(Ue),je=(0,render/* forwardRefWithAs */.yV)(Ye),Ke=(0,render/* forwardRefWithAs */.yV)(Be),Ve=(0,render/* forwardRefWithAs */.yV)(We),St=Object.assign(Je,{Backdrop:Xe,Panel:je,Overlay:Ke,Title:Ve,Description:description_b});


/***/ }),

/***/ 6235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ tt)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(1147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(7844);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(8118);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var use_is_mounted = __webpack_require__(3984);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(3652);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(4612);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var use_server_handoff_complete = __webpack_require__(5650);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(1464);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/once.js
function once_l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(2698);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d(t,...e){t&&e.length>0&&t.classList.add(...e)}function v(t,...e){t&&e.length>0&&t.classList.remove(...e)}function F(t,e){let n=(0,disposables/* disposables */.k)();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:o}=getComputedStyle(t),[u,p]=[m,o].map(a=>{let[r=0]=a.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,f)=>f-i);return r}),l=u+p;if(l!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose()},l),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose()})});let a=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),a())})}else e();return n.add(()=>e()),n.dispose}function y(t,e,n,m){let o=n?"enter":"leave",u=(0,disposables/* disposables */.k)(),p=m!==void 0?once_l(m):()=>{};o==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let l=(0,match/* match */.E)(o,{enter:()=>e.enter,leave:()=>e.leave}),a=(0,match/* match */.E)(o,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,match/* match */.E)(o,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),d(t,...l,...r),u.nextFrame(()=>{v(t,...r),d(t,...a),F(t,()=>(v(t,...l),d(t,...e.entered),p()))}),u.dispose}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(8060);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-transition.js
function D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=(0,use_is_mounted/* useIsMounted */.t)(),c=(0,use_disposables/* useDisposables */.G)(),r=(0,use_latest_value/* useLatestValue */.E)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{let e=(0,disposables/* disposables */.k)();c.add(e.dispose);let n=i.current;if(n&&r.current!=="idle"&&a.current)return e.dispose(),s.current(r.current),e.add(y(n,o.current,r.current==="enter",()=>{e.dispose(),u.current(r.current)})),e.dispose},[t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(2264);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
var class_names = __webpack_require__(3018);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var env = __webpack_require__(3957);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-flags.js
function b(g=0){let[t,l]=(0,react_.useState)(g),u=(0,react_.useCallback)(e=>l(a=>a|e),[t]),n=(0,react_.useCallback)(e=>Boolean(t&e),[t]),o=(0,react_.useCallback)(e=>l(a=>a&~e),[l]),s=(0,react_.useCallback)(e=>l(a=>a^e),[l]);return{flags:t,addFlag:u,hasFlag:n,removeFlag:o,toggleFlag:s}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js
function S(n=""){return n.split(" ").filter(t=>t.trim().length>1)}let A=(0,react_.createContext)(null);A.displayName="TransitionContext";var Ee=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Ee||{});function be(){let n=(0,react_.useContext)(A);if(n===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}function Se(){let n=(0,react_.useContext)(I);if(n===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}let I=(0,react_.createContext)(null);I.displayName="NestingContext";function _(n){return"children"in n?_(n.children):n.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ne(n,t){let r=(0,use_latest_value/* useLatestValue */.E)(n),o=(0,react_.useRef)([]),y=(0,use_is_mounted/* useIsMounted */.t)(),N=(0,use_disposables/* useDisposables */.G)(),p=(0,use_event/* useEvent */.z)((s,e=render/* RenderStrategy.Hidden */.l4.Hidden)=>{let a=o.current.findIndex(({el:i})=>i===s);a!==-1&&((0,match/* match */.E)(e,{[render/* RenderStrategy.Unmount */.l4.Unmount](){o.current.splice(a,1)},[render/* RenderStrategy.Hidden */.l4.Hidden](){o.current[a].state="hidden"}}),N.microTask(()=>{var i;!_(o)&&y.current&&((i=r.current)==null||i.call(r))}))}),x=(0,use_event/* useEvent */.z)(s=>{let e=o.current.find(({el:a})=>a===s);return e?e.state!=="visible"&&(e.state="visible"):o.current.push({el:s,state:"visible"}),()=>p(s,render/* RenderStrategy.Unmount */.l4.Unmount)}),m=(0,react_.useRef)([]),c=(0,react_.useRef)(Promise.resolve()),u=(0,react_.useRef)({enter:[],leave:[],idle:[]}),h=(0,use_event/* useEvent */.z)((s,e,a)=>{m.current.splice(0),t&&(t.chains.current[e]=t.chains.current[e].filter(([i])=>i!==s)),t==null||t.chains.current[e].push([s,new Promise(i=>{m.current.push(i)})]),t==null||t.chains.current[e].push([s,new Promise(i=>{Promise.all(u.current[e].map(([l,T])=>T)).then(()=>i())})]),e==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>a(e)):a(e)}),v=(0,use_event/* useEvent */.z)((s,e,a)=>{Promise.all(u.current[e].splice(0).map(([i,l])=>l)).then(()=>{var i;(i=m.current.shift())==null||i()}).then(()=>a(e))});return (0,react_.useMemo)(()=>({children:o,register:x,unregister:p,onStart:h,onStop:v,wait:c,chains:u}),[x,p,o,h,v,u,c])}function xe(){}let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(n){var r;let t={};for(let o of Pe)t[o]=(r=n[o])!=null?r:xe;return t}function Re(n){let t=(0,react_.useRef)(re(n));return (0,react_.useEffect)(()=>{t.current=re(n)},[n]),t}let ye="div",ie=render/* Features.RenderStrategy */.AN.RenderStrategy;function Ne(n,t){let{beforeEnter:r,afterEnter:o,beforeLeave:y,afterLeave:N,enter:p,enterFrom:x,enterTo:m,entered:c,leave:u,leaveFrom:h,leaveTo:v,...s}=n,e=(0,react_.useRef)(null),a=(0,use_sync_refs/* useSyncRefs */.T)(e,t),i=s.unmount?render/* RenderStrategy.Unmount */.l4.Unmount:render/* RenderStrategy.Hidden */.l4.Hidden,{show:l,appear:T,initial:se}=be(),[g,M]=(0,react_.useState)(l?"visible":"hidden"),z=Se(),{register:F,unregister:L}=z,U=(0,react_.useRef)(null);(0,react_.useEffect)(()=>F(e),[F,e]),(0,react_.useEffect)(()=>{if(i===render/* RenderStrategy.Hidden */.l4.Hidden&&e.current){if(l&&g!=="visible"){M("visible");return}return (0,match/* match */.E)(g,{["hidden"]:()=>L(e),["visible"]:()=>F(e)})}},[g,e,F,L,l,i]);let j=(0,use_latest_value/* useLatestValue */.E)({enter:S(p),enterFrom:S(x),enterTo:S(m),entered:S(c),leave:S(u),leaveFrom:S(h),leaveTo:S(v)}),w=Re({beforeEnter:r,afterEnter:o,beforeLeave:y,afterLeave:N}),k=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();(0,react_.useEffect)(()=>{if(k&&g==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,g,k]);let G=se&&!T,ae=(()=>!k||G||U.current===l?"idle":l?"enter":"leave")(),H=b(0),le=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>{H.addFlag(open_closed/* State.Opening */.ZM.Opening),w.current.beforeEnter()},leave:()=>{H.addFlag(open_closed/* State.Closing */.ZM.Closing),w.current.beforeLeave()},idle:()=>{}})),ue=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>{H.removeFlag(open_closed/* State.Opening */.ZM.Opening),w.current.afterEnter()},leave:()=>{H.removeFlag(open_closed/* State.Closing */.ZM.Closing),w.current.afterLeave()},idle:()=>{}})),O=ne(()=>{M("hidden"),L(e)},z);D({container:e,classes:j,direction:ae,onStart:(0,use_latest_value/* useLatestValue */.E)(C=>{O.onStart(e,C,le)}),onStop:(0,use_latest_value/* useLatestValue */.E)(C=>{O.onStop(e,C,ue),C==="leave"&&!_(O)&&(M("hidden"),L(e))})}),(0,react_.useEffect)(()=>{G&&(i===render/* RenderStrategy.Hidden */.l4.Hidden?U.current=null:U.current=l)},[l,G,g]);let B=s,Te={ref:a};return T&&l&&env/* env.isServer */.O.isServer&&(B={...B,className:(0,class_names/* classNames */.A)(s.className,...j.current.enter,...j.current.enterFrom)}),react_.createElement(I.Provider,{value:O},react_.createElement(open_closed/* OpenClosedProvider */.up,{value:(0,match/* match */.E)(g,{["visible"]:open_closed/* State.Open */.ZM.Open,["hidden"]:open_closed/* State.Closed */.ZM.Closed})|H.flags},(0,render/* render */.sY)({ourProps:Te,theirProps:B,defaultTag:ye,features:ie,visible:g==="visible",name:"Transition.Child"})))}function He(n,t){let{show:r,appear:o=!1,unmount:y,...N}=n,p=(0,react_.useRef)(null),x=(0,use_sync_refs/* useSyncRefs */.T)(p,t);(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();let m=(0,open_closed/* useOpenClosed */.oJ)();if(r===void 0&&m!==null&&(r=(m&open_closed/* State.Open */.ZM.Open)===open_closed/* State.Open */.ZM.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,u]=(0,react_.useState)(r?"visible":"hidden"),h=ne(()=>{u("hidden")}),[v,s]=(0,react_.useState)(!0),e=(0,react_.useRef)([r]);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{v!==!1&&e.current[e.current.length-1]!==r&&(e.current.push(r),s(!1))},[e,r]);let a=(0,react_.useMemo)(()=>({show:r,appear:o,initial:v}),[r,o,v]);(0,react_.useEffect)(()=>{if(r)u("visible");else if(!_(h))u("hidden");else{let l=p.current;if(!l)return;let T=l.getBoundingClientRect();T.x===0&&T.y===0&&T.width===0&&T.height===0&&u("hidden")}},[r,h]);let i={unmount:y};return react_.createElement(I.Provider,{value:h},react_.createElement(A.Provider,{value:a},(0,render/* render */.sY)({ourProps:{...i,as:react_.Fragment,children:react_.createElement(oe,{ref:x,...i,...N})},theirProps:{},defaultTag:react_.Fragment,features:ie,visible:c==="visible",name:"Transition"})))}function De(n,t){let r=(0,react_.useContext)(A)!==null,o=(0,open_closed/* useOpenClosed */.oJ)()!==null;return react_.createElement(react_.Fragment,null,!r&&o?react_.createElement(q,{ref:t,...n}):react_.createElement(oe,{ref:t,...n}))}let q=(0,render/* forwardRefWithAs */.yV)(He),oe=(0,render/* forwardRefWithAs */.yV)(Ne),Fe=(0,render/* forwardRefWithAs */.yV)(De),tt=Object.assign(q,{Child:Fe,Root:q});


/***/ }),

/***/ 8060:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2698);
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__/* .disposables */ .k);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ 2264:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__/* .useLatestValue */ .E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ 3984:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsoMorphicEffect */ .e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ 3652:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3957);
let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__/* .env.isServer */ .O.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)};


/***/ }),

/***/ 4612:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsoMorphicEffect */ .e)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ 5650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3957);
function l(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__/* .env.isHandoffComplete */ .O.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__/* .env.isHandoffComplete */ .O.isHandoffComplete===!1&&f(!1),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__/* .env.handoff */ .O.handoff(),[]),e}


/***/ }),

/***/ 1464:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ y),
/* harmony export */   "h": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2264);
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__/* .useEvent */ .z)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZM": () => (/* binding */ d),
/* harmony export */   "oJ": () => (/* binding */ C),
/* harmony export */   "up": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d||{});function C(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}


/***/ }),

/***/ 3018:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ e)
/* harmony export */ });
function e(...n){return n.filter(Boolean).join(" ")}


/***/ }),

/***/ 2698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8571);
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__/* .microTask */ .Y)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ }),

/***/ 3957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ 8118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ 8571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ 1147:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AN": () => (/* binding */ j),
/* harmony export */   "l4": () => (/* binding */ w),
/* harmony export */   "sY": () => (/* binding */ D),
/* harmony export */   "yV": () => (/* binding */ L)
/* harmony export */ });
/* unused harmony export compact */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3018);
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8118);
var j=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(j||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function D({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:l}){let o=h(t,r);if(n)return m(o,e,a,l);let f=s!=null?s:0;if(f&2){let{static:i=!1,...u}=o;if(i)return m(u,e,a,l)}if(f&1){let{unmount:i=!0,...u}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__/* .match */ .E)(i?0:1,{[0](){return null},[1](){return m({...u,hidden:!0,style:{display:"none"}},e,a,l)}})}return m(o,e,a,l)}function m(r,t={},e,a){var y;let{as:s=e,children:n,refName:l="ref",...o}=g(r,["unmount","static"]),f=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let u={};if(t){let d=!1,c=[];for(let[p,F]of Object.entries(t))typeof F=="boolean"&&(d=!0),F===!0&&c.push(p);d&&(u["data-headlessui-state"]=c.join(" "))}if(s===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(P(o)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let d=(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)((y=i.props)==null?void 0:y.className,o.className),c=d?{className:d}:{};return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},h(i.props,P(g(o,["ref"]))),u,f,O(i.ref,f.ref),c))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(s,Object.assign({},g(o,["ref"]),s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&f,s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u),i)}function O(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function h(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...l){let o=e[s];for(let f of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;f(n,...l)}}});return t}function L(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function P(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


/***/ }),

/***/ 4050:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ lookup)
});

// UNUSED EXPORTS: Manager, Socket, connect, io, protocol

// NAMESPACE OBJECT: ./node_modules/socket.io-parser/build/esm-debug/index.js
var build_esm_debug_namespaceObject = {};
__webpack_require__.r(build_esm_debug_namespaceObject);
__webpack_require__.d(build_esm_debug_namespaceObject, {
  "Decoder": () => (Decoder),
  "Encoder": () => (Encoder),
  "PacketType": () => (PacketType),
  "protocol": () => (build_esm_debug_protocol)
});

;// CONCATENATED MODULE: ./node_modules/engine.io-parser/build/esm/commons.js
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };


;// CONCATENATED MODULE: ./node_modules/engine.io-parser/build/esm/encodePacket.js

const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        const buffer = toBuffer(data);
        return callback(encodeBuffer(buffer, supportsBinary));
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
};
const toBuffer = data => {
    if (Buffer.isBuffer(data)) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return Buffer.from(data);
    }
    else {
        return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    }
};
// only 'message' packets can contain binary, so the type prefix is not needed
const encodeBuffer = (data, supportsBinary) => {
    return supportsBinary ? data : "b" + data.toString("base64");
};
/* harmony default export */ const esm_encodePacket = (encodePacket);

;// CONCATENATED MODULE: ./node_modules/engine.io-parser/build/esm/decodePacket.js

const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        const buffer = Buffer.from(encodedPacket.substring(1), "base64");
        return {
            type: "message",
            data: mapBinary(buffer, binaryType)
        };
    }
    if (!PACKET_TYPES_REVERSE[type]) {
        return ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1)
        }
        : {
            type: PACKET_TYPES_REVERSE[type]
        };
};
const mapBinary = (data, binaryType) => {
    const isBuffer = Buffer.isBuffer(data);
    switch (binaryType) {
        case "arraybuffer":
            return isBuffer ? toArrayBuffer(data) : data;
        case "nodebuffer":
        default:
            return data; // assuming the data is already a Buffer
    }
};
const toArrayBuffer = (buffer) => {
    const arrayBuffer = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; i++) {
        view[i] = buffer[i];
    }
    return arrayBuffer;
};
/* harmony default export */ const esm_decodePacket = (decodePacket);

;// CONCATENATED MODULE: ./node_modules/engine.io-parser/build/esm/index.js


const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        esm_encodePacket(packet, false, encodedPacket => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = esm_decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
const protocol = 4;


// EXTERNAL MODULE: ./node_modules/@socket.io/component-emitter/index.js
var component_emitter = __webpack_require__(5908);
;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/globalThis.js
const globalThisShim = global;

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/util.js

function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    }
    else {
        obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
        obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}

// EXTERNAL MODULE: ./node_modules/debug/src/index.js
var src = __webpack_require__(7564);
;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/transport.js



 // debug()
const debug = src("engine.io-client:transport"); // debug()
class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends component_emitter/* Emitter */.Q {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
        super();
        this.writable = false;
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        }
        else {
            // this might happen if the transport was silently closed in the beforeunload event handler
            debug("transport is not open, discarding packets");
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
        const packet = esm_decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) { }
}

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/contrib/yeast.js
// imported from https://github.com/unshiftio/yeast

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), yeast_length = 64, map = {};
let seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
    let encoded = '';
    do {
        encoded = alphabet[num % yeast_length] + encoded;
        num = Math.floor(num / yeast_length);
    } while (num > 0);
    return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
    let decoded = 0;
    for (i = 0; i < str.length; i++) {
        decoded = decoded * yeast_length + map[str.charAt(i)];
    }
    return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
        return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
//
// Map each character to its index.
//
for (; i < yeast_length; i++)
    map[alphabet[i]] = i;

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/contrib/parseqs.js
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function parseqs_encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function parseqs_decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

// EXTERNAL MODULE: ./node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js
var XMLHttpRequest = __webpack_require__(6097);
var XMLHttpRequest_namespaceObject = /*#__PURE__*/__webpack_require__.t(XMLHttpRequest, 2);
;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/transports/xmlhttprequest.js

const XHR = XMLHttpRequest || XMLHttpRequest_namespaceObject;

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/transports/polling.js

 // debug()







const polling_debug = src("engine.io-client:polling"); // debug()
function empty() { }
const hasXHR2 = (function () {
    const xhr = new XHR({
        xdomain: false,
    });
    return null != xhr.responseType;
})();
class Polling extends Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
            this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            polling_debug("paused");
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                polling_debug("we are currently polling - waiting to pause");
                total++;
                this.once("pollComplete", function () {
                    polling_debug("pre-pause polling complete");
                    --total || pause();
                });
            }
            if (!this.writable) {
                polling_debug("we are currently writing - waiting to pause");
                total++;
                this.once("drain", function () {
                    polling_debug("pre-pause writing complete");
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    poll() {
        polling_debug("polling");
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
        polling_debug("polling got data %s", data);
        const callback = (packet) => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this.poll();
            }
            else {
                polling_debug('ignoring poll - transport state "%s"', this.readyState);
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const close = () => {
            polling_debug("writing close packet");
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            polling_debug("transport open - closing");
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            polling_debug("transport not open - deferring close");
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
        this.writable = false;
        encodePayload(packets, (data) => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        // avoid port if default for schema
        if (this.opts.port &&
            (("https" === schema && Number(this.opts.port) !== 443) ||
                ("http" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        const encodedQuery = parseqs_encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @private
     */
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data,
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
        polling_debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends component_emitter/* Emitter */.Q {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(uri, opts) {
        super();
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    create() {
        const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = (this.xhr = new XHR(opts));
        try {
            polling_debug("xhr open %s: %s", this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this.opts.extraHeaders) {
                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this.method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this.onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            polling_debug("xhr data %s", this.data);
            xhr.send(this.data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this.xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this.index];
        }
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
        this.cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}

// EXTERNAL MODULE: ./node_modules/ws/lib/stream.js
var stream = __webpack_require__(6258);
// EXTERNAL MODULE: ./node_modules/ws/lib/receiver.js
var receiver = __webpack_require__(8443);
// EXTERNAL MODULE: ./node_modules/ws/lib/sender.js
var sender = __webpack_require__(5762);
// EXTERNAL MODULE: ./node_modules/ws/lib/websocket.js
var websocket = __webpack_require__(6016);
// EXTERNAL MODULE: ./node_modules/ws/lib/websocket-server.js
var websocket_server = __webpack_require__(2143);
;// CONCATENATED MODULE: ./node_modules/ws/wrapper.mjs







/* harmony default export */ const wrapper = (websocket);

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/transports/websocket-constructor.js

const WebSocket = wrapper;
const usingBrowserWebSocket = false;
const defaultBinaryType = "nodebuffer";
const nextTick = process.nextTick;

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/transports/websocket.js





 // debug()

const websocket_debug = src("engine.io-client:websocket"); // debug()
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class WS extends Transport {
    /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */
    constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) {
            // let probe timeout
            return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws =
                usingBrowserWebSocket && !isReactNative
                    ? protocols
                        ? new WebSocket(uri, protocols)
                        : new WebSocket(uri)
                    : new WebSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
            description: "websocket connection closed",
            context: closeEvent,
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            esm_encodePacket(packet, this.supportsBinary, (data) => {
                // always create a new object (GH-437)
                const opts = {};
                if (!usingBrowserWebSocket) {
                    if (packet.options) {
                        opts.compress = packet.options.compress;
                    }
                    if (this.opts.perMessageDeflate) {
                        const len = 
                        // @ts-ignore
                        "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) {
                            opts.compress = false;
                        }
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (usingBrowserWebSocket) {
                        // TypeError is thrown when passing the second argument on Safari
                        this.ws.send(data);
                    }
                    else {
                        this.ws.send(data, opts);
                    }
                }
                catch (e) {
                    websocket_debug("websocket closed before onclose event");
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    nextTick(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port &&
            (("wss" === schema && Number(this.opts.port) !== 443) ||
                ("ws" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        const encodedQuery = parseqs_encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @private
     */
    check() {
        return !!WebSocket;
    }
}

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/transports/index.js


const transports = {
    websocket: WS,
    polling: Polling,
};

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/contrib/parseuri.js
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/socket.js




 // debug()


const socket_debug = src("engine.io-client:socket"); // debug()
class Socket extends component_emitter/* Emitter */.Q {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts = {}) {
        super();
        this.writeBuffer = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = parse(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
                opts.query = uri.query;
        }
        else if (opts.host) {
            opts.hostname = parse(opts.host).host;
        }
        installTimerFunctions(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = opts.transports || ["polling", "websocket"];
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024,
            },
            transportOptions: {},
            closeOnBeforeunload: true,
        }, opts);
        this.opts.path =
            this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = parseqs_decode(this.opts.query);
        }
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this.beforeunloadEventListener = () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this.beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                    this.onClose("transport close", {
                        description: "network connection lost",
                    });
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
        socket_debug('creating transport "%s"', name);
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        });
        socket_debug("options: %j", opts);
        return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    open() {
        let transport;
        if (this.opts.rememberUpgrade &&
            Socket.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
        }
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        else {
            transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        }
        catch (e) {
            socket_debug("error while creating transport: %s", e);
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
        socket_debug("setting transport %s", transport.name);
        if (this.transport) {
            socket_debug("clearing existing transport %s", this.transport.name);
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", (reason) => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    probe(name) {
        socket_debug('probing transport "%s"', name);
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            socket_debug('probe transport "%s" opened', name);
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    socket_debug('probe transport "%s" pong', name);
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    socket_debug('pausing current transport "%s"', this.transport.name);
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        socket_debug("changing transport and sending upgrade packet");
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    socket_debug('probe transport "%s" failed', name);
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err) => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            socket_debug('probe transport "%s" failed because of error: %s', name, err);
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                socket_debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        socket_debug("socket open");
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade) {
            socket_debug("starting upgrade probes");
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
                this.probe(this.upgrades[i]);
            }
        }
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            socket_debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
            socket_debug('packet received with socket readyState "%s"', this.readyState);
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this.getWritablePackets();
            socket_debug("flushing %d packets in socket", packets.length);
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += byteLength(data);
            }
            if (i > 0 && payloadSize > this.maxPayload) {
                socket_debug("only send %d out of %d packets", i, this.writeBuffer.length);
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        socket_debug("payload size is %d (max: %d)", payloadSize, this.maxPayload);
        return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options,
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const close = () => {
            this.onClose("forced close");
            socket_debug("socket closing - telling transport to close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    onError(err) {
        socket_debug("socket error %j", err);
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            socket_debug('socket close with reason: "%s"', reason);
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("beforeunload", this.beforeunloadEventListener, false);
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
Socket.protocol = protocol;

;// CONCATENATED MODULE: ./node_modules/engine.io-client/build/esm-debug/index.js


const esm_debug_protocol = Socket.protocol;






;// CONCATENATED MODULE: ./node_modules/socket.io-client/build/esm-debug/url.js

 // debug()
const url_debug = src("socket.io-client:url"); // debug()
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            url_debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        url_debug("parse %s", uri);
        obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

;// CONCATENATED MODULE: ./node_modules/socket.io-parser/build/esm-debug/is-binary.js
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const is_binary_toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        is_binary_toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        is_binary_toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}

;// CONCATENATED MODULE: ./node_modules/socket.io-parser/build/esm-debug/binary.js

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}

;// CONCATENATED MODULE: ./node_modules/socket.io-parser/build/esm-debug/index.js



 // debug()
const esm_debug_debug = src("socket.io-parser"); // debug()
/**
 * Protocol version.
 *
 * @public
 */
const build_esm_debug_protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        esm_debug_debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        esm_debug_debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends component_emitter/* Emitter */.Q {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        esm_debug_debug("decoded %s as %j", str, p);
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

;// CONCATENATED MODULE: ./node_modules/socket.io-client/build/esm-debug/on.js
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

;// CONCATENATED MODULE: ./node_modules/socket.io-client/build/esm-debug/socket.js



 // debug()
const esm_debug_socket_debug = src("socket.io-client:socket"); // debug()
/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class socket_Socket extends component_emitter/* Emitter */.Q {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */
        this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */
        this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */
        this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */
        this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */
        this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */
        this._queueSeq = 0;
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on(io, "open", this.onopen.bind(this)),
            on(io, "packet", this.onpacket.bind(this)),
            on(io, "error", this.onerror.bind(this)),
            on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            esm_debug_socket_debug("emitting packet with ack id %d", id);
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
            esm_debug_socket_debug("discard packet as the transport is not currently writable");
        }
        else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    esm_debug_socket_debug("removing packet with ack id %d from the buffer", id);
                    this.sendBuffer.splice(i, 1);
                }
            }
            esm_debug_socket_debug("event with ack id %d has timed out after %d ms", id, timeout);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [null, ...args]);
        };
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
        // the timeout flag is optional
        const withErr = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
        return new Promise((resolve, reject) => {
            args.push((arg1, arg2) => {
                if (withErr) {
                    return arg1 ? reject(arg1) : resolve(arg2);
                }
                else {
                    return resolve(arg1);
                }
            });
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags),
        };
        args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
                // the packet has already been acknowledged
                return;
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    esm_debug_socket_debug("packet [%d] is discarded after %d tries", packet.id, packet.tryCount);
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            }
            else {
                esm_debug_socket_debug("packet [%d] was successfully sent", packet.id);
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
        esm_debug_socket_debug("draining queue");
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            esm_debug_socket_debug("packet [%d] has already been sent and is waiting for an ack", packet.id);
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        esm_debug_socket_debug("sending packet [%d] (try n°%d)", packet.id, packet.tryCount);
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        esm_debug_socket_debug("transport is open - connecting");
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this._sendConnectPacket(data);
            });
        }
        else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
        this.packet({
            type: PacketType.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
                : data,
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        esm_debug_socket_debug("close (%s)", reason);
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        esm_debug_socket_debug("emitting event %j", args);
        if (null != packet.id) {
            esm_debug_socket_debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            esm_debug_socket_debug("sending ack %j", args);
            self.packet({
                type: PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            esm_debug_socket_debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
        else {
            esm_debug_socket_debug("bad ack %s", packet.id);
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
        esm_debug_socket_debug("socket connected with id %s", id);
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        esm_debug_socket_debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        if (this.connected) {
            esm_debug_socket_debug("performing disconnect (%s)", this.nsp);
            this.packet({ type: PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/socket.io-client/build/esm-debug/contrib/backo2.js
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};

;// CONCATENATED MODULE: ./node_modules/socket.io-client/build/esm-debug/manager.js






 // debug()
const manager_debug = src("socket.io-client:manager"); // debug()
class Manager extends component_emitter/* Emitter */.Q {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || build_esm_debug_namespaceObject;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        manager_debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
            return this;
        manager_debug("opening %s", this.uri);
        this.engine = new Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = on(socket, "error", (err) => {
            manager_debug("error");
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
            }
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            manager_debug("connect attempt will timeout after %d", timeout);
            if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
            }
            // set timer
            const timer = this.setTimeoutFn(() => {
                manager_debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                // @ts-ignore
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        manager_debug("open");
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        try {
            this.decoder.add(data);
        }
        catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        nextTick(() => {
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        manager_debug("error", err);
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new socket_Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                manager_debug("socket %s is still active, skipping close", nsp);
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        manager_debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        manager_debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        manager_debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
        manager_debug("closed due to %s", reason);
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            manager_debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            manager_debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                manager_debug("attempting reconnect");
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        manager_debug("reconnect attempt error");
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        manager_debug("reconnect success");
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

;// CONCATENATED MODULE: ./node_modules/socket.io-client/build/esm-debug/index.js



 // debug()
const build_esm_debug_debug = src("socket.io-client"); // debug()
/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        build_esm_debug_debug("ignoring socket cache for %s", source);
        io = new Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            build_esm_debug_debug("new io instance for %s", source);
            cache[id] = new Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: Manager,
    Socket: socket_Socket,
    io: lookup,
    connect: lookup,
});
/**
 * Protocol version.
 *
 * @public
 */

/**
 * Expose constructors for standalone build.
 *
 * @public
 */



/***/ })

};
;