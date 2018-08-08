(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.ONavbar = factory(global.jQuery,global.Util));
}(this, (function ($,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  /**
   * --------------------------------------------------------------------------
   * Boosted (v4.1.3): o-navbar.js
   * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Navbar = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'navbar';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.navbar';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var BREAKPOINT = 768;
    var Default = {
      sticky: false,
      trigger: ''
    };
    var DefaultType = {
      sticky: 'boolean',
      trigger: 'string'
    };
    var Selector = {
      SUPRA_BAR: '.navbar.supra',
      MEGAMENU_PANEL: '.mega-menu.panel'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Navbar =
    /*#__PURE__*/
    function () {
      function Navbar(element, config) {
        var _this = this;

        this._element = element;
        this._supraBar = element.querySelector(Selector.SUPRA_BAR);
        this._config = this._getConfig(config);
        this._initialHeight = $$$1(this._element).outerHeight();
        this._initialSupraHeight = $$$1(this._supraBar).outerHeight();

        this._addAria();

        if (this._config.sticky) {
          $$$1(this._element).addClass('o-navbar-fixed-header');
          $$$1(Selector.MEGAMENU_PANEL).addClass('sticky');
          $$$1(document.body).css('padding-top', this._initialHeight);
          $$$1(window).on('scroll', function () {
            var Scroll = $$$1(window).scrollTop();

            if (Scroll > 0) {
              $$$1(_this._element).addClass('minimized');
            } else {
              $$$1(_this._element).removeClass('minimized');
            }
          });
        }

        if (this._config.hideSupra) {
          $$$1(window).on('scroll', function () {
            if ($$$1(window).innerWidth() < BREAKPOINT) {
              return;
            }

            var Scroll = $$$1(window).scrollTop();

            if (Scroll > 0) {
              $$$1(Selector.SUPRA_BAR).hide();
            } else {
              $$$1(Selector.SUPRA_BAR).show();
            }
          });
        }
      } // getters


      var _proto = Navbar.prototype;

      // private
      _proto._getConfig = function _getConfig(config) {
        config = $$$1.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._addAria = function _addAria() {
        $$$1(this._element).find('.navbar .nav-link[data-toggle]').attr('aria-haspopup', true);
      }; // static


      Navbar._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = _objectSpread({}, Default, $$$1(this).data(), typeof config === 'object' && config ? config : {});

          if (!data) {
            data = new Navbar(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Navbar, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Navbar;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = Navbar._jQueryInterface;
    $$$1.fn[NAME].Constructor = Navbar;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Navbar._jQueryInterface;
    };

    return Navbar;
  }($);

  return Navbar;

})));
//# sourceMappingURL=onavbar.js.map
