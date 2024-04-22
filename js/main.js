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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $accordion = $(".js-modal-accordion");
  var $body = $('body');
  if (!$accordion.length) return;
  $body.on("click", '.js-modal-accordion', function () {
    var that = $(this);
    var nextEl = that.next();
    var nextHeight = nextEl[0].scrollHeight;
    that.toggleClass("accordion__head_active");

    if (that.hasClass("accordion__head_active")) {
      return nextEl.css({
        "max-height": nextHeight,
        overflow: "visible",
        opacity: 1
      });
    }

    nextEl.css({
      "max-height": 0,
      overflow: "hidden",
      opacity: 0
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $map = $(".js-contacts-map");
  var addresses = [{
    address: "Подольск, пр-т Юных Ленинцев, <br> дом 1И, стр. 2",
    coord: [55.468045, 37.559236],
    tel: "+7 (495) 492-09-45"
  }, {
    address: "Москва, Ярославское ш., <br> владение 2В, строение 3 (95 км МКАД)",
    coord: [55.846295, 37.675325],
    tel: "+7 (495) 432-59-97"
  }];

  var contentTemplate = function contentTemplate(_ref) {
    var address = _ref.address,
        tel = _ref.tel;
    return (
      /*html*/
      "\n            <div class=\"balloon-content\">\n                <div class=\"balloon-content__address\">\n                    <span>".concat(address, "</span>\n                </div>\n\n                <a href=\"tel:+7(495)432-59-97\" class=\"balloon-content__tel\">").concat(tel, "</a>\n            </div>\n        ")
    );
  };

  if (!$map.length) return;
  ymaps.ready(init);

  function init() {
    var MAP = new ymaps.Map("ymap", {
      center: [55.468045, 37.559236],
      zoom: 9,
      controls: []
    });
    addresses.forEach(function (address) {
      var PIN = new ymaps.Placemark(address.coord, {
        hintContent: address.name,
        balloonContent: contentTemplate(address),
        iconContent: '12'
      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/map-pin.png',
        iconImageSize: [28, 54],
        iconImageOffset: [0, 0]
      });
      MAP.geoObjects.add(PIN);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $footerAccordion = $(".js-footer-accordion");
  if (!$footerAccordion.length) return;
  $footerAccordion.on("click", function () {
    var that = $(this);
    var nextEl = that.next();
    var nextHeight = nextEl[0].scrollHeight;
    that.toggleClass("footer__top_active");

    if (that.hasClass("footer__top_active")) {
      return nextEl.css({
        "max-height": nextHeight,
        overflow: "visible",
        opacity: 1
      });
    }

    nextEl.css({
      "max-height": 0,
      overflow: "hidden",
      opacity: 0
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.js-phone').inputmask({
    "mask": "+7 (999) 999-9999"
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $body = $("body");
  var $header = $('.header');
  var $headerBurger = $(".js-header-burger");
  var $headerMenu = $(".js-header-menu");
  var $window = $(window);
  $headerBurger.on("click", function () {
    if ($(this).hasClass("is-change")) {
      $body.removeAttr("style");
    } else {
      $body.css("overflow", "hidden");
    }

    $(this).toggleClass("is-change");
    $headerMenu.toggleClass("is-show");
    $header.toggleClass("is-show");
  });
  $headerMenu.on("click", function (e) {
    if (!!e.target.closest("a")) {
      setTimeout(function () {
        $headerBurger.removeClass("is-change");
        $headerMenu.removeClass("is-show");
      }, 500);
      $body.removeAttr("style");
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $jsFancy = $('.js-fancy');
$jsFancy.on('click', function (e) {
  e.preventDefault();
  Fancybox.show([{
    src: e.currentTarget.dataset.src || e.currentTarget.getAttribute('data-src') || e.currentTarget.hash,
    type: "inline"
  }], {
    dragToClose: false,
    on: {
      done: function done(_ref) {
        var container = _ref.container;
        var tableSlider = $(container).find('.js-table-slider');

        if (tableSlider.length > 0) {
          tableSlider.trigger('initTableSlider');
        }
      },
      close: function close(_ref2) {
        var container = _ref2.container;
        var tableSlider = $(container).find('.js-table-slider');

        if (tableSlider.length > 0) {
          tableSlider.trigger('destroyTableSlider');
        }
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/promotions/promotions.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/promotions/promotions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $promotionsSlider = $('.js-promotions-slider');
  var $promotionsPrev = $('.js-slider-prev');
  var $promotionsNext = $('.js-slider-next');
  if (!$promotionsSlider.length) return;
  $promotionsSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // centerMode: true,
    responsive: [{
      breakpoint: 1461,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }, {
      breakpoint: 1241,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }, {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        adaptiveHeight: true
      }
    }]
  });
  $promotionsPrev.on('click', function () {
    return $promotionsSlider.slick('slickPrev');
  });
  $promotionsNext.on('click', function () {
    return $promotionsSlider.slick('slickNext');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $select = $('.js-select');
  if (!$select.length) return;
  $select.each(function (_, select) {
    var $that = $(select);

    var _$that$data = $that.data(),
        placeholder = _$that$data.placeholder;

    $that.select2({
      placeholder: placeholder,
      width: null
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/table/table.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/table/table.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $tableNav = $('.js-table-nav');
  var $tableSlider = $('.js-table-slider');
  var $tableParamsSlider = $('.js-params-slider');

  var navEvent = function navEvent(e) {
    var dir = e.currentTarget.dataset.dir;
    if (dir === 'prev') $tableSlider.slick('slickPrev');
    if (dir === 'next') $tableSlider.slick('slickNext');
  };

  var responsive = [{
    breakpoint: 1440,
    settings: {
      slidesToShow: 4.5,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3.5,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    }
  }, {
    breakpoint: 660,
    settings: {
      slidesToShow: 2.5,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    }
  }, {
    breakpoint: 460,
    settings: {
      slidesToShow: 1.5,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    }
  }];
  $tableSlider.on('destroyTableSlider', function () {
    $tableSlider.slick('unslick');
    $tableParamsSlider.slick('unslick');
    $tableNav.off('click', 'button', navEvent);
  });
  $tableSlider.on('initTableSlider', function () {
    $tableNav.on('click', 'button', navEvent);
    $tableSlider.slick({
      infinite: false,
      slidesToShow: 5.6,
      slidesToScroll: 1,
      asNavFor: '.js-params-slider',
      arrows: false,
      dots: false,
      responsive: responsive
    });
    $tableParamsSlider.slick({
      infinite: false,
      slidesToShow: 5.6,
      slidesToScroll: 1,
      asNavFor: '.js-table-slider',
      arrows: false,
      dots: false,
      draggable: false,
      touchMove: false,
      swipe: false,
      responsive: responsive
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $config = $('.js-modal-config');

  if ($config.length) {
    $config.on('click', '[data-tab]', function () {
      console.log(this);
      var $that = $(this);
      var tab = $that.data('tab');
      $that.addClass('modal__tabs-btn_active');
      $that.parent().siblings().children().removeClass('modal__tabs-btn_active');
      $that.parents('.js-modal-config').find("[data-content=\"".concat(tab, "\"]")).addClass('is-active').siblings().removeClass('is-active');
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_select_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_promotions_promotions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/promotions/promotions */ "./src/blocks/modules/promotions/promotions.js");
/* harmony import */ var _modules_promotions_promotions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_promotions_promotions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/table/table */ "./src/blocks/modules/table/table.js");
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_table_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_9__);











/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map