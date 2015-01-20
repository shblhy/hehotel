# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'^orders$','order.views.orders'),
    #url(r'^add_order.*$','order.views.add_order'),
    url(r'^add$','order.views.order_input',{'action':'add'}),
    url(r'^(?P<room_type_id>[\d]+)/order$','order.views.order_do'),
    url(r'^do_order$','order.views.do_order'),
    #url(r'^(?P<room_type_id>[\d]+)/get__room','order.views.ask_room'),
    #url(r'^delete$','order.views.delete_orders'),
    
    #url(r'^edit/(?P<order_id>[\d]+)$','order.views.order_input',{'action':'edit'}),
    #url(r'^add_order$','order.views.input_order',{'action':'add'}),
    #url(r'^edit_order$','order.views.input_order',{'action':'edit'}),
    #url(r'^import_orders$','member.views.import_orders'),
    #url(r'^delete_orders$','order.views.delete_orders'),
)