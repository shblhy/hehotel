# -*- coding: utf-8 -*-
from django.conf.urls import patterns,  url

urlpatterns = patterns('',
        url(r'^login_page/$', 'member.views.login_page'),
        url(r'^login/$', 'member.views.login'),
        url(r'^logout/$', 'member.views.logout'),
        url(r'^password_change/$', 'member.views.password_change'),
        url(r'^password_change/done/$', 'member.views.password_change_done'),
        
        url(r'^users$','member.views_user.users'),
        url(r'^users.?(?P<contype>(table|csv))$', 'member.views_user.users'),
        url(r'^user/add$','member.views_user.user_input',{'action':'add'}),
        url(r'^regist','member.views_user.regist',{'action':'add'}),
        url(r'^user/edit/(?P<user_id>[\d]+)$','member.views_user.user_input',{'action':'edit'}),
        url(r'^user/detail/(?P<user_id>[\d]+)$','member.views_user.user_detail'),
        
        url(r'^add_user$','member.views_user.input_user',{'action':'add'}),
        url(r'^edit_user$','member.views_user.input_user',{'action':'edit'}),
        url(r'^import_users$','member.views_user.import_users'),
        url(r'^delete_users','member.views_user.delete_users'),
        
        url(r'^groups$','member.views_group.groups'),
        url(r'^groups.?(?P<contype>(table|csv))$', 'member.views_group.groups'),
        url(r'^user_center/$','member.views.user_center'),
    )