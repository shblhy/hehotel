# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'^articles$','article.views.articles'),
    url(r'^articles.?(?P<contype>(page|table|csv|select))$', 'article.views.articles'),
    url(r'^add$','article.views.article_input',{'action':'add'}),
    url(r'^edit/(?P<article_id>[\d]+)$','article.views.article_input',{'action':'edit'}),
    url(r'^detail/(?P<article_id>[\d]+)$','article.views.article_detail'),
    
    url(r'^add_article$','article.views.input_article',{'action':'add'}),
    url(r'^edit_article$','article.views.input_article',{'action':'edit'}),
    #url(r'^delete_articles$','article.views.delete_articles'),
)