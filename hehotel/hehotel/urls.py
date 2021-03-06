# -*- coding: utf-8 -*-
from django.conf.urls import patterns, include, url
from settings import RESOURCE_ROOT_PATH,STATIC_ROOT_PATH
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'hehotel.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    #url(r'^admin/', include(admin.site.urls)),
    url(r'^admin/$', 'hehotel.views.admin'),  # 后台主页
    url(r'^$', 'hehotel.views.index', name='index'),
    url(r'^templates/(?P<path>.*)$', 'django.views.static.serve',{'document_root': RESOURCE_ROOT_PATH}),
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': STATIC_ROOT_PATH}),
    url(r'^hotel$', 'hehotel.views.hotel', name='hotel'),
    #url(r'^rooms$', 'hehotel.views.rooms', name='rooms'),
    url(r'^rooms$', 'room.views_room_type.room_type_list', name='rooms'),
    url(r'^pictures$', 'hehotel.views.pictures', name='pictures'),
    url(r'^order$', 'hehotel.views.order', name='order'),
    url(r'^special_offers$', 'hehotel.views.special_offers', name='special_offers'),
    url(r'^member/', include('member.urls')),  # 用户模块
    url(r'^room/', include('room.urls')),  # 房间模块
    url(r'^order/', include('order.urls')),  # 订单模块
    url(r'^article/', include('article.urls')),  # 用户模块
    url(r'^login', 'django.contrib.auth.views.login',{'template_name':'user/login.html'}),  # 用户模块
)
