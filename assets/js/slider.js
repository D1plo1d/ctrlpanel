// Copyright 2013 Rob Gilson

(function($) {
  var defaultOpts = {
    min: 0,
    max: 1.0,
    val: 0,
    snap: function(val) {return val;},
    onChange: undefined
  };

  $.fn.slider = function(opts) {
    var $el = $(this);
    var data = $el.data("slider")
    if (!( data === undefined))
    {
      return data[arguments[0]].call(this, arguments[1])
    }

    var dragging = false
    opts = $.extend({}, defaultOpts, opts);
    var range = opts.max - opts.min;

    var valToPercent = function() {
      return (opts.val-opts.min)*100/range;
    };

    var percentToVal = function(percent) {
      return percent*range/100 + opts.min;
    };

    $el.addClass("slider progress");
    $el.html("<div class='bar'></div><div class='slider-handle'>");
    $bar = $el.find(".bar");
    $doc = $(document);

    var setVal = function(val) {
      opts.val = val
      $bar.css({
        left: "0%",
        width: valToPercent() + "%"
      });
    };
    setVal(opts.val);

    var _isPrevented = function(eventName, val) {
      var event = jQuery.Event("slider:" + eventName);
      if (val === undefined) val = opts.val;
      $el.trigger(event, val);
      return event.isDefaultPrevented();
    }

    // Option Event Listeners
    if(opts.onChange != undefined) $el.on("slider:change", opts.onChange)

    // External API
    $el.data("slider", {
      val: function(newVal) {
        if (newVal === undefined)
        {
          return opts.val;
        }
        else
        {
          setVal(newVal);
          return $el;
        }
      }
    });

    // Drag handlers
    var onDragStart = function(e) {
      dragging = true;
      if (_isPrevented("dragstart")) return;
      $doc.on("mousemove", onDrag);
      $doc.one("mouseup", onDragEnd);
      e.preventDefault();
    };

    var onDrag = function(e) {
      var percent = (e.pageX - $el.offset().left)*100/$el.width();
      percent = Math.min( 100, Math.max(0, percent));
      var newVal = opts.snap( percentToVal(percent) )

      if (newVal == opts.val || _isPrevented("change", newVal)) return;
      setVal(newVal);
      e.preventDefault();
    };

    var onDragEnd = function(e) {
      if (_isPrevented("dragend")) return;
      dragging = false;
      $doc.off("mousemove", onDrag);
      e.preventDefault();
    };

    $el.on("mousedown", onDragStart);

    return $el;
  };
})(jQuery)