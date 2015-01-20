#!/usr/bin/env python
#-*- coding:utf-8 -*-

from django import forms
from com.yhweb import exforms
from article.models import Article
from com.mylib.tables import tables

class ArticleTable(tables.Table):
    title = tables.Column(sTitle=u'标题',bSortable=False)
    content = tables.Column(sTitle=u'内容', bSortable=False)
    author = tables.Column(sTitle=u'作者', bSortable=False,accessor=lambda x:x.author.username)
    status = tables.Column(sTitle=u'状态', bSortable=False,accessor=lambda x:x.get_status_display())
    edit_time = tables.Column(sTitle=u'最后编辑时间', bSortable=False)
    
    @classmethod
    def get_action(cls,user=None):
        actions = ['view']
        actions.append('edit')
        actions.append('priority')
        actions.append('low_priority')
        actions.append('delete')
        return ','.join(actions)