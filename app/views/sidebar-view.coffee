define ['views/base/view', 'text!views/templates/sidebar.hbs'], (View, template) ->
    
    class SidebarView extends View
        template: template
        container: '.sidebar-nav'
        autoRender: no

        initialize: () ->
            super
            @listenTo @collection, 'reset', ()->
                console.log 'collection fetched'
                @render()

    return SidebarView
