# Jog Panel Directional Pad
class window.ManualCtrlSidePanelView extends Backbone.View

  initPopover: ->
    @$popover = @$el.find(".settings-popover").detach().removeClass("hide")
    @$popoverLink = @$el.find('h4 a').popover
      title: "#{@$el.find("h4 .title").text()} Settings"
      content: @$popover
      html: true

  bindModelBindings: ->

    if @model != null
      # Iterate through all bindings
      for selector, field of @modelBindings
        do (selector, field) =>
          #console.log "binding #{selector} to #{field}"
          [event, selector...] = selector.split(" ")
          selector = selector.join(" ")

          # When the model changes update the form
          # elements
          @model.bind "change:#{field}", onModelChange = (model, val) =>
            #console.log "model[#{field}] => #{selector}"
            $field = @$popover.find(selector)
            $field.val(val) if $field.val() != val
          onModelChange @model, @model.get(field)

          # When the form changes update the model
          @$el.on event, selector, (ev)=>
            console.log "form[#{selector}] => #{field}"
            data = {}
            data[field] = @$(ev.target).val()
            @model.set data

          # Set the initial value of the form
          # elements
          @$(selector).val(@model.get(field))
