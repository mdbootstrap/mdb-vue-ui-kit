module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toInteger = __webpack_require__("a691");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.bold` method
// https://tc39.github.io/ecma262/#sec-string.prototype.bold
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {
  bold: function bold() {
    return createHTML(this, 'b', '', '');
  }
});


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f0bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "MDBBadge", function() { return /* reexport */ MDBBadge; });
__webpack_require__.d(__webpack_exports__, "MDBBtn", function() { return /* reexport */ MDBBtn; });
__webpack_require__.d(__webpack_exports__, "MDBCardBody", function() { return /* reexport */ MDBCardBody; });
__webpack_require__.d(__webpack_exports__, "MDBCardTitle", function() { return /* reexport */ MDBCardTitle; });
__webpack_require__.d(__webpack_exports__, "MDBCardText", function() { return /* reexport */ MDBCardText; });
__webpack_require__.d(__webpack_exports__, "MDBCardImg", function() { return /* reexport */ MDBCardImg; });
__webpack_require__.d(__webpack_exports__, "MDBCardHeader", function() { return /* reexport */ MDBCardHeader; });
__webpack_require__.d(__webpack_exports__, "MDBCardFooter", function() { return /* reexport */ MDBCardFooter; });
__webpack_require__.d(__webpack_exports__, "MDBCardLink", function() { return /* reexport */ MDBCardLink; });
__webpack_require__.d(__webpack_exports__, "MDBCardGroup", function() { return /* reexport */ MDBCardGroup; });
__webpack_require__.d(__webpack_exports__, "MDBCarousel", function() { return /* reexport */ MDBCarousel; });
__webpack_require__.d(__webpack_exports__, "MDBBtnGroup", function() { return /* reexport */ MDBBtnGroup; });
__webpack_require__.d(__webpack_exports__, "MDBBtnClose", function() { return /* reexport */ MDBBtnClose; });
__webpack_require__.d(__webpack_exports__, "MDBCard", function() { return /* reexport */ MDBCard; });
__webpack_require__.d(__webpack_exports__, "MDBListGroup", function() { return /* reexport */ MDBListGroup; });
__webpack_require__.d(__webpack_exports__, "MDBListGroupItem", function() { return /* reexport */ MDBListGroupItem; });
__webpack_require__.d(__webpack_exports__, "MDBProgress", function() { return /* reexport */ MDBProgress; });
__webpack_require__.d(__webpack_exports__, "MDBProgressBar", function() { return /* reexport */ MDBProgressBar; });
__webpack_require__.d(__webpack_exports__, "MDBSpinner", function() { return /* reexport */ MDBSpinner; });
__webpack_require__.d(__webpack_exports__, "MDBCollapse", function() { return /* reexport */ MDBCollapse; });
__webpack_require__.d(__webpack_exports__, "MDBDropdown", function() { return /* reexport */ MDBDropdown; });
__webpack_require__.d(__webpack_exports__, "MDBDropdownToggle", function() { return /* reexport */ MDBDropdownToggle; });
__webpack_require__.d(__webpack_exports__, "MDBDropdownMenu", function() { return /* reexport */ MDBDropdownMenu; });
__webpack_require__.d(__webpack_exports__, "MDBDropdownItem", function() { return /* reexport */ MDBDropdownItem; });
__webpack_require__.d(__webpack_exports__, "MDBTooltip", function() { return /* reexport */ MDBTooltip; });
__webpack_require__.d(__webpack_exports__, "MDBPopover", function() { return /* reexport */ MDBPopover; });
__webpack_require__.d(__webpack_exports__, "MDBModal", function() { return /* reexport */ MDBModal; });
__webpack_require__.d(__webpack_exports__, "MDBModalHeader", function() { return /* reexport */ MDBModalHeader; });
__webpack_require__.d(__webpack_exports__, "MDBModalTitle", function() { return /* reexport */ MDBModalTitle; });
__webpack_require__.d(__webpack_exports__, "MDBModalBody", function() { return /* reexport */ MDBModalBody; });
__webpack_require__.d(__webpack_exports__, "MDBModalFooter", function() { return /* reexport */ MDBModalFooter; });
__webpack_require__.d(__webpack_exports__, "MDBAccordion", function() { return /* reexport */ MDBAccordion; });
__webpack_require__.d(__webpack_exports__, "MDBAccordionItem", function() { return /* reexport */ MDBAccordionItem; });
__webpack_require__.d(__webpack_exports__, "MDBTabs", function() { return /* reexport */ MDBTabs; });
__webpack_require__.d(__webpack_exports__, "MDBTabNav", function() { return /* reexport */ MDBTabNav; });
__webpack_require__.d(__webpack_exports__, "MDBTabItem", function() { return /* reexport */ MDBTabItem; });
__webpack_require__.d(__webpack_exports__, "MDBTabPane", function() { return /* reexport */ MDBTabPane; });
__webpack_require__.d(__webpack_exports__, "MDBTabContent", function() { return /* reexport */ MDBTabContent; });
__webpack_require__.d(__webpack_exports__, "MDBIcon", function() { return /* reexport */ MDBIcon; });
__webpack_require__.d(__webpack_exports__, "MDBNavbar", function() { return /* reexport */ MDBNavbar; });
__webpack_require__.d(__webpack_exports__, "MDBNavbarToggler", function() { return /* reexport */ MDBNavbarToggler; });
__webpack_require__.d(__webpack_exports__, "MDBNavbarBrand", function() { return /* reexport */ MDBNavbarBrand; });
__webpack_require__.d(__webpack_exports__, "MDBNavbarNav", function() { return /* reexport */ MDBNavbarNav; });
__webpack_require__.d(__webpack_exports__, "MDBNavbarItem", function() { return /* reexport */ MDBNavbarItem; });
__webpack_require__.d(__webpack_exports__, "MDBPagination", function() { return /* reexport */ MDBPagination; });
__webpack_require__.d(__webpack_exports__, "MDBPageNav", function() { return /* reexport */ MDBPageNav; });
__webpack_require__.d(__webpack_exports__, "MDBPageItem", function() { return /* reexport */ MDBPageItem; });
__webpack_require__.d(__webpack_exports__, "MDBBreadcrumb", function() { return /* reexport */ MDBBreadcrumb; });
__webpack_require__.d(__webpack_exports__, "MDBBreadcrumbItem", function() { return /* reexport */ MDBBreadcrumbItem; });
__webpack_require__.d(__webpack_exports__, "MDBFooter", function() { return /* reexport */ MDBFooter; });
__webpack_require__.d(__webpack_exports__, "MDBCol", function() { return /* reexport */ MDBCol; });
__webpack_require__.d(__webpack_exports__, "MDBRow", function() { return /* reexport */ MDBRow; });
__webpack_require__.d(__webpack_exports__, "MDBContainer", function() { return /* reexport */ MDBContainer; });
__webpack_require__.d(__webpack_exports__, "MDBTable", function() { return /* reexport */ MDBTable; });
__webpack_require__.d(__webpack_exports__, "MDBInput", function() { return /* reexport */ MDBInput; });
__webpack_require__.d(__webpack_exports__, "MDBTextarea", function() { return /* reexport */ MDBTextarea; });
__webpack_require__.d(__webpack_exports__, "MDBCheckbox", function() { return /* reexport */ MDBCheckbox; });
__webpack_require__.d(__webpack_exports__, "MDBRadio", function() { return /* reexport */ MDBRadio; });
__webpack_require__.d(__webpack_exports__, "MDBFile", function() { return /* reexport */ MDBFile; });
__webpack_require__.d(__webpack_exports__, "MDBRange", function() { return /* reexport */ MDBRange; });
__webpack_require__.d(__webpack_exports__, "MDBSwitch", function() { return /* reexport */ MDBSwitch; });
__webpack_require__.d(__webpack_exports__, "mdbRipple", function() { return /* reexport */ mdbRipple; });
__webpack_require__.d(__webpack_exports__, "mdbScrollspy", function() { return /* reexport */ free_mdbScrollspy; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBadge.vue?vue&type=template&id=5d0bf26a

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBBadge.vue?vue&type=template&id=5d0bf26a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBadge.vue?vue&type=script&lang=js

/* harmony default export */ var MDBBadgevue_type_script_lang_js = ({
  name: "MDBBadge",
  props: {
    color: String,
    pill: Boolean,
    dot: Boolean,
    notification: Boolean,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["badge", props.color && "bg-".concat(props.color), props.pill && "rounded-pill", props.dot && "badge-dot", props.notification && "badge-notification"];
    });
    return {
      className: className,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBBadge.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBBadge.vue



MDBBadgevue_type_script_lang_js.render = render

/* harmony default export */ var MDBBadge = (MDBBadgevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBtn.vue?vue&type=template&id=73580074

function MDBBtnvue_type_template_id_73580074_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_mdb_ripple = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("mdb-ripple");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    type: $props.type,
    role: $props.role,
    class: $setup.className
  }, $setup.attrs, {
    onClick: $setup.handleClick
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["type", "role", "class", "onClick"])), [[_directive_mdb_ripple, $props.ripple]]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBBtn.vue?vue&type=template&id=73580074

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./src/directives/free/mdbRipple.js









var bsColors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
var gradient = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";
var defaultColor = [0, 0, 0];
var transitionBreakOpacity = 0.5;

var isBSColor = function isBSColor(propColor) {
  return bsColors.includes(propColor.toLowerCase());
};

var colorToRGB = function colorToRGB(color, defaultColor) {
  var hexToRgb = function hexToRgb(color) {
    var HEX_COLOR_LENGTH = 7;
    var IS_SHORT_HEX = color.length < HEX_COLOR_LENGTH;

    if (IS_SHORT_HEX) {
      color = "#".concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]).concat(color[3]).concat(color[3]);
    }

    return [parseInt(color.substr(1, 2), 16), parseInt(color.substr(3, 2), 16), parseInt(color.substr(5, 2), 16)];
  };

  var namedColorsToRgba = function namedColorsToRgba(color) {
    var tempElem = document.body.appendChild(document.createElement("fictum"));
    var flag = "rgb(1, 2, 3)";
    tempElem.style.color = flag;

    if (tempElem.style.color !== flag) {
      return defaultColor;
    }

    tempElem.style.color = color;

    if (tempElem.style.color === flag || tempElem.style.color === "") {
      return defaultColor;
    }

    color = getComputedStyle(tempElem).color;
    document.body.removeChild(tempElem);
    return color;
  };

  var rgbaToRgb = function rgbaToRgb(color) {
    color = color.match(/[.\d]+/g).map(function (a) {
      return +Number(a);
    });
    color.length = 3;
    return color;
  };

  if (color.toLowerCase() === "transparent") {
    return defaultColor;
  }

  if (color[0] === "#") {
    return hexToRgb(color);
  }

  if (color.indexOf("rgb") === -1) {
    color = namedColorsToRgba(color);
  }

  if (color.indexOf("rgb") === 0) {
    return rgbaToRgb(color);
  }

  return defaultColor;
};

var getDiameter = function getDiameter(_ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY,
      height = _ref.height,
      width = _ref.width;
  var top = offsetY <= height / 2;
  var left = offsetX <= width / 2;

  var pythagorean = function pythagorean(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  };

  var positionCenter = offsetY === height / 2 && offsetX === width / 2;
  var quadrant = {
    first: top === true && left === false,
    second: top === true && left === true,
    third: top === false && left === true,
    fourth: top === false && left === false
  };
  var getCorner = {
    topLeft: pythagorean(offsetX, offsetY),
    topRight: pythagorean(width - offsetX, offsetY),
    bottomLeft: pythagorean(offsetX, height - offsetY),
    bottomRight: pythagorean(width - offsetX, height - offsetY)
  };
  var diameter = 0;

  if (positionCenter || quadrant.fourth) {
    diameter = getCorner.topLeft;
  } else if (quadrant.third) {
    diameter = getCorner.topRight;
  } else if (quadrant.second) {
    diameter = getCorner.bottomRight;
  } else if (quadrant.first) {
    diameter = getCorner.bottomLeft;
  }

  return diameter * 2;
};

var setStyles = function setStyles(el, styles) {
  for (var property in styles) {
    el.style[property] = styles[property];
  }
};

var getBackgroundImage = function getBackgroundImage(color) {
  if (color !== "") {
    var rgbValue = colorToRGB(color, defaultColor).join(",");
    var gradientImage = gradient.split("{{color}}").join("".concat(rgbValue));
    return "radial-gradient(circle, ".concat(gradientImage, ")");
  }
};

var runRipple = function runRipple(el, waveConfig, options) {
  var rippleElement = document.createElement("div");
  rippleElement.classList.add("ripple-wave");
  var diameterConfig = {
    offsetX: options.centered ? waveConfig.height / 2 : waveConfig.left,
    offsetY: options.centered ? waveConfig.width / 2 : waveConfig.top,
    height: waveConfig.height,
    width: waveConfig.width
  };
  var diameter = getDiameter(diameterConfig);
  var radiusValue = options.radius || diameter / 2;
  var opacity = {
    delay: options.duration * transitionBreakOpacity,
    duration: options.duration - options.duration * transitionBreakOpacity
  };
  var styles = {
    left: options.centered ? "".concat(Math.round(waveConfig.width / 2 - radiusValue), "px") : "".concat(Math.round(waveConfig.left - radiusValue), "px"),
    top: options.centered ? "".concat(Math.round(waveConfig.height / 2 - radiusValue), "px") : "".concat(Math.round(waveConfig.top - radiusValue), "px"),
    height: "".concat(Math.round(options.radius * 2 || diameter), "px"),
    width: "".concat(Math.round(options.radius * 2 || diameter), "px"),
    transitionDelay: "0s, ".concat(opacity.delay, "ms"),
    transitionDuration: "".concat(options.duration, "ms, ").concat(opacity.duration, "ms")
  };

  if (options.unbound) {
    el.classList.add("ripple-surface-unbound");
  }

  if (isBSColor(options.color)) {
    el.classList.add("ripple-surface-".concat(options.color));
  } else {
    styles.backgroundImage = getBackgroundImage(options.color);
  }

  setStyles(rippleElement, styles);
  el.appendChild(rippleElement);
  setTimeout(function () {
    rippleElement.classList.add("active");
  }, 50);
  setTimeout(function () {
    el.removeChild(rippleElement);
  }, options.duration + 1000);
};

/* harmony default export */ var mdbRipple = ({
  mounted: function mounted(el, binding) {
    if (binding.value === false) {
      return;
    }

    var options = {
      centered: binding.value && binding.value.centered || false,
      color: binding.value && binding.value.color || "",
      duration: binding.value && binding.value.duration || 500,
      radius: binding.value && binding.value.radius || 0,
      unbound: binding.value && binding.value.unbound || false
    };
    el.classList.add("ripple-surface");

    el.waves = function (e) {
      var waveConfig = {
        top: e.layerY,
        left: e.layerX,
        height: el.offsetHeight,
        width: el.offsetWidth
      };
      runRipple(el, waveConfig, options);
    };

    el.addEventListener("click", el.waves);
  },
  updated: function updated(el) {
    if (!el.classList.contains("ripple-surface")) {
      el.classList.add("ripple-surface");
    }
  },
  unmounted: function unmounted(el) {
    el.removeEventListener("click", el.waves);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBtn.vue?vue&type=script&lang=js


/* harmony default export */ var MDBBtnvue_type_script_lang_js = ({
  name: "MDBBtn",
  props: {
    color: String,
    size: String,
    outline: String,
    rounded: Boolean,
    floating: Boolean,
    toggler: Boolean,
    toggle: Boolean,
    role: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    tag: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: [Object, Boolean],
      default: function _default(props) {
        return props.outline || props.color === "light" || props.color === "link" ? {
          color: "dark"
        } : true;
      }
    },
    picker: Boolean
  },
  directives: {
    mdbRipple: mdbRipple
  },
  inheritAttrs: false,
  emits: ["update:toggle"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var toggle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.toggle);
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [!props.picker && "btn", props.color && "btn-".concat(props.color), props.size && "btn-".concat(props.size), props.outline && "btn-outline-".concat(props.outline), props.rounded && "btn-rounded", props.floating && "btn-floating", props.block && "btn-block", toggle.value && "active"];
    });

    function handleClick() {
      if (props.toggler) {
        toggle.value = !toggle.value;
        emit("update:toggle", toggle.value);
      }
    }

    return {
      className: className,
      attrs: attrs,
      props: props,
      handleClick: handleClick
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBBtn.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBBtn.vue



MDBBtnvue_type_script_lang_js.render = MDBBtnvue_type_template_id_73580074_render

/* harmony default export */ var MDBBtn = (MDBBtnvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBtnGroup.vue?vue&type=template&id=9cf64422

function MDBBtnGroupvue_type_template_id_9cf64422_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs, {
    role: $props.role
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "role"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBBtnGroup.vue?vue&type=template&id=9cf64422

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBtnGroup.vue?vue&type=script&lang=js

/* harmony default export */ var MDBBtnGroupvue_type_script_lang_js = ({
  name: "MDBBtnGroup",
  props: {
    size: String,
    vertical: Boolean,
    role: {
      type: String,
      default: "group"
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.size && "btn-group-".concat(props.size), props.vertical ? "btn-group-vertical" : "btn-group"];
    });
    return {
      className: className,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBBtnGroup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBBtnGroup.vue



MDBBtnGroupvue_type_script_lang_js.render = MDBBtnGroupvue_type_template_id_9cf64422_render

/* harmony default export */ var MDBBtnGroup = (MDBBtnGroupvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBtnClose.vue?vue&type=template&id=59591014

function MDBBtnClosevue_type_template_id_59591014_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className,
    "aria-label": "Close"
  }, $setup.attrs), null, 16);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBBtnClose.vue?vue&type=template&id=59591014

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBBtnClose.vue?vue&type=script&lang=js

/* harmony default export */ var MDBBtnClosevue_type_script_lang_js = ({
  name: "MDBBtnClose",
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["btn-close", props.white && "btn-close-white"];
    });
    return {
      className: className,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBBtnClose.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBBtnClose.vue



MDBBtnClosevue_type_script_lang_js.render = MDBBtnClosevue_type_template_id_59591014_render

/* harmony default export */ var MDBBtnClose = (MDBBtnClosevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCard.vue?vue&type=template&id=62b07fb3

function MDBCardvue_type_template_id_62b07fb3_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCard.vue?vue&type=template&id=62b07fb3

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCard.vue?vue&type=script&lang=js




/* harmony default export */ var MDBCardvue_type_script_lang_js = ({
  name: "MDBCard",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    border: {
      type: String
    },
    bg: {
      type: String
    },
    text: {
      type: [String, Array]
    },
    shadow: {
      type: String
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["card", props.border && "border border-".concat(props.border), props.bg && "bg-".concat(props.bg), props.shadow && "shadow-".concat(props.shadow), props.text && spreadProps(props.text)];
    });

    var spreadProps = function spreadProps(props) {
      if (typeof props === "string") {
        return "text-".concat(props);
      }

      return props.map(function (prop) {
        return "text-".concat(prop).trim();
      }).join(" ");
    };

    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCard.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCard.vue



MDBCardvue_type_script_lang_js.render = MDBCardvue_type_template_id_62b07fb3_render

/* harmony default export */ var MDBCard = (MDBCardvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardBody.vue?vue&type=template&id=01228878

function MDBCardBodyvue_type_template_id_01228878_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardBody.vue?vue&type=template&id=01228878

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardBody.vue?vue&type=script&lang=js




/* harmony default export */ var MDBCardBodyvue_type_script_lang_js = ({
  name: "MDBCardBody",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    text: {
      type: [String, Array]
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["card-body", props.text && spreadProps(props.text)];
    });

    var spreadProps = function spreadProps(props) {
      if (typeof props === "string") {
        return "text-".concat(props);
      }

      return props.map(function (prop) {
        return "text-".concat(prop).trim();
      }).join(" ");
    };

    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardBody.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardBody.vue



MDBCardBodyvue_type_script_lang_js.render = MDBCardBodyvue_type_template_id_01228878_render

/* harmony default export */ var MDBCardBody = (MDBCardBodyvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardTitle.vue?vue&type=template&id=91de7786

function MDBCardTitlevue_type_template_id_91de7786_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($setup.tagName), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardTitle.vue?vue&type=template&id=91de7786

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardTitle.vue?vue&type=script&lang=js

/* harmony default export */ var MDBCardTitlevue_type_script_lang_js = ({
  name: "MDBCardTitle",
  props: {
    tag: {
      type: String,
      default: "h5"
    },
    subtitle: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var tagName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.subtitle) {
        return props.tag;
      }

      return props.tag !== "h5" ? props.tag : "h6";
    });
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.subtitle ? "card-subtitle" : "card-title"];
    });
    return {
      className: className,
      tagName: tagName,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardTitle.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardTitle.vue



MDBCardTitlevue_type_script_lang_js.render = MDBCardTitlevue_type_template_id_91de7786_render

/* harmony default export */ var MDBCardTitle = (MDBCardTitlevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardText.vue?vue&type=template&id=d641f992

function MDBCardTextvue_type_template_id_d641f992_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardText.vue?vue&type=template&id=d641f992

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardText.vue?vue&type=script&lang=js

/* harmony default export */ var MDBCardTextvue_type_script_lang_js = ({
  name: "MDBCardText",
  props: {
    tag: {
      type: String,
      default: "p"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["card-text"];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardText.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardText.vue



MDBCardTextvue_type_script_lang_js.render = MDBCardTextvue_type_template_id_d641f992_render

/* harmony default export */ var MDBCardText = (MDBCardTextvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardImg.vue?vue&type=template&id=16e07006

var _hoisted_1 = {
  key: 0,
  class: "card-img-overlay"
};
function MDBCardImgvue_type_template_id_16e07006_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    src: $props.src,
    alt: $props.alt,
    class: $setup.className
  }, $setup.attrs), null, 16, ["src", "alt", "class"])), $props.overlay ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardImg.vue?vue&type=template&id=16e07006

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardImg.vue?vue&type=script&lang=js

/* harmony default export */ var MDBCardImgvue_type_script_lang_js = ({
  name: "MDBCardImg",
  props: {
    tag: {
      type: String,
      default: "img"
    },
    src: {
      type: String,
      required: true
    },
    alt: String,
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.top && "card-img-top", props.bottom && "card-img-bottom", props.fluid && "img-fluid", props.overlay && "card-img", !props.top && !props.bottom && !props.fluid && !props.overlay && "card-img"];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardImg.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardImg.vue



MDBCardImgvue_type_script_lang_js.render = MDBCardImgvue_type_template_id_16e07006_render

/* harmony default export */ var MDBCardImg = (MDBCardImgvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardHeader.vue?vue&type=template&id=5d057320

function MDBCardHeadervue_type_template_id_5d057320_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardHeader.vue?vue&type=template&id=5d057320

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardHeader.vue?vue&type=script&lang=js

/* harmony default export */ var MDBCardHeadervue_type_script_lang_js = ({
  name: "MDBCardHeader",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    bg: String,
    border: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["card-header", props.border && "border-".concat(props.border), props.bg && "bg-".concat(props.bg)];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardHeader.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardHeader.vue



MDBCardHeadervue_type_script_lang_js.render = MDBCardHeadervue_type_template_id_5d057320_render

/* harmony default export */ var MDBCardHeader = (MDBCardHeadervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardFooter.vue?vue&type=template&id=4d350262

function MDBCardFootervue_type_template_id_4d350262_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardFooter.vue?vue&type=template&id=4d350262

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardFooter.vue?vue&type=script&lang=js

/* harmony default export */ var MDBCardFootervue_type_script_lang_js = ({
  name: "MDBCardFooter",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    bg: String,
    border: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["card-footer", props.border && "border-".concat(props.border), props.bg && "bg-".concat(props.bg)];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardFooter.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardFooter.vue



MDBCardFootervue_type_script_lang_js.render = MDBCardFootervue_type_template_id_4d350262_render

/* harmony default export */ var MDBCardFooter = (MDBCardFootervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardLink.vue?vue&type=template&id=98b5d156

function MDBCardLinkvue_type_template_id_98b5d156_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardLink.vue?vue&type=template&id=98b5d156

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardLink.vue?vue&type=script&lang=js

/* harmony default export */ var MDBCardLinkvue_type_script_lang_js = ({
  name: "MDBCardLink",
  props: {
    tag: {
      type: String,
      default: "a"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["card-link"];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardLink.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardLink.vue



MDBCardLinkvue_type_script_lang_js.render = MDBCardLinkvue_type_template_id_98b5d156_render

/* harmony default export */ var MDBCardLink = (MDBCardLinkvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardGroup.vue?vue&type=template&id=6be72b20

function MDBCardGroupvue_type_template_id_6be72b20_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCardGroup.vue?vue&type=template&id=6be72b20

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCardGroup.vue?vue&type=script&lang=js

/* harmony default export */ var MDBCardGroupvue_type_script_lang_js = ({
  name: "MDBCardGroup",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["card-group"];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCardGroup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCardGroup.vue



MDBCardGroupvue_type_script_lang_js.render = MDBCardGroupvue_type_template_id_6be72b20_render

/* harmony default export */ var MDBCardGroup = (MDBCardGroupvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCarousel.vue?vue&type=template&id=548698f6

var MDBCarouselvue_type_template_id_548698f6_hoisted_1 = {
  key: 0,
  class: "carousel-indicators"
};
var _hoisted_2 = {
  class: "carousel-inner",
  ref: "carouselInnerRef"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1);

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "visually-hidden"
}, "Previous", -1);

var _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1);

var _hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "visually-hidden"
}, "Next", -1);

function MDBCarouselvue_type_template_id_548698f6_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, _ctx.$attrs, {
    onMouseenter: $setup.handleMouseenter,
    onMouseleave: $setup.handleMouseleave,
    onKeydown: [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])($setup.handleRight, ["right"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])($setup.handleLeft, ["left"])],
    onTouchstart: $setup.handleTouchstart,
    onTouchmove: $setup.handleTouchmove,
    onTouchend: $setup.handleTouchend
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.indicators ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBCarouselvue_type_template_id_548698f6_hoisted_1, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.items, function (item, key) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
          key: key,
          type: "button",
          class: $setup.activeItemKey === key && 'active',
          "aria-current": $setup.activeItemKey === key && 'true',
          "aria-label": "Slide ".concat(key + 1),
          onClick: function onClick($event) {
            return $setup.slideTo(key);
          }
        }, null, 10, ["aria-current", "aria-label", "onClick"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.items, function (item, key) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
          class: "carousel-item",
          key: key
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("img", {
          src: item.src,
          alt: item.alt,
          class: $props.itemsClass
        }, null, 10, ["src", "alt"]), item.label || item.caption ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
          key: 0,
          class: $props.captionsClass
        }, [item.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("h5", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.label), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), item.caption ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("p", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.caption), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
      }), 128
      /* KEYED_FRAGMENT */
      ))], 512), $props.controls ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
        key: 1,
        onClick: _cache[1] || (_cache[1] = function () {
          return $setup.prev.apply($setup, arguments);
        }),
        class: "carousel-control-prev",
        type: "button"
      }, [_hoisted_5, _hoisted_6])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.controls ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
        key: 2,
        onClick: _cache[2] || (_cache[2] = function () {
          return $setup.next.apply($setup, arguments);
        }),
        class: "carousel-control-next",
        type: "button"
      }, [_hoisted_7, _hoisted_8])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 16, ["class", "onMouseenter", "onMouseleave", "onKeydown", "onTouchstart", "onTouchmove", "onTouchend"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCarousel.vue?vue&type=template&id=548698f6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCarousel.vue?vue&type=script&lang=js


/* harmony default export */ var MDBCarouselvue_type_script_lang_js = ({
  name: "MDBCarousel",
  props: {
    captionsClass: {
      type: String,
      default: "carousel-caption d-none d-md-block"
    },
    controls: {
      type: Boolean,
      default: true
    },
    dark: Boolean,
    fade: Boolean,
    indicators: {
      type: Boolean,
      default: true
    },
    interval: {
      type: [Number, Boolean],
      default: 5000
    },
    items: {
      type: Array,
      reguired: true
    },
    itemsClass: {
      type: String,
      default: "d-block w-100"
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Number,
      default: 0
    },
    pause: {
      type: [String, Boolean],
      default: "hover"
    },
    tag: {
      type: String,
      default: "div"
    },
    touch: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["carousel", "slide", props.fade && "carousel-fade", props.dark && "carousel-dark"];
    });
    var activeItemKey = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var carouselInnerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var isSliding = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var slidingInterval = null;
    var isPaused = false;

    var prev = function prev() {
      slideTo("prev");
    };

    var next = function next() {
      slideTo("next");
    };

    var slideTo = function slideTo(target) {
      if (isSliding.value) {
        return;
      }

      var isPausedState = isPaused;
      isPaused = false;
      slide(target);
      isPaused = isPausedState;
    };

    var slide = function slide(target) {
      if (isPaused || !carouselInnerRef.value) {
        return;
      }

      isSliding.value = true;
      var targetItemKey = getTargetKey(target);
      var isNext = getTargetSlideOrder(target);
      var directionalClassName = getDirectionalClassName(isNext);
      var orderClassName = getOrderClassName(isNext);
      var currentItem = getItem(activeItemKey.value);
      var targetItem = getItem(targetItemKey);
      activeItemKey.value = targetItemKey;
      targetItem.classList.add(orderClassName);
      emit("update:modelValue", activeItemKey.value);

      if (props.interval) {
        reloadInterval();
      }

      setTimeout(function () {
        currentItem.classList.add(directionalClassName);
        targetItem.classList.add(directionalClassName);
      }, 20);
      setTimeout(function () {
        currentItem.classList.remove("active");
        currentItem.classList.remove(directionalClassName);
        targetItem.classList.remove(directionalClassName);
        targetItem.classList.remove(orderClassName);
        targetItem.classList.add("active");
        isSliding.value = false;
      }, 600);
    };

    var getTargetKey = function getTargetKey(target) {
      if (target === "prev" && activeItemKey.value <= 0) {
        return props.items.length - 1;
      } else if (target === "prev") {
        return activeItemKey.value - 1;
      } else if (target === "next" && activeItemKey.value >= props.items.length - 1) {
        return 0;
      } else if (target === "next") {
        return activeItemKey.value + 1;
      } else {
        return target;
      }
    };

    var getTargetSlideOrder = function getTargetSlideOrder(target) {
      if (target === "next" || target > activeItemKey.value) {
        return true;
      } else {
        return false;
      }
    };

    var getDirectionalClassName = function getDirectionalClassName(isNext) {
      return isNext ? "carousel-item-start" : "carousel-item-end";
    };

    var getOrderClassName = function getOrderClassName(isNext) {
      return isNext ? "carousel-item-next" : "carousel-item-prev";
    };

    var getItem = function getItem(key) {
      return carouselInnerRef.value.querySelectorAll(".carousel-item")[key];
    };

    var reloadInterval = function reloadInterval() {
      clearInterval(slidingInterval);
      slidingInterval = null;
      var itemInterval = props.items[activeItemKey.value].interval || props.interval;
      slidingInterval = setInterval(function () {
        slide("next");
      }, itemInterval);
    }; // keyboard accessibility


    var handleMouseenter = function handleMouseenter() {
      if (props.pause === "hover" && props.interval) {
        clearInterval(slidingInterval);
        slidingInterval = null;
        isPaused = true;
      }
    };

    var handleMouseleave = function handleMouseleave() {
      if (props.pause === "hover" && props.interval) {
        reloadInterval();
        isPaused = false;
      }
    };

    var handleRight = function handleRight() {
      if (props.keyboard) {
        next();
      }
    };

    var handleLeft = function handleLeft() {
      if (props.keyboard) {
        prev();
      }
    }; // touch events


    var pointerEvent = Boolean(window.PointerEvent);
    var touchStartX = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var touchDeltaX = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);

    var handleTouchstart = function handleTouchstart(event) {
      if (!props.touch) {
        return;
      }

      if (pointerEvent && (event.pointerType === "pen" || event.pointerType === "touch")) {
        touchStartX.value = event.clientX;
      } else {
        touchStartX.value = event.touches[0].clientX;
      }
    };

    var handleTouchmove = function handleTouchmove(event) {
      if (!props.touch) {
        return;
      }

      touchDeltaX.value = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - touchStartX.value;
    };

    var handleTouchend = function handleTouchend(event) {
      if (!props.touch) {
        return;
      }

      if (pointerEvent && (event.pointerType === "pen" || event.pointerType === "touch")) {
        touchDeltaX.value = event.clientX - touchStartX.value;
      }

      handleSwipe();
    };

    var handleSwipe = function handleSwipe() {
      var absDeltax = Math.abs(touchDeltaX.value);

      if (absDeltax <= 40) {
        return;
      }

      var direction = absDeltax / touchDeltaX.value;
      touchDeltaX.value = 0;

      if (!direction) {
        return;
      }

      if (direction > 0) {
        prev();
      } else {
        next();
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      var currentActiveItem = carouselInnerRef.value.querySelectorAll(".carousel-item")[activeItemKey.value];
      currentActiveItem.classList.add("active");

      if (props.interval) {
        reloadInterval();
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      if (props.interval) {
        clearInterval(slidingInterval);
        slidingInterval = null;
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.modelValue;
    }, function (targetItemKey) {
      return slideTo(targetItemKey);
    });
    return {
      className: className,
      carouselInnerRef: carouselInnerRef,
      activeItemKey: activeItemKey,
      handleMouseenter: handleMouseenter,
      handleMouseleave: handleMouseleave,
      handleRight: handleRight,
      handleLeft: handleLeft,
      handleTouchstart: handleTouchstart,
      handleTouchmove: handleTouchmove,
      handleTouchend: handleTouchend,
      slideTo: slideTo,
      next: next,
      prev: prev
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCarousel.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCarousel.vue



MDBCarouselvue_type_script_lang_js.render = MDBCarouselvue_type_template_id_548698f6_render

/* harmony default export */ var MDBCarousel = (MDBCarouselvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBListGroup.vue?vue&type=template&id=3f58a71c

function MDBListGroupvue_type_template_id_3f58a71c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBListGroup.vue?vue&type=template&id=3f58a71c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBListGroup.vue?vue&type=script&lang=js

/* harmony default export */ var MDBListGroupvue_type_script_lang_js = ({
  name: "MDBListGroup",
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    horizontal: {
      type: [Boolean, String],
      default: false
    },
    flush: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["list-group", props.horizontal && horizontalClass.value, props.flush && "list-group-flush"];
    });
    var horizontalClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.horizontal) {
        return;
      }

      return props.horizontal !== true ? "list-group-horizontal-".concat(props.horizontal) : "list-group-horizontal";
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBListGroup.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBListGroup.vue



MDBListGroupvue_type_script_lang_js.render = MDBListGroupvue_type_template_id_3f58a71c_render

/* harmony default export */ var MDBListGroup = (MDBListGroupvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBListGroupItem.vue?vue&type=template&id=4c452e94

function MDBListGroupItemvue_type_template_id_4c452e94_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className,
    "aria-current": $props.active ? true : null,
    "aria-disabled": $props.disabled ? true : null,
    disabled: $props.disabled ? true : null
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "aria-current", "aria-disabled", "disabled"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBListGroupItem.vue?vue&type=template&id=4c452e94

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBListGroupItem.vue?vue&type=script&lang=js

/* harmony default export */ var MDBListGroupItemvue_type_script_lang_js = ({
  name: "MDBListGroupItem",
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: false
    },
    color: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["list-group-item", props.active && "active", props.disabled && "disabled", props.action && "list-group-item-action", props.color && "list-group-item-".concat(props.color)];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBListGroupItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBListGroupItem.vue



MDBListGroupItemvue_type_script_lang_js.render = MDBListGroupItemvue_type_template_id_4c452e94_render

/* harmony default export */ var MDBListGroupItem = (MDBListGroupItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBProgress.vue?vue&type=template&id=38a03e30

function MDBProgressvue_type_template_id_38a03e30_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    class: $setup.className,
    style: $setup.style
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["class", "style"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBProgress.vue?vue&type=template&id=38a03e30

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBProgress.vue?vue&type=script&lang=js


/* harmony default export */ var MDBProgressvue_type_script_lang_js = ({
  name: "MDBProgress",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    height: Number
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["progress"];
    });
    var style = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return {
        height: props.height + "px"
      };
    });
    return {
      className: className,
      style: style,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBProgress.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBProgress.vue



MDBProgressvue_type_script_lang_js.render = MDBProgressvue_type_template_id_38a03e30_render

/* harmony default export */ var MDBProgress = (MDBProgressvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBProgressBar.vue?vue&type=template&id=e36f6672

function MDBProgressBarvue_type_template_id_e36f6672_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className,
    role: "progressbar",
    "aria-valuenow": $props.value,
    "aria-valuemin": $props.min,
    "aria-valuemax": $props.max,
    style: [{
      width: ($props.value - $props.min) / ($props.max - $props.min) * 100 + '%'
    }]
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "aria-valuenow", "aria-valuemin", "aria-valuemax", "style"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBProgressBar.vue?vue&type=template&id=e36f6672

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBProgressBar.vue?vue&type=script&lang=js


/* harmony default export */ var MDBProgressBarvue_type_script_lang_js = ({
  name: "MDBProgressBar",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    bg: String,
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["progress-bar", props.bg && "bg-".concat(props.bg), props.striped && "progress-bar-striped", props.animated && "progress-bar-animated"];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBProgressBar.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBProgressBar.vue



MDBProgressBarvue_type_script_lang_js.render = MDBProgressBarvue_type_template_id_e36f6672_render

/* harmony default export */ var MDBProgressBar = (MDBProgressBarvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBSpinner.vue?vue&type=template&id=628e7642


var MDBSpinnervue_type_template_id_628e7642_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "visually-hidden"
}, "Loading...", -1);

function MDBSpinnervue_type_template_id_628e7642_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className,
    role: "status"
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [MDBSpinnervue_type_template_id_628e7642_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBSpinner.vue?vue&type=template&id=628e7642

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBSpinner.vue?vue&type=script&lang=js

/* harmony default export */ var MDBSpinnervue_type_script_lang_js = ({
  name: "MDBSpinner",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    grow: {
      type: Boolean,
      default: false
    },
    color: String,
    size: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.grow ? "spinner-grow" : "spinner-border", props.color && "text-".concat(props.color), "".concat(props.size ? props.grow ? "spinner-grow-" + props.size : "spinner-border-" + props.size : "")];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBSpinner.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBSpinner.vue



MDBSpinnervue_type_script_lang_js.render = MDBSpinnervue_type_template_id_628e7642_render

/* harmony default export */ var MDBSpinner = (MDBSpinnervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCollapse.vue?vue&type=template&id=cc6dee00

function MDBCollapsevue_type_template_id_cc6dee00_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    onBeforeEnter: $setup.beforeEnter,
    onEnter: $setup.enter,
    onAfterEnter: $setup.afterEnter,
    onBeforeLeave: $setup.beforeLeave,
    onLeave: $setup.leave,
    onAfterLeave: $setup.afterLeave,
    "enter-active-class": "collapsing",
    "leave-active-class": "collapsing show",
    duration: $props.duration
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        class: $setup.className,
        id: $setup.uid
      }, $setup.attrs, {
        ref: "collapse"
      }), {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
        }),
        _: 3
      }, 16, ["class", "id"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $setup.isActive]])];
    }),
    _: 1
  }, 8, ["onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave", "duration"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBCollapse.vue?vue&type=template&id=cc6dee00

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./src/components/utils/getUID.js
var MAX_UID = 1000000;
var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./src/components/utils/MDBEventHandlers.js





var stripNameRegex = /\..*/;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var nativeEvents = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === "string";
  var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

  var typeEvent = originalTypeEvent.replace(stripNameRegex, "");
  var custom = customEvents[typeEvent];

  if (custom) {
    typeEvent = custom;
  }

  var isNative = nativeEvents.indexOf(typeEvent) > -1;

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn) {
  if (typeof originalTypeEvent !== "string" || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];

  element.addEventListener(typeEvent, originalHandler, delegation);
}

function removeHandler(element, typeEvent, handler, delegationSelector) {
  element.removeEventListener(typeEvent, handler, !!delegationSelector);
}

var on = function on(element, event, handler, delegationFn) {
  addHandler(element, event, handler, delegationFn);
};
var MDBEventHandlers_off = function off(element, event, handler, delegationFn) {
  if (typeof event !== "string" || !element) {
    return;
  }

  var _normalizeParams3 = normalizeParams(event, handler, delegationFn),
      _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
      delegation = _normalizeParams4[0],
      originalHandler = _normalizeParams4[1],
      typeEvent = _normalizeParams4[2];

  removeHandler(element, typeEvent, originalHandler, delegation ? handler : null);
};
var onMulti = function onMulti(element, eventArray, handler, delegationFn) {
  var events = eventArray.split(" ");

  for (var i = 0; i < events.length; i++) {
    on(element, events[i], handler, delegationFn);
  }
};
var offMulti = function offMulti(element, eventArray, handler, delegationFn) {
  var events = eventArray.split(" ");

  for (var i = 0; i < events.length; i++) {
    MDBEventHandlers_off(element, events[i], handler, delegationFn);
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBCollapse.vue?vue&type=script&lang=js









/* harmony default export */ var MDBCollapsevue_type_script_lang_js = ({
  name: "MDBCollapse",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    modelValue: Boolean,
    id: String,
    collapseClass: String,
    duration: {
      type: Number,
      default: 300
    },
    sidenav: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var collapse = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [collapseClass.value, props.collapseClass, navbarFlexWrapValue.value ? "navbar-collapse" : "", showClass.value];
    });
    var collapseClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.sidenav ? "sidenav-collapse" : isActive.value ? "collapse" : null;
    });
    var accordionState = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("accordionState", null);
    var incrementAccordionItemsCount = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("incrementAccordionItemsCount", false);
    var setAccordionActiveItem = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("setAccordionActiveItem", false);
    var index = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);

    var manageAccordion = function manageAccordion() {
      if (index.value !== null && isActive.value) {
        setAccordionActiveItem(index.value);
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      if (accordionState) {
        if (accordionState.active !== index.value) {
          emit("update:modelValue", false);
        }
      }
    }, {
      flush: "post"
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (isActive.value) {
        collapse.value.style.height = collapse.value.scrollHeight + "px";
      }

      if (accordionState) {
        index.value = incrementAccordionItemsCount();

        if (isActive.value) {
          setAccordionActiveItem(index.value);
        }
      }
    });
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      isActive.value = props.modelValue;

      if (accordionState) {
        manageAccordion();
      }
    });

    var openCollapse = function openCollapse() {
      emit("update:modelValue", true);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("openCollapse", openCollapse);
    var navbarFlexWrapValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("navbarFlexWrapValue", false);
    var showClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!navbarFlexWrapValue || navbarFlexWrapValue.value === "wrap" && isActive.value) {
        return "show";
      } else if (navbarFlexWrapValue === "nowrap" && isActive.value) {
        return;
      }
    });

    var checkWrapCollapseValue = function checkWrapCollapseValue(cur, prev) {
      if (prev === "null" && props.modelValue) {
        // open on first render when collapsed props
        isActive.value = true;
      } else if (prev === "null" && !props.modelValue) {
        // close on first render when no collapsed props
        isActive.value = false;
      } else if (prev === "nowrap") {
        // always close when resizing down from full navbar
        isActive.value = false;
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return navbarFlexWrapValue.value;
    }, function (cur, prev) {
      if (cur === "nowrap") {
        isActive.value = true;
      } else if (cur === "wrap") {
        checkWrapCollapseValue(cur, prev);
      }

      emit("update:modelValue", isActive.value);
    }, {
      immediate: true
    });
    var uid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.id ? props.id : getUID("collapsibleContent-");
    });

    var beforeEnter = function beforeEnter(el) {
      el.style.height = "0";
    };

    var enter = function enter(el) {
      el.style.height = "".concat(getContentHeight(), "px");
    };

    var afterEnter = function afterEnter(el) {
      if (!el.classList.contains("show")) {
        el.classList.add("show");
      }
    };

    var beforeLeave = function beforeLeave(el) {
      if (!el.style.height) {
        el.style.height = "".concat(el.offsetHeight, "px");
      }
    };

    var leave = function leave(el) {
      el.style.height = "0";
    };

    var afterLeave = function afterLeave(el) {
      el.classList.add("collapse");
    };

    var previousWindowWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var isThrottled = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    var getContentHeight = function getContentHeight() {
      var contentNodes = _toConsumableArray(document.getElementById(uid.value).childNodes).filter(function (el) {
        return el.textContent.trim() != "";
      });

      return contentNodes.reduce(function (acc, cur) {
        return acc + nodeOuterHeight(cur);
      }, 0);
    };

    var nodeOuterHeight = function nodeOuterHeight(node) {
      var height = node.offsetHeight;

      if (!height) {
        // if there is no height it means this node is an inline node without any tag, eg: text node
        if (document.createRange) {
          var range = document.createRange();
          range.selectNodeContents(node);

          if (range.getBoundingClientRect) {
            var rect = range.getBoundingClientRect();

            if (rect) {
              return rect.bottom - rect.top;
            }
          }
        }

        return;
      }

      var style = window.getComputedStyle(node);
      return ["top", "bottom"].map(function (side) {
        return parseInt(style["margin-".concat(side)]);
      }).reduce(function (accHeight, margin) {
        return accHeight + margin;
      }, height);
    };

    var handleResize = function handleResize() {
      if (!isActive.value || isThrottled.value) return;
      isThrottled.value = true;
      var windowWidth = window.innerWidth;
      var contentHeight = getContentHeight();
      collapse.value.style.height = "".concat(contentHeight, "px");
      previousWindowWidth.value = windowWidth;
      setTimeout(function () {
        isThrottled.value = false;
      }, 100);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      previousWindowWidth.value = window.innerWidth;
      on(window, "resize", handleResize);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      MDBEventHandlers_off(window, "resize", handleResize);
    });
    return {
      collapse: collapse,
      className: className,
      isActive: isActive,
      uid: uid,
      beforeEnter: beforeEnter,
      enter: enter,
      afterEnter: afterEnter,
      beforeLeave: beforeLeave,
      leave: leave,
      afterLeave: afterLeave,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBCollapse.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBCollapse.vue



MDBCollapsevue_type_script_lang_js.render = MDBCollapsevue_type_template_id_cc6dee00_render

/* harmony default export */ var MDBCollapse = (MDBCollapsevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdown.vue?vue&type=template&id=6e95c6fe

function MDBDropdownvue_type_template_id_6e95c6fe_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs, {
    ref: "root"
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdown.vue?vue&type=template&id=6e95c6fe

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var esm_popper = __webpack_require__("f0bd");

// CONCATENATED MODULE: ./src/components/utils/MDBPopper.js




function MDBPopper() {
  var isPopperActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  var triggerEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
  var popperEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
  var popper = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(undefined);
  var popperOptions = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({});

  function setPopper(trigger, popper, config) {
    triggerEl.value = trigger;
    popperEl.value = popper;
    popperOptions.value = _objectSpread2({
      placement: "bottom",
      eventsEnabled: false,
      modifiers: {
        offset: {
          offset: "0"
        }
      }
    }, config);
  }

  function togglePopper() {
    isPopperActive.value = !isPopperActive.value;

    if (isPopperActive.value) {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
        return setupPopper();
      });
    }
  }

  function openPopper() {
    if (isPopperActive.value) {
      return;
    }

    isPopperActive.value = true;
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
      return popper.value = setupPopper();
    });
  }

  function closePopper() {
    if (!isPopperActive.value) {
      return;
    }

    isPopperActive.value = !isPopperActive.value;
  }

  function setupPopper() {
    if (popper.value === undefined || !popper.value) {
      popper.value = new esm_popper["a" /* default */](triggerEl.value, popperEl.value, popperOptions.value);
    } else {
      popper.value.scheduleUpdate();
    }
  }

  function updatePopper(option, value) {
    popperOptions.value[option] = value;
    popper.value = new esm_popper["a" /* default */](triggerEl.value, popperEl.value, popperOptions.value);
  }

  function destroyPopper() {
    if (!popper.value) {
      return;
    }

    popper.value.destroy();
    popper.value = undefined;
  }

  return {
    setPopper: setPopper,
    togglePopper: togglePopper,
    isPopperActive: isPopperActive,
    openPopper: openPopper,
    closePopper: closePopper,
    updatePopper: updatePopper,
    destroyPopper: destroyPopper
  };
}

/* harmony default export */ var utils_MDBPopper = (MDBPopper);
// CONCATENATED MODULE: ./src/components/utils/MDBBreakpointHandler.js







var handleBreakpoints = function handleBreakpoints(windowWidth, breakpointValues) {
  var breakpoints = {
    none: {
      width: 0,
      attr: null
    },
    sm: {
      width: 576,
      attr: null
    },
    md: {
      width: 768,
      attr: null
    },
    lg: {
      width: 992,
      attr: null
    },
    xl: {
      width: 1200,
      attr: null
    },
    xxl: {
      width: 1400,
      attr: null
    },
    mega: {
      width: 10000,
      attr: null
    }
  }; // replace breakpoints attr values with corresponding props values

  breakpointValues.forEach(function (value) {
    var match = Object.keys(breakpoints).filter(function (breakpoint) {
      return value.includes(breakpoint) ? breakpoint : false;
    })[0];

    if (match) {
      breakpoints[match].attr = value;
    } else {
      breakpoints.none.attr = value;
    }
  }); // create range object that holds props value
  // and its min and max window width range
  // ranges = {
  //   default: {
  //     min: 0,
  //     max: 768
  //   },
  //   afterMd: {
  //     min:768,
  //     max: 1200
  //   },
  //   afterXl: {
  //     min: 1200,
  //     max: 10000
  //   }
  // }

  var ranges = {};
  Object.keys(breakpoints).reduce(function (acc, cur, index) {
    if (breakpoints[acc].attr && breakpoints[cur].attr || breakpoints[acc].attr && !cur) {
      ranges[breakpoints[acc].attr] = {
        min: breakpoints[acc].width,
        max: breakpoints[cur].width
      };
      return cur;
    } else if (breakpoints[acc].attr && !breakpoints[cur].attr) {
      if (index === Object.keys(breakpoints).length - 1) {
        ranges[breakpoints[acc].attr] = {
          min: breakpoints[acc].width,
          max: breakpoints[cur].width
        };
      }

      return acc;
    }
  }); // return single value that matches actual window width range

  var value = Object.keys(ranges).filter(function (key) {
    if (windowWidth > ranges[key].min && windowWidth < ranges[key].max) {
      return key;
    }
  })[0];
  return value;
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdown.vue?vue&type=script&lang=js











/* harmony default export */ var MDBDropdownvue_type_script_lang_js = ({
  name: "MDBDropdown",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    btnGroup: {
      type: Boolean,
      default: false
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropend: {
      type: Boolean,
      default: false
    },
    dropstart: {
      type: Boolean,
      default: false
    },
    align: {
      type: [String, Array],
      default: "start"
    },
    updatePosition: {
      type: Boolean,
      default: true
    },
    offset: String,
    target: String,
    modelValue: Boolean
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.btnGroup ? "btn-group" : "dropdown", props.dropup && "dropup", props.dropend && "dropend", props.dropstart && "dropstart"];
    });

    var _MDBPopper = utils_MDBPopper(),
        setPopper = _MDBPopper.setPopper,
        isPopperActive = _MDBPopper.isPopperActive,
        closePopper = _MDBPopper.closePopper,
        openPopper = _MDBPopper.openPopper,
        updatePopper = _MDBPopper.updatePopper;

    var root = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("root");
    var triggerEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var popperEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var windowWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(window.innerWidth);
    var menuAlignClasses = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("");
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("menuAlignClasses", menuAlignClasses);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("closePopper", closePopper); // ------------------- isActive -------------------
    // controlled by modelValue property, triggers DropdownMenu visibilty
    // by toggling its v-if value on or off

    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      return isActive.value = props.modelValue;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("isActive", isActive); // ------------------- isMenuMounted -------------------
    // controls if DropdownMenu has been mounted into DOM and its element
    // can be targeted by the Popper setup function

    var isMenuMounted = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var dropdownMenu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);

    var setMenuMountedState = function setMenuMountedState(boolean, menuRef) {
      isMenuMounted.value = boolean;
      dropdownMenu.value = menuRef;
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("setMenuMountedState", setMenuMountedState);

    var handleMenuMountedState = function handleMenuMountedState(mountedValue) {
      if (mountedValue) {
        popperSetup();
        openPopper();
      } else {
        closePopper();
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return isMenuMounted.value;
    }, function (cur) {
      return handleMenuMountedState(cur);
    }, {
      immediate: true
    }); // ------------------- isPopperActive -------------------
    // controls if Popper is mounted into DOM
    // also Poppers visibility triggers DropdownMenu open/close animation
    // with adding/removing 'show' class
    // style fix for .dropup .dropdown-menu
    // original style 'bottom=100%' corrupts popper position

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      if (isPopperActive.value && props.dropup) {
        var dropdowns = document.querySelectorAll(".dropup .dropdown-menu");
        dropdowns.forEach(function (dropdown) {
          dropdown.style.bottom = "auto";
        });
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("isPopperActive", isPopperActive);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("externalTarget", props.target); // ------------------- handleEscAndOutsideClick -------------------
    // mimics toggling modelValue when user click outside the toggle button
    // or close dropdown with escape button

    var handleEscAndOutsideClick = function handleEscAndOutsideClick() {
      emit("update:modelValue", false);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("handleEscAndOutsideClick", handleEscAndOutsideClick); // ------------------- Utilites and setups -------------------

    var popperPosition = props.dropup ? "top" : props.dropend ? "right" : props.dropstart ? "left" : "bottom";

    var popperSetup = function popperSetup() {
      triggerEl.value = props.target ? document.querySelector(props.target) : root.value.querySelector("[data-trigger]");
      popperEl.value = dropdownMenu.value;

      if (typeof props.align === "string") {
        menuAlignClasses.value = "dropdown-menu-".concat(props.align);
      } else {
        menuAlignClasses.value = props.align.map(function (prop) {
          return "dropdown-menu-".concat(prop).trim();
        });
      }

      var align = props.align;

      if (typeof props.align !== "string" || props.align !== "start" && props.align !== "end") {
        align = getBreakpointValue();
        on(window, "resize", listenToResize);
      }

      var placement = "".concat(popperPosition, "-").concat(align);
      var config = {
        placement: placement,
        eventsEnabled: props.updatePosition,
        modifiers: {
          offset: {
            offset: props.offset || "0"
          },
          preventOverflow: {
            enabled: true
          },
          flip: {
            enabled: true
          }
        }
      };
      setPopper(triggerEl.value, popperEl.value, config);
    };

    var getBreakpointValue = function getBreakpointValue() {
      windowWidth.value = window.innerWidth;
      var propsValues = props.align;

      if (typeof props.align === "string") {
        propsValues = ["start", props.align];
      }

      var activeBrakpointValue = handleBreakpoints(windowWidth.value, propsValues);

      if (!activeBrakpointValue) {
        return;
      }

      return activeBrakpointValue.includes("start") ? "start" : "end";
    };

    var listenToResize = function listenToResize() {
      var align = getBreakpointValue();
      updatePopper("placement", "".concat(popperPosition, "-").concat(align));
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      MDBEventHandlers_off(window, "resize", listenToResize);
    });
    return {
      className: className,
      root: root,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdown.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdown.vue



MDBDropdownvue_type_script_lang_js.render = MDBDropdownvue_type_template_id_6e95c6fe_render

/* harmony default export */ var MDBDropdown = (MDBDropdownvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdownToggle.vue?vue&type=template&id=6a55297a



var MDBDropdownTogglevue_type_template_id_6a55297a_hoisted_1 = {
  key: 1,
  class: "visually-hidden"
};
function MDBDropdownTogglevue_type_template_id_6a55297a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_mdb_click_outside = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("mdb-click-outside");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    type: "button",
    class: $setup.className,
    "aria-expanded": $setup.expanded,
    "aria-haspopup": "true"
  }, $setup.attrs, {
    onClick: $setup.toggle,
    "data-trigger": ""
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [!$props.split ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
        key: 0
      }) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", MDBDropdownTogglevue_type_template_id_6a55297a_hoisted_1, "Toggle Dropdown"))];
    }),
    _: 1
  }, 16, ["class", "aria-expanded", "onClick"])), [[_directive_mdb_click_outside, $setup.handleClickOutside]]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownToggle.vue?vue&type=template&id=6a55297a

// CONCATENATED MODULE: ./src/directives/free/mdbClickOutside.js
/* harmony default export */ var mdbClickOutside = ({
  stopProp: function stopProp(e) {
    e.stopPropagation();
  },
  mounted: function mounted(el, binding) {
    var handler = function handler(e) {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value(e);
      }
    };

    el.clickOutside = handler;
    var event = binding.modifiers.mousedown ? "mousedown" : "click";
    document.addEventListener(event, el.clickOutside);
    document.addEventListener("touchstart", el.clickOutside);
  },
  unmounted: function unmounted(el, binding) {
    if (!el.clickOutside) return;
    var event = binding.modifiers.mousedown ? "mousedown" : "click";
    document.removeEventListener(event, el.clickOutside);
    document.removeEventListener("touchstart", el.clickOutside);
    delete el.clickOutside;
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdownToggle.vue?vue&type=script&lang=js






/* harmony default export */ var MDBDropdownTogglevue_type_script_lang_js = ({
  name: "MDBDropdownToggle",
  components: {
    MDBBtn: MDBBtn
  },
  inheritAttrs: false,
  emits: ["toggle-dropdown"],
  props: _objectSpread2(_objectSpread2({}, MDBBtn.props), {}, {
    tag: {
      type: String,
      default: "button"
    },
    href: [String, null],
    split: {
      type: Boolean,
      default: false
    }
  }),
  directives: {
    mdbClickOutside: mdbClickOutside
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [btnClass.value, "dropdown-toggle", props.split && "dropdown-toggle-split", props.size && "btn-".concat(props.size), props.outline && "btn-outline-".concat(props.outline)];
    });
    var btnClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.tag !== "button") return;
      var color = props.color && !props.outline ? "btn-".concat(props.color) : props.outline ? "" : "btn-primary";
      return "btn ".concat(color);
    });
    var expanded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    var toggle = function toggle() {
      expanded.value = !expanded.value;
    };

    var isPopperActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("isPopperActive", false);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      expanded.value = isPopperActive.value;
    });
    var handleEscAndOutsideClick = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("handleEscAndOutsideClick", false);

    var handleClickOutside = function handleClickOutside(e) {
      if (isPopperActive && !e.target.closest(".dropdown-menu")) {
        handleEscAndOutsideClick();
      }
    };

    return {
      className: className,
      expanded: expanded,
      toggle: toggle,
      handleClickOutside: handleClickOutside,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownToggle.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownToggle.vue



MDBDropdownTogglevue_type_script_lang_js.render = MDBDropdownTogglevue_type_template_id_6a55297a_render

/* harmony default export */ var MDBDropdownToggle = (MDBDropdownTogglevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdownMenu.vue?vue&type=template&id=dce6a5a6

function MDBDropdownMenuvue_type_template_id_dce6a5a6_render(_ctx, _cache, $props, $setup, $data, $options) {
  return !$setup.shouldTeleport ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    key: 0
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$setup.isMounted ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 0,
        class: $setup.className,
        style: $setup.staticStyle
      }, $setup.attrs, {
        "data-popper": "",
        ref: "root"
      }), {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
        }),
        _: 3
      }, 16, ["class", "style"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  })) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    key: 1,
    to: $setup.externalTarget
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], null, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$setup.isMounted ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 0,
        class: $setup.className,
        style: $setup.staticStyle
      }, $setup.attrs, {
        "data-popper": $setup.externalTarget,
        ref: "root"
      }), {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
        }),
        _: 3
      }, 16, ["class", "style", "data-popper"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  })], 8, ["to"]));
}
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownMenu.vue?vue&type=template&id=dce6a5a6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdownMenu.vue?vue&type=script&lang=js




/* harmony default export */ var MDBDropdownMenuvue_type_script_lang_js = ({
  name: "MDBDropdownMenu",
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    fadeIn: {
      type: String,
      default: "fade-in"
    },
    fadeOut: {
      type: String,
      default: "fade-out"
    },
    animation: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["dropdown-menu", menuAlignClasses.value, fadeClass.value, showClass.value && "show", props.dark && "dropdown-menu-dark"];
    });
    var menuAlignClasses = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("menuAlignClasses", "dropdown-menu-start");
    var root = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("root");
    var fadeClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("");
    var showClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var staticStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.static ? {
        display: "block",
        position: "static"
      } : false;
    });

    var handleAnimation = function handleAnimation() {
      if (!props.animation) {
        return;
      }

      setTimeout(function () {
        fadeClass.value = false;
      }, 300);
    }; // ------------------- isActive -------------------
    // controls if DropdownMenu is presented into DOM by isMounted value
    // controls close class and animation


    var setMenuMountedState = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("setMenuMountedState", function () {
      return false;
    });
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("isActive", false);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return isActive.value;
    }, function (cur) {
      if (cur) {
        setTimeout(function () {
          setMenuMountedState(true, root.value);
        }, 100);
      } else if (!cur && isPopperActive) {
        setInactive();
        setTimeout(function () {
          setMenuMountedState(false);
        }, 300);
      }
    });

    var setInactive = function setInactive() {
      // keyboard navigation
      MDBEventHandlers_off(document, "keydown", handleDown);
      count.value = 0; // close animation

      fadeClass.value = props.animation && "animation ".concat(props.fadeOut);
      showClass.value = false;
      handleAnimation();
    };

    var isMounted = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.static) {
        // standalone DropdownMenu component that needs to be visible always
        return true;
      } else if (isActive.value || !isActive.value && isPopperActive.value) {
        return true;
      } else if (!isActive.value && !isPopperActive.value) {
        setTimeout(function () {
          return false;
        }, 300);
      }
    });
    var externalTarget = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("externalTarget", false);
    var shouldTeleport = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (externalTarget) {
        var target = document.body.querySelector(externalTarget);

        if (target) {
          shouldTeleport.value = true;
        }
      }
    }); // ------------------- isPopperActive -------------------
    // controls if DropdownMenu is visible for user or not
    // controls show class and animation

    var isPopperActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("isPopperActive", false);

    var setActive = function setActive() {
      on(document, "keydown", handleDown);
      fadeClass.value = props.animation && "animation ".concat(props.fadeIn);
      handleAnimation();
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return isPopperActive.value;
    }, function (cur, prev) {
      if (!prev && cur === true || prev === false) {
        items.value = root.value.querySelectorAll(".dropdown-item");
        showClass.value = true;
        setActive();
      }
    }); // ------------------- Utilities for keyboard navigation -------------------

    var count = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var items = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var handleEscAndOutsideClick = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("handleEscAndOutsideClick", function () {
      return false;
    });

    var handleDown = function handleDown(e) {
      var _items$value, _items$value2;

      var key = e.key;

      if (key === "ArrowUp" || key === "ArrowDown") {
        e.preventDefault();
      }

      if (!isActive.value) {
        return;
      }

      items.value.forEach(function (item) {
        item.classList.remove("active");
      });

      switch (key) {
        case "Escape":
          handleEscAndOutsideClick();
          return;

        case "Enter":
          (_items$value = items.value[count.value - 1]) === null || _items$value === void 0 ? void 0 : _items$value.click(); // setInactive();

          return;

        case "ArrowUp":
          count.value--;

          if (count.value <= 0) {
            count.value = items.value.length;
          }

          break;

        case "ArrowDown":
          count.value++;

          if (count.value > items.value.length) {
            count.value = 1;
          }

          break;

        default:
          break;
      }

      (_items$value2 = items.value[count.value - 1]) === null || _items$value2 === void 0 ? void 0 : _items$value2.classList.add("active");
    };

    return {
      staticStyle: staticStyle,
      showClass: showClass,
      className: className,
      isMounted: isMounted,
      shouldTeleport: shouldTeleport,
      externalTarget: externalTarget,
      root: root,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownMenu.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownMenu.vue



MDBDropdownMenuvue_type_script_lang_js.render = MDBDropdownMenuvue_type_template_id_dce6a5a6_render

/* harmony default export */ var MDBDropdownMenu = (MDBDropdownMenuvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdownItem.vue?vue&type=template&id=5b763505

var MDBDropdownItemvue_type_template_id_5b763505_hoisted_1 = {
  key: 1,
  class: "dropdown-divider"
};
function MDBDropdownItemvue_type_template_id_5b763505_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", {
    onKeyup: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return _ctx.handleKeypress.apply(_ctx, arguments);
    }, ["stop"]), ["enter"])),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('click', $event);
    }),
    tabindex: $props.divider ? null : 0
  }, [$setup.hasLinkOrTag ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($setup.tagName), {
    key: 0,
    to: $props.to,
    exact: $props.to ? $props.exact : null,
    href: $props.to ? null : $props.href,
    class: $setup.className,
    target: $setup.tab,
    type: $props.tag === 'button' ? 'button' : null,
    "aria-current": $props.active ? true : null,
    "aria-disabled": $props.disabled ? true : null,
    disabled: $props.disabled ? true : null
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to", "exact", "href", "class", "target", "type", "aria-current", "aria-disabled", "disabled"])) : $props.divider ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("hr", MDBDropdownItemvue_type_template_id_5b763505_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
    key: 2
  })], 40, ["tabindex"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownItem.vue?vue&type=template&id=5b763505

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBDropdownItem.vue?vue&type=script&lang=js

/* harmony default export */ var MDBDropdownItemvue_type_script_lang_js = ({
  name: "MDBDropdownItem",
  props: {
    tag: {
      type: String,
      default: "a"
    },
    to: [String, Object],
    href: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    newTab: {
      type: Boolean,
      default: false
    },
    submenu: {
      type: Boolean,
      default: false
    },
    submenuIcon: String,
    divider: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [dropdownClass.value, props.disabled ? "disabled" : "", props.active ? "active" : "", props.submenu && "dropdown-submenu"];
    });
    var hasLinkOrTag = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.to !== undefined || props.href !== undefined || props.tag !== "a" || props.text) {
        return true;
      }

      return false;
    });
    var dropdownClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.text) {
        return "dropdown-item-text";
      } else if (props.header) {
        return "dropdown-header";
      }

      return "dropdown-item";
    });
    var tagName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.to) {
        return "router-link";
      } else if (props.text) {
        return "span";
      }

      return props.tag;
    });
    var tab = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.newTab) {
        return "_blank";
      }

      return null;
    });
    return {
      className: className,
      hasLinkOrTag: hasLinkOrTag,
      tagName: tagName,
      tab: tab,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBDropdownItem.vue



MDBDropdownItemvue_type_script_lang_js.render = MDBDropdownItemvue_type_template_id_5b763505_render

/* harmony default export */ var MDBDropdownItem = (MDBDropdownItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBTooltip.vue?vue&type=template&id=e3061790

var MDBTooltipvue_type_template_id_e3061790_hoisted_1 = {
  key: 0,
  "x-arrow": "",
  class: "tooltip_arrow"
};
function MDBTooltipvue_type_template_id_e3061790_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    ref: "triggerEl",
    style: {
      "display": "inline-block"
    },
    onMouseover: $setup.onMouseOver,
    onMouseout: $setup.onMouseOut
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "reference")];
    }),
    _: 3
  }, 8, ["onMouseover", "onMouseout"])), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$setup.isActive ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        ref: "popperEl",
        class: {
          tooltip: true,
          fade: true,
          'tooltip-inner': true
        },
        style: [$setup.widthStyle]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "tip"), $props.arrow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBTooltipvue_type_template_id_e3061790_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  })], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/components/MDBTooltip.vue?vue&type=template&id=e3061790

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBTooltip.vue?vue&type=script&lang=js





/* harmony default export */ var MDBTooltipvue_type_script_lang_js = ({
  name: "MDBTooltip",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    modelValue: Boolean,
    reference: String,
    popover: String,
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    offset: {
      type: String,
      default: "0, 5"
    },
    direction: {
      type: String,
      default: "top",
      validator: function validator(value) {
        return ["top", "right", "bottom", "left"].indexOf(value.toLowerCase()) > -1;
      }
    },
    maxWidth: {
      type: Number,
      default: 276
    },
    arrow: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;

    var _MDBPopper = utils_MDBPopper(),
        setPopper = _MDBPopper.setPopper,
        isPopperActive = _MDBPopper.isPopperActive,
        openPopper = _MDBPopper.openPopper,
        closePopper = _MDBPopper.closePopper,
        destroyPopper = _MDBPopper.destroyPopper;

    var triggerEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("triggerEl");
    var popperEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("popperEl");
    var widthStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return "max-width: ".concat(props.maxWidth, "px!important");
    });

    var popperSetup = function popperSetup() {
      triggerEl.value = props.reference ? document.querySelector(props.reference) : triggerEl.value;
      popperEl.value = props.popover ? document.querySelector(props.popover) : popperEl.value;
      var placement = props.direction;

      var config = _objectSpread2({
        placement: placement,
        eventsEnabled: props.updatePosition,
        modifiers: {
          offset: {
            offset: props.arrow ? "0" : props.offset
          }
        },
        gpuAcceleration: false
      }, props.options);

      setPopper(triggerEl.value, popperEl.value, config);
    };

    var isThrottled = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      if (props.modelValue) {
        if (isThrottled.value) {
          return;
        }

        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
          popperSetup();
          setTimeout(openPopper, 0);
          setTimeout(function () {
            popperEl.value.classList.add("show");
          }, 0);
        });
      } else {
        if (!isPopperActive.value) {
          return;
        }

        setTimeout(function () {
          popperEl.value.classList.remove("show");
        }, 10);
        isThrottled.value = true;
        setTimeout(function () {
          closePopper();
          isThrottled.value = false;
        }, 150);
        destroyPopper();
      }
    });
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.modelValue || !props.modelValue && isPopperActive.value) {
        return true;
      } else if (!props.modelValue && !isPopperActive.value) {
        return false;
      }
    });

    var onMouseOver = function onMouseOver() {
      !props.disabled && emit("update:modelValue", true);
    };

    var onMouseOut = function onMouseOut() {
      !props.disabled && emit("update:modelValue", false);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      destroyPopper();
    });
    return {
      isActive: isActive,
      triggerEl: triggerEl,
      popperEl: popperEl,
      widthStyle: widthStyle,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBTooltip.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBTooltip.vue



MDBTooltipvue_type_script_lang_js.render = MDBTooltipvue_type_template_id_e3061790_render

/* harmony default export */ var MDBTooltip = (MDBTooltipvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBPopover.vue?vue&type=template&id=40d4df56

var MDBPopovervue_type_template_id_40d4df56_hoisted_1 = {
  key: 0,
  class: "popover-header"
};
var MDBPopovervue_type_template_id_40d4df56_hoisted_2 = {
  key: 1,
  class: "popover-body"
};
var MDBPopovervue_type_template_id_40d4df56_hoisted_3 = {
  key: 2,
  "x-arrow": "",
  class: "popover_arrow"
};
function MDBPopovervue_type_template_id_40d4df56_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_mdb_click_outside = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("mdb-click-outside");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    ref: "triggerEl",
    style: {
      "display": "inline-block"
    },
    tabindex: $props.dismissible ? 0 : null
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "reference")];
    }),
    _: 3
  }, 8, ["tabindex"])), [[_directive_mdb_click_outside, $setup.handleClickOutside]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], null, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$setup.isActive && (_ctx.$slots.header || _ctx.$slots.body) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        ref: "popperEl",
        class: {
          popover: true,
          fade: true
        },
        style: [$setup.widthStyle, $setup.marginStyle]
      }, [_ctx.$slots.header ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBPopovervue_type_template_id_40d4df56_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.$slots.body ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBPopovervue_type_template_id_40d4df56_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "body")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), $props.arrow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBPopovervue_type_template_id_40d4df56_hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  })], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/components/MDBPopover.vue?vue&type=template&id=40d4df56

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBPopover.vue?vue&type=script&lang=js







/* harmony default export */ var MDBPopovervue_type_script_lang_js = ({
  name: "MDBPopover",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    modelValue: Boolean,
    reference: String,
    popover: String,
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    offset: {
      type: String,
      default: "0, 5"
    },
    direction: {
      type: String,
      default: "bottom",
      validator: function validator(value) {
        return ["top", "right", "bottom", "left"].indexOf(value.toLowerCase()) > -1;
      }
    },
    maxWidth: {
      type: Number,
      default: 276
    },
    arrow: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    updatePosition: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    mdbClickOutside: mdbClickOutside
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;

    var _MDBPopper = utils_MDBPopper(),
        setPopper = _MDBPopper.setPopper,
        isPopperActive = _MDBPopper.isPopperActive,
        openPopper = _MDBPopper.openPopper,
        closePopper = _MDBPopper.closePopper,
        destroyPopper = _MDBPopper.destroyPopper;

    var triggerEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("triggerEl");
    var popperEl = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("popperEl");
    var widthStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return "max-width: ".concat(props.maxWidth, "px!important");
    });
    var marginStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.arrow) {
        return;
      }

      var margin;

      switch (props.direction) {
        case "top":
          margin = "margin-bottom: 16px";
          break;

        case "bottom":
          margin = "margin-top: 16px";
          break;

        case "right":
          margin = "margin-left: 16px";
          break;

        case "left":
          margin = "margin-right: 16px";
          break;

        default:
          break;
      }

      return margin;
    });

    var popperSetup = function popperSetup() {
      triggerEl.value = props.reference ? document.querySelector(props.reference) : triggerEl.value;
      popperEl.value = props.popover ? document.querySelector(props.popover) : popperEl.value;
      var placement = props.direction;

      var config = _objectSpread2({
        placement: placement,
        eventsEnabled: props.updatePosition,
        modifiers: {
          offset: {
            offset: props.arrow ? "0" : props.offset
          }
        },
        gpuAcceleration: false
      }, props.options);

      setPopper(triggerEl.value, popperEl.value, config);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      if (props.modelValue) {
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
          popperSetup();
          setTimeout(openPopper, 0);
          setTimeout(function () {
            popperEl.value.classList.add("show");

            if (props.hover) {
              on(popperEl.value, "mouseover", onMouseOver);
              on(popperEl.value, "mouseout", onMouseOut);
            }
          }, 0);
        });
      } else {
        if (!isPopperActive.value) {
          return;
        }

        setTimeout(function () {
          MDBEventHandlers_off(popperEl.value, "mouseover", onMouseOver);
          MDBEventHandlers_off(popperEl.value, "mouseout", onMouseOut);
          popperEl.value.classList.remove("show");
        }, 0);
        setTimeout(closePopper, 0);
        destroyPopper();
      }
    });
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.modelValue || !props.modelValue && isPopperActive.value) {
        return true;
      } else if (!props.modelValue && !isPopperActive.value) {
        return false;
      }
    });

    var onMouseOver = function onMouseOver() {
      emit("update:modelValue", true);
    };

    var onMouseOut = function onMouseOut() {
      emit("update:modelValue", false);
    };

    var handleClickOutside = function handleClickOutside() {
      if (!props.dismissible || !props.modelValue) {
        return;
      }

      emit("update:modelValue", false);
    };

    var destroy = function destroy() {
      MDBEventHandlers_off(triggerEl.value, "mouseover", onMouseOver);
      MDBEventHandlers_off(triggerEl.value, "mouseout", onMouseOut);
      destroyPopper();
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (props.hover) {
        on(triggerEl.value, "mouseover", onMouseOver);
        on(triggerEl.value, "mouseout", onMouseOut);
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      destroy();
    });
    return {
      isActive: isActive,
      triggerEl: triggerEl,
      popperEl: popperEl,
      widthStyle: widthStyle,
      marginStyle: marginStyle,
      handleClickOutside: handleClickOutside,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBPopover.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBPopover.vue



MDBPopovervue_type_script_lang_js.render = MDBPopovervue_type_template_id_40d4df56_render

/* harmony default export */ var MDBPopover = (MDBPopovervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModal.vue?vue&type=template&id=6a13f572

function MDBModalvue_type_template_id_6a13f572_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    onEnter: $setup.enter,
    onAfterEnter: $setup.afterEnter,
    onBeforeLeave: $setup.beforeLeave,
    onAfterLeave: $setup.afterLeave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$setup.isActive ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 0,
        ref: "root",
        class: $setup.wrapperClass,
        style: [$setup.backdropStyle, $setup.backdropOverflowStyle],
        "aria-hidden": !$setup.isActive,
        "aria-modal": $setup.isActive ? true : null,
        "aria-labelledby": $props.labelledby,
        role: "dialog",
        onClick: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($setup.closeModal, ["self"])
      }, $setup.attrs), {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: $setup.dialogClass,
            role: "document",
            ref: "dialog"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "modal-content",
            style: $setup.computedContentStyle
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 4)], 2)];
        }),
        _: 3
      }, 16, ["class", "style", "aria-hidden", "aria-modal", "aria-labelledby", "onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBModal.vue?vue&type=template&id=6a13f572

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModal.vue?vue&type=script&lang=js





/* harmony default export */ var MDBModalvue_type_script_lang_js = ({
  name: "MDBModal",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    modelValue: Boolean,
    size: {
      type: String,
      validator: function validator(value) {
        return ["sm", "lg", "xl"].indexOf(value.toLowerCase()) > -1;
      }
    },
    removeBackdrop: {
      type: Boolean,
      default: false
    },
    staticBackdrop: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    bgSrc: {
      type: String,
      default: ""
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 400
    },
    labelledby: String,
    fullscreen: {
      type: [Boolean, String],
      default: false
    },
    animation: {
      type: Boolean,
      default: true
    },
    dialogClasses: {
      type: String
    },
    transform: String
  },
  emits: ["show", "shown", "hide", "hidden", "update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var root = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("root");
    var dialog = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("dialog");
    var dialogTransform = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("");
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var thisElement = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      isActive.value = props.modelValue;

      if (isActive.value) {
        emit("update:modelValue", true);
      }
    });
    var wrapperClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["modal", props.animation && "fade", isActive.value && "show", props.staticBackdrop && "modal-static"];
    });
    var dialogClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["modal-dialog", props.size && "modal-" + props.size, props.centered && "modal-dialog-centered", props.scrollable && "modal-dialog-scrollable", props.fullscreen && fullscreenClass.value, props.dialogClasses];
    });
    var backdropStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.removeBackdrop ? false : {
        "background-color": "rgba(0,0,0, 0.5)"
      };
    }); // shouldOverflow with backdropOverflowStyle prevents bottom modal create additional scrollbar on show

    var shouldOverflow = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.transform === "translate(0,25%)" ? false : true);
    var backdropOverflowStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (shouldOverflow.value) {
        return;
      }

      return "overflow: hidden";
    });
    var computedContentStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.bgSrc ? {
        "background-image": "url(\"".concat(props.bgSrc, "\")")
      } : false;
    });
    var fullscreenClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.fullscreen) {
        return false;
      }

      return [props.fullscreen !== true ? "modal-fullscreen-".concat(props.fullscreen) : "modal-fullscreen"];
    });

    var closeModal = function closeModal() {
      if (props.staticBackdrop) {
        animateStaticModal(dialog.value);
        return;
      }

      emit("update:modelValue", false);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("closeModal", closeModal);

    var animateStaticModal = function animateStaticModal(el) {
      el.style.transform = "scale(1.02)";
      setTimeout(function () {
        return el.style.transform = "scale(1.0)";
      }, 300);
    };

    var handleEscKeyUp = function handleEscKeyUp(e) {
      if (e.key === "Escape" && isActive.value) {
        closeModal();
      }
    };

    var isBodyOverflowing = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var scrollbarWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0); // Bootstrap way to measure scrollbar width

    var getScrollbarWidth = function getScrollbarWidth() {
      var scrollDiv = document.createElement("div");
      scrollDiv.className = "modal-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    var setScrollbar = function setScrollbar() {
      var rect = document.body.getBoundingClientRect();
      isBodyOverflowing.value = Math.round(rect.left + rect.right) < window.innerWidth;
      scrollbarWidth.value = isBodyOverflowing.value ? getScrollbarWidth().toFixed(2) : 0;
    };

    var enter = function enter(el) {
      shouldOverflow.value = props.transform === "translate(0,25%)" ? false : true;
      dialogTransform.value = props.transform || "translate(0, -25%)";
      el.childNodes[0].style.transform = dialogTransform.value;
      el.style.opacity = 0;
      el.style.display = "block";
      setScrollbar();
      document.body.style.paddingRight = "".concat(scrollbarWidth.value, "px");
      el.style.paddingRight = "".concat(scrollbarWidth.value, "px");
      document.body.classList.add("modal-open");
      emit("show", root.value);
    };

    var afterEnter = function afterEnter(el) {
      el.childNodes[0].style.transform = "translate(0,0)";
      el.style.opacity = 1;
      setTimeout(function () {
        shouldOverflow.value = true;
        emit("shown", root.value);
      }, 400);
      thisElement.value = root.value;
    };

    var beforeLeave = function beforeLeave(el) {
      el.childNodes[0].style.transform = dialogTransform.value;
      el.style.opacity = 0;
      setTimeout(function () {
        el.style.paddingRight = null;
        document.body.style.paddingRight = null;
        document.body.classList.remove("modal-open");
      }, 200);
      emit("hide", thisElement.value);
    };

    var afterLeave = function afterLeave() {
      emit("hidden", thisElement.value);
      shouldOverflow.value = false;
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      on(window, "keyup", handleEscKeyUp);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(function () {
      MDBEventHandlers_off(window, "keyup", handleEscKeyUp);
    });
    return {
      wrapperClass: wrapperClass,
      dialogClass: dialogClass,
      backdropStyle: backdropStyle,
      backdropOverflowStyle: backdropOverflowStyle,
      computedContentStyle: computedContentStyle,
      root: root,
      dialog: dialog,
      isActive: isActive,
      closeModal: closeModal,
      enter: enter,
      afterEnter: afterEnter,
      beforeLeave: beforeLeave,
      afterLeave: afterLeave,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBModal.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBModal.vue



MDBModalvue_type_script_lang_js.render = MDBModalvue_type_template_id_6a13f572_render

/* harmony default export */ var MDBModal = (MDBModalvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalHeader.vue?vue&type=template&id=a0d84214

function MDBModalHeadervue_type_template_id_a0d84214_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MDBBtnClose = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("MDBBtnClose");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.context.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), $props.close ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_MDBBtnClose, {
        key: 0,
        white: $props.closeWhite,
        onClick: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($setup.closeModal, ["prevent"])
      }, null, 8, ["white", "onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBModalHeader.vue?vue&type=template&id=a0d84214

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalHeader.vue?vue&type=script&lang=js


/* harmony default export */ var MDBModalHeadervue_type_script_lang_js = ({
  name: "MDBModalHeader",
  components: {
    MDBBtnClose: MDBBtnClose
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    close: {
      type: Boolean,
      default: true
    },
    closeWhite: {
      type: Boolean,
      default: false
    },
    color: String
  },
  setup: function setup(props, context) {
    var closeModal = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("closeModal", false);
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["modal-header", props.color && "bg-".concat(props.color)];
    });
    return {
      className: className,
      closeModal: closeModal,
      context: context,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBModalHeader.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBModalHeader.vue



MDBModalHeadervue_type_script_lang_js.render = MDBModalHeadervue_type_template_id_a0d84214_render

/* harmony default export */ var MDBModalHeader = (MDBModalHeadervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalTitle.vue?vue&type=template&id=d219cb24

function MDBModalTitlevue_type_template_id_d219cb24_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBModalTitle.vue?vue&type=template&id=d219cb24

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.bold.js
var es_string_bold = __webpack_require__("cc71");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalTitle.vue?vue&type=script&lang=js


/* harmony default export */ var MDBModalTitlevue_type_script_lang_js = ({
  name: "MDBModalTitle",
  props: {
    tag: {
      type: String,
      default: "h5"
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["modal-title", props.bold && "font-weight-bold"];
    });
    return {
      className: className,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBModalTitle.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBModalTitle.vue



MDBModalTitlevue_type_script_lang_js.render = MDBModalTitlevue_type_template_id_d219cb24_render

/* harmony default export */ var MDBModalTitle = (MDBModalTitlevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalBody.vue?vue&type=template&id=05ffefd8

function MDBModalBodyvue_type_template_id_05ffefd8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBModalBody.vue?vue&type=template&id=05ffefd8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalBody.vue?vue&type=script&lang=js

/* harmony default export */ var MDBModalBodyvue_type_script_lang_js = ({
  name: "MDBModalBody",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["modal-body"];
    });
    return {
      className: className,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBModalBody.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBModalBody.vue



MDBModalBodyvue_type_script_lang_js.render = MDBModalBodyvue_type_template_id_05ffefd8_render

/* harmony default export */ var MDBModalBody = (MDBModalBodyvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalFooter.vue?vue&type=template&id=26c6bc9b

function MDBModalFootervue_type_template_id_26c6bc9b_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBModalFooter.vue?vue&type=template&id=26c6bc9b

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBModalFooter.vue?vue&type=script&lang=js

/* harmony default export */ var MDBModalFootervue_type_script_lang_js = ({
  name: "MDBModalFooter",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["modal-footer"];
    });
    return {
      className: className,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBModalFooter.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBModalFooter.vue



MDBModalFootervue_type_script_lang_js.render = MDBModalFootervue_type_template_id_26c6bc9b_render

/* harmony default export */ var MDBModalFooter = (MDBModalFootervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBAccordion.vue?vue&type=template&id=cff1ef90

function MDBAccordionvue_type_template_id_cff1ef90_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    class: $setup.className,
    ref: "accordionRef"
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBAccordion.vue?vue&type=template&id=cff1ef90

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBAccordion.vue?vue&type=script&lang=js

/* harmony default export */ var MDBAccordionvue_type_script_lang_js = ({
  name: "MDBAccordion",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    modelValue: String,
    stayOpen: Boolean,
    flush: Boolean,
    classes: String
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var accordionRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["accordion", props.flush && "accordion-flush", props.classes];
    });
    var activeItem = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);

    var setActiveItem = function setActiveItem(item) {
      activeItem.value = item;
      emit("update:modelValue", item);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      return activeItem.value = props.modelValue;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("activeItem", activeItem);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("stayOpen", props.stayOpen);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("setActiveItem", setActiveItem);
    return {
      accordionRef: accordionRef,
      setActiveItem: setActiveItem,
      className: className
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBAccordion.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBAccordion.vue



MDBAccordionvue_type_script_lang_js.render = MDBAccordionvue_type_template_id_cff1ef90_render

/* harmony default export */ var MDBAccordion = (MDBAccordionvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBAccordionItem.vue?vue&type=template&id=d9329714

function MDBAccordionItemvue_type_template_id_d9329714_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MDBCollapse = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("MDBCollapse");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(_ctx.$attrs, {
    class: $setup.itemClassName,
    ref: "itemRef"
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("h2", {
        class: $setup.headerClassName
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
        onClick: _cache[1] || (_cache[1] = function () {
          return $setup.toggleAccordion($props.collapseId);
        }),
        class: $setup.buttonClassName,
        "aria-expanded": "true",
        "aria-controls": $props.collapseId
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.headerTitle), 11, ["aria-controls"])], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_MDBCollapse, {
        id: $props.collapseId,
        modelValue: $setup.isActive,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.isActive = $event;
        })
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: $setup.bodyClassName
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 2)];
        }),
        _: 3
      }, 8, ["id", "modelValue"])];
    }),
    _: 1
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/components/MDBAccordionItem.vue?vue&type=template&id=d9329714

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/components/MDBAccordionItem.vue?vue&type=script&lang=js


/* harmony default export */ var MDBAccordionItemvue_type_script_lang_js = ({
  name: "MDBAccordionItem",
  components: {
    MDBCollapse: MDBCollapse
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    collapseId: {
      type: String,
      required: true
    },
    headerTitle: String,
    headerClasses: String,
    bodyClasses: String,
    itemClasses: String
  },
  setup: function setup(props) {
    var itemRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var itemClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["accordion-item", props.itemClasses];
    });
    var headerClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["accordion-header", props.headerClasses];
    });
    var bodyClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["accordion-body", props.bodyClasses];
    });
    var buttonClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["accordion-button", isActive.value && "collapsed"];
    });
    var setActiveItem = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("setActiveItem", null);
    var activeItem = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("activeItem", null);
    var stayOpen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("stayOpen", false);
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(activeItem.value === props.collapseId);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      if (stayOpen) {
        return;
      }

      isActive.value = activeItem.value === props.collapseId;
    });

    var toggleAccordion = function toggleAccordion() {
      if (stayOpen) {
        isActive.value = !isActive.value;
      } else {
        isActive.value ? setActiveItem("") : setActiveItem(props.collapseId);
      }
    };

    return {
      itemRef: itemRef,
      itemClassName: itemClassName,
      headerClassName: headerClassName,
      bodyClassName: bodyClassName,
      buttonClassName: buttonClassName,
      toggleAccordion: toggleAccordion,
      isActive: isActive
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/components/MDBAccordionItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/components/MDBAccordionItem.vue



MDBAccordionItemvue_type_script_lang_js.render = MDBAccordionItemvue_type_template_id_d9329714_render

/* harmony default export */ var MDBAccordionItem = (MDBAccordionItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/content-styles/MDBIcon.vue?vue&type=template&id=0c27ae09

function MDBIconvue_type_template_id_0c27ae09_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 16);
}
// CONCATENATED MODULE: ./src/components/free/content-styles/MDBIcon.vue?vue&type=template&id=0c27ae09

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/content-styles/MDBIcon.vue?vue&type=script&lang=js

/* harmony default export */ var MDBIconvue_type_script_lang_js = ({
  name: "MDBIcon",
  props: {
    iconStyle: {
      type: String,
      default: "fas"
    },
    icon: String,
    flag: String,
    size: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [!props.flag && props.iconStyle, props.flag ? "flag flag-".concat(props.flag) : "fa-".concat(props.icon), props.size && "fa-".concat(props.size)];
    });
    return {
      className: className,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/content-styles/MDBIcon.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/content-styles/MDBIcon.vue



MDBIconvue_type_script_lang_js.render = MDBIconvue_type_template_id_0c27ae09_render

/* harmony default export */ var MDBIcon = (MDBIconvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbar.vue?vue&type=template&id=c9bfe178

function MDBNavbarvue_type_template_id_c9bfe178_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.navClass,
    role: "navigation"
  }, $setup.attrs, {
    ref: "navbar"
  }), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.container ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        class: $setup.containerClass
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.container ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
        key: 1
      }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbar.vue?vue&type=template&id=c9bfe178

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbar.vue?vue&type=script&lang=js


/* harmony default export */ var MDBNavbarvue_type_script_lang_js = ({
  name: "MDBNavbar",
  props: {
    tag: {
      type: String,
      default: "nav"
    },
    bg: {
      type: String
    },
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    double: {
      type: Boolean,
      default: false
    },
    expand: {
      type: String
    },
    position: {
      type: String
    },
    transparent: {
      type: Boolean,
      default: false
    },
    scrolling: {
      type: Boolean,
      default: false
    },
    scrollingOffset: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: false
    },
    container: {
      type: [Boolean, String],
      default: false
    },
    classContainer: {
      type: String
    },
    classNavbar: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var navClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["navbar", props.dark && "navbar-dark", props.light && "navbar-light", props.bg && !props.transparent ? "bg-".concat(props.bg) : "", props.expand ? props.expand === "small" || props.expand === "sm" ? "navbar-expand-sm" : props.expand === "medium" || props.expand === "md" ? "navbar-expand-md" : props.expand === "large" || props.expand === "lg" ? "navbar-expand-lg" : "navbar-expand-xl" : "", props.position === "top" ? "fixed-top" : props.position === "bottom" ? "fixed-bottom" : props.position === "sticky" ? "sticky-top" : "", props.scrolling && scrollingClass.value, props.double && "double-nav", props.center && "justify-content-center", props.classNavbar];
    });
    var containerClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.container) {
        return false;
      }

      return [props.container !== true ? "container-".concat(props.container) : "container-fluid", props.classContainer && props.classContainer];
    });
    var scrollingClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("navbar-scroll");

    var handleScroll = function handleScroll() {
      if (window.pageYOffset > props.scrollingOffset) {
        scrollingClass.value = "navbar-scroll navbar-scrolled";
      } else {
        scrollingClass.value = "navbar-scroll";
      }
    };

    var navbar = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var navbarFlexWrapValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("nowrap");
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("navbarFlexWrapValue", navbarFlexWrapValue);

    var handleResize = function handleResize() {
      if (!navbar.value) return;
      var wrap = getComputedStyle(navbar.value).flexWrap;

      if (wrap === "nowrap") {
        navbarFlexWrapValue.value = "nowrap";
      } else if (wrap === "wrap") {
        navbarFlexWrapValue.value = "wrap";
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (getComputedStyle(navbar.value) && getComputedStyle(navbar.value).flexWrap === "wrap") {
        navbarFlexWrapValue.value = "wrap";
      } else {
        navbarFlexWrapValue.value = "nowrap";
      }

      window.addEventListener("resize", function () {
        return handleResize();
      });

      if (props.scrolling) {
        window.addEventListener("scroll", handleScroll);
      }

      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    });
    return {
      navbar: navbar,
      navClass: navClass,
      containerClass: containerClass,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbar.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbar.vue



MDBNavbarvue_type_script_lang_js.render = MDBNavbarvue_type_template_id_c9bfe178_render

/* harmony default export */ var MDBNavbar = (MDBNavbarvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarToggler.vue?vue&type=template&id=34b09ae9

function MDBNavbarTogglervue_type_template_id_34b09ae9_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MDBIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("MDBIcon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.navTogglerClass,
    type: "button",
    "aria-controls": $props.target,
    "aria-expanded": $setup.isExpanded,
    "aria-label": "Toggle navigation",
    onClick: $setup.handleClick
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_MDBIcon, {
        icon: $props.togglerIcon,
        size: $props.togglerSize,
        iconStyle: $props.iconStyle
      }, null, 8, ["icon", "size", "iconStyle"])];
    }),
    _: 1
  }, 16, ["class", "aria-controls", "aria-expanded", "onClick"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarToggler.vue?vue&type=template&id=34b09ae9

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarToggler.vue?vue&type=script&lang=js


/* harmony default export */ var MDBNavbarTogglervue_type_script_lang_js = ({
  name: "MDBNavbarToggler",
  inheritAttrs: false,
  components: {
    MDBIcon: MDBIcon
  },
  props: {
    tag: {
      type: String,
      default: "button"
    },
    target: {
      type: String,
      default: "#navbarSupportedContent"
    },
    togglerClass: {
      type: String
    },
    togglerIcon: {
      type: String,
      default: "bars"
    },
    togglerSize: {
      type: String,
      default: "1x"
    },
    iconStyle: {
      type: String,
      default: "fas"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var navTogglerClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["navbar-toggler", props.togglerClass];
    });
    var isExpanded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    var handleClick = function handleClick() {
      isExpanded.value = !isExpanded.value;
    };

    return {
      navTogglerClass: navTogglerClass,
      handleClick: handleClick,
      isExpanded: isExpanded,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarToggler.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarToggler.vue



MDBNavbarTogglervue_type_script_lang_js.render = MDBNavbarTogglervue_type_template_id_34b09ae9_render

/* harmony default export */ var MDBNavbarToggler = (MDBNavbarTogglervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarBrand.vue?vue&type=template&id=62b884f0

function MDBNavbarBrandvue_type_template_id_62b884f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($setup.isLink), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: "navbar-brand"
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarBrand.vue?vue&type=template&id=62b884f0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarBrand.vue?vue&type=script&lang=js

/* harmony default export */ var MDBNavbarBrandvue_type_script_lang_js = ({
  name: "MDBNavbarBrand",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var isLink = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return attrs.href ? "a" : props.tag;
    });
    return {
      isLink: isLink,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarBrand.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarBrand.vue



MDBNavbarBrandvue_type_script_lang_js.render = MDBNavbarBrandvue_type_template_id_62b884f0_render

/* harmony default export */ var MDBNavbarBrand = (MDBNavbarBrandvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarNav.vue?vue&type=template&id=6f36c6ea

function MDBNavbarNavvue_type_template_id_6f36c6ea_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarNav.vue?vue&type=template&id=6f36c6ea

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarNav.vue?vue&type=script&lang=js


/* harmony default export */ var MDBNavbarNavvue_type_script_lang_js = ({
  inheritAttrs: true,
  name: "MDBNavbarNav",
  components: {
    MDBCollapse: MDBCollapse
  },
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    justifyAround: {
      type: Boolean,
      default: false
    },
    class: {
      type: String
    },
    nav: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.nav ? "nav" : "navbar-nav", props.right ? "ms-auto" : props.center ? "justify-content-center w-100" : props.vertical ? "flex-column" : props.justifyAround ? "justify-content-around w-100" : "me-auto", props.class && "".concat(props.class)];
    });
    return {
      props: props,
      className: className,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarNav.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarNav.vue



MDBNavbarNavvue_type_script_lang_js.render = MDBNavbarNavvue_type_template_id_6f36c6ea_render

/* harmony default export */ var MDBNavbarNav = (MDBNavbarNavvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarItem.vue?vue&type=template&id=5c962e30

function MDBNavbarItemvue_type_template_id_5c962e30_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("router-link");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($setup.props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.to ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_router_link, {
        key: 0,
        class: $setup.linkClassName,
        exact: $props.exact,
        to: $props.to,
        target: $setup.tab
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
        }),
        _: 3
      }, 8, ["class", "exact", "to", "target"])) : $props.href ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
        key: 1,
        href: $props.href,
        class: $setup.linkClassName,
        target: $setup.tab
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 10, ["href", "target"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
        key: 2
      })];
    }),
    _: 1
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarItem.vue?vue&type=template&id=5c962e30

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBNavbarItem.vue?vue&type=script&lang=js

/* harmony default export */ var MDBNavbarItemvue_type_script_lang_js = ({
  name: "MDBNavbarItem",
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    exact: {
      type: Boolean,
      default: false
    },
    newTab: {
      type: Boolean,
      default: false
    },
    to: [Object, String],
    href: {
      type: String
    },
    linkClass: {
      type: String
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["nav-item", !props.to && !props.href && props.active && "active"];
    });
    var linkClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["nav-link", props.disabled && "disabled", props.active && "active", props.linkClass];
    });
    var tab = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.newTab) {
        return "_blank";
      }
    });
    return {
      props: props,
      attrs: attrs,
      className: className,
      linkClassName: linkClassName,
      tab: tab
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBNavbarItem.vue



MDBNavbarItemvue_type_script_lang_js.render = MDBNavbarItemvue_type_template_id_5c962e30_render

/* harmony default export */ var MDBNavbarItem = (MDBNavbarItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBPagination.vue?vue&type=template&id=e7670980

function MDBPaginationvue_type_template_id_e7670980_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPagination.vue?vue&type=template&id=e7670980

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBPagination.vue?vue&type=script&lang=js

/* harmony default export */ var MDBPaginationvue_type_script_lang_js = ({
  name: "MDBPagination",
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    circle: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["pagination", props.sm && "pagination-sm", props.lg && "pagination-lg", props.circle && "pagination-circle"];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPagination.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPagination.vue



MDBPaginationvue_type_script_lang_js.render = MDBPaginationvue_type_template_id_e7670980_render

/* harmony default export */ var MDBPagination = (MDBPaginationvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBPageNav.vue?vue&type=template&id=a8774d2e

var MDBPageNavvue_type_template_id_a8774d2e_hoisted_1 = {
  "aria-hidden": "true"
};

var MDBPageNavvue_type_template_id_a8774d2e_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "sr-only"
}, "Previous", -1);

var MDBPageNavvue_type_template_id_a8774d2e_hoisted_3 = {
  "aria-hidden": "true"
};

var MDBPageNavvue_type_template_id_a8774d2e_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "sr-only"
}, "Next", -1);

function MDBPageNavvue_type_template_id_a8774d2e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$props.prev ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
        key: 0,
        class: "page-link",
        href: $props.href,
        tabindex: $setup.disabledTabindex,
        "aria-disabled": $props.disabled,
        "aria-label": "Previous"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", MDBPageNavvue_type_template_id_a8774d2e_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.prevValue), 1), MDBPageNavvue_type_template_id_a8774d2e_hoisted_2], 8, ["href", "tabindex", "aria-disabled"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.next ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
        key: 1,
        class: "page-link",
        href: $props.href,
        tabindex: $setup.disabledTabindex,
        "aria-disabled": $props.disabled,
        "aria-label": "Next"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", MDBPageNavvue_type_template_id_a8774d2e_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.nextValue), 1), MDBPageNavvue_type_template_id_a8774d2e_hoisted_4], 8, ["href", "tabindex", "aria-disabled"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPageNav.vue?vue&type=template&id=a8774d2e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBPageNav.vue?vue&type=script&lang=js

/* harmony default export */ var MDBPageNavvue_type_script_lang_js = ({
  name: "MDBPageNav",
  props: {
    tag: {
      type: String,
      default: "li"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: "#"
    },
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["page-item", props.disabled && "disabled"];
    });
    var prevValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.icon ? "«" : "Previous";
    });
    var nextValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.icon ? "»" : "Next";
    });
    var disabledTabindex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.disabled ? "-1" : " false";
    });
    return {
      className: className,
      prevValue: prevValue,
      nextValue: nextValue,
      disabledTabindex: disabledTabindex,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPageNav.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPageNav.vue



MDBPageNavvue_type_script_lang_js.render = MDBPageNavvue_type_template_id_a8774d2e_render

/* harmony default export */ var MDBPageNav = (MDBPageNavvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBPageItem.vue?vue&type=template&id=105d9ca3

var MDBPageItemvue_type_template_id_105d9ca3_hoisted_1 = {
  key: 0,
  "aria-hidden": "true"
};
var MDBPageItemvue_type_template_id_105d9ca3_hoisted_2 = {
  key: 1,
  class: "sr-only"
};
function MDBPageItemvue_type_template_id_105d9ca3_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
        class: "page-link",
        href: $props.href,
        "aria-label": $setup.labelValue,
        "aria-disabled": $props.disabled,
        tabindex: $setup.disabledTabindex
      }, [$props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", MDBPageItemvue_type_template_id_105d9ca3_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", MDBPageItemvue_type_template_id_105d9ca3_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.labelValue), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
        key: 2
      })], 8, ["href", "aria-label", "aria-disabled", "tabindex"])];
    }),
    _: 1
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPageItem.vue?vue&type=template&id=105d9ca3

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBPageItem.vue?vue&type=script&lang=js

/* harmony default export */ var MDBPageItemvue_type_script_lang_js = ({
  name: "MDBPageItem",
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    icon: {
      type: Boolean,
      defaul: false
    },
    label: {
      type: String
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["page-item", props.active && "active", props.disabled && "disabled"];
    });
    var labelValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.icon && props.label ? props.label : props.href;
    });
    var disabledTabindex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.disabled ? "-1" : " false";
    });
    return {
      className: className,
      labelValue: labelValue,
      disabledTabindex: disabledTabindex,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPageItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBPageItem.vue



MDBPageItemvue_type_script_lang_js.render = MDBPageItemvue_type_template_id_105d9ca3_render

/* harmony default export */ var MDBPageItem = (MDBPageItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBBreadcrumb.vue?vue&type=template&id=a9115ed2

function MDBBreadcrumbvue_type_template_id_a9115ed2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBBreadcrumb.vue?vue&type=template&id=a9115ed2

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBBreadcrumb.vue?vue&type=script&lang=js

/* harmony default export */ var MDBBreadcrumbvue_type_script_lang_js = ({
  name: "MDBBreadcrumb",
  props: {
    tag: {
      type: String,
      default: "ol"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["breadcrumb"];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBBreadcrumb.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBBreadcrumb.vue



MDBBreadcrumbvue_type_script_lang_js.render = MDBBreadcrumbvue_type_template_id_a9115ed2_render

/* harmony default export */ var MDBBreadcrumb = (MDBBreadcrumbvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBBreadcrumbItem.vue?vue&type=template&id=3f8b4a24

function MDBBreadcrumbItemvue_type_template_id_3f8b4a24_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className,
    "aria-current": $setup.currentName
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "aria-current"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBBreadcrumbItem.vue?vue&type=template&id=3f8b4a24

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBBreadcrumbItem.vue?vue&type=script&lang=js

/* harmony default export */ var MDBBreadcrumbItemvue_type_script_lang_js = ({
  name: "MDBBreadcrumbItem",
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    current: {
      type: String,
      default: "page"
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["breadcrumb-item", props.active && "active"];
    });
    var currentName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.active && props.current;
    });
    return {
      className: className,
      currentName: currentName,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBBreadcrumbItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBBreadcrumbItem.vue



MDBBreadcrumbItemvue_type_script_lang_js.render = MDBBreadcrumbItemvue_type_template_id_3f8b4a24_render

/* harmony default export */ var MDBBreadcrumbItem = (MDBBreadcrumbItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBFooter.vue?vue&type=template&id=24576378

function MDBFootervue_type_template_id_24576378_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBFooter.vue?vue&type=template&id=24576378

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBFooter.vue?vue&type=script&lang=js




/* harmony default export */ var MDBFootervue_type_script_lang_js = ({
  name: "MDBFooter",
  props: {
    tag: {
      type: String,
      default: "footer"
    },
    bg: {
      type: String,
      default: "light"
    },
    text: {
      type: [String, Array]
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.bg && "bg-".concat(props.bg), props.text && spreadProps(props.text)];
    });

    var spreadProps = function spreadProps(props) {
      if (typeof props === "string") {
        return "text-".concat(props);
      }

      return props.map(function (prop) {
        return "text-".concat(prop).trim();
      }).join(" ");
    };

    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBFooter.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBFooter.vue



MDBFootervue_type_script_lang_js.render = MDBFootervue_type_template_id_24576378_render

/* harmony default export */ var MDBFooter = (MDBFootervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabs.vue?vue&type=template&id=2d315970

function MDBTabsvue_type_template_id_2d315970_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isVertical ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 0,
    class: "row"
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
    key: 1
  });
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabs.vue?vue&type=template&id=2d315970

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabs.vue?vue&type=script&lang=js



/* harmony default export */ var MDBTabsvue_type_script_lang_js = ({
  name: "MDBTabs",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    modelValue: {
      type: String,
      required: true
    },
    vertical: {
      type: [Boolean, String],
      default: false
    }
  },
  emits: ["update:modelValue", "hide", "hidden", "show", "shown"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs;
    var prevTab = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var activeTab = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var activeTabId = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.modelValue;
    }, function (cur) {
      if (cur !== activeTabId.value) {
        activeTabId.value = cur;
        updateActiveTab(null, cur);
      }
    });

    var updateActiveTab = function updateActiveTab(element, tabId) {
      if (!element) {
        element = document.body.querySelector("#tab-".concat(tabId));
      }

      if (prevTab.value) {
        emit("hide", {
          target: prevTab.value,
          relatedTarget: element
        });
      }

      emit("show", {
        target: element,
        relatedTarget: prevTab.value
      });
      emit("update:modelValue", tabId);
      activeTab.value = element;
      activeTabId.value = tabId;
    };

    var emitShown = function emitShown() {
      emit("shown", {
        target: activeTab.value,
        relatedTarget: prevTab.value
      });
      prevTab.value = activeTab.value;
    };

    var emitHidden = function emitHidden() {
      emit("hidden", {
        target: prevTab.value,
        relatedTarget: activeTab.value
      });
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("activeTab", activeTabId);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("updateActiveTab", updateActiveTab);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("emitShown", emitShown);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("emitHidden", emitHidden);
    var isVertical = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var windowWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(window.innerWidth);
    var activeBrakpointValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("isVertical", isVertical);

    var handleWindowResize = function handleWindowResize() {
      windowWidth.value = window.innerWidth;
      var breakpointValue = handleBreakpoints(windowWidth.value, ["column", props.vertical]);
      if (breakpointValue === activeBrakpointValue.value) return;
      isVertical.value = breakpointValue === props.vertical ? true : false;
      activeBrakpointValue.value = breakpointValue;
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (!props.vertical) return;

      if (props.vertical === true) {
        isVertical.value = true;
      } else {
        handleWindowResize();
        on(window, "resize", handleWindowResize);
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      MDBEventHandlers_off(window, "resize", handleWindowResize);
    });
    return {
      isVertical: isVertical,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabs.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabs.vue



MDBTabsvue_type_script_lang_js.render = MDBTabsvue_type_template_id_2d315970_render

/* harmony default export */ var MDBTabs = (MDBTabsvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabNav.vue?vue&type=template&id=9b3ecb26

function MDBTabNavvue_type_template_id_9b3ecb26_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isVertical ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: $setup.columnClassName
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    class: $setup.className
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["class"]))], 2)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    key: 1,
    class: $setup.className
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["class"]));
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabNav.vue?vue&type=template&id=9b3ecb26

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabNav.vue?vue&type=script&lang=js


/* harmony default export */ var MDBTabNavvue_type_script_lang_js = ({
  name: "MDBTabNav",
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    pills: {
      type: Boolean
    },
    justify: {
      type: Boolean
    },
    fill: {
      type: Boolean
    },
    col: {
      type: String,
      default: "3"
    },
    tabsClasses: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["nav", props.pills ? "nav-pills" : "nav-tabs", props.justify && "nav-justified", props.fill && "nav-fill", isVertical.value && "flex-column", props.tabsClasses && props.tabsClasses];
    });
    var columnClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["col-".concat(props.col)];
    });
    var isVertical = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("isVertical", false);
    return {
      className: className,
      columnClassName: columnClassName,
      isVertical: isVertical,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabNav.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabNav.vue



MDBTabNavvue_type_script_lang_js.render = MDBTabNavvue_type_template_id_9b3ecb26_render

/* harmony default export */ var MDBTabNav = (MDBTabNavvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabItem.vue?vue&type=template&id=093122a6

var MDBTabItemvue_type_template_id_093122a6_hoisted_1 = {
  key: 0,
  class: "nav-item",
  role: "presentation"
};
function MDBTabItemvue_type_template_id_093122a6_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.href ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", MDBTabItemvue_type_template_id_093122a6_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
    class: $setup.className,
    role: "tab",
    "aria-controls": $setup.controls,
    id: $setup.uid,
    href: $props.href,
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $setup.handleClick($props.tabId);
    }, ["prevent"])),
    ref: "item"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 10, ["aria-controls", "id", "href"])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    key: 1,
    class: $setup.className,
    role: "tab",
    "aria-controls": $setup.controls,
    id: $setup.uid,
    onClick: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $setup.handleClick($props.tabId);
    }, ["prevent"])),
    ref: "item"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["class", "aria-controls", "id"]));
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabItem.vue?vue&type=template&id=093122a6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabItem.vue?vue&type=script&lang=js

/* harmony default export */ var MDBTabItemvue_type_script_lang_js = ({
  name: "MDBTabItem",
  props: {
    tag: {
      type: String,
      default: "a"
    },
    tabId: {
      type: String,
      required: true
    },
    href: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var item = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("item");
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["nav-link", isActive.value && "active"];
    });
    var uid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return "tab-".concat(props.tabId);
    });
    var controls = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return "".concat(props.tabId);
    });
    var activeTabId = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("activeTab", false);
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(activeTabId && (activeTabId.value === props.tabId || activeTabId && activeTabId === props.tabId));
    var updateActiveTab = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("updateActiveTab", false);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      return isActive.value = activeTabId && (activeTabId.value === props.tabId || activeTabId && activeTabId === props.tabId);
    });

    var handleClick = function handleClick() {
      updateActiveTab(item.value, props.tabId);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (isActive.value && updateActiveTab) {
        updateActiveTab(item.value, props.tabId);
      }
    });
    return {
      item: item,
      uid: uid,
      controls: controls,
      className: className,
      handleClick: handleClick,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabItem.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabItem.vue



MDBTabItemvue_type_script_lang_js.render = MDBTabItemvue_type_template_id_093122a6_render

/* harmony default export */ var MDBTabItem = (MDBTabItemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabPane.vue?vue&type=template&id=7e2f3fb7

function MDBTabPanevue_type_template_id_7e2f3fb7_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    onEnter: $setup.enter,
    onAfterEnter: $setup.afterEnter,
    onBeforeLeave: $setup.beforeLeave,
    onAfterLeave: $setup.afterLeave,
    duration: 150
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        class: $setup.className
      }, $setup.attrs, {
        ref: "item",
        role: "tabpanel",
        "aria-labelledby": $setup.labelledby,
        id: $setup.uid
      }), {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
        }),
        _: 3
      }, 16, ["class", "aria-labelledby", "id"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $setup.isActive]])];
    }),
    _: 1
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabPane.vue?vue&type=template&id=7e2f3fb7

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabPane.vue?vue&type=script&lang=js

/* harmony default export */ var MDBTabPanevue_type_script_lang_js = ({
  name: "MDBTabPane",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    tabId: {
      type: String,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["tab-pane fade", isActive.value && "show active"];
    });
    var item = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("item");
    var uid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return "".concat(props.tabId);
    });
    var labelledby = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return "tab-".concat(props.tabId);
    });
    var activeTabId = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("activeTab", false);
    var isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(activeTabId && (activeTabId.value === props.tabId || activeTabId === props.tabId));
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      return isActive.value = activeTabId && (activeTabId.value === props.tabId || activeTabId === props.tabId);
    });
    var emitShown = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("emitShown", false);
    var emitHidden = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("emitHidden", false);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (isActive.value && emitShown) {
        emitShown(props.tabId);
      }
    });

    var afterEnter = function afterEnter(el) {
      el.style.opacity = "1";
    };

    var enter = function enter(el) {
      el.style.opacity = "0";
      emitShown(props.tabId);
    };

    var beforeLeave = function beforeLeave(el) {
      el.style.opacity = "1";
      emitHidden(props.tabId);
    };

    var afterLeave = function afterLeave(el) {
      el.style.opacity = "0";
    };

    return {
      isActive: isActive,
      item: item,
      uid: uid,
      labelledby: labelledby,
      afterEnter: afterEnter,
      enter: enter,
      beforeLeave: beforeLeave,
      afterLeave: afterLeave,
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabPane.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabPane.vue



MDBTabPanevue_type_script_lang_js.render = MDBTabPanevue_type_template_id_7e2f3fb7_render

/* harmony default export */ var MDBTabPane = (MDBTabPanevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabContent.vue?vue&type=template&id=7b06ee02

function MDBTabContentvue_type_template_id_7b06ee02_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["KeepAlive"], null, [$setup.isVertical ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: $setup.columnClassName
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]))], 2)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 1,
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]))], 1024);
}
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabContent.vue?vue&type=template&id=7b06ee02

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/navigation/MDBTabContent.vue?vue&type=script&lang=js

/* harmony default export */ var MDBTabContentvue_type_script_lang_js = ({
  name: "MDBTabContent",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: String,
      default: "9"
    },
    contentClasses: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["tab-content", props.contentClasses && props.contentClasses];
    });
    var columnClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["col-".concat(props.col)];
    });
    var isVertical = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("isVertical", false);
    return {
      isVertical: isVertical,
      className: className,
      columnClassName: columnClassName,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabContent.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/navigation/MDBTabContent.vue



MDBTabContentvue_type_script_lang_js.render = MDBTabContentvue_type_template_id_7b06ee02_render

/* harmony default export */ var MDBTabContent = (MDBTabContentvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/layout/MDBCol.vue?vue&type=template&id=412a62db

function MDBColvue_type_template_id_412a62db_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/layout/MDBCol.vue?vue&type=template&id=412a62db

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/layout/MDBCol.vue?vue&type=script&lang=js

/* harmony default export */ var MDBColvue_type_script_lang_js = ({
  name: "MDBCol",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: String
    },
    sm: {
      type: String
    },
    md: {
      type: String
    },
    lg: {
      type: String
    },
    xl: {
      type: String
    },
    offset: {
      type: String
    },
    offsetSm: {
      type: String
    },
    offsetMd: {
      type: String
    },
    offsetLg: {
      type: String
    },
    offsetXl: {
      type: String
    },
    auto: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.col ? "col-" + props.col : "", props.sm ? "col-sm-" + props.sm : "", props.md ? "col-md-" + props.md : "", props.lg ? "col-lg-" + props.lg : "", props.xl ? "col-xl-" + props.xl : "", !props.col && !props.sm && !props.md && !props.lg && !props.xl ? "col" : "", props.offset ? "offset-" + props.offset : "", props.offsetSm ? "offset-sm-" + props.offsetSm : "", props.offsetMd ? "offset-md-" + props.offsetMd : "", props.offsetLg ? "offset-lg-" + props.offsetLg : "", props.offsetXl ? "offset-xl-" + props.offsetXl : "", props.auto ? "col-auto" : ""];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/layout/MDBCol.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/layout/MDBCol.vue



MDBColvue_type_script_lang_js.render = MDBColvue_type_template_id_412a62db_render

/* harmony default export */ var MDBCol = (MDBColvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/layout/MDBRow.vue?vue&type=template&id=03945504

function MDBRowvue_type_template_id_03945504_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/layout/MDBRow.vue?vue&type=template&id=03945504

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/layout/MDBRow.vue?vue&type=script&lang=js




/* harmony default export */ var MDBRowvue_type_script_lang_js = ({
  name: "MDBRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    start: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    between: {
      type: Boolean,
      default: false
    },
    around: {
      type: Boolean,
      default: false
    },
    cols: {
      type: [String, Array]
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["row", props.cols ? "".concat(spreadProps(props.cols)) : "", props.start && "justify-content-start", props.end && "justify-content-end", props.center && "justify-content-center", props.between && "justify-content-between", props.around && "justify-content-around"];
    });

    var spreadProps = function spreadProps(props) {
      if (typeof props === "string") {
        return "row-cols-".concat(props);
      }

      return props.map(function (prop) {
        return "row-cols-".concat(prop).trim();
      }).join(" ");
    };

    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/layout/MDBRow.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/layout/MDBRow.vue



MDBRowvue_type_script_lang_js.render = MDBRowvue_type_template_id_03945504_render

/* harmony default export */ var MDBRow = (MDBRowvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/layout/MDBContainer.vue?vue&type=template&id=e331e3c0

function MDBContainervue_type_template_id_e331e3c0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.className
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/layout/MDBContainer.vue?vue&type=template&id=e331e3c0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/layout/MDBContainer.vue?vue&type=script&lang=js

/* harmony default export */ var MDBContainervue_type_script_lang_js = ({
  name: "MDBContainer",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    sm: {
      type: Boolean,
      default: false
    },
    md: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    },
    xxl: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var className = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.fluid ? "container-fluid" : "", props.sm ? "container-sm" : "", props.md ? "container-md" : "", props.lg ? "container-lg" : "", props.xl ? "container-xl" : "", props.xxl ? "container-xxl" : "", !props.fluid && !props.sm && !props.md && !props.lg && !props.xl && !props.xxl ? "container" : ""];
    });
    return {
      className: className,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/layout/MDBContainer.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/layout/MDBContainer.vue



MDBContainervue_type_script_lang_js.render = MDBContainervue_type_template_id_e331e3c0_render

/* harmony default export */ var MDBContainer = (MDBContainervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/data/MDBTable.vue?vue&type=template&id=23b635ea

function MDBTablevue_type_template_id_23b635ea_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.responsive ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: $setup.wrapperClasses
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: $setup.tableClasses,
    style: $props.tableStyle
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "style"]))], 2)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 1,
    class: $setup.tableClasses,
    style: $props.tableStyle
  }, $setup.attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "style"]));
}
// CONCATENATED MODULE: ./src/components/free/data/MDBTable.vue?vue&type=template&id=23b635ea

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/data/MDBTable.vue?vue&type=script&lang=js

/* harmony default export */ var MDBTablevue_type_script_lang_js = ({
  name: "MDBTable",
  props: {
    tag: {
      type: String,
      default: "table"
    },
    variant: {
      type: String
    },
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    border: {
      type: [Boolean, String],
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: [Boolean, String],
      default: false
    },
    align: {
      type: String
    },
    sm: {
      type: Boolean,
      default: false
    },
    tableStyle: {
      type: String
    },
    captionTop: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var wrapperClasses = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.responsive) {
        return false;
      }

      return props.responsive !== true ? "table-responsive-".concat(props.responsive) : "table-responsive";
    });
    var borderClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.border) {
        return "";
      }

      return props.border !== true ? "table-bordered border-".concat(props.border) : "table-bordered";
    });
    var tableClasses = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["table", props.dark && "table-dark", props.light && "table-light", props.variant && "table-".concat(props.variant), props.striped && "table-striped", borderClass.value, props.borderless && "table-borderless", props.hover && "table-hover", props.sm && "table-sm", props.align && props.align === "top" ? "align-top" : props.align === "bottom" ? "align-bottom" : props.align === "middle" ? "align-middle" : "", props.captionTop && "caption-top", props.tableStyle];
    });
    return {
      wrapperClasses: wrapperClasses,
      tableClasses: tableClasses,
      props: props,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/data/MDBTable.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/data/MDBTable.vue



MDBTablevue_type_script_lang_js.render = MDBTablevue_type_template_id_23b635ea_render

/* harmony default export */ var MDBTable = (MDBTablevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBInput.vue?vue&type=template&id=4b47c289

var MDBInputvue_type_template_id_4b47c289_hoisted_1 = {
  key: 5,
  class: "form-notch"
};

var MDBInputvue_type_template_id_4b47c289_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "form-notch-trailing"
}, null, -1);

var MDBInputvue_type_template_id_4b47c289_hoisted_3 = {
  key: 3,
  class: "form-notch"
};

var MDBInputvue_type_template_id_4b47c289_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "form-notch-trailing"
}, null, -1);

var MDBInputvue_type_template_id_4b47c289_hoisted_5 = {
  key: 7,
  class: "form-text"
};
function MDBInputvue_type_template_id_4b47c289_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_mdb_click_outside = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("mdb-click-outside");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [!$props.wrap ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 0,
    class: $setup.inputClassName
  }, $setup.attrs, {
    id: $setup.uid,
    value: $setup.inputValue,
    onInput: _cache[1] || (_cache[1] = function () {
      return $setup.handleInput.apply($setup, arguments);
    }),
    ref: "inputRef"
  }), null, 16, ["id", "value"])), [[_directive_mdb_click_outside, $setup.clickOutside]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.label && !$props.wrap ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
    key: 1,
    ref: "labelRef",
    class: $setup.labelClassName,
    for: $setup.uid
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
    key: 2
  }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 3,
    class: $setup.validFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $setup.customInvalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 4,
    class: $setup.invalidFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.customInvalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.formOutline ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBInputvue_type_template_id_4b47c289_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "form-notch-leading",
    style: {
      width: "".concat($setup.notchLeadingWidth, "px")
    }
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "form-notch-middle",
    style: {
      width: "".concat($setup.notchMiddleWidth, "px")
    }
  }, null, 4), MDBInputvue_type_template_id_4b47c289_hoisted_2])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.wrap ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    key: 6,
    class: $setup.wrapperClassName,
    style: $setup.validationStyle
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "prepend"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        class: $setup.inputClassName
      }, $setup.attrs, {
        id: $setup.uid,
        value: $setup.inputValue,
        onInput: _cache[2] || (_cache[2] = function () {
          return $setup.handleInput.apply($setup, arguments);
        }),
        ref: "inputRef"
      }), null, 16, ["id", "value"]), $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
        key: 0,
        ref: "labelRef",
        class: $setup.labelClassName,
        for: $setup.uid
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 1,
        class: $setup.validFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $setup.customInvalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 2,
        class: $setup.invalidFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.customInvalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.formOutline ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBInputvue_type_template_id_4b47c289_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: "form-notch-leading",
        style: {
          width: "".concat($setup.notchLeadingWidth, "px")
        }
      }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: "form-notch-middle",
        style: {
          width: "".concat($setup.notchMiddleWidth, "px")
        }
      }, null, 4), MDBInputvue_type_template_id_4b47c289_hoisted_4])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  }, 8, ["class", "style"])), [[_directive_mdb_click_outside, $setup.clickOutside]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.formText ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBInputvue_type_template_id_4b47c289_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.formText), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/forms/MDBInput.vue?vue&type=template&id=4b47c289

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBInput.vue?vue&type=script&lang=js





/* harmony default export */ var MDBInputvue_type_script_lang_js = ({
  name: "MDBInput",
  props: {
    id: String,
    label: String,
    labelClass: String,
    modelValue: [String, Number, Date],
    size: String,
    formOutline: {
      type: Boolean,
      default: true
    },
    wrapperClass: String,
    inputGroup: {
      type: [Boolean, String],
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    formText: String,
    white: Boolean,
    validationEvent: String,
    isValidated: Boolean,
    isValid: Boolean,
    validFeedback: String,
    invalidFeedback: String,
    tooltipFeedback: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  directives: {
    mdbClickOutside: mdbClickOutside
  },
  emits: ["update:modelValue", "click-outside"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var inputRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("inputRef");
    var inputValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var labelRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var showPlaceholder = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var notchLeadingWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(9);
    var notchMiddleWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var uid = props.id || getUID("MDBInput-");
    var wrapperClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.formOutline && "form-outline", inputGroupClassName.value, props.white && "form-white", props.wrapperClass];
    });
    var inputClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-control", props.size && "form-control-".concat(props.size), inputValue.value && "active", showPlaceholder.value && "placeholder-active", isInputValidated.value && isInputValid.value && "is-valid", isInputValidated.value && !isInputValid.value && "is-invalid"];
    });
    var labelClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-label", props.labelClass];
    });
    var inputGroupClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.inputGroup) {
        return;
      }

      return props.inputGroup !== true ? "input-group input-group-".concat(props.inputGroup) : "input-group";
    });
    var validationStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.inputGroup && isInputValidated.value ? {
        marginBottom: "1rem"
      } : "";
    });
    var validFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "valid-tooltip" : "valid-feedback";
    });
    var invalidFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback";
    }); // Validation ------------------------

    var isInputValidated = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValidated);
    var isInputValid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValid);
    var defaultValidatorInvalidFeedback = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("");
    var customInvalidFeedback = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (isInputValidated.value && !isInputValid.value && props.validationEvent) {
        return defaultValidatorInvalidFeedback.value;
      }

      return props.invalidFeedback;
    });

    var handleValidation = function handleValidation(e) {
      isInputValid.value = e.target.checkValidity();

      if (!isInputValid.value) {
        defaultValidatorInvalidFeedback.value = e.target.validationMessage;
      }

      isInputValidated.value = true;
    };

    var bindValidationEvents = function bindValidationEvents() {
      if (props.validationEvent === "submit") return;
      on(inputRef.value, props.validationEvent, handleValidation);
    };

    function calcNotch() {
      if (labelRef.value) {
        notchMiddleWidth.value = labelRef.value.clientWidth * 0.8 + 8;
      }
    }

    function setPlaceholder() {
      if (attrs.placeholder && !labelRef.value) {
        showPlaceholder.value = true;
      } else {
        showPlaceholder.value = false;
      }
    }

    function handleInput(e) {
      inputValue.value = e.target.value;
      emit("update:modelValue", inputValue.value);
    }

    function clickOutside() {
      emit("click-outside");
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      calcNotch();
      setPlaceholder();

      if (props.validationEvent) {
        bindValidationEvents();
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUpdated"])(function () {
      calcNotch();
      setPlaceholder();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      MDBEventHandlers_off(inputRef.value, props.validationEvent, handleValidation);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      inputValue.value = props.modelValue;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValidated;
    }, function (value) {
      return isInputValidated.value = value;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValid;
    }, function (value) {
      return isInputValid.value = value;
    });
    return {
      inputRef: inputRef,
      uid: uid,
      inputValue: inputValue,
      labelRef: labelRef,
      handleInput: handleInput,
      wrapperClassName: wrapperClassName,
      inputClassName: inputClassName,
      labelClassName: labelClassName,
      validFeedbackClassName: validFeedbackClassName,
      invalidFeedbackClassName: invalidFeedbackClassName,
      validationStyle: validationStyle,
      customInvalidFeedback: customInvalidFeedback,
      notchLeadingWidth: notchLeadingWidth,
      notchMiddleWidth: notchMiddleWidth,
      clickOutside: clickOutside,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/forms/MDBInput.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/forms/MDBInput.vue



MDBInputvue_type_script_lang_js.render = MDBInputvue_type_template_id_4b47c289_render

/* harmony default export */ var MDBInput = (MDBInputvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBTextarea.vue?vue&type=template&id=377f3830

var MDBTextareavue_type_template_id_377f3830_hoisted_1 = {
  key: 3,
  class: "form-notch"
};

var MDBTextareavue_type_template_id_377f3830_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "form-notch-trailing"
}, null, -1);

var MDBTextareavue_type_template_id_377f3830_hoisted_3 = {
  key: 6,
  class: "form-text"
};
function MDBTextareavue_type_template_id_377f3830_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [!$props.wrap ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("textarea", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 0,
    class: $setup.textareaClassName
  }, $setup.attrs, {
    id: $setup.uid,
    value: $setup.textareaValue,
    onInput: _cache[1] || (_cache[1] = function () {
      return $setup.handleInput.apply($setup, arguments);
    }),
    rows: $props.rows,
    ref: "textareaRef"
  }), null, 16, ["id", "value", "rows"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.label && !$props.wrap ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
    key: 1,
    ref: "labelRef",
    class: "form-label",
    for: $setup.uid
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 9, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
    key: 2
  }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 3,
    class: $setup.validFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $setup.customInvalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 4,
    class: $setup.invalidFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.customInvalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.wrap ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    key: 5,
    class: $setup.wrapperClassName,
    style: $setup.validationStyle
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "prepend"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("textarea", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        class: $setup.textareaClassName
      }, $setup.attrs, {
        id: $setup.uid,
        value: $setup.textareaValue,
        onInput: _cache[2] || (_cache[2] = function () {
          return $setup.handleInput.apply($setup, arguments);
        }),
        rows: $props.rows,
        ref: "textareaRef"
      }), null, 16, ["id", "value", "rows"]), $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
        key: 0,
        ref: "labelRef",
        class: "form-label",
        for: $setup.uid
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 9, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 1,
        class: $setup.validFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $setup.customInvalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 2,
        class: $setup.invalidFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.customInvalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.formOutline ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBTextareavue_type_template_id_377f3830_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: "form-notch-leading",
        style: {
          width: "".concat($setup.notchLeadingWidth, "px")
        }
      }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: "form-notch-middle",
        style: {
          width: "".concat($setup.notchMiddleWidth, "px")
        }
      }, null, 4), MDBTextareavue_type_template_id_377f3830_hoisted_2])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  }, 8, ["class", "style"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.formText ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", MDBTextareavue_type_template_id_377f3830_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.formText), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/forms/MDBTextarea.vue?vue&type=template&id=377f3830

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBTextarea.vue?vue&type=script&lang=js




/* harmony default export */ var MDBTextareavue_type_script_lang_js = ({
  name: "MDBTextarea",
  props: {
    id: String,
    rows: {
      type: [String, Number],
      default: 4
    },
    label: String,
    modelValue: [String, Number],
    size: String,
    formOutline: {
      type: Boolean,
      default: true
    },
    wrapperClass: String,
    inputGroup: {
      type: [Boolean, String],
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    formText: String,
    white: Boolean,
    validationEvent: String,
    isValidated: Boolean,
    isValid: Boolean,
    validFeedback: String,
    invalidFeedback: String,
    tooltipFeedback: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var textareaRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("textareaRef");
    var textareaValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var labelRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var showPlaceholder = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var notchLeadingWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(9);
    var notchMiddleWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var uid = props.id || getUID("MDBTextarea-");
    var wrapperClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.formOutline && "form-outline", inputGroupClassName.value, props.white && "form-white", props.wrapperClass];
    });
    var textareaClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-control", props.size && "form-control-".concat(props.size), textareaValue.value && "active", showPlaceholder.value && "placeholder-active", isInputValidated.value && isInputValid.value && "is-valid", isInputValidated.value && !isInputValid.value && "is-invalid"];
    });
    var inputGroupClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.inputGroup) {
        return;
      }

      return props.inputGroup !== true ? "input-group input-group-".concat(props.inputGroup) : "input-group";
    });
    var validationStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.inputGroup && isInputValidated.value ? {
        marginBottom: "1rem"
      } : "";
    });
    var validFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "valid-tooltip" : "valid-feedback";
    });
    var invalidFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback";
    }); // Validation ------------------------

    var isInputValidated = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValidated);
    var isInputValid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValid);
    var defaultValidatorInvalidFeedback = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("");
    var customInvalidFeedback = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (isInputValidated.value && !isInputValid.value && props.validationEvent) {
        return defaultValidatorInvalidFeedback.value;
      }

      return props.invalidFeedback;
    });

    var handleValidation = function handleValidation(e) {
      isInputValid.value = e.target.checkValidity();

      if (!isInputValid.value) {
        defaultValidatorInvalidFeedback.value = e.target.validationMessage;
      }

      isInputValidated.value = true;
    };

    var bindValidationEvents = function bindValidationEvents() {
      if (props.validationEvent === "submit") return;
      on(textareaRef.value, props.validationEvent, handleValidation);
    };

    function calcNotch() {
      if (labelRef.value) {
        notchMiddleWidth.value = labelRef.value.clientWidth * 0.8 + 8;
      }
    }

    function setPlaceholder() {
      if (attrs.placeholder && !labelRef.value) {
        showPlaceholder.value = true;
      } else {
        showPlaceholder.value = false;
      }
    }

    function handleInput(e) {
      textareaValue.value = e.target.value;
      emit("update:modelValue", textareaValue.value);
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      calcNotch();
      setPlaceholder();

      if (props.validationEvent) {
        bindValidationEvents();
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUpdated"])(function () {
      calcNotch();
      setPlaceholder();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      MDBEventHandlers_off(textareaRef.value, props.validationEvent, handleValidation);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      return textareaValue.value = props.modelValue;
    });
    return {
      textareaRef: textareaRef,
      uid: uid,
      textareaValue: textareaValue,
      labelRef: labelRef,
      handleInput: handleInput,
      wrapperClassName: wrapperClassName,
      textareaClassName: textareaClassName,
      validFeedbackClassName: validFeedbackClassName,
      invalidFeedbackClassName: invalidFeedbackClassName,
      validationStyle: validationStyle,
      customInvalidFeedback: customInvalidFeedback,
      notchLeadingWidth: notchLeadingWidth,
      notchMiddleWidth: notchMiddleWidth,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/forms/MDBTextarea.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/forms/MDBTextarea.vue



MDBTextareavue_type_script_lang_js.render = MDBTextareavue_type_template_id_377f3830_render

/* harmony default export */ var MDBTextarea = (MDBTextareavue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBCheckbox.vue?vue&type=template&id=fdec9248

function MDBCheckboxvue_type_template_id_fdec9248_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [$props.wrap ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    key: 0,
    class: $setup.wrapperClassName
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        class: $setup.inputClassName,
        type: "checkbox"
      }, $setup.attrs, {
        id: $setup.uid,
        checked: $setup.inputValue,
        onChange: _cache[1] || (_cache[1] = function () {
          return $setup.handleChange.apply($setup, arguments);
        }),
        required: $props.required ? true : null,
        "aria-required": $props.required,
        ref: "inputRef"
      }), null, 16, ["id", "checked", "required", "aria-required"]), $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
        key: 0,
        class: $setup.labelClassName,
        for: $setup.uid
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 1,
        class: $setup.validFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.invalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 2,
        class: $setup.invalidFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.invalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 8, ["class"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 1,
    class: $setup.inputClassName,
    type: "checkbox"
  }, $setup.attrs, {
    id: $setup.uid,
    checked: $setup.inputValue,
    onChange: _cache[2] || (_cache[2] = function () {
      return $setup.handleChange.apply($setup, arguments);
    }),
    required: $props.required ? true : null,
    "aria-required": $props.required,
    ref: "inputRef"
  }), null, 16, ["id", "checked", "required", "aria-required"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
    key: 2,
    class: $setup.labelClassName,
    for: $setup.uid
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 3,
    class: $setup.validFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.invalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 4,
    class: $setup.invalidFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.invalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/forms/MDBCheckbox.vue?vue&type=template&id=fdec9248

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBCheckbox.vue?vue&type=script&lang=js



/* harmony default export */ var MDBCheckboxvue_type_script_lang_js = ({
  name: "MDBCheckbox",
  props: {
    id: String,
    label: String,
    modelValue: Boolean,
    inline: Boolean,
    wrapperClass: String,
    labelClass: String,
    inputClass: String,
    btnCheck: Boolean,
    required: Boolean,
    validateOnChange: Boolean,
    isValidated: Boolean,
    isValid: Boolean,
    validFeedback: String,
    invalidFeedback: String,
    tooltipFeedback: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    formCheck: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var inputRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("inputRef");
    var inputValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var uid = props.id || getUID("MDBCheckbox-");
    var wrapperClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.formCheck && !props.btnCheck ? "form-check" : "", props.inline && "form-check-inline", props.wrapperClass];
    });
    var inputClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.btnCheck ? "btn-check" : "form-check-input", props.inputClass && props.inputClass, isInputValidated.value && isInputValid.value && "is-valid", isInputValidated.value && !isInputValid.value && "is-invalid"];
    });
    var labelClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.labelClass || "form-check-label"];
    });
    var validFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "valid-tooltip" : "valid-feedback";
    });
    var invalidFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback";
    }); // Validation ------------------------

    var isInputValidated = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValidated);
    var isInputValid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValid);

    var handleValidation = function handleValidation(e) {
      isInputValid.value = e.target.checkValidity();
      isInputValidated.value = true;
    };

    var bindValidationEvent = function bindValidationEvent() {
      on(inputRef.value, "change", handleValidation);
    };

    function handleChange() {
      inputValue.value = !inputValue.value;
      emit("update:modelValue", inputValue.value);
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (props.validateOnChange) {
        bindValidationEvent();
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      MDBEventHandlers_off(inputRef.value, "change", handleValidation);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      return inputValue.value = props.modelValue;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValidated;
    }, function (value) {
      return isInputValidated.value = value;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValid;
    }, function (value) {
      return isInputValid.value = value;
    });
    return {
      inputRef: inputRef,
      wrapperClassName: wrapperClassName,
      inputClassName: inputClassName,
      labelClassName: labelClassName,
      validFeedbackClassName: validFeedbackClassName,
      invalidFeedbackClassName: invalidFeedbackClassName,
      inputValue: inputValue,
      handleChange: handleChange,
      uid: uid,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/forms/MDBCheckbox.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/forms/MDBCheckbox.vue



MDBCheckboxvue_type_script_lang_js.render = MDBCheckboxvue_type_template_id_fdec9248_render

/* harmony default export */ var MDBCheckbox = (MDBCheckboxvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBRadio.vue?vue&type=template&id=19796690

function MDBRadiovue_type_template_id_19796690_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [$props.wrap ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    key: 0,
    class: $setup.wrapperClassName
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        class: $setup.inputClassName,
        type: "radio"
      }, $setup.attrs, {
        id: $setup.uid,
        onChange: _cache[1] || (_cache[1] = function () {
          return $setup.handleChange.apply($setup, arguments);
        }),
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.inputValue = $event;
        }),
        required: $props.required ? true : null,
        "aria-required": $props.required,
        ref: "inputRef"
      }), null, 16, ["id", "required", "aria-required"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelRadio"], $setup.inputValue]]), $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
        key: 0,
        class: $setup.labelClassName,
        for: $setup.uid
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 1,
        class: $setup.validFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.invalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 2,
        class: $setup.invalidFeedbackClassName
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.invalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 8, ["class"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 1,
    class: $setup.inputClassName,
    type: "radio"
  }, $setup.attrs, {
    id: $setup.uid,
    onChange: _cache[3] || (_cache[3] = function () {
      return $setup.handleChange.apply($setup, arguments);
    }),
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.inputValue = $event;
    }),
    required: $props.required ? true : null,
    "aria-required": $props.required,
    ref: "inputRef"
  }), null, 16, ["id", "required", "aria-required"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelRadio"], $setup.inputValue]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
    key: 2,
    class: $setup.labelClassName,
    for: $setup.uid
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 3,
    class: $setup.validFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.wrap && $props.invalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 4,
    class: $setup.invalidFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.invalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/forms/MDBRadio.vue?vue&type=template&id=19796690

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBRadio.vue?vue&type=script&lang=js



/* harmony default export */ var MDBRadiovue_type_script_lang_js = ({
  name: "MDBRadio",
  props: {
    id: String,
    label: String,
    inline: Boolean,
    modelValue: String,
    wrapperClass: String,
    labelClass: String,
    btnCheck: Boolean,
    required: Boolean,
    validateOnChange: Boolean,
    isValidated: Boolean,
    isValid: Boolean,
    validFeedback: String,
    invalidFeedback: String,
    tooltipFeedback: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    formCheck: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var inputRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("inputRef");
    var inputValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue || false);
    var uid = props.id || getUID("MDBRadio-");
    var wrapperClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.formCheck && !props.btnCheck ? "form-check" : "", props.inline && "form-check-inline", props.wrapperClass];
    });
    var inputClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.btnCheck ? "btn-check" : "form-check-input", isInputValidated.value && isInputValid.value && "is-valid", isInputValidated.value && !isInputValid.value && "is-invalid"];
    });
    var labelClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.labelClass || "form-check-label"];
    });
    var validFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "valid-tooltip" : "valid-feedback";
    });
    var invalidFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback";
    }); // Validation ------------------------

    var isInputValidated = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValidated);
    var isInputValid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValid);

    var handleValidation = function handleValidation(e) {
      isInputValid.value = e.target.checkValidity();
      isInputValidated.value = true;
    };

    var bindValidationEvent = function bindValidationEvent() {
      on(inputRef.value, "change", handleValidation);
    };

    function handleChange(e) {
      emit("update:modelValue", e.target.value);
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      if (props.validateOnChange) {
        bindValidationEvent();
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(function () {
      MDBEventHandlers_off(inputRef.value, "change", handleValidation);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      return inputValue.value = props.modelValue;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValidated;
    }, function (value) {
      return isInputValidated.value = value;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValid;
    }, function (value) {
      return isInputValid.value = value;
    });
    return {
      inputRef: inputRef,
      inputValue: inputValue,
      handleChange: handleChange,
      wrapperClassName: wrapperClassName,
      inputClassName: inputClassName,
      labelClassName: labelClassName,
      validFeedbackClassName: validFeedbackClassName,
      invalidFeedbackClassName: invalidFeedbackClassName,
      uid: uid,
      attrs: attrs,
      props: props
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/forms/MDBRadio.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/forms/MDBRadio.vue



MDBRadiovue_type_script_lang_js.render = MDBRadiovue_type_template_id_19796690_render

/* harmony default export */ var MDBRadio = (MDBRadiovue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBFile.vue?vue&type=template&id=80e71af0

function MDBFilevue_type_template_id_80e71af0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [$props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
    key: 0,
    class: $setup.labelClassName,
    for: $setup.uid
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    type: "file",
    class: $setup.inputClassName
  }, $setup.attrs, {
    id: $setup.uid,
    onChange: _cache[1] || (_cache[1] = function () {
      return $setup.handleChange.apply($setup, arguments);
    })
  }), null, 16, ["id"]), $props.validFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 1,
    class: $setup.validFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.validFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.invalidFeedback ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 2,
    class: $setup.invalidFeedbackClassName
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.invalidFeedback), 3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/forms/MDBFile.vue?vue&type=template&id=80e71af0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBFile.vue?vue&type=script&lang=js


/* harmony default export */ var MDBFilevue_type_script_lang_js = ({
  name: "MDBFile",
  props: {
    id: String,
    inputClass: String,
    invalidFeedback: String,
    isInvalid: Boolean,
    isValid: Boolean,
    isValidated: Boolean,
    label: String,
    labelClass: String,
    modelValue: {
      type: [FileList, Array],
      default: function _default() {
        return [];
      }
    },
    size: String,
    tooltipFeedback: Boolean,
    validFeedback: String,
    validateOnChange: Boolean
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var uid = props.id || getUID("MDBFile-");
    var inputValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var inputClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-control", props.size && "form-control-".concat(props.size), isInputValidated.value && isInputValid.value && "is-valid", isInputValidated.value && !isInputValid.value && "is-invalid", props.inputClass];
    });
    var labelClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-label", props.labelClass];
    });
    var validFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "valid-tooltip" : "valid-feedback";
    });
    var invalidFeedbackClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback";
    }); // Validation ------------------------

    var isInputValidated = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValidated);
    var isInputValid = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.isValid);

    var handleValidation = function handleValidation(event) {
      isInputValid.value = event.target.files.length > 0;
      isInputValidated.value = true;
    };

    var handleChange = function handleChange(event) {
      inputValue.value = event.target.files;
      emit("update:modelValue", inputValue.value);

      if (props.validateOnChange) {
        handleValidation(event);
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.modelValue;
    }, function (value) {
      return inputValue.value = value;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValidated;
    }, function (value) {
      return isInputValidated.value = value;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isValid;
    }, function (value) {
      isInputValid.value = value;
    });
    return {
      attrs: attrs,
      uid: uid,
      inputClassName: inputClassName,
      labelClassName: labelClassName,
      validFeedbackClassName: validFeedbackClassName,
      invalidFeedbackClassName: invalidFeedbackClassName,
      handleChange: handleChange
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/forms/MDBFile.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/forms/MDBFile.vue



MDBFilevue_type_script_lang_js.render = MDBFilevue_type_template_id_80e71af0_render

/* harmony default export */ var MDBFile = (MDBFilevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBRange.vue?vue&type=template&id=b7949e6c

var MDBRangevue_type_template_id_b7949e6c_hoisted_1 = {
  class: "thumb-value"
};
function MDBRangevue_type_template_id_b7949e6c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [$props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
    key: 0,
    class: $setup.labelClassName,
    for: $setup.uid
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    class: $setup.wrapperClassName
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        type: "range",
        class: $setup.inputClassName,
        id: $setup.uid,
        value: $setup.inputValue,
        min: $setup.minValue,
        max: $setup.maxValue
      }, $setup.attrs, {
        onInput: _cache[1] || (_cache[1] = function () {
          return $setup.handleInput.apply($setup, arguments);
        }),
        onMousedown: _cache[2] || (_cache[2] = function ($event) {
          return $setup.toggleThumb(true);
        }),
        onTouchstart: _cache[3] || (_cache[3] = function ($event) {
          return $setup.toggleThumb(true);
        }),
        onMouseup: _cache[4] || (_cache[4] = function ($event) {
          return $setup.toggleThumb(false);
        }),
        onTouchend: _cache[5] || (_cache[5] = function ($event) {
          return $setup.toggleThumb(false);
        })
      }), null, 16, ["id", "value", "min", "max"]), $props.thumb ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
        key: 0,
        class: $setup.thumbClassName,
        style: {
          left: $setup.thumbLeftPosition
        }
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", MDBRangevue_type_template_id_b7949e6c_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.inputValue), 1)], 6)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 8, ["class"]))], 64
  /* STABLE_FRAGMENT */
  );
}
// CONCATENATED MODULE: ./src/components/free/forms/MDBRange.vue?vue&type=template&id=b7949e6c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBRange.vue?vue&type=script&lang=js




/* harmony default export */ var MDBRangevue_type_script_lang_js = ({
  name: "MDBRange",
  props: {
    id: String,
    inputClass: String,
    label: String,
    labelClass: String,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: Number,
      default: 50
    },
    tag: {
      type: String,
      default: "div"
    },
    thumb: {
      type: Boolean,
      default: true
    },
    thumbClass: String,
    wrapperClass: String
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var inputValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var minValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.min);
    var maxValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.max);
    var uid = props.id || getUID("MDBRange-");
    var isThumbActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var wrapperClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["range", props.wrapperClass];
    });
    var inputClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-range", props.inputClass];
    });
    var labelClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-label", props.labelClass];
    });
    var thumbClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["thumb", isThumbActive.value && "thumb-active", props.thumbClass];
    });
    var thumbLeftPosition = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);

    var handleInput = function handleInput(e) {
      inputValue.value = parseFloat(e.target.value);
      emit("update:modelValue", inputValue.value);
      setThumbPosition();
    };

    var toggleThumb = function toggleThumb(isActive) {
      isThumbActive.value = isActive;
    };

    var setThumbPosition = function setThumbPosition() {
      var left = parseFloat((inputValue.value - minValue.value) * 100 / (maxValue.value - minValue.value));
      thumbLeftPosition.value = "calc(".concat(left, "% + (").concat(8 - left * 0.15, "px))");
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
      setThumbPosition();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.modelValue;
    }, function (value) {
      inputValue.value = value;
      setThumbPosition();
    });
    return {
      inputValue: inputValue,
      minValue: minValue,
      maxValue: maxValue,
      uid: uid,
      wrapperClassName: wrapperClassName,
      inputClassName: inputClassName,
      labelClassName: labelClassName,
      thumbClassName: thumbClassName,
      thumbLeftPosition: thumbLeftPosition,
      attrs: attrs,
      props: props,
      handleInput: handleInput,
      toggleThumb: toggleThumb
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/forms/MDBRange.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/forms/MDBRange.vue



MDBRangevue_type_script_lang_js.render = MDBRangevue_type_template_id_b7949e6c_render

/* harmony default export */ var MDBRange = (MDBRangevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBSwitch.vue?vue&type=template&id=95beb75a

function MDBSwitchvue_type_template_id_95beb75a_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.tag), {
    class: $setup.wrapperClassName
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        type: "checkbox",
        class: $setup.inputClassName,
        id: $setup.uid
      }, $setup.attrs, {
        checked: $setup.inputValue,
        onChange: _cache[1] || (_cache[1] = function () {
          return $setup.handleChange.apply($setup, arguments);
        })
      }), null, 16, ["id", "checked"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("label", {
        class: $setup.labelClassName,
        for: $setup.uid
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 11, ["for"])];
    }),
    _: 1
  }, 8, ["class"]);
}
// CONCATENATED MODULE: ./src/components/free/forms/MDBSwitch.vue?vue&type=template&id=95beb75a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/free/forms/MDBSwitch.vue?vue&type=script&lang=js


/* harmony default export */ var MDBSwitchvue_type_script_lang_js = ({
  name: "MDBSwitch",
  props: {
    id: String,
    inputClass: String,
    label: String,
    labelClass: String,
    modelValue: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    },
    wrapperClass: String
  },
  emits: ["update:modelValue"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        emit = _ref.emit;
    var inputValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
    var uid = props.id || getUID("MDBSwitch-");
    var wrapperClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-check form-switch", props.wrapperClass];
    });
    var inputClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-check-input", props.inputClass];
    });
    var labelClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["form-check-label", props.labelClass];
    });

    function handleChange() {
      inputValue.value = !inputValue.value;
      emit("update:modelValue", inputValue.value);
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.modelValue;
    }, function (value) {
      return inputValue.value = value;
    });
    return {
      inputValue: inputValue,
      uid: uid,
      wrapperClassName: wrapperClassName,
      inputClassName: inputClassName,
      labelClassName: labelClassName,
      handleChange: handleChange,
      attrs: attrs
    };
  }
});
// CONCATENATED MODULE: ./src/components/free/forms/MDBSwitch.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/free/forms/MDBSwitch.vue



MDBSwitchvue_type_script_lang_js.render = MDBSwitchvue_type_template_id_95beb75a_render

/* harmony default export */ var MDBSwitch = (MDBSwitchvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/directives/free/mdbScrollspy.js




var mdbScrollspy = {
  mounted: function mounted(el, binding) {
    el.scrollspy = {
      links: [],
      container: window,
      scrollPosition: null,
      async: false,
      offset: 0
    };

    if (binding.value) {
      el.scrollspy.container = document.getElementById(binding.value.container) || window;
      el.scrollspy.async = binding.value.async || false;
      el.scrollspy.offset = binding.value.offset || 0;
    }

    el.scrollspy.scrollPosition = getScrollPostion(el.scrollspy.container);

    el.scrollspy.findHrefs = function (node) {
      if (node.attributes && node.attributes.href) {
        el.scrollspy.links.push(node);
      } else if (node.childNodes) {
        node.childNodes.forEach(function (child) {
          return el.scrollspy.findHrefs(child);
        });
      }
    };

    el.scrollspy.setActive = function (index) {
      if (binding.value && binding.value.callback) {
        binding.instance[binding.value.callback](index);
        return;
      }

      el.scrollspy.links.forEach(function (link, i) {
        if (index === i) link.classList.add("active");else link.classList.remove("active");
      });
      mdbScrollspy_setNestedActive(el.scrollspy.links, index, el.scrollspy.container);
    };

    el.scrollspy.spy = function () {
      if (el.disableScroll) return;
      var container = el.scrollspy.container;
      el.scrollspy.scrollPosition = getScrollPostion(container);
      el.scrollspy.links.forEach(function (link) {
        var element = document.querySelector(link.hash);

        if (!element) {
          return;
        }

        var rect = element.getBoundingClientRect();
        var condition;

        if (container === window) {
          condition = window.innerHeight > rect.top && rect.top + rect.height >= 0;
        } else {
          var containerRect = container.getBoundingClientRect();
          condition = rect.top <= containerRect.top + containerRect.height && rect.top + rect.height >= containerRect.top;
        }

        link.isLinkActive = condition;
      });
      var activeLinks = el.scrollspy.links.filter(function (link) {
        return link.isLinkActive;
      });

      if (activeLinks.length > 0) {
        var activeElement = activeLinks[0];
        var activeLink = activeElement.scrollspyIndex;
        el.scrollspy.setActive(activeLink);
      } else el.scrollspy.setActive(-1);
    };

    el.scrollspy.clickHandler = function (e, link) {
      var container = el.scrollspy.container;
      window.clearTimeout(el.disableScrollTimeout);
      el.disableScroll = true;
      e.preventDefault();
      var element = document.querySelector(link.hash);

      if (!element) {
        return;
      }

      var rect = element.getBoundingClientRect();

      if (container === window) {
        window.scrollTo({
          top: window.scrollY + rect.y - el.scrollspy.offset,
          behavior: "smooth"
        });
      } else {
        var containerRect = container.getBoundingClientRect();
        container.style.scrollBehavior = "smooth";
        container.scrollTop = container.scrollTop + rect.y - containerRect.y - el.scrollspy.offset;
      }

      el.scrollspy.setActive(link.scrollspyIndex);
      setParentsActive(el.scrollspy.links[link.scrollspyIndex], el);
      el.disableScrollTimeout = setTimeout(function () {
        el.disableScroll = false;
      }, 800);
    };

    el.scrollspy.findHrefs(el);
    el.scrollspy.links.forEach(function (link, i) {
      link.scrollspyIndex = i;
      link.addEventListener("click", function (e) {
        return el.scrollspy.clickHandler(e, link);
      });
    });
    el.scrollspy.spy();
    el.scrollspy.container.addEventListener("scroll", el.scrollspy.spy);
    window.addEventListener("resize", el.scrollspy.spy);
  },
  updated: function updated(el, binding) {
    if (binding.modifiers.async && !binding.value.loading && binding.oldValue.loading) {
      setTimeout(function () {
        el.scrollspy.links = [];
        el.scrollspy.findHrefs(el);
        el.scrollspy.links.forEach(function (link, i) {
          link.scrollspyIndex = i;
          link.addEventListener("click", function (e) {
            return el.scrollspy.clickHandler(e, link);
          });
        });
        el.scrollspy.spy();
      }, 0);
    }
  },
  unmounted: function unmounted(el) {
    window.removeEventListener("scroll", el.scrollspy.spy);
    window.removeEventListener("resize", el.scrollspy.spy);
  }
};

var mdbScrollspy_setNestedActive = function setNestedActive(links, index, container) {
  var allLinks = links[index];

  if (!allLinks) {
    return;
  }

  var allNestedLinks = _toConsumableArray(allLinks.parentNode.querySelectorAll("a"));

  allNestedLinks.shift();
  allNestedLinks.forEach(function (link) {
    var element = document.querySelector(link.hash);

    if (!element) {
      return;
    }

    var rect = element.getBoundingClientRect();
    var condition;

    if (container === window) {
      condition = window.innerHeight > rect.top && rect.top + rect.height >= 0;
    } else {
      var containerRect = container.getBoundingClientRect();
      condition = rect.top < containerRect.top && rect.top + rect.height > containerRect.top;
    }

    link.isActive = condition;
  });
  var activeLinks = allNestedLinks.filter(function (link) {
    return link.isLinkActive;
  });

  if (activeLinks.length > 0) {
    activeLinks[0].classList.add("active");
  }
};

var setParentsActive = function setParentsActive(link, el) {
  var parent = link.parentNode;

  if (!parent) {
    return;
  }

  while (parent !== el) {
    if (parent.classList.contains("nav-item")) {
      parent.querySelector("a").classList.add("active");
    }

    parent = parent.parentNode;
  }
};

var getScrollPostion = function getScrollPostion(container) {
  return container === window ? container.scrollY : container.scrollTop;
};

/* harmony default export */ var free_mdbScrollspy = (mdbScrollspy);
// CONCATENATED MODULE: ./src/index.free.js
/* ------------- Components ------------- */

































/* ------------- Content-styles ------------- */


/* ------------- Navigation ------------- */

















/* ------------- Layout ------------- */




/* ------------- Data ------------- */


/* ------------- Forms ------------- */








/* ------------- Directives ------------- */




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
//# sourceMappingURL=mdb.common.js.map