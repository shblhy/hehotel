# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response,get_object_or_404
from django.http import HttpResponseBadRequest,HttpResponse
from datetime import datetime

from com.mylib.response import HttpJsonResponse
from article.table import ArticleTable
from article.form import ArticleQForm,ArticleForm
from article.models import Article
from django.contrib.auth.decorators import login_required

@login_required
def articles(request):
    form = ArticleQForm(request.GET)
    if not form.is_valid():
        return HttpResponseBadRequest(form.errors_as_text())
    condition = form.get_conditions()
    q= Article.objects.filter(**condition)
    table = ArticleTable(
        query=q,
        limit=form.cleaned_data['iDisplayLength'],
        offset=form.cleaned_data['iDisplayStart'],
        order_by=form.cleaned_data['orderBy']
    )
    print table.get_columns()
    print table.get_rows()
    return render_to_response('article/articles.html',locals())
 
@login_required
def article_input(request,action='add',article_id=None):
    if article_id:
        article = get_object_or_404(Article,pk=article_id)
    else:
        article = Article()
    return render_to_response('article/article_input.html',locals())

@login_required
def article_detail(request,article_id=None):
    article = get_object_or_404(Article,pk=article_id)
    return render_to_response('article/article.html',locals())

@login_required
def add_article(request):
    form = ArticleForm(request.POST)
    if form.is_vailed():
        return HttpResponseBadRequest(form.error_as_text())
    article = form.instance
    article.author_id = request.user.id
    article.save()
    return HttpResponse('')

@login_required
def input_article(request,action='add'):
    form = ArticleForm(request.POST)
    if form.is_valid():
        article = form.instance
        article.author = request.user
        article.save()
        return HttpJsonResponse(form.instance.id)
    return HttpResponseBadRequest(form.errors.as_text(),content_type='text/html; charset=UTF-8')

@login_required
def delete_articles(request):
    try:
        Article.objects.filter(id__in = request.POST['ids'].split(',')).delete()
        return HttpJsonResponse('')
    except Exception,e0:
        return HttpResponseBadRequest(u'删除失败:'+e0.message,content_type='application/javascript')